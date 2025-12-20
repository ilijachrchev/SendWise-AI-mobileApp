import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export interface ConversationCardProps {
    name: string;
    message: string;
    time: string;
    unread: number;
    avatar: string;
    onPress?: () => void;
}

const ConversationCard = ({
                              name,
                              message,
                              time,
                              unread,
                              avatar,
                              onPress,
                          }: ConversationCardProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex-row items-center gap-4 p-4 mb-3 rounded-2xl bg-white active:opacity-70"
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 3,
                elevation: 2,
            }}
        >
            <View className="relative">
                <View className="w-14 h-14 rounded-full bg-blue-500 items-center justify-center">
                    <Text className="text-white font-semibold text-base">{avatar}</Text>
                </View>
                {unread > 0 && (
                    <View className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full items-center justify-center">
                        <Text className="text-white text-[10px] font-bold">{unread}</Text>
                    </View>
                )}
            </View>
            <View className="flex-1">
                <View className="flex-row items-center justify-between mb-1.5">
                    <Text className={`text-base ${ unread > 0 ? 'font-bold text-gray-900' : 'font-semibold text-gray-900'}`} numberOfLines={1}>
                        {name}
                    </Text>
                    <Text className="text-sm text-gray-500 ml-2">{time}</Text>
                </View>
                <Text
                    className={`text-sm ${
                        unread > 0 ? 'text-gray-700 font-medium' : 'text-gray-500'
                    }`}
                    numberOfLines={1}
                >
                    {message}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ConversationCard;