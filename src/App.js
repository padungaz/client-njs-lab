import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./page/HomePage";
import AddProduct from "./page/AddProduct";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Layout>
  );
}

export default App;
