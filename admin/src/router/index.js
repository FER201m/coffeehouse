import { Drinks } from "~/pages/Drinks";
import { Dashboard } from "../pages/Dashboard";
import Staff from "~/pages/Staff";

const authRouter = [
    { path: "/", component: Dashboard, layout: null },
    { path: "/drinks", component: Drinks, layout: null },
    { path: "/staff", component: Staff, layout: null },
]

export { authRouter }