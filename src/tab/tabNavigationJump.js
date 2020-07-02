import React from 'react';
import {Button, Image, Text, View} from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import { createBottomTabNavigator } from 'react-navigation-tabs';
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

export default createAppContainer(createBottomTabNavigator(
    {
        Home: { screen: HomeScreen },
        Settings: { screen: SettingsScreen },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                // return <Ionicons name={iconName} size={25} color={tintColor} />;
                return  <Image
                    source={require('../image/test.png')}
                    style={{ width: 24, height:24 }}
                />;
            },
        }),
        // tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            // activeBackgroundColor:'#00f',
            // inactiveBackgroundColor:'#f00',

        },



        animationEnabled: false,
        swipeEnabled: false,
    }
));
