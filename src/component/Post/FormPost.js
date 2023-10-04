import { View, Text, Image, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

const uploadPostRules = Yup.object().shape({
    imageUrl: Yup.string().url().required('A Url is required'),
    caption: Yup.string().max(1000, 'Reached the limit'),
});

const dummyImage =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuElEQVR4nO2bT4jMURzAvyuSUUJSXLg7yDpwcXHT2hVHSnEgxO7sH0qpd9wcnIhJSxEpKcUWF1LOTpRY5cYJJ2Hx0TPfsc/ssDPz+/1m33vzPvVq5jXN/L6f9+/3+743IolEIpFI/AFYCuwChoFTkZQyMACU5F8APcAY8Il4+QiM2Fjrg18A3KR7uPGXBKot7zIFVIDxSEpFY3IZdse82+0vA4slMmxMwETdcCiJTg41XscYfJ2EN068O23lqFNxUSJHh8PMMACMU2EkcmbFSxJA2z0AWAvsA05qsa/XSOw9ANgMPAR+Nlhjbd0DoFdiFAAcAr4xN9PAoMQkADhC6xyWGAQAG5ts+Xq+AhskAgH3aJ87ErIAYCXwPYMAOx8sl4AF7CE7AxKwgMEcBByTgAWcyEHAcenyIbBbAhawKuMk+ANYLYEvg5MZBEyKJ2QR0KvLWatM+/RckPVWuNyGgCGJ7GForMn5wH5mVDwDOJ9JgAXYCjz+T/CPgC2SA8A6oF83OK7q7z4H3uvk6mLff9C83zPgPnBBG22vbvZ8ziygBrAeOKjfYcsBe8GSAWCZXuwV4C3FYrxIienGTB9wq66FiFoAsAjYD7zoYNB+CAB2AK/mKfD5E0A1kXoXPzAdFQBsB97hD6ZjAoAzDZat+AVQPXdwDj8xhQrQ5e0a/mKKFnAWvzGFCQCO4j+mEAG6dWb3A7pPANUTJy8JA1OEgEuEg8lVALApY+4weAFPCAuTmwB74IjwMHkKeEq3CgC2ESYmLwG3CVjAiFNRaSP4FcAXwqQsmnGtMdXqSVF7BIZw6bMBlPTcbI2JZiUACzX9HCI2fb6kFog7DNC8emWOPyGc1qNyoTKzY6VJC3uGvlu43uhPEz26c+IOh9iw3X5oVvAuOif060boeCSlrHeq1TGfSCQSCfnNLxEi9tuGK6F0AAAAAElFTkSuQmCC';

const Divider = () => {
    return <View style={{ width: '100%', height: 1, backgroundColor: 'grey' }}></View>;
};

const FormPost = () => {
    const [iconUrl, setIconUrl] = useState(dummyImage);

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostRules}
            validateOnMount={true}>
            {({ handleBlur, handleSubmit, values, handleChange, errors, isValid }) => (
                <>
                    <View
                        style={{
                            marginHorizontal: 20,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            marginTop: 10,
                            marginBottom: 20,
                        }}>
                        <Image source={{ uri: iconUrl ? iconUrl : dummyImage }} style={{ height: 100, width: 100 }}></Image>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <TextInput
                                style={{ fontSize: 18, color: "#fff" }}
                                placeholder="Enter post caption"
                                placeholderTextColor="#fff"
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            ></TextInput>
                        </View>
                    </View>
                    <Divider />
                    <TextInput
                        onChange={(e) => { setIconUrl(e.nativeEvent.text) }}
                        style={{ color: '#fff' }}
                        placeholder="Enter post Image Url"
                        placeholderTextColor="#fff"
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    ></TextInput>
                    {errors.imageUrl && (
                        <Text style={{ color: "red", fontSize: 10, marginLeft: 10 }}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <View style={{ alignSelf: "center" }}>
                        <Button onPress={handleSubmit} title='Submit' disabled={!isValid}></Button>
                    </View>
                </>
            )}
        </Formik>
    );
};

export default FormPost;
