import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/bg.png')}
                    style={styles.backgroundImage}>

                    <View style={styles.titleBar}>
                        <Image source={require("../assets/stellarlogo.png")} style={{marginTop: 20, width: 350, height: 450, resizeMode: "contain", alignSelf: "center", }}></Image>
                    </View>

                    <TouchableOpacity
                        style={styles.routeCard} onPress={() =>
                            this.props.navigation.navigate("SpaceCraft")}>
                        <Image source={require("../assets/but1.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMap")}>
                        <Image source={require("../assets/but2.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyPic")}>
                        <Image source={require("../assets/but3.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        alignSelf: 'center',
        flex: 0.1,
        marginTop: 80,
        borderRadius: 20,
        marginBottom: -50,
        width: "95%",
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    },
    routeImage: {
        position: "absolute",
        height: "100%",
        width: "100%",
        resizeMode: "contain"
    }
});