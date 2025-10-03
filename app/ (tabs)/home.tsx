import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SkillCard} from '../reusableComponents/skillCard'
export default function Home() {
    return (
        <SafeAreaView className="bg-[#060014]   flex-1 p-5">
            <SkillCard skill='Guitar' level='Intermediate' nextReminder="3h"></SkillCard>
        </SafeAreaView>

    );
}

