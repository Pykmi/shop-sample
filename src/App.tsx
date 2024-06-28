import React, { useLayoutEffect, useState } from "react";
import "./App.css";

import { Invoice, Product, createInvoiceStore, createProductStore } from "./api/store";
import shops from "./data/shops.json";
import ProductTable from "./ProductTable";
import Header from "./Header";
import InvoiceTable from "./InvoiceTable";

export enum PageState {
  Products = "products",
  Invoices = "invoices",
}

function App() {
  const [productStore, setProductStore] = useState<Product[]>([]);
  const [bucket, setBucket] = useState<Product[]>([]);
  const [pageState, setPageState] = useState<PageState>(PageState.Products);
  const [invoiceStore, setInvoiceStore] = useState<Invoice[]>([]);

  useLayoutEffect(() => {
    const fetchProducts = () => {
      const products = createProductStore(shops);
      setProductStore(products);
    }

    fetchProducts();
  }, []);

  const addProductToBucket = (product: Product) => {
    setBucket([...bucket, product]);
  }

  const showInvoices = () => {
    const invoices = createInvoiceStore(bucket);

    setInvoiceStore(invoices);
    setPageState(PageState.Invoices);
  };

  const showProducts = () => {
    setPageState(PageState.Products);
  }

  return (
    <div className="container">
      <div className="top-box">
        <div className="left">Shopping Mate</div>
        <div className="right">Jussi Maajussi</div>
      </div>
      <div className="bottom-box">
        <Header
          bucket={bucket}
          showInvoices={showInvoices}
          pageState={pageState}
          showProducts={showProducts}
        />
        <ProductTable
          addProductToBucket={addProductToBucket}
          productStore={productStore}
          pageState={pageState}
        />
        <InvoiceTable
          invoiceStore={invoiceStore}
          pageState={pageState}
        />
      </div>
    </div>
  );
}

export default App;
