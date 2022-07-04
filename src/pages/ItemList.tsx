import { memo, useCallback } from "react";
import { useQuery } from "react-query";

import { requestHandler } from "../utils"


export default memo(() => {
  const getProducts = useCallback(() => requestHandler("/api/rest/products"), []);
  const { data, isLoading } = useQuery(["getProducts"], getProducts, { suspense: true })

  if (!data) {
    return null;
  }

  return (
    <div>
      {isLoading
        ? <>loading</>
        : data.product.map((product) => (
          <div key={product.idx}>
            <span>{product.product_name}</span>
          </div>
        ))}
    </div>
  )
})