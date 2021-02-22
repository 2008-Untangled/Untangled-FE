import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Room() {
    return (
        <View style={styles.container}>
            <Image source={require("/assets/roomImages/bedroom-view")} style={{width: 100% , height: 100%}}></Image>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    },
});
