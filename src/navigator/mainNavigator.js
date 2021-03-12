import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen49214194Navigator from '../features/BlankScreen49214194/navigator';
import Maps214162Navigator from '../features/Maps214162/navigator';
import Additem214161Navigator from '../features/Additem214161/navigator';
import Maps214157Navigator from '../features/Maps214157/navigator';
import UserProfile214153Navigator from '../features/UserProfile214153/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen49214194: { screen: BlankScreen49214194Navigator },
Maps214162: { screen: Maps214162Navigator },
Additem214161: { screen: Additem214161Navigator },
Maps214157: { screen: Maps214157Navigator },
UserProfile214153: { screen: UserProfile214153Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
