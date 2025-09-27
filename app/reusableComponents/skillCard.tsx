import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {styled} from 'nativewind'

const Gradient = styled(LinearGradient);

type Props = {

    skill: string,
    level: string | number;
    nextReminder: string,
    onSkip?: () => void,
    onDone?: () => void
}

export function SkillCard({skill, level, nextReminder, onSkip, onDone}: Props) {
    return (

        <Gradient
            colors={['#CC2B5E', '#753A88']}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="rounded-2xl p-5 shadow-lg"
        >
            <Text className="text-white text-lg font-bold text-center">{skill}</Text>
            <Text className="text-white/90 text-sm  text-center mt-1">Level:{level}</Text>

            <View className='h-3'></View>

            <Text className="text-white/80 text-sm text-center">Next reminder in:</Text>
            <Text className="text-white text-base font-semibold text-center mt-1">{nextReminder}</Text>

            <View className=" flex-row justify-center gap-3 mt-4">
                <Pressable onPress={onSkip} className="px-4 py-2 bg-red-500 rounded-2xl active:opacity-80">
                    <Text className='text-white font-semibold text-xs'>Skip</Text>
                </Pressable>
                <Pressable onPress={onDone} className="px-4 py-2 bg-green-500 rounded-2xl active:opacity-80">
                    <Text className="text-white font-semibold text-xs">Done</Text>
                </Pressable>
            </View>
        </Gradient>

    );


}