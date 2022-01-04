import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, Alert, Platform, StatusBar, SafeAreaView, Linking, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default class DailyPicScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apod: []
        };
    }

    componentDidMount() {
        this.getAPOD()
    }

    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=COGdtQeIWk1mbziFVQgpfK3JfP4dBSAlQg8imDGw")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    renderImage = (url) => {

        <Image source={{ "uri": url }}
            style={{
                width: "100%", height: 300,
                borderRadius: 20, margin: 3
            }}>
        </Image>


        renderVideo = () => {
            <TouchableOpacity style={styles.listContainer}
                onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
            >
                <View style={styles.iconContainer}>
                    <Image source={require("../assets/play-video.png")} style={{ width: 50, height: 50 }}></Image>
                </View>
            </TouchableOpacity >
        }

    }
    render() {

        const url = this.state.apod.url
        if (Object.keys(this.state.apod).length === 0) {
            return (
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:"#101010"  }}>
                    <ActivityIndicator  size="large" color="white"  backgroundColor="#101010" />
                </View>
            )
        }
        else {

            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/bg1.png')} style={styles.backgroundImage}>
                        <View style={{ flex: 0.15, justifyContent: "center", textAlign: "center" }}>
                            <Image style={styles.routeImage} source={require("../assets/DailyPicture.png")}/>
                        </View>
                        <ScrollView style={styles.listContainer}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
                            >
                                <Image source={{ "uri": url }} style={{ width: "95%", height: 300, borderRadius: 38, marginTop:10, alignSelf:"center", }}></Image>
                            </TouchableOpacity >
                            <View style={{ padding: 20 }}>
                                <Text style={styles.titleText}>{this.state.apod.title}</Text>
                                <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </View>
            )
        }
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "rgba(250, 250, 250, 1)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        textShadowColor: 'rgba(30, 30, 30, 1)',
    },
    explanationText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        marginTop: 10,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        textShadowColor: 'rgba(30, 30, 30, 0.8)',
        // margin: 10,
        // textAlign: 'center'
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 85,
        marginBottom: 10,
        borderRadius: 40,
        backgroundColor: 'rgba(100, 100, 100, 0.6)'
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",

    },
    routeImage: {
        marginTop: 180,
        marginRight: 280,
        right: 50,
        bottom : 30,
        height: "100%",
        width: "100%",
        resizeMode: "contain"
    }
});

