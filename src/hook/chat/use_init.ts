import { useEffect } from "react";

interface IUseInitProps {
  initAsync: () => {};
}
export const useInit = ({ initAsync }: IUseInitProps) => {
  useEffect(() => {
    console.log("useInit mount/update");

    initAsync();

    return () => {
      console.log("useInit unmount");
    };
  }, []);
};
