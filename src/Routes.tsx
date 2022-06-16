import { memo } from "react";
import { css } from "@emotion/react";
import { Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import ItemList from "./pages/ItemList";

export default memo(() => {
  return (
    <div css={css`max-width:1024px;padding:16px;margin:0 auto;`}>
      <Routes>
        <Route path="/" element={<ItemList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/detail"></Route>
      </Routes>
    </div>
  )
});