import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {ArrowLeft, Filter} from 'lucide-react-native';
import StatusSummary from '@/app/reusableComponents/StatusSummaryAppointments';
import AppointmentButtonCard from '@/app/reusableComponents/AppointmentButtonCard';
import {useRouter} from "expo-router";
const AppointmentsScreen = () => {
    const appointments = [
        {
            id: '1',
            name: 'Sarah Johnson',
            type: 'Consultation',
            date: 'Dec 12',
            time: '2:00 PM',
            status: 'pending',
            initials: 'SJ',
            bgColor: 'bg-indigo-500'
        },
        {
            id: '2',
            name: 'Mike Peters',
            type: 'Follow-up',
            date: 'Dec 12',
            time: '4:30 PM',
            status: 'approved',
            initials: 'MP',
            bgColor: 'bg-indigo-500'
        },
        {
            id: '3',
            name: 'Emma Wilson',
            type: 'Demo',
            date: 'Dec 13',
            time: '10:00 AM',
            status: 'pending',
            initials: 'EW',
            bgColor: 'bg-indigo-500'
        },
        {
            id: '4',
            name: 'David Connor',
            type: 'Review',
            date: 'Dec 13',
            time: '10:50 AM',
            status: 'pending',
            initials: 'EW',
            bgColor: 'bg-indigo-500'
        },
        {
            id: '5',
            name: 'Max Payne',
            type: 'Demo',
            date: 'Dec 14',
            time: '12:00 AM',
            status: 'pending',
            initials: 'EW',
            bgColor: 'bg-indigo-500'
        },
        {
            id: '6',
            name: 'David Chen',
            type: 'Consultation',
            date: 'Dec 13',
            time: '1:30 PM',
            status: 'rejected',
            initials: 'DC',
            bgColor: 'bg-indigo-500'
        }
    ];

    const pendingCount = appointments.filter(apt => apt.status === 'pending').length;
    const approvedCount = appointments.filter(apt => apt.status === 'approved').length;
    const rejectedCount = appointments.filter(apt => apt.status === 'rejected').length;
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="flex-row items-center justify-between px-4 py-4 bg-white">
                <View className="flex-row items-center gap-3">
                    <TouchableOpacity
                        className="w-10 h-10 rounded-full bg-blue-500 items-center justify-center"
                        onPress={() => router.push('/')}
                    >
                        <ArrowLeft size={20} color="#000" strokeWidth={2} />
                    </TouchableOpacity>

                </View>
                <Text className="text-gray-900 text-2xl font-bold">Appointments</Text>
                <TouchableOpacity className="p-2">
                    <Filter size={24} color="#6B7280" strokeWidth={2} />
                </TouchableOpacity>

            </View>

            <StatusSummary
                pendingCount={pendingCount}
                approvedCount={approvedCount}
                rejectedCount={rejectedCount}
            />

            {/* Appointments List */}
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                {appointments.map((appointment) => (
                    <AppointmentButtonCard
                        key={appointment.id}
                        name={appointment.name}
                        type={appointment.type}
                        date={appointment.date}
                        time={appointment.time}
                        status={appointment.status}
                        initials={appointment.initials}
                        bgColor={appointment.bgColor}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default AppointmentsScreen;