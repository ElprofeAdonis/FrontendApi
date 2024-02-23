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
