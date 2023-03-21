import { Drinks } from "~/pages/Drinks";
import Cards from "~/pages/Cards";
import { Dashboard } from "../pages/Dashboard";
import Staff from "~/pages/Staff";

const authRouter = [
    { path: "/", component: Dashboard, layout: null },
    { path: "/drinks", component: Drinks, layout: null },
<<<<<<< HEAD
    { path: "/home", component: Dashboard, layout: null }, // Demo, có thể xóa
    { path: "/cards", component: Cards, layout: null }, 
=======
    { path: "/staff", component: Staff, layout: null },
>>>>>>> cc80185c3453bef56019f88e5fb2914292203799
]

export { authRouter }