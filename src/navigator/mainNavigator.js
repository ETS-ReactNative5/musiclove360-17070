import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile46372Navigator from '../features/UserProfile46372/navigator';
import Tutorial46371Navigator from '../features/Tutorial46371/navigator';
import NotificationList46343Navigator from '../features/NotificationList46343/navigator';
import Settings46342Navigator from '../features/Settings46342/navigator';
import Settings46334Navigator from '../features/Settings46334/navigator';
import UserProfile46332Navigator from '../features/UserProfile46332/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile46372: { screen: UserProfile46372Navigator },
Tutorial46371: { screen: Tutorial46371Navigator },
NotificationList46343: { screen: NotificationList46343Navigator },
Settings46342: { screen: Settings46342Navigator },
Settings46334: { screen: Settings46334Navigator },
UserProfile46332: { screen: UserProfile46332Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
