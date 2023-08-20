import { PropsWithChildren } from "react";

interface IHeaderProp {}
const Header = ({ children }: PropsWithChildren<IHeaderProp>) => {
  return (
    <header className="app_header" id="app_header">
      {children}
    </header>
  );
};

export default Header;
