import React from "react";
import { Product } from "./api/store";
import { PageState } from "./App";

interface ProductTableProps {
  addProductToBucket: (product: Product) => void;
  pageState: PageState;
  productStore: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ addProductToBucket, pageState, productStore }) => {
  if (pageState === PageState.Invoices) return <></>;

  return (
    <table id="productTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Count</th>
          <th>Price</th>
          <th>Shop name</th>
          <th>Add to Basket</th>
        </tr>
      </thead>
      <tbody>
        {productStore.map((product, idx) => (
          <tr key={product.id} className={idx % 2 === 0 ? "even" : "odd"}>
            <td>{product.name}</td>
            <td>{product.count}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>{product.shopName}</td>
            <td>
              <button className="add-to-basket" onClick={() => addProductToBucket(product)} >
                Add to Basket
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;