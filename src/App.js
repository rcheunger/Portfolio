import { Route, Switch, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Main from "./components/Main";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        {/* For framer-motion animation on page change! */}
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
