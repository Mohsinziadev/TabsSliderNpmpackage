import * as React from "react";

const Button = ({ children }: any) => {
  return (
    <div>
      <button className="flex bg-[#FF0000] text-sm font-light text-white rounded-md mt-20">
        {children}
      </button>
    </div>
  );
};
export { Button };
