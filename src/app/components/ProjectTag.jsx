import React from "react";
import PropTypes from "prop-types";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttomStyles = isSelected
    ? "text-white bg-primary-500 border border-primary-900"
    : "text-[#ADB7BE] border-secondary-600 hover:border-white";

  return (
    <button
      className={`${buttomStyles} rounded-full border-2 px-5 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

ProjectTag.propTypes = {};

export default ProjectTag;
