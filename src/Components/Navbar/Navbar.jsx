import classes from "./Navbar.module.css";
// import Logo from "../Logo/Logo";
import Links from "./Links/Links";

const Navbar = () => {
  return (
    <div
      className={[
        classes.Navbar,
        "p-4 border-gray-700 shadow-lg fixed w-screen flex justify-center items-center text-xl",
      ].join(" ")}
    >
      {/* <Logo /> */}
      <Links />
    </div>
  );
};

export default Navbar;
