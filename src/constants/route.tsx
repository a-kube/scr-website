import About from "../components/About/About";
import Action from "../components/Action/Action";

const routes: {path: string, href: string, name: string, element: JSX.Element}[] = [
  {
    path: "action",
    href: "/action",
    name: "Action",
    element: <Action/>
  },
  {
    path: "about",
    href: "/about",
    name: "About",
    element: <About/>
  },
]

export default routes;