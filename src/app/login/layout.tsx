import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const layout: React.FC<Props> = ({ children }) => {
  return <div>Login Layout {children}</div>;
};

export default layout;
