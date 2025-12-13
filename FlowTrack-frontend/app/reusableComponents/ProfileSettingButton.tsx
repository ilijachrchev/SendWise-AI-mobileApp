import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { User, ChevronRight } from 'lucide-react-native';

type ProfileSettingButtonProps = {
    icon?: React.ReactNode;
    label: string;
    onPress?: () => void;
};

export function ProfileSettingButton({ icon, label, onPress }: ProfileSettingButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            className="flex-row items-center justify-between bg-white px-4 py-4 rounded-xl shadow-sm active:opacity-70 border border-gray-100"
        >
            <View className="flex-row items-center flex-1">

                <View className="w-8 h-8 rounded-lg bg-blue-50 items-center justify-center mr-3">
                    {icon || <User size={18} color="#3B82F6" strokeWidth={2} />}
                </View>


                <Text className="text-gray-700 text-base font-normal">{label}</Text>
            </View>


            <ChevronRight size={20} color="#D1D5DB" strokeWidth={2} />
        </Pressable>
    );
}