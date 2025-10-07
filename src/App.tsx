import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ProductList from "@/pages/ProductList";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Orders from "@/pages/Orders";
import AdminDashboard from "@/Admin/AdminDashboard";
import OrderManager from "@/Admin/OrderManager";
import ProductManager from "./Admin/ProductManager";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen pt-20 bg-amber-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ProductManager />} />
          <Route path="/admin/orders" element={<OrderManager />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
