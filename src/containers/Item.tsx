import { memo } from "react";

import { InterfaceItem } from "../types"

export default memo((props: InterfaceItem) => {
  return (
    <div>
      <span>{props.product_name}</span>
    </div>
  )
})