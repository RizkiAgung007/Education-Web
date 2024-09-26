import React from "react";
import { Categories } from "../../../Data";
import { Courses } from "../../../Data";
import Category from "./Category";
import Cours from "./Cours";
import { motion, stagger } from "framer-motion";

const Course = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      <div className="section" id="course">
        <div className="text-center">
          <div className="sm:text-3xl text-2xl font-medium mb-4">
            <p>
              Out top <span className="text-teal-700">Categories</span>
            </p>
          </div>
          <p className="text-sm text-gray-700 leading-7 max-w-[700px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi
            natus sed eveniet distinctio hic soluta ipsa est molestias deleniti!
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
        >
          {Categories.map((category) => {
            return <Category key={category.id} {...category} />;
          })}
        </motion.div>
        <div className="text-xl font-medium mt-32">Most Popular Course</div>
        <div className="mt-12 overflow-x-hidden w-full relative">
          <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
            {Courses.map((course) => {
              return <Cours key={course.id} {...course} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
