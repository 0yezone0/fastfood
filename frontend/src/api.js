import axios from 'axios';

export const fetchProducts = () => axios.get('http://localhost:3001/product');
export const fetchCategories = () => axios.get('http://localhost:3001/product-categories');
export const loginUser = (data) => axios.post('http://localhost:3001/auth/login', data);
export const registerUser = (data) => axios.post('http://localhost:3001/auth/register', data);
