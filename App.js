import * as React from 'react';
import {Text, Button, StatusBar, TextInput, KeyboardAvoidingView, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Second } from './src/screens'
const Stack = createStackNavigator();

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: 'MyPage',
                            headerStyle:{
                                backgroundColor: '#f4511e'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle:{
                                fontWeight: 'bold'
                            }
                        }}/>
                    <Stack.Screen
                        name="Second"
                        component={Second}
                        options={({ route }) => ({ title: route.params.name })}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ecf0f1',
        },
    });
