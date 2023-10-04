import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')}></Image>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image style={styles.icons} source={require('../../assets/images/add.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icons} source={require('../../assets/images/heart.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>10</Text>
                    </View>
                    <Image style={styles.icons} source={require('../../assets/images/message.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    icons: {
        width: 28,
        height: 28,
        marginLeft: 10,
        resizeMode: 'contain',
    },
    badge: {
        backgroundColor: "red",
        position: 'absolute',
        left: 20,
        bottom: 18,
        borderRadius: 25,
        width: 25,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100
    },
    badgeText: {
        color: "#fff",
        fontWeight: "500"
    }
})

export default Header
