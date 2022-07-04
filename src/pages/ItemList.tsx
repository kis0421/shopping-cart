import { memo, useCallback } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const secretKey = process.env.SECRETKEY as string;

export default memo(() => {
  const getProducts = useCallback(() => {
    const res = axios({
      method: "GET",
      url: "https://shopping-basket.hasura.app/api/rest/products",
      headers: {
        "x-hasura-admin-secret": secretKey,
      }
    });
    return res;
  }, []);
  const { data, isLoading } = useQuery(["getProducts"], getProducts, { suspense: true })

  if (!data) {
    return null;
  }
  return (
    <div>
      {isLoading
        ? <>loading</>
        : data.data.product.map((product) => (
          <div key={product.idx}>
            <span>{product.product_name}</span>
          </div>
        ))}
    </div>
  )
})