import React from "react";
import PropTypes from "prop-types";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-primary-500"
    : "text-[#ADB7BE]";

  return (
    <button type="button" onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

TabButton.propTypes = {};

export default TabButton;
