import React from 'react';
import { Product } from './api/store';
import { PageState } from './App';

interface HeaderProps {
  bucket: Product[];
  pageState: PageState;
  showInvoices: () => void;
  showProducts: () => void;
}

const Header: React.FC<HeaderProps> = ({ bucket, pageState, showInvoices, showProducts }) => (
  <div className="header">
    <h3>Products</h3>
    <div className="shopping-cart-container">
      {pageState === PageState.Invoices && (
         <button className="add-to-basket" onClick={showProducts} >
         Back to Products
       </button>
      )}
      {pageState === PageState.Products && (
        <>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 1200" 
            className="shopping-cart-icon"
            onClick={showInvoices}
          >
            <g>
              <path d="m959.59 759.42h-605.52c-22.656 0-42.227-15.84-46.945-38.004l-92.664-435.25-87.012-6.4453c-26.438-1.9688-46.285-24.984-44.328-51.422 1.957-26.449 25.094-46.285 51.422-44.328l122.93 9.1094c21.277 1.5703 38.965 17.004 43.402 37.871l92.074 432.47h527.89l69.254-321.53c5.5664-25.922 31.199-42.445 57.023-36.816 25.922 5.5781 42.395 31.117 36.816 57.023l-77.398 359.41c-4.7891 22.133-24.324 37.914-46.941 37.914z"/>
              <path d="m554.39 916.55c0 52.801-42.801 95.605-95.602 95.605-52.801 0-95.605-42.805-95.605-95.605s42.805-95.602 95.605-95.602c52.801 0 95.602 42.801 95.602 95.602"/>
              <path d="m958.08 916.55c0 52.801-42.801 95.605-95.602 95.605-52.801 0-95.605-42.805-95.605-95.605s42.805-95.602 95.605-95.602c52.801 0 95.602 42.801 95.602 95.602"/>
              <path d="m879.91 453.19h-446.16c-26.508 0-48-21.492-48-48 0-26.508 21.492-48 48-48h446.17c26.508 0 48 21.492 48 48 0 26.508-21.504 48-48.016 48z"/>
              <path d="m848.05 604.87h-382.44c-26.508 0-48-21.492-48-48 0-26.508 21.492-48 48-48h382.44c26.508 0 48 21.492 48 48 0 26.508-21.492 48-48 48z"/>
            </g>
          </svg>
          <span className="cart-badge">{bucket.length}</span>
        </>
      )}
      {}
    </div>
  </div>
);

export default Header;