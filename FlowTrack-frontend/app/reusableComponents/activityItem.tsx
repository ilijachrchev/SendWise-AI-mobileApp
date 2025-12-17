import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ActivityItemProps {
    userName: string;
    action: string;
    time: string;
    onPress?: () => void;
    gradientColors?: [string, string];
    avatarBgColor?: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({userName, action, time, onPress, gradientColors = ['#667eea', '#764ba2'], avatarBgColor,
                                                   }) => {
    const getInitials = (name: string): string => {
        return name.split(" ").map(n => n[0]).join("").toUpperCase();
    };

    const content = (
        <View className="flex-row items-center bg-gray-50 rounded-2xl p-3 border border-gray-100/50">
            {avatarBgColor ? (
                <View
                    className="w-11 h-11 rounded-full items-center justify-center shadow-sm"
                    style={{ backgroundColor: avatarBgColor }}
                >
                    <Text className="text-white text-xs font-semibold">
                        {getInitials(userName)}
                    </Text>
                </View>
            ) : (
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="w-11 h-11 rounded-full items-center justify-center shadow-sm"
                >
                    <Text className="text-white text-xs font-semibold">
                        {getInitials(userName)}
                    </Text>
                </LinearGradient>
            )}

            <View className="flex-1 ml-3">
                <Text className="text-black font-semibold text-sm">
                    {userName}
                </Text>
                <Text className="text-gray-500 text-xs mt-1">
                    {action}
                </Text>
            </View>

            <View className="bg-white rounded-full px-2.5 py-1 border border-gray-200/70">
                <Text className="text-gray-500 text-[10px] font-medium">
                    {time}
                </Text>
            </View>
        </View>
    );

    if (onPress) {
        return (
            <Pressable
                className="mb-2.5 active:opacity-80 active:scale-[0.98]"
                onPress={onPress}
            >
                {content}
            </Pressable>
        );
    }

    return (
        <View className="mb-2.5">
            {content}
        </View>
    );
};

export default ActivityItem;