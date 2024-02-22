import axios from "axios";
const URL = "http://localhost:3000";

export const get = async (resource) => {
  const queryYrlMovies = `${URL}${resource}`;
  const apiResponse = await axios.get(queryYrlMovies);

  console.log(apiResponse);
  if (apiResponse.status !== 200) {
    return apiResponse.data;
  } else {
    console.log(apiResponse.data);
    return null;
  }
};
