import * as React from "react";
import {Text, View, Button} from "react-native";

class Home extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>HomeScreen!</Text>
                <Button onPress={()=> navigation.setOptions({title: 'Hello'})} title="Next Page"/>
            </View>
        )
    }
}

export { Home }

