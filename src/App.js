import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import { StatefulInput } from "baseui/input";
import Side from "./Side";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import Header from "./Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const engine = new Styletron();
const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
});

const itemProps = {
  backgroundColor: "mono300",
  display: "flex",
  alignItems: "top",
  justifyContent: "left"
};

const wideItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      style: ({ $theme }) => ({
        width: `calc((200% - ${$theme.sizing.scale800}) / 3)`
      })
    }
  }
};

const nav = [
  {
    title: "hello",
    itemId: "#colors",
    subNav: [
      { title: "Primary", itemId: "#primary" },
      {
        title: "Shades",
        itemId: "#shades",
        subNav: [{ title: "Dark", itemId: "#dark" }]
      }
    ]
  }
];
function hello(text) {
  console.log(text);
}
export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Router>
          <div>
            <FlexGrid
              flexGridColumnCount={3}
              flexGridColumnGap="scale800"
              flexGridRowGap="scale800"
              marginBottom="scale800"
            >
              <FlexGridItem {...itemProps}>
                <Side nav={nav} onHello={hello} />
              </FlexGridItem>
              <FlexGridItem display="none">
                This invisible one is needed so the margins line up
              </FlexGridItem>
              <FlexGridItem {...wideItemProps}>
                <Header />
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </FlexGridItem>
            </FlexGrid>
          </div>
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Users() {
  return <h2>Users</h2>;
}
