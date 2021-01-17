import axios from "axios";

const baseURL = "https://api.covid19api.com";

export const fetchCountries = async () => {
  const { data } = await axios.get(`${baseURL}/countries`);
  return data;
};

export const fetchDailyData = async (country) => {
  const { data } = await axios.get(`${baseURL}/dayone/country/${country}`);
  return data;
};
