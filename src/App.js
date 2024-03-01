import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./page/HomePage";
import UsersPage from "./page/UsersPage";


function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
