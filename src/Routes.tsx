import { memo, Suspense } from "react";
import { css } from "@emotion/react";
import { Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import ItemList from "./pages/ItemList";

export default memo(() => {
  return (
    <div css={css`max-width:1024px;padding:16px;margin:0 auto;`}>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" />
          <Route path="*"  element={<>404</>}/>
        </Routes>
      </Suspense>
    </div>
  )
});