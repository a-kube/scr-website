import Business from "../components/Themes/Business";
import Economics from "../components/Themes/Economics";
import Politics from "../components/Themes/Politics";
import Science from "../components/Themes/Science";
import Opinion from "../components/Themes/Opinion";
import Art from "../components/Themes/Art";

const themes: {path: string, href: string, name: string, element: JSX.Element}[] = [
  {
    path: "business",
    href: "/themes/business",
    name: "Business",
    element: <Business/>
  },
  {
    path: "economics",
    href: "/themes/economics",
    name: "Economics",
    element: <Economics/>
  },
  {
    path: "politics",
    href: "/themes/politics",
    name: "Politics",
    element: <Politics/>
  },
  {
    path: "science",
    href: "/themes/science",
    name: "Science",
    element: <Science/>
  },
  {
    path: "opinion",
    href: "/themes/opinion",
    name: "Opinion",
    element: <Opinion/>
  },
  {
    path: "art",
    href: "/themes/art",
    name: "Art",
    element: <Art/>
  },
]

export default themes;