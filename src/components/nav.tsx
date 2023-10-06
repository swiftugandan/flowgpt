import React from "react";

const Nav = () => {
  return (
    <div className="navbar bg-base-200 ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-orange-600">FlowGPT</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
