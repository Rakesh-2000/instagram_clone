import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Users } from '../../data/Store'

const Stories = () => {
    return (
        <View style={{ paddingBottom: 10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Users.map((story, index) => (
                    <View key={index} style={{ alignItems: "center" }}>
                        <Image source={{ uri: story.image }} style={styles.storyImg}></Image>
                        <Text style={styles.names}>
                            {story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + "..." : story.user.toLowerCase()}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    storyImg: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: "#FCAF45",
    },
    names: {
        color: "#fff",
        alignSelf: "center",
        marginTop: 4
    }
})

export default Stories