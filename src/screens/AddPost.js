import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AddNewPost from '../component/Post/AddNewPost'

export default function AddPost() {
    return (
        <View style={styles.container}>
            <AddNewPost />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
})