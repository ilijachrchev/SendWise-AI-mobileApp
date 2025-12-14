import React from 'react';
import { View, Text } from 'react-native';
import { Calendar, Clock } from 'lucide-react-native';

const AppointmentButtonCard = ({
                             name = 'Sarah Johnson',
                             type = 'Consultation',
                             date = 'Dec 12',
                             time = '2:00 PM',
                             status = 'approved', // 'pending', 'approved', 'rejected'
                             initials = 'SJ',
                             bgColor = 'bg-indigo-500'
                         }) => {
    const statusConfig = {
        pending: {
            text: 'Pending',
            bgColor: 'bg-amber-50',
            textColor: 'text-amber-600',
            borderColor: 'border-amber-200'
        },
        approved: {
            text: 'Approved',
            bgColor: 'bg-emerald-50',
            textColor: 'text-emerald-600',
            borderColor: 'border-emerald-200'
        },
        rejected: {
            text: 'Rejected',
            bgColor: 'bg-red-50',
            textColor: 'text-red-600',
            borderColor: 'border-red-200'
        }
    };

    const currentStatus = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;

    return (
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mx-4 my-2">
            <View className="flex-row items-start justify-between">
                <View className="flex-row items-start flex-1">
                    <View className={`${bgColor} w-12 h-12 rounded-full items-center justify-center mr-3`}>
                        <Text className="text-white font-semibold text-base">{initials}</Text>
                    </View>
                    <View className="flex-1">
                        <Text className="text-gray-900 font-semibold text-base">{name}</Text>
                        <Text className="text-gray-500 text-sm mt-0.5">{type}</Text>
                    </View>
                </View>
                <View className={`${currentStatus.bgColor} ${currentStatus.borderColor} border px-3 py-1.5 rounded-full`}>
                    <Text className={`${currentStatus.textColor} text-xs font-medium`}>
                        {currentStatus.text}
                    </Text>
                </View>
            </View>

            <View className="flex-row items-center mt-3 ml-0.5">
                <View className="flex-row items-center mr-5">
                    <Calendar size={14} color="#9CA3AF" strokeWidth={2} />
                    <Text className="text-gray-600 text-sm ml-1.5">{date}</Text>
                </View>
                <View className="flex-row items-center">
                    <Clock size={14} color="#9CA3AF" strokeWidth={2} />
                    <Text className="text-gray-600 text-sm ml-1.5">{time}</Text>
                </View>
            </View>
        </View>
    );
};

export default AppointmentButtonCard;