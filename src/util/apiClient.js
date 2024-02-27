import axios from "axios";
const URL = "http://localhost:3000";

export const get = async (resource) => {
  const queryYrlMovies = `${URL}${resource}`;
  try {
    const apiResponse = await axios.get(queryYrlMovies);
    return apiResponse.data;
  } catch (error) {
    console.error("Error fetching movies ", error);
    return null;
  }
};

export const post = async (resource, data) => {
  const queryYrlMovies = `${URL}${resource}`;
  try {
    const apiResponse = await axios.post(queryYrlMovies, data);
    return apiResponse.data;
  } catch (error) {
    console.error("Error fetching movies ", error);
    return null;
  }
};

export const put = async (resource, data) => {
  const queryYrlMovies = `${URL}${resource}`;
  try {
    const apiResponse = await axios.put(queryYrlMovies, data);
    return apiResponse.data;
  } catch (error) {
    console.error("Error fetching movies ", error);
    return null;
  }
};

export const remove = async (resource) => {
  const queryYrlMovies = `${URL}${resource}`;
  try {
    const apiResponse = await axios.delete(queryYrlMovies);
    return apiResponse.data;
  } catch (error) {
    console.error("Error fetching movies ", error);
    return null;
  }
};
