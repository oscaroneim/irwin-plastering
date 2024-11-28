"use client";

import React, { ReactNode, FC } from "react";
import clsx from "clsx";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return <div className={clsx("flex-1 mx-[18px]", className)}>{children}</div>;
};

export default Wrapper;
