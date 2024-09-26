import React, { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export const Accordion = ({ title, id }) => {
    const [activeId, setActiveId] = useState(null);
    const handleClick = (id) => {
        setActiveId(id === activeId ? null : id);
    };

    // Function to return specific content based on the accordion id
    const getAccordionContent = (id) => {
        switch (id) {
            case 1:
                return "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ex expedita molestiae";
            case 2:
                return "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ex expedita molestiae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ex expedita molestiae";
            case 3:
                return "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
            case 4:
                return "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ex expedita molestiae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ex expedita molestiae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ex expedita molestiae";
            default:
                return "Default content";
        }
    };

    return (
        <>
            <div className='pb-8'>
                <div className='flex items-center justify-between'>
                    <div className='sm:text-xl text-base font-medium'>{title}</div>
                    <BsChevronDown
                        onClick={() => handleClick(id)}
                        className={`${id === activeId ? "rotate-180" : "rotate-0"} cursor-pointer transition-all duration-300`}
                    />
                </div>
                <AnimatePresence>
                    {id === activeId && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: "hidden" }}
                            className='pt-4'
                        >
                            <p className='text-sm leading-7 text-gray-700 blu'>
                                {getAccordionContent(id)}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Accordion;
