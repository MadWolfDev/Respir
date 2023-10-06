import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../modules/root';
import { WelcomeScreen } from '../modules/user-settings/WelcomeScreen';
import { RoutePath } from './RoutePath.type';
import { BreathAnimationScreen } from '../modules/breath-activity/BreathAnimationScreen';
import { SettingsScreen } from '../modules/user-settings/SettingsScreen';

export const AppRouter = createBrowserRouter([
  {
    path: RoutePath.root,
    element: <Root />,
    children: [
      {
        path: RoutePath.welcomeScreen,
        element: <WelcomeScreen />,
      },
      {
        path: RoutePath.breathAnimationScreen,
        element: <BreathAnimationScreen />,
      },
      {
        path: RoutePath.settingsScreen,
        element: <SettingsScreen />,
      },
    ],
  },
]);
