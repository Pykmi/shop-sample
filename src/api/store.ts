export type Product = {
  id: number;
  name: string;
  price: number;
  shopName: string;
  count: number;
};

export type Invoice = {
  id: number;
  orderId: number;
  products: Product[];
  shopName: string;
  total: number;
};

type Shops = {
  id: number;
  name: string;
  products: {
    id: number;
    name: string;
    price: number;
    count: number;
  }[];
}[];

type CreateProductAttributes = {
  name: string;
  price: number;
  shopName: string;
  count: number;
};

const generateUniqueId = (): number => {
  const uniqueId = Math.floor(Math.random() * 1000000);
  return uniqueId;
};

const createProduct = (args: CreateProductAttributes): Product => {
  return { id: generateUniqueId(), ...args };
}

export const createInvoiceStore = (bucket: Product[]): Invoice[] => {
  const invoiceMap = new Map<string, Invoice>();

  bucket.forEach(product => {
    if (invoiceMap.has(product.shopName)) {
      const existingInvoice = invoiceMap.get(product.shopName)!;
      existingInvoice.products.push(product);
      existingInvoice.total += product.price;
    } else {
      const newInvoice: Invoice = {
        id: generateUniqueId(),
        orderId: generateUniqueId(),
        products: [product],
        shopName: product.shopName,
        total: product.price,
      };
      
      invoiceMap.set(product.shopName, newInvoice);
    }
  });

  return Array.from(invoiceMap.values());
};

export const createProductStore = (shops: Shops) => {
  const productsMap = new Map<number, Product>();
  
  shops.forEach(shop => {
    shop.products.forEach(product => {
      const existingProduct = productsMap.get(product.id);

      if (!existingProduct || product.count > existingProduct.count) {
        const { name, price, count } = product;
        const { name: shopName } = shop;

        const newProduct = createProduct({ name, price, shopName, count });

        productsMap.set(product.id, newProduct);
      }
    });
  });

  return Array.from(productsMap.values());
}
