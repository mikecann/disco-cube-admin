import React from "react";
import "antd/dist/antd.less";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { LoginPage } from "./containers/loginPage/LoginPage";
import { IndexPage } from "./containers/indexPage/IndexPage";
import { RootStyles } from "./common/rootStyles/RootStyles";
import { TerminalPage } from "./containers/terminalPage/TerminalPage";
import { StatsPage } from "./containers/statsPage/StatsPage";

function App() {
  return (
    <RootStyles>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path={routes.login.path()}>
            <LoginPage />
          </Route>
          <Route path={routes.stats.path()}>
            <StatsPage />
          </Route>
          <Route path={routes.terminal.path()}>
            <TerminalPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </RootStyles>
  );
}

export default App;
