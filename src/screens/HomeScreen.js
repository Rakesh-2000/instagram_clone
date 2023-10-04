import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../component/Home/Header';
import Stories from '../component/Home/Stories';
import Post from '../component/Home/Post';
import { POSTS } from '../data/posts';
import Footer, { BottomTabs } from '../component/Home/footer';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <Stories />

                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            <Footer icons={BottomTabs} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
})

export default HomeScreen