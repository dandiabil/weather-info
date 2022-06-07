import React from "react";

const Tabs = ({ active, setActive }) => {
  function moveTab(e) {
    switch (e.target.innerText) {
      case "Daily":
        setActive("Daily");
        break;
      case "Hourly":
        setActive("Hourly");
        break;
      default:
        break;
    }
  }

  return (
    <section
      className="flex items-center justify-evenly text-xl gap-2 bg-white text-slate-400 px-2 py-1 w-fit rounded-full mb-3 hover:cursor-default"
      onClick={moveTab}
    >
      <div
        className={
          active === "Daily"
            ? "selected"
            : "hover:cursor-pointer hover:text-black transition-all"
        }
      >
        <p>Daily</p>
      </div>
      <div
        className={
          active === "Hourly"
            ? "selected"
            : "hover:cursor-pointer hover:text-black transition-all"
        }
      >
        <p>Hourly</p>
      </div>
    </section>
  );
};

export default Tabs;
