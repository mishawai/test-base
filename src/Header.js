import React, { useEffect, useState } from "react";
import {
  HeaderNavigation,
  StyledNavigationList,
  StyledNavigationItem,
  ALIGN
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";
import { Link } from "react-router-dom";
import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient("testapp-mzrfv");

export default () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      client.auth
        .loginWithCredential(new AnonymousCredential())
        .then(user => {
          setUser({ name: "Misha", id: user.id });
          console.log(`Logged in as anonymous user with id: ${user.id}`);
        })
        .catch(console.error);
    }
  });
  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          {user && user.name ? `${user.name} (ID: ${user.id})` : "Not user"}
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Link to="/about">
            <StyledLink>About</StyledLink>
          </Link>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Link to="/">
            <StyledLink>Home</StyledLink>
          </Link>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button>Get started</Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};
