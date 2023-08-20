import { PropsWithChildren } from "react";

interface IFooterProp {}
const Footer = ({ children }: PropsWithChildren<IFooterProp>) => {
  return (
    <footer className="app_footer" id="app_footer">
      {children}
    </footer>
  );
};

export default Footer;
