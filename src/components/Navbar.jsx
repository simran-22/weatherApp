import { Link } from "react-router-dom";

import { routesItem } from "../utils";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-end gap-3 bg-cyan-100">
        {routesItem.map((item) => {
          return (
            <li className="p-3" key={item.lable}>
              <Link to={item.link}>{item.lable}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
