import { ShoppingCart, User, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AuthModal from "./AuthModal";
import logo from "@/assets/images/mixiao.png";

export default function Header() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <header className="bg-amber-50 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 flex-wrap gap-3">
          {/* Logo */}
          <div>
            <img src={logo} alt="2003 Mixiao" className="w-16 h-auto" />
          </div>
          <div className="text-4xl font-bold text-amber-600">Mixiao</div>

          {/* Menu */}
          <nav className="flex gap-6 text-gray-700 font-medium flex-wrap justify-center">
            <a href="/" className="hover:text-amber-600">
              Trang chủ
            </a>
            <a href="/products" className="hover:text-amber-600">
              Sản phẩm
            </a>
            <a href="/news" className="hover:text-amber-600">
              Tin tức
            </a>
            <a href="/about" className="hover:text-amber-600">
              Về chúng tôi
            </a>
          </nav>

          {/* Search + Icons */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded-full px-3 py-1 bg-white">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="outline-none text-sm px-2 w-32 sm:w-48"
              />
              <Search className="text-gray-500 w-5 h-5" />
            </div>

            <Link to="/cart">
              <ShoppingCart
                className="text-gray-700 cursor-pointer hover:text-amber-600 transition"
                size={22}
              />
            </Link>
            <button
              onClick={() => setShowAuth(true)}
              className="flex items-center gap-1 bg-amber-500 text-white px-3 py-1 rounded-full hover:bg-amber-600 transition"
            >
              <User size={18} /> Đăng nhập
            </button>
          </div>
        </div>
      </header>

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
}
