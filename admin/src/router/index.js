import Cards from "~/pages/Cards";
import Upload from "~/pages/Upload";
import { Drinks } from "~/pages/Drinks";
import { Dashboard } from "../pages/Dashboard";
import Staff from "~/pages/Staff";
import Login from "~/pages/Login";

const authRouter = [
    { path: "/", component: Dashboard, layout: null },
    { path: "/drinks", component: Drinks, layout: null },
    { path: "/staff", component: Staff, layout: null },
    { path: "/cards", component: Cards, layout: null }, 
    { path: "/upload", component: Upload, layout: null }, 
]

export { authRouter }