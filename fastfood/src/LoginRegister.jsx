import React, { useState } from 'react';

const LoginRegister = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password || (!isLogin && !form.confirmPassword)) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }
    if (!isLogin && form.password !== form.confirmPassword) {
      alert('Mật khẩu không khớp');
      return;
    }
    // Gọi callback từ component cha khi đăng nhập/đăng ký thành công
    onLoginSuccess();
  };

  return (
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Mật khẩu"
            className="w-full p-3 border rounded"
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Nhập lại mật khẩu"
              className="w-full p-3 border rounded"
            />
          )}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded text-lg"
          >
            {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 underline">
            {isLogin ? 'Đăng ký' : 'Đăng nhập'}
          </button>
        </p>
      </div>
  );
};

export default LoginRegister;
