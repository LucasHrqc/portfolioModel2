"use client";
import React, { useState, useTransition } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import TabButton from "./TabButton";
import { Tabs } from "../constants";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/laptop.png"} width={400} height={400} alt="about-me-image"></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dignissimos distinctio quasi quia, repellat rem nulla non libero
            deserunt vitae pariatur, porro inventore quidem iusto esse et. Aut,
            deleniti maiores.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-4"> 
            {Tabs.find(t => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {};

export default AboutSection;
