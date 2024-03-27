import { Outlet } from "react-router-dom";
import Nav from "../shared/Nav";

const Root = () => {
  return (
    <div className="lg:max-w-[1170px] lg:mx-auto mx-5">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
