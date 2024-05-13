import { Route, Routes } from "react-router-dom";
import "./App.css"
import Layout from "./components/Layout";
import Home from "./components/Home";
import NoPage from "./components/NoPage";

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="products" element={<Products />} /> */}
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="products/create" element={<CreateForm />} /> */}
        {/* <Route path="products/edit/:id" element={<CreateForm />} /> */}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;