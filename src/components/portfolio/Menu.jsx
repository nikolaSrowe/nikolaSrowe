import Work1 from "../../assets/work-1.svg";
import CubeComponent from "../cube/CubeComponent";

const Menu = [
    {
        id: 1, 
        image: Work1,
        title: "My Personal Website",
        category: "Coding",
        component: null,
        link: "/projects/personal-website",
        description: "A website built using React, CSS, and Three.js.",
        technologies: ["React", "Three.js", "CSS"],
    },
    {
        id: 2, 
        image: Work1,
        title: "Paintings and Drawings",
        category: "Art",
        component: null,
        link: "/projects/paintings-drawings",
        description: "A collection of my best paintings and drawings.",
        technologies: ["Watercolor", "Digital Art", "Sketching"],
    },
    {
        id: 3, 
        image: Work1,
        title: "My First Cube",
        category: "Coding", 
        component: <CubeComponent />,
        link: "/projects/first-cube",
        description: "A 3D interactive cube created with Three.js.",
        technologies: ["Three.js", "JavaScript", "3D Modeling"],
    },
];

export default Menu;
