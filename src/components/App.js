import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import Projects from "./Projects";

import Contact from "./Contact"
function App() {
  // https://material-ui.com/components/lists/#lists
  // state here is to find selectd index - and as passed down as props
  // to header and footer. Selected value controls which tab is highlighted as 'selected'.  
  // Value and setValue which controls which 
  // tab is shown is also passed down.
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  // wrap app in themeProvider and switch route from react-routr
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
        <Route
            exact
            path="/"
            render={props => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={props => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
         
          <Route
            exact
            path="/projects"
            render={props => (
              <Projects
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
      
          <Route
            exact
            path="/contact"
            render={props => (
              <Contact
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
         
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
          <Route exact path="/example" component={() => <div>example</div>} />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
