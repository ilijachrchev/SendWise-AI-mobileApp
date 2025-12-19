import React from 'react';
import { View, Text, ScrollView,  TouchableOpacity } from 'react-native';
import { ArrowLeft, Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useRouter} from "expo-router";
const AppointmentDetailScreen = ({ navigation }: any) => {

    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            {/* Header */}
            <View className="px-4 pt-3 pb-3 bg-white border-b border-gray-200">
                <View className="flex-row items-center gap-3">
                    <TouchableOpacity
                        className="w-10 h-10 rounded-full bg-blue-500 items-center justify-center"
                        onPress={() => router.push('/appointmentsScreen')}
                    >
                        <ArrowLeft size={20} color="#000" strokeWidth={2} />
                    </TouchableOpacity>
                    <Text className="text-lg font-semibold text-gray-900">Appointment Details</Text>
                </View>
            </View>

            {/* Content */}
            <ScrollView
                className="flex-1 px-4 py-4"
                showsVerticalScrollIndicator={true}
            >
                {/* Contact Card */}
                <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
                    <View className="flex-row items-center gap-3 mb-4">
                        <View className="w-14 h-14 rounded-full bg-indigo-500 items-center justify-center">
                            <Text className="text-white font-bold text-lg">SJ</Text>
                        </View>
                        <View>
                            <Text className="text-lg font-bold text-gray-900">Sarah Johnson</Text>
                            <Text className="text-sm text-gray-500">Product Consultation</Text>
                        </View>
                    </View>

                    <View className="gap-3">
                        {/* Date */}
                        <View className="flex-row items-center gap-3">
                            <View className="w-8 h-8 rounded-lg bg-blue-50 items-center justify-center">
                                <Calendar size={16} color="#3B82F6" strokeWidth={2} />
                            </View>
                            <View>
                                <Text className="text-gray-500 text-xs">Date</Text>
                                <Text className="text-gray-900 font-medium">December 12, 2024</Text>
                            </View>
                        </View>

                        {/* Time */}
                        <View className="flex-row items-center gap-3">
                            <View className="w-8 h-8 rounded-lg bg-purple-50 items-center justify-center">
                                <Clock size={16} color="#A855F7" strokeWidth={2} />
                            </View>
                            <View>
                                <Text className="text-gray-500 text-xs">Time</Text>
                                <Text className="text-gray-900 font-medium">2:00 PM - 3:00 PM</Text>
                            </View>
                        </View>

                        {/* Location */}
                        <View className="flex-row items-center gap-3">
                            <View className="w-8 h-8 rounded-lg bg-emerald-50 items-center justify-center">
                                <MapPin size={16} color="#10B981" strokeWidth={2} />
                            </View>
                            <View>
                                <Text className="text-gray-500 text-xs">Location</Text>
                                <Text className="text-gray-900 font-medium">Video Call (Zoom)</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Contact Info */}
                <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
                    <Text className="text-sm font-semibold text-gray-900 mb-3">Contact Information</Text>
                    <View className="gap-2">
                        <View className="flex-row items-center gap-2">
                            <Phone size={16} color="#9CA3AF" strokeWidth={2} />
                            <Text className="text-gray-900 text-sm">+1 (555) 123-4567</Text>
                        </View>
                        <View className="flex-row items-center gap-2">
                            <Mail size={16} color="#9CA3AF" strokeWidth={2} />
                            <Text className="text-gray-900 text-sm">sarah.j@email.com</Text>
                        </View>
                    </View>
                </View>

                {/* Notes */}
                <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
                    <Text className="text-sm font-semibold text-gray-900 mb-2">Notes</Text>
                    <Text className="text-sm text-gray-500 leading-5">
                        Client interested in enterprise pricing. Follow up on previous demo feedback.
                    </Text>
                </View>
            </ScrollView>

            {/* Action Buttons */}
            <View className="px-4 pb-6 pt-2 bg-white flex-row gap-3">
                <TouchableOpacity className="flex-1 py-3.5 rounded-xl bg-red-50 items-center justify-center">
                    <Text className="text-red-600 font-semibold text-sm">Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 py-3.5 rounded-xl bg-indigo-500 items-center justify-center shadow-sm">
                    <Text className="text-white font-semibold text-sm">Approve</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AppointmentDetailScreen;