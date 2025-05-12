import React from 'react';

const AuthForm = ({ isLogin, form, handleChange, handleSubmit, errors = {} }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Mật khẩu"
          className="w-full p-3 border rounded"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      {!isLogin && (
        <div>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Nhập lại mật khẩu"
            className="w-full p-3 border rounded"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>
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
