import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get products from API');
  }
}

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get categories from API');
  }
}

export const getProductByCat = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to get products of ${category}`);
  }
}
