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

// TODO: 현재는 get만 사용하지만 차후 method도 전달 받도록 바꿔야함 
export const requestHandler = async (endpoint: string) => {
  try {
    const { data } = await instance.get(endpoint);
    return data;
  } catch (err) {
    throw err
  }
}
