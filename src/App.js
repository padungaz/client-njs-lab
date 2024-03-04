import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./page/HomePage";
import AddProduct from "./page/AddProduct";
import ProductPage from "./page/ProductPage";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
