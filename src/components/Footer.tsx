// src/components/Footer.tsx
import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cảm ơn bạn đã đăng ký: ${email}`);
    setEmail("");
  };

  return (
    <footer className="w-full bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 text-gray-700 mt-12 border-t">
      {/* OUTER: full-width (no max-w, no mx-auto) so background & grid touch viewport edges */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 py-12">
        {/* Each column has internal horizontal padding so content doesn't stick to edges */}
        <div className="px-6">
          <h2 className="text-2xl font-bold text-amber-700 mb-4">
            Beverage 2003
          </h2>
          <p className="text-sm leading-relaxed">
            Chúng tôi cung cấp các loại đồ uống tươi ngon, đa dạng từ cà phê,
            trà, sinh tố, nước ép đến nước giải khát. Cam kết chất lượng và phục
            vụ tận tâm.
          </p>
        </div>

        <div className="px-6">
          <h3 className="font-semibold mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-amber-900 transition">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-amber-900 transition">
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-amber-900 transition">
                Tin tức
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-900 transition">
                Về chúng tôi
              </Link>
            </li>
          </ul>
        </div>

        <div className="px-6">
          <h3 className="font-semibold mb-4">Liên hệ</h3>
          <ul className="space-y-2 mb-4 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 123 Đường XYZ, Hà Nội
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> 0123 456 789
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@beverage2003.com
            </li>
          </ul>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.743052269739!2d105.83276731530504!3d21.034597793916727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1e0c9d6b9b%3A0x123456789abcdef!2sHanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1697040000000!5m2!1sen!2s"
            className="w-full h-32 rounded-lg border"
            loading="lazy"
          ></iframe>
        </div>

        <div className="px-6">
          <h3 className="font-semibold mb-4">Đăng ký nhận tin</h3>
          <p className="mb-4 text-sm">
            Nhận thông tin khuyến mãi và cập nhật mới nhất từ chúng tôi.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email..."
              className="px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              required
            />
            <button
              type="submit"
              className="bg-amber-700 text-white px-3 py-2 rounded-lg hover:bg-amber-800 transition text-sm"
            >
              Đăng ký
            </button>
          </form>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-amber-900 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-amber-900 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-amber-900 transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* copyright line (full width) */}
      <div className="bg-amber-100 text-gray-600 text-sm text-center py-4 w-full">
        © 2025 Beverage 2003. All rights reserved.
      </div>
    </footer>
  );
}
