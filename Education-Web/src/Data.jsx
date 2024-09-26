import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import Course1 from "./assets/story-avatar-1.jpg";
import Course2 from "./assets/story-avatar-2.jpg";
import Course3 from "./assets/story-avatar-3.jpg";
import Course4 from "./assets/story-avatar-4.jpg";
import Course5 from "./assets/story-avatar-5.jpg";
import Course6 from "./assets/story-avatar-6.jpg";
import Course7 from "./assets/story-avatar-5.jpg";
import Course8 from "./assets/story-avatar-5.jpg";

import Logo1 from "./assets/story-1.jpg";
import Logo2 from "./assets/story-2.jpg";
import Logo3 from "./assets/story-3.jpg";
import Logo4 from "./assets/story-4.jpg";
import Logo5 from "./assets/story-5.jpg";
import Logo6 from "./assets/story-6.jpg";

export const NavLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "course",
    link: "Course",
  },
  {
    id: 4,
    href: "teacher",
    link: "Teacher",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const Categories = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    category: "Development",
  },
  {
    id: 2,
    icon: <FiPenTool />,
    category: "Design",
  },
  {
    id: 3,
    icon: <MdOutlineScience />,
    category: "Science",
  },
  {
    id: 4,
    icon: <BsBarChartLine />,
    category: "Business",
  },
];

export const Courses = [
  {
    id: 1,
    image: Course1,
    category: "Web Development",
    title: "Fullstack Web Development",
    rate: 5.0,
    participants: 1300,
    price: 600,
  },
  {
    id: 2,
    image: Course2,
    category: "Web Development",
    title: "Golang Beginner to Advanced",
    rate: 4.8,
    participants: 800,
    price: 1000,
  },
  {
    id: 3,
    image: Course3,
    category: "Web Design",
    title: "UI/UX Design",
    rate: 4.9,
    participants: 4000,
    price: 400,
  },
  {
    id: 4,
    image: Course4,
    category: "AI Development",
    title: "AI with Python",
    rate: 4.6,
    participants: 500,
    price: 780,
  },
  {
    id: 5,
    image: Course5,
    category: "Web Development",
    title: "MERN Stack for Web",
    rate: 4.8,
    participants: 1300,
    price: 800,
  },
  {
    id: 6,
    image: Course6,
    category: "Machine Learning",
    title: "Machine Learning with Python",
    rate: 4.6,
    participants: 600,
    price: 750,
  },
  {
    id: 7,
    image: Course7,
    category: "Web Development",
    title: "PHP, Laravel, and MYSQL",
    rate: 5.0,
    participants: 5000,
    price: 550,
  },
  {
    id: 8,
    image: Course8,
    category: "Web Design",
    title: "Learning path",
    rate: 5.0,
    participants: 7300,
    price: 600,
  },
];

export const Logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

export const Accordions = [
  {
    id: 1,
    title: "What is Decode?",
  },
  {
    id: 2,
    title: "What can I learn from Decode?",
  },
  {
    id: 3,
    title: "Can I teach on Decode?",
  },
  {
    id: 4,
    title: "What is included in my Decode membership?",
  },
];
