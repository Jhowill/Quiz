import React from "react";
import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import ComoPassar from "./ComoPassar";
import Home from "./Home";

const myDrawer = createDrawerNavigator (
    {
        Home: Home,
        ComoPassar: ComoPassar,
    }
)

export default createAppContainer (myDrawer);