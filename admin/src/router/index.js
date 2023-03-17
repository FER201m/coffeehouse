import { Drinks } from "~/pages/Drinks";
import { Dashboard } from "../pages/Dashboard";

const authRouter = [
    { path: "/", component: Dashboard, layout: null },
    { path: "/drinks", component: Drinks, layout: null },
]

export { authRouter }