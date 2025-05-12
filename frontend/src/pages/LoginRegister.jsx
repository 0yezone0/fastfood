import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { loginUser, registerUser } from '../api';

const LoginRegister = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error when typing
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!form.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu';
    } else if (form.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    if (!isLogin) {
      if (!form.confirmPassword) {
        newErrors.confirmPassword = 'Vui lòng nhập lại mật khẩu';
      } else if (form.password !== form.confirmPassword) {
        newErrors.confirmPassword = 'Mật khẩu không khớp';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      let user;
      if (isLogin) {
        const res = await loginUser({ email: form.email, password: form.password });
        user = res.data.user;
        alert('Đăng nhập thành công!');
      } else {
        const res = await registerUser({ email: form.email, password: form.password });
        user = res.data.user;
        alert('Đăng ký thành công!');
      }

      onLoginSuccess(user);
    } catch (error) {
      const msg = error?.response?.data?.message || 'Đã xảy ra lỗi';
      alert(msg);
      console.error(error);
    }
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
        errors={errors}
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
