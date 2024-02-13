import Home from "./components/Home/Home";
import articleRoutes from "./constants/theme";
import countries from "./constants/country";
import routes from "./constants/route";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to="home" />}/>
        <Route key="home" path="home" element={<Home/>}/>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}/>
        ))}
      </Route>
      <Route path="/nations/">
        {countries.map((country) => (
          <Route key={country.path} path={country.path} element={country.element}/>
        ))}
      </Route>
      <Route path="/themes/">
        {articleRoutes.map((article) => (
          <Route key={article.path} path={article.path} element={article.element}/>
        ))}
      </Route>
    </Routes>
  )
}

export default App