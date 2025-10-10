import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {styled} from 'nativewind'
import {useFonts, Tektur_400Regular,Tektur_700Bold} from "@expo-google-fonts/tektur";



const Gradient = styled(LinearGradient);

type Props = {

    skill: string,
    level: string | number;
    nextReminder: string,
    onSkip?: () => void,
    onDone?: () => void
}

export function SkillCard({skill, level, nextReminder, onSkip, onDone}: Props) {
    const [fontsLoaded] = useFonts({
       Tektur_400Regular,
       Tektur_700Bold,
    });
    if (!fontsLoaded) return null; // or keep splash until ready


    return (

        <View

            className=" p-5 bg-[#060014] border-[#fb2af4] border-2 shadow-lg"
        >
            <Text className="text-cyan-400 font-tekturbold text-2xl font-bold text-center">{skill}</Text>
            <Text className="text-[#ffc000]  text-2xl font-tekturbold text-center mt-1">Level: {level}</Text>

            <View className='h-3'></View>

            <Text className="text-cyan-400 font-tektur text-xl text-center">Next reminder in:</Text>
            <Text className="text-[#fb2af4]  text-xl font-tektur text-center mt-1">{nextReminder}</Text>

            <View className=" flex-row justify-center gap-3 mt-2">
                <Pressable onPress={onSkip} className="px-4 py-2 bg-rose-600 rounded-2xl active:opacity-80">
                    <Text className='text-white font-tekturbold text-xs'>Skip</Text>
                </Pressable>
                <Pressable onPress={onDone} className="px-4 py-2 bg-lime-400 rounded-2xl active:opacity-80">
                    <Text className="text-white font-tekturbold text-xs">Done</Text>
                </Pressable>
            </View>
        </View>

    );


}