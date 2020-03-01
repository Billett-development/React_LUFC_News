import React from "react";
import { Grid } from 'semantic-ui-react';
import Logo from "../../Images/Common/lufc-logo-lg.png";


import '../Styles/_HeroOverlay.scss';

const DEFAULT_CLASSNAME = "hero";

export default function HeroOverlay() {
    return(
        <Grid className={DEFAULT_CLASSNAME}>
            <Grid.Row>
                <Grid.Column className={`${DEFAULT_CLASSNAME}__header`} width={1}>
                    <h2 className={`${DEFAULT_CLASSNAME}__header-title`}>for the fans</h2>
                </Grid.Column>
                <Grid.Column width={1}></Grid.Column>
            </Grid.Row>
        <Grid.Row>
            <Grid.Column width={1}>Hello</Grid.Column>
            <Grid.Column className={`${DEFAULT_CLASSNAME}__logo-img`} width={1}>
                <img src={Logo} alt="LUFC logo" />
            </Grid.Column>
        </Grid.Row>
        </Grid>
    );
}