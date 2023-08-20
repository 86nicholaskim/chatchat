import { PropsWithChildren } from "react";

interface IMainProp {}
const Main = ({ children }: PropsWithChildren<IMainProp>) => {
  return (
    <main className="app_content" id="app_content">
      {children}
    </main>
  );
};

export default Main;
