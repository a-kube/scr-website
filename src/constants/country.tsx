import Albania from "../components/Nations/Albania";
import India from "../components/Nations/India";
import Korea from "../components/Nations/Korea";
import States from "../components/Nations/States";

const countries: {path: string, href: string, name: string, element: JSX.Element}[] = [
  {
    path: "usa",
    href: "/nations/usa",
    name: "United States",
    element: <States/>
  },
  {
    path: "korea",
    href: "/nations/korea",
    name: "South Korea",
    element: <Korea/>
  },
  {
    path: "india",
    href: "/nations/india",
    name: "India",
    element: <India/>
  },
  {
    path: "albania",
    href: "/nations/albania",
    name: "Albania",
    element: <Albania/>
  },
]

export default countries;