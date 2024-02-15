import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  state = {
    data: [
      {
        id: 1,
        name: "Home",
        component: HomeScreen,
        title: "CV. Sinergi Karya Nusantara",
      },
    ],
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {this.state.data.map((item, index) => (
          <Stack.Screen key={item.id} name={item.name} component={item.component} options={{ title: item.title }} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
