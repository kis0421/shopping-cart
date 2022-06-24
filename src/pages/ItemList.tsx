import { memo, useCallback } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const secretKey = process.env.SECRETKEY as string;

export default memo(() => {
  const getProducts = useCallback(async () => {
    const res = axios({
      method: "GET",
      url: "https://shopping-basket.hasura.app/api/rest/products",
      headers: {
        "x-hasura-admin-secret": secretKey,
      }
    });
    return res;
  }, []);
  const { data } = useQuery(["getProducts"], getProducts, { suspense: true })
  //TODO: 예외처리 해야함
  return (
    <div>
      {data.data.product.map((product) => (
        <div key={product.idx}>
          <span>{product.product_name}</span>
        </div>
      ))}
    </div>
  )
})