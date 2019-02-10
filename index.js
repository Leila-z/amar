import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/register";
import { I18nManager } from "react-native";

registerScreens();

I18nManager.forceRTL(true);

Navigation.startSingleScreenApp({
	screen: {
		screen: "Login",
		navigatorStyle: {
			navBarHidden: true,
		},
	},
	appStyle: {
		orientation: "portrait",
	},
	animationType: "fade",
});
