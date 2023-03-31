import { NavBar } from "./Navbar";
import { Characters } from "../routers/Characters/Characters";
import { Home } from "../routers/Home/Home";

export const Layout = ({ pageToRender = "home" }) => {
  const getPage = () => {
    switch (pageToRender) {
      case "characters":
        return <Characters />;
      default:
        return <Home />;
    }
  };
  return (
    <>
      <NavBar />
      {getPage()}
    </>
  );
};
