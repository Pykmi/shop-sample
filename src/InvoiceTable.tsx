import React from "react";
import { Invoice } from "./api/store";
import { PageState } from "./App";

interface InvoiceTableProps {
  invoiceStore: Invoice[];
  pageState: PageState;
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({ invoiceStore, pageState }) => {
  if (pageState === PageState.Products) return <></>;

  return (
    <table id="productTable">
      <thead>
        <tr>
          <th>Invoice Id</th>
          <th>Order Id</th>
          <th>Total</th>
          <th>Products</th>
        </tr>
      </thead>
      <tbody>
        {invoiceStore.map((invoice, idx) => {
          const { id, orderId, total, products } = invoice;
          const productIds = products.map(product => product.id).join(", ");

          return (
            <tr key={id} className={idx % 2 === 0 ? "even" : "odd"}>
              <td>{id}</td>
              <td>{orderId}</td>
              <td>${total.toFixed(2)}</td>
              <td>{productIds}</td>
            </tr>
            );
        })}
      </tbody>
    </table>
  );
};

export default InvoiceTable;