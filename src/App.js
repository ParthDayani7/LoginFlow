import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './components/pages/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const queryClint = new QueryClient();
  return (
    <QueryClientProvider client={queryClint}>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({});

export default App;