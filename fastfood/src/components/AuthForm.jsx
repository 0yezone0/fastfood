// components/AuthForm.jsx
import React from 'react';

/**
 * Component hiển thị form đăng nhập hoặc đăng ký
 * Nhận props từ LoginRegister.jsx để xử lý state và sự kiện
 */
const AuthForm = ({ isLogin, form, handleChange, handleSubmit }) => {
  return (
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
  );
};

export default AuthForm;