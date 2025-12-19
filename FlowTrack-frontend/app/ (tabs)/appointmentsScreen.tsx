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
            bgColor: 'bg-indigo-500',
            phone: '+1 (555) 123-4567',
            email: 'sarah.johnson@email.com',
            location: 'Video Call (Zoom)',
            notes: 'Client interested in enterprise pricing. Follow up on previous demo feedback.'
        },
        {
            id: '2',
            name: 'Mike Peters',
            type: 'Follow-up',
            date: 'Dec 12',
            time: '4:30 PM',
            status: 'approved',
            initials: 'MP',
            bgColor: 'bg-indigo-500',
            phone: '+1 (555) 234-5678',
            email: 'mike.peters@email.com',
            location: 'Office - Room 302',
            notes: 'Reviewing project progress and next steps for Q1 implementation.'
        },
        {
            id: '3',
            name: 'Emma Wilson',
            type: 'Demo',
            date: 'Dec 13',
            time: '10:00 AM',
            status: 'pending',
            initials: 'EW',
            bgColor: 'bg-indigo-500',
            phone: '+1 (555) 345-6789',
            email: 'emma.wilson@email.com',
            location: 'Video Call (Google Meet)',
            notes: 'Product demo for new features. Prepare presentation slides.'
        },
        {
            id: '4',
            name: 'David Connor',
            type: 'Review',
            date: 'Dec 13',
            time: '10:50 AM',
            status: 'pending',
            initials: 'DC',
            bgColor: 'bg-indigo-500',
            phone: '+1 (555) 456-7890',
            email: 'david.connor@email.com',
            location: 'Conference Room A',
            notes: 'Quarterly performance review and goal setting for next quarter.'
        },
        {
            id: '5',
            name: 'Max Payne',
            type: 'Demo',
            date: 'Dec 14',
            time: '12:00 PM',
            status: 'pending',
            initials: 'MP',
            bgColor: 'bg-indigo-500',
            phone: '+1 (555) 567-8901',
            email: 'max.payne@email.com',
            location: 'Video Call (Microsoft Teams)',
            notes: 'Initial product walkthrough for potential new client.'
        },
        {
            id: '6',
            name: 'David Chen',
            type: 'Consultation',
            date: 'Dec 13',
            time: '1:30 PM',
            status: 'rejected',
            initials: 'DC',
            bgColor: 'bg-indigo-500',
            phone: '+1 (555) 678-9012',
            email: 'david.chen@email.com',
            location: 'Office - Room 105',
            notes: 'Technical consultation regarding API integration issues.'
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
                        onPress={() => router.back()}
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

                    <TouchableOpacity  key={appointment.id}
                                       activeOpacity={0.7}
                                       onPress={() => router.push({
                                           pathname: './appointmentsDetailsScreen',
                                           params: appointment
                                       })}>

                        <AppointmentButtonCard
                            name={appointment.name}
                            type={appointment.type}
                            date={appointment.date}
                            time={appointment.time}
                            status={appointment.status}
                            initials={appointment.initials}
                            bgColor={appointment.bgColor}

                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default AppointmentsScreen;