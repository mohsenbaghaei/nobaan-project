import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
const Products = lazy(() => import("./pages/Products"));
const Users = lazy(() => import("./pages/Users"));
const Verification = lazy(() => import("./pages/Verification"));
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="container">
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
