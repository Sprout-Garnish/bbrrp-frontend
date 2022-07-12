import React from "react";

const Sidebar = () => {
  const SidebarButton = (props) => {
    const name = props.name;
    return (
      <a>
        <div className="Georgia text-orange text-xl bg-white px-3 py-8">
          {name}
        </div>
      </a>
    );
  };

  return (
    <>
      <div className="fixed right-5 top-1/3 z-20  bg-white px-1 py-1 rounded-lg text-center drop-shadow-2xl">
        <SidebarButton name="table" />
        <hr className="border-khaki opacity-30"></hr>
        <SidebarButton name="review" />
        <hr className="border-khaki opacity-30"></hr>
        <SidebarButton name="location" />
      </div>
    </>
  );
};

export default Sidebar;
