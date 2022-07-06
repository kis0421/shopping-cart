import { memo, useCallback } from "react";
import { useQuery } from "react-query";

import Item from "../containers/Item"
import { InterfaceItem } from "../types"
import { requestHandler } from "../utils"


export default memo(() => {
  const getProducts = useCallback(() => requestHandler("/api/rest/products"), []);
  const { data, isLoading } = useQuery(["getProducts"], getProducts, { suspense: true })

  if (!data) {
    return null;
  }
  console.log(data.product)
  return (
    <div>
      {isLoading
        ? <>loading</>
        : data.product.map((product: InterfaceItem) => <Item key={product.idx} {...product} />)}
    </div>
  )
})