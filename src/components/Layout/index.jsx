import React from "react";
import { useLocation } from "react-router-dom";
import './style.css';

const listCategory = [
  {
    id: 1,
    path: "/",
    name: "Shop"
  },
  {
    id: 2,
    path: "/products",
    name: "Products"
  },
  {
    id: 3,
    path: "/cart",
    name: "Cart"
  },
  {
    id: 4,
    path: "/order",
    name: "Order"
  },
  {
    id: 5,
    path: "/add-product",
    name: "Add Product"
  },
  {
    id: 6,
    path: "/admin-products",
    name: "Admin Products"
  },
]

const Layout = (props) => {
  const { pathname } = useLocation();

  return (
    <>
      <header className="main-header">
        <nav className="main-header__nav">
          <ul className="main-header__item-list">
            {listCategory.map(category => (
              <li key={category.id} className="main-header__item">
                <a href={category.path} className={pathname === category.path ? 'active' : ''}>{category.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{props?.children}</main>
    </>
  );
};
export default Layout;