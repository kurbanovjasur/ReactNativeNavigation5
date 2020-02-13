import * as React from "react";
import {Text,Button, View} from "react-native";

class Second extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>SecondScreen!</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        )
    }
}

export { Second }

