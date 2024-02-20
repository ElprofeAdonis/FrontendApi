const URL = "http://localhost:3000";

export const get = async (resource) => {
  const queryYrl = `${URL}/${resource}`;
  const response = await fetch(queryYrl, { method: "GET" });
  console.log(response);
};
