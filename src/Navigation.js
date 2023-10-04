import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddPost from './screens/AddPost';

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
};

const SignInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={screenOptions}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AddPost" component={AddPost} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default SignInStack;
