import Work1 from "../../assets/work-1.svg";
import CubeComponent from "../cube/CubeComponent";


const Menu = [
    {
        id: 1, 
        image: Work1,
        title: "My Personal Website",
        category: "Coding",
        component: null,
    },
    {
        id: 2, 
        image: Work1,
        title: "Paintings and Drawings",
        category: "Art",
        component: null,
    },
    {
        id: 3, 
        image: Work1,
        title: "My First Cube",
        category: "Coding", 
        component: <CubeComponent/>,
    },
];

export default Menu