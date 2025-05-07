// pages/LoginRegister.jsx
import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

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
    onLoginSuccess();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
      </h2>
      <AuthForm
        isLogin={isLogin}
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
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