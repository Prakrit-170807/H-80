import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView, ImageBackground, Image } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
    constructor() {
        super()
        this.state = {
            longitude: '',
            latitude: ''
        }

    }
    render() {
        const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={require("../assets/bg1.png")} style={styles.backgroundImage}>
                    <View style={{ flex: 0.3, marginTop: 50, alignItems: 'center' }}>
                        <Image source={require("../assets/STARMAP.png")} style={styles.routeImage} />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Enter your longitude"
                            placeholderTextColor="white"

                            onChangeText={(text) => {
                                this.setState({
                                    longitude: text
                                })
                            }}
                        />

                        <TextInput
                            style={styles.inputStyle1}
                            placeholder="Enter your latitude"
                            placeholderTextColor="white"
                            onChangeText={(text) => {
                                this.setState({
                                    latitude: text
                                })
                            }}
                        />
                    </View>
                    <WebView
                        scalesPageToFit={true}
                        source={{ uri: path }}
                        style={{ marginTop: 10, marginBottom: 0, }}
                    />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        position: "absolute",
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderBottomRightRadius: 0 , 
        borderTopRightRadius: 0 ,
        borderRadius: 20,
        marginTop: 40,
        paddingRight: 10,
        right: -1,
        textAlign: 'right',
        color: 'white',
        width: 180
    },
    inputStyle1: {
        position: "absolute",
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderBottomRightRadius: 0 , 
        borderTopRightRadius: 0 ,
        borderRadius: 20,
        marginTop: 100,
        paddingRight: 10,
        right: -1,
        top: 10,
        textAlign: 'right',
        color: 'white',
        width: 180
    },
    routeImage: {
        marginRight: 200,
        bottom : -30,
        height: "80%",
        width: "80%",
        resizeMode: "contain"
    }
})
