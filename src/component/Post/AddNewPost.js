import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import FormPost from './FormPost';

const Header = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ marginLeft: 10 }}>
                <Image source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nO2UUQrCMAxA6wWdDmUfenaFiVOZN1B4UuhQNJ1Ntypi318hyaNJWmMymb8BWAJnYA/MFHlz4AC0wEIrnbjEjgtQBeRVLrajVYktwOmhwFu5ILUcjRagFAqJco/Unku12GJnJBS8AuunXZBiVmYI9MiTSQNaGTSKQXhunuamCnk6qcUz05eF+5Q0nZxvLBc9TybknY8uNfeYceVAMcKXWcSId5r5eeR1jLjRLo0gb2JbXQMbTctc3tblTtXiTOZnuQEG7QtfZaLvigAAAABJRU5ErkJggg==" }} style={styles.imagestyle}></Image>
            </View>
            <View style={{ flex: 2, alignItems: "center", justifyContent: "center", marginRight: 20 }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>New Post</Text>
            </View>
        </View>
    )
}


const AddNewPost = () => {
    return (
        <View>
            <Header />
            <FormPost />
        </View>
    )
}

export default AddNewPost

const styles = StyleSheet.create({
    imagestyle: {
        height: 30,
        width: 30,
    }
})