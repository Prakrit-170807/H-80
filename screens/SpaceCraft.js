import React, { Component } from 'react';
import { Text, View, Alert, FlatList, Image, ImageBackground, StyleSheet, SafeAreaView, Platform, StatusBar, ActivityIndicator, ScrollView} from 'react-native';

import axios from 'axios';

export default class SpaceCraftsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aircrafts: []
        };
    }

    componentDidMount() {
        this.getData()

    }

    getData = () => {
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
            .then(response => {

                this.setState({ aircrafts: response.data.results })

            })
            .catch(error => {
                console.log(error.message)
            })

    }




    renderItem = ({ item }) => {
        return (
            <View style={styles.contentCard}>
                <Image source={{ uri: item.agency.image_url }} style={styles.itemImage}></Image>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>{item.name}</Text>
                       <Text style={styles.titleText}>{item.agency.name}</Text> 

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.explanationText}>{item.agency.description}</Text>
                    </View>
                </View>
            </View>
        )
    }

    keyExtractor = (item, index) => index.toString();

    render() {
        if (Object.keys(this.state.aircrafts).length === 0) {
            return (
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator/>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/bg1.png')} style={styles.backgroundImage}>
                        <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={styles.titleImage} source={require('../assets/Spacecrafts.png')}/>
                        </View>
                        <ScrollView style={styles.listContainer}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.aircrafts}
                                renderItem={this.renderItem}
                                initialNumToRender={10}
                            />
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
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
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
    contentCard: {
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        elevation: 10,
        backgroundColor: 'rgba(22, 22, 22, 0.8)'
    },
    titleImage: {
        width: "80%",
        position: "absolute",
        resizeMode: "contain",
        bottom: 20 ,
        left : 20, 
        top : 50,
        borderRadius: 5
    },
    itemImage: {
        width: "95%", height: 300, borderRadius: 38, marginTop:10, alignSelf:"center", 
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 55,
        marginBottom: 10,
        borderRadius: 40,
        backgroundColor: 'rgba(100, 100, 100, 0.6)'
    },
})