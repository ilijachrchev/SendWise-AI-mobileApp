import React from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';
import ConversationCard from '@/app/reusableComponents/conversationCard';
interface Conversation {
    name: string;
    message: string;
    time: string;
    unread: number;
    avatar: string;
}

const conversations: Conversation[] = [
    {
        name: 'Sarah Johnson',
        message: "That sounds great! Let me kn...",
        time: '2m',
        unread: 3,
        avatar: 'SJ',
    },
    {
        name: 'Mike Peters',
        message: "I'll send the documents tomor...",
        time: '15m',
        unread: 0,
        avatar: 'MP',
    },
    {
        name: 'Mike Peters',
        message: "I'll send the documents tomor...",
        time: '15m',
        unread: 0,
        avatar: 'MP',
    },
    {
        name: 'Mike Peters',
        message: "I'll send the documents tomor...",
        time: '15m',
        unread: 0,
        avatar: 'MP',
    },
    {
        name: 'Mike Peters',
        message: "I'll send the documents tomor...",
        time: '15m',
        unread: 0,
        avatar: 'MP',
    },
    {
        name: 'Emma Wilson',
        message: 'Thanks for your help!',
        time: '1h',
        unread: 1,
        avatar: 'EW',
    },
    {
        name: 'David Chen',
        message: 'Can we reschedule?',
        time: '3h',
        unread: 0,
        avatar: 'DC',
    },
    {
        name: 'Lisa Anderson',
        message: 'Perfect, see you then!',
        time: '5h',
        unread: 0,
        avatar: 'LA',
    },
    {
        name: 'James Brown',
        message: 'I have a question about...',
        time: '1d',
        unread: 2,
        avatar: 'JB',
    },
];

const ConversationsListScreen = () => {
    const handleConversationPress = (name: string) => {
        console.log('Pressed conversation:', name);
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="flex-1">
                <View className="px-5 pt-4 pb-4 bg-white">
                    <Text className="text-2xl font-bold text-gray-900 mb-4">Messages</Text>

                    <View className="relative">
                        <View className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                            <Search size={18} color="#9CA3AF" />
                        </View>
                        <TextInput
                            placeholder="Search conversations..."
                            placeholderTextColor="#9CA3AF"
                            className="w-full bg-gray-100 rounded-2xl py-3 pl-12 pr-4 text-base text-gray-900"
                        />
                    </View>
                </View>
                <ScrollView className="flex-1 px-5 pt-3" showsVerticalScrollIndicator={true}>
                    <View className="pb-4">
                        {conversations.map((conv, index) => (
                            <ConversationCard
                                key={index}
                                {...conv}
                                onPress={() => handleConversationPress(conv.name)}
                            />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default ConversationsListScreen;