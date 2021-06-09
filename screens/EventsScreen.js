import * as React from 'react';
import { Text, View, Button } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"

function EventsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightyellow' }}>
      <Text>Events!</Text>
      <Button title="You've won $1M! Click here" onPress={()=> navigation.navigate("EventsSecondScreen")} />
    </View>
  );
}

function EventsSecondScreen() {
  return <Text>Don't get scammed</Text>;
}

const Stack = createStackNavigator();

export function EventsStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="EventsSecondScreen" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
}
