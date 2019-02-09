import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/register";
import { I18nManager } from "react-native";

registerScreens();

I18nManager.forceRTL(true);

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			component: {
				// name: "Home",
				// name: "Eghamat",
				name: "Login",
				// name: "report",
				// name: "new-record",
				// name: "day",
				// name: "Screen2",
			},
		},
	});
});
