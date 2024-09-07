import React, { ReactNode, FC } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className="mx-[18px]">{children}</div>;
};

export default Wrapper;
