import "./navbar.css";

export const NavBar = () => {
  const origin = window.location.origin;

  return (
    <div className="navbar">
      <img src={`${origin}/logo.svg`} alt="logo" className="logo"></img>
    </div>
  );
};
