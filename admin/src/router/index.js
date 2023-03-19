import Cards from "~/pages/Cards";
import Upload from "~/pages/Upload";
import { Dashboard } from "../pages/Dashboard";

const authRouter = [
    { path: "/", component: Dashboard, layout: null },
    { path: "/home", component: Dashboard, layout: null }, // Demo, có thể xóa
    { path: "/cards", component: Cards, layout: null }, 
    { path: "/upload", component: Upload, layout: null }, 
]

export { authRouter }