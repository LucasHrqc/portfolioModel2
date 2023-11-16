import React from "react";
import PropTypes from "prop-types";
import { Achievements } from "../constants";

const AchievementsSection = (props) => {
  return (
    <div className="py-8 px-4 xl:gap-6 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 mr-24 px-17 flex flex-row items-center justify-between">
        {Achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 px-12"
          >
            <h2 className="text-white text-4xl font-bold">
              {achievement.value}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

AchievementsSection.propTypes = {};

export default AchievementsSection;
