import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SkillCard } from '../reusableComponents/skillCard';
import QuickActions from '@/app/reusableComponents/quickActions';

export default function Home() {
    return (
        <SafeAreaView className="bg-[#060014] flex-1">
            <View className="p-5">
                <SkillCard
                    skill='Guitar'
                    level='Intermediate'
                    nextReminder="3h"
                />
            </View>

            <View className="mt-5">
                <QuickActions />
            </View>
        </SafeAreaView>
    );
}