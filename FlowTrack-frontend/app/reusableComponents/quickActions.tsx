import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MessageSquare, Calendar, Users, TrendingUp } from 'lucide-react-native';

interface QuickActionItem {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ComponentType<any>;
    iconColor: string;
    iconBgClass: string;
    onPress: () => void;
}

interface QuickActionsProps {
    onMessagePress?: () => void;
    onAppointmentPress?: () => void;
    onContactPress?: () => void;
    onCampaignPress?: () => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({
                                                       onMessagePress,
                                                       onAppointmentPress,
                                                       onContactPress,
                                                       onCampaignPress,
                                                   }) => {
    const quickActions: QuickActionItem[] = [
        {
            id: 'messages',
            title: 'Messages',
            subtitle: '12 unread',
            icon: MessageSquare,
            iconColor: '#3B82F6',
            iconBgClass: 'bg-blue-100',
            onPress: onMessagePress || (() => console.log('Messages pressed')),
        },
        {
            id: 'appointments',
            title: 'Appointments',
            subtitle: '3 pending',
            icon: Calendar,
            iconColor: '#8B5CF6',
            iconBgClass: 'bg-purple-100',
            onPress: onAppointmentPress || (() => console.log('Appointments pressed')),
        },
        {
            id: 'contacts',
            title: 'Contacts',
            subtitle: '248 total',
            icon: Users,
            iconColor: '#10B981',
            iconBgClass: 'bg-emerald-100',
            onPress: onContactPress || (() => console.log('Contacts pressed')),
        },
        {
            id: 'campaigns',
            title: 'Campaigns',
            subtitle: '5 active',
            icon: TrendingUp,
            iconColor: '#F59E0B',
            iconBgClass: 'bg-amber-100',
            onPress: onCampaignPress || (() => console.log('Campaigns pressed')),
        },
    ];

    return (
        <View className="w-full px-4">
            <Text className="text-base font-bold text-black mb-3">
                Quick Actions
            </Text>

            <View>
                <View className="flex-row justify-between mb-3">
                    {quickActions.slice(0, 2).map((action) => {
                        const IconComponent = action.icon;

                        return (
                            <Pressable
                                key={action.id}
                                className="w-[48%] bg-gray-50 rounded-2xl p-4 items-start active:opacity-70"
                                onPress={action.onPress}
                            >
                                <View className={`w-10 h-10 rounded-xl items-center justify-center mb-3 ${action.iconBgClass}`}>
                                    <IconComponent
                                        size={20}
                                        color={action.iconColor}
                                        strokeWidth={2}
                                    />
                                </View>

                                <Text className="text-sm font-semibold text-black mb-0.5">
                                    {action.title}
                                </Text>
                                <Text className="text-xs text-gray-500">
                                    {action.subtitle}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>

                <View className="flex-row justify-between">
                    {quickActions.slice(2, 4).map((action) => {
                        const IconComponent = action.icon;

                        return (
                            <Pressable
                                key={action.id}
                                className="w-[48%] bg-gray-50 rounded-2xl p-4 items-start active:opacity-70"
                                onPress={action.onPress}
                            >
                                <View className={`w-10 h-10 rounded-xl items-center justify-center mb-3 ${action.iconBgClass}`}>
                                    <IconComponent
                                        size={20}
                                        color={action.iconColor}
                                        strokeWidth={2}
                                    />
                                </View>

                                <Text className="text-sm font-semibold text-black mb-0.5">
                                    {action.title}
                                </Text>
                                <Text className="text-xs text-gray-500">
                                    {action.subtitle}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};

export default QuickActions;