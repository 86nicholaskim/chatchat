import MainContainer from "./contents/MainContainer";
import FooterContainer from "./footer/FooterContainer";
import HeaderContainer from "./header/HeaderContainer";

export default function AppContainer() {
  return (
    <>
      <div className="app" id="app">
        <HeaderContainer />
        <MainContainer />
        <FooterContainer />
      </div>
    </>
  );
}
