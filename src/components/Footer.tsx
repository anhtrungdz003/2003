import React from "react";
import { Coffee, Phone, Mail } from "lucide-react"; // thêm icon ở đây

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t bg-white">
      <div className="py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <Coffee className="w-6 h-6" aria-hidden />
            <span>WaterShop</span>
          </div>
          <p className="mt-3 text-sm text-zinc-600">
            Đem lại trải nghiệm đồ uống ngon, nhanh và lành.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Về chúng tôi</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>
              <a className="hover:text-zinc-900" href="#about">
                Câu chuyện
              </a>
            </li>
            <li>
              <a className="hover:text-zinc-900" href="#">
                Tuyển dụng
              </a>
            </li>
            <li>
              <a className="hover:text-zinc-900" href="#">
                Đối tác
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Hỗ trợ</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>
              <a className="hover:text-zinc-900" href="#">
                Câu hỏi thường gặp
              </a>
            </li>
            <li>
              <a className="hover:text-zinc-900" href="#">
                Chính sách giao hàng
              </a>
            </li>
            <li>
              <a className="hover:text-zinc-900" href="#">
                Bảo mật & Điều khoản
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Liên hệ</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" aria-hidden /> 0123 456 789
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" aria-hidden /> hello@watershop.vn
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4 border-t text-xs text-zinc-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} WaterShop. All rights reserved.</p>
        <p>Made with ❤ using React & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer ;
