import React from "react";
import { Grid } from "semantic-ui-react";
import Logo from "../../Images/Common/header-logo.png";


import '../Styles/_Navbar.scss';

const DEFAULT_CLASSNAME = "navigation";

export default function Navbar() {
  return (
    <Grid columns={7} className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}__list`}>
        <Grid.Column className={`${DEFAULT_CLASSNAME}__item`}>NEWS</Grid.Column>
        <Grid.Column className={`${DEFAULT_CLASSNAME}__item`}>ABOUT</Grid.Column>
        <Grid.Column className={`${DEFAULT_CLASSNAME}__item`}>LUFC ZONE</Grid.Column>
        <Grid.Column >
          <img alt="LUFC logo" src={Logo} className={`${DEFAULT_CLASSNAME}__item-logo`} />
        </Grid.Column>
        <Grid.Column className={`${DEFAULT_CLASSNAME}__item`}>LUFC LIVE</Grid.Column>
        <Grid.Column className={`${DEFAULT_CLASSNAME}__item`}>MERCH</Grid.Column>
        <Grid.Column className={`${DEFAULT_CLASSNAME}__item`}>CONTACT</Grid.Column>
      </div>
    </Grid>
  );
}
