import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, createContext, useState } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import Loading from "./UI/Loading";

import Home from "./pages/Home";
import About from './pages/About';
import Works from './pages/Works';

import Skills from './pages/Skills';
import Error from './pages/Error';

// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Skills = lazy(() => import("./pages/Skills"));
// const Works = lazy(() => import("./pages/Works"));
// const Error = lazy(() => import("./pages/Error"));

const SoundBar = lazy(() => import("./UI/SoundBar"));

export const AppContext = createContext({});

function App() {
  const location = useLocation();

  const [clickSpinner, setClickSpinner] = useState(false);

  const handleClick = () => setClickSpinner(!clickSpinner);

  const [path, setPath] = useState("");

  const mq = window.matchMedia("(max-width: 50em)").matches;

  return (
    <AppContext.Provider value={{ handleClick, setClickSpinner, clickSpinner, path, setPath, mq }}>

      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <SoundBar />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route exact path={process.env.PUBLIC_URL + '/'} element={<Home />} />
              <Route exact path={process.env.PUBLIC_URL + '/about'} element={<About />} />
              <Route exact path={process.env.PUBLIC_URL + '/skills'} element={<Skills />} />
              <Route exact path={process.env.PUBLIC_URL + '/works'} element={<Works />} />
              <Route exact path="*" element={<Error />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
