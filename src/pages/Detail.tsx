import { memo } from "react";
import { useParams } from 'react-router-dom';

export default memo(() => {
  const { id } = useParams();

  return (
    <div>detail {id}</div>
  )
});