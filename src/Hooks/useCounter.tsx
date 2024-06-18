import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increnment = () => {
    setCount((c: any) => c + 1);
  };
  const decrenment = () => {
    setCount((c: any) => c - 1);
  };

  return { count, increnment, decrenment };
};
export { useCounter };
