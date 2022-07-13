import { createContext, useContext, useEffect, useRef, useState } from "react";

const MyContext = createContext();

export const ContextStore = (props) => {
  const ref = useRef();
  return <MyContext.Provider ref={ref}>{props.children}</MyContext.Provider>;
};