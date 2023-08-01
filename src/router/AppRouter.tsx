import { createBrowserRouter } from "react-router-dom";
import { Root } from "../modules/root";
import { WelcomeScreen } from "../modules/user-settings/WelcomeScreen";
import { RoutePath } from "./RoutePath.type";
import { BreathAnimationScreen } from "../modules/breath-activity/BreathAnimationScreen";
import { DefaultBreathModesScreen } from "../modules/user-settings/DefaultBreathModesScreen";


export const AppRouter = createBrowserRouter([
    {
      path: RoutePath.root,
      element: <Root />,
      children: [
        {
            path: RoutePath.welcomeScreen,
            element: <WelcomeScreen />,
            children: [
                {
                    path: RoutePath.defaultBreathModesScreen,
                    element: <DefaultBreathModesScreen />,
                },
            ]
        },
        {
            path: RoutePath.breathAnimationScreen,
            element: <BreathAnimationScreen showAnim={true} />,
        },
      ],
    },
]);
  