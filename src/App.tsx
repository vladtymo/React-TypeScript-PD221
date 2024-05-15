import { Route, Routes } from "react-router-dom";
import "./App.css"
import Layout from "./components/Layout";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductList />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="products/create" element={<ProductForm />} />
        <Route path="products/edit/:id" element={<ProductForm />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;