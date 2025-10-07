import { useState } from "react";
import { X } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-96 max-w-full rounded-2xl shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Đăng nhập" : "Đăng ký"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm mb-1">Họ và tên</label>
              <input
                type="text"
                placeholder="Nhập họ tên"
                className="w-full border rounded-lg p-2"
              />
            </div>
          )}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Nhập email"
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              className="w-full border rounded-lg p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition"
          >
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        <p className="text-center text-sm mt-3">
          {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
          <button
            className="text-amber-600 font-semibold hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
          </button>
        </p>
      </div>
    </div>
  );
}
