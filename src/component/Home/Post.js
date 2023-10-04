import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PostStore } from '../data/posts';
import { Users } from '../data/Store';


const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <Divider />
            <PostHeader post={post} />
            <PostImage post={post} />
            <Footer />
            <Likes post={post} />
            <Caption post={post} />
            <CommentSection post={post} />
            <CommentsData post={post} />
        </View>
    )
}
const Divider = () => {
    return (
        <View style={{ width: "100%", height: 1, backgroundColor: "grey", marginBottom: 5, marginTop: 5 }}></View>
    )
}

const PostHeader = ({ post }) => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 5
        }}>
            <View style={{}}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <Image source={post.profile_pic} style={styles.postImage} ></Image>
                    <Text style={{ color: "#fff" }}>{post.user}</Text>
                </View>
            </View>
        </View>
    )
}

const Footer = () => {
    return (
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <View style={{ flexDirection: "row", marginHorizontal: 5, marginTop: 10 }}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/heart.png')} style={styles.icons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/comment.png')} style={styles.icons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/share.png')} style={styles.icons}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 5, marginTop: 10 }}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/save.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const PostImage = ({ post }) => {
    return (
        <View style={{ width: "100%", height: 450 }}>
            <Image source={post.imageUrl} style={{ height: "100%", resizeMode: "cover" }}></Image>
        </View>
    )
}

const Likes = ({ post }) => {
    return (
        <View style={{ flexDirection: "row", marginTop: 4, marginHorizontal: 15 }}>
            <Text style={{ color: "#fff", fontWeight: "600" }}>{post.likes} likes</Text>
        </View>
    )
}

const Caption = ({ post }) => {
    return (
        <View style={{ marginHorizontal: 15 }}>
            <Text>
                <Text style={{ color: "#fff", fontWeight: "600" }}>{post.user}</Text>
                <Text style={{ color: "#fff", }}>{' '}{post.caption}</Text>
            </Text>
        </View>
    )
}

const CommentSection = ({ post }) => {
    return (
        <View style={{ marginTop: 5, marginHorizontal: 15 }}>
            {
                !!post.comments.length && (
                    <Text style={{ color: "grey" }}>
                        View {post.comments.length > 1 ? 'all ' : ''}{post.comments.length}
                        {post.comments.length > 1 ? ' comments' : ' comment'}</Text>
                )
            }
        </View>
    )
}

const CommentsData = ({ post }) => {
    return (
        <View style={{ marginHorizontal: 15 }}>
            {
                post.comments.map((comment, index) => (
                    <View key={index}>
                        <Text style={{ color: "#fff" }}>
                            <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{' '}{comment.comment}
                        </Text>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    postImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        margin: 6,
        borderWidth: 1.5,
        borderColor: "#fff"

    },
    icons: {
        width: 28,
        height: 28,
        marginLeft: 10,
        resizeMode: 'contain',
    },
})

export default Post 
