import axios from "axios";

const HOST = "https://shopping-basket.hasura.app";
const secretKey = process.env.SECRETKEY as string;

const instance = axios.create({
  baseURL: `${HOST}`,
  timeout: 1e4,
  headers: {
    "x-hasura-admin-secret": secretKey,
  }
})

export const requestHandler = async (endpoint: string) => {
  try {
    const { data } = await instance.get(endpoint);
    return data;
  } catch (err) {
    throw err
  }
}
