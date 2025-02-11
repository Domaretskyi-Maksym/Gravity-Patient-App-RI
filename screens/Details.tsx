import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";
import { useRecoilValue } from "recoil";
import { withBrackets } from "../recoil/someState";

const Tab = createMaterialTopTabNavigator();

const New = (): JSX.Element => {
	const someStateBrackets = useRecoilValue(withBrackets);

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>{ someStateBrackets }</Text>
			<Text>New</Text>
		</View>
	);
};

const InProgress = (): JSX.Element => (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
		<Text>In Progress</Text>
	</View>
);

const Submitted = (): JSX.Element => (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
		<Text>Submitted</Text>
	</View>
);

const Details = (): JSX.Element => (
	<Tab.Navigator>
		<Tab.Screen name="New" component={New} />
		<Tab.Screen name="In Progress" component={InProgress} />
		<Tab.Screen name="Submitted" component={Submitted} />
	</Tab.Navigator>
);

export default Details;
