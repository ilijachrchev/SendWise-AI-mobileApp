import React from 'react';
import { View, Text } from 'react-native';

const StatusSummary = ({
                           pendingCount = 3,
                           approvedCount = 2,
                           rejectedCount = 1
                       }) => {
    const stats = [
        {
            count: pendingCount,
            label: 'Pending',
            bgColor: 'bg-amber-100',
            textColor: 'text-amber-600',
            countColor: 'text-amber-700'
        },
        {
            count: approvedCount,
            label: 'Approved',
            bgColor: 'bg-emerald-100',
            textColor: 'text-emerald-600',
            countColor: 'text-emerald-700'
        },
        {
            count: rejectedCount,
            label: 'Rejected',
            bgColor: 'bg-red-100',
            textColor: 'text-red-600',
            countColor: 'text-red-700'
        }
    ];

    return (
        <View className="flex-row justify-between px-4 py-4 gap-3">
            {stats.map((stat, index) => (
                <View
                    key={index}
                    className={`${stat.bgColor} flex-1 rounded-2xl p-4 items-center justify-center`}
                >
                    <Text className={`${stat.countColor} text-2xl font-bold mb-1`}>
                        {stat.count}
                    </Text>
                    <Text className={`${stat.textColor} text-sm font-medium`}>
                        {stat.label}
                    </Text>
                </View>
            ))}
        </View>
    );
};

export default StatusSummary;