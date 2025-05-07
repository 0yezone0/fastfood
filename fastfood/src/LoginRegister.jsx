import React, { useState } from 'react';

const LoginRegister = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!form.email || !form.password || (!isLogin && !form.confirmPassword)) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }
  
    if (!isLogin && form.password !== form.confirmPassword) {
      alert('Mật khẩu không khớp');
      return;
    }
  
    const endpoint = isLogin ? '/auth/login' : '/auth/register';
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Đăng nhập hoặc đăng ký thất bại');
      }
  
      if (isLogin && data.access_token) {
        localStorage.setItem('token', data.access_token);
      }
  
      onLoginSuccess();
    } catch (error) {
      alert(error.message);
    }
  };
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundColor: '#FFF8E1' }}>
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
    </div>
  );
};

export default LoginRegister;
