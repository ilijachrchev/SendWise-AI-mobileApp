import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import ProfileCard from '../../maincomponents/ProfileCard'

export default function Profile() {
    return (
        <View className='flex-1 bg-blue-300 justify-center items-center '>

           <ProfileCard />

        </View>
    );
}

