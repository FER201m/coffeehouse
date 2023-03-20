import { Drinks } from "~/pages/Drinks";
import Cards from "~/pages/Cards";
import { Dashboard } from "../pages/Dashboard";

const authRouter = [
    { path: "/", component: Dashboard, layout: null },
    { path: "/drinks", component: Drinks, layout: null },
    { path: "/home", component: Dashboard, layout: null }, // Demo, có thể xóa
    { path: "/cards", component: Cards, layout: null }, 
]

export { authRouter }