import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Settings, User, Mail, Shield, Bell, Moon, LogOut } from 'lucide-react-native';
import { ProfileSettingButton } from '@/app/reusableComponents/ProfileSettingButton';
import {SafeAreaView}  from "react-native-safe-area-context";

const ProfileScreen = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            {/* Header */}
            <View className="flex-row items-center justify-between px-4 py-4 bg-gray-50">
                <Text className="text-gray-900 text-2xl font-bold">Profile</Text>
                <TouchableOpacity className="p-2">
                    <Settings size={24} color="#6B7280" strokeWidth={2} />
                </TouchableOpacity>
            </View>

            <ScrollView
                className="flex-1 px-4"
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                {/* Profile Card */}
                <View className="bg-blue-300 rounded-2xl p-6 mb-6">
                    <View className="flex-row items-center">
                        {/* Avatar */}
                        <View className="w-16 h-16 rounded-full bg-white/30 items-center justify-center border-2 border-white/50 mr-4">
                            <Text className="text-white font-bold text-xl">JD</Text>
                        </View>

                        {/* User Info */}
                        <View className="flex-1 ">
                            <Text className="text-white text-xl font-bold mb-1">John Doe</Text>
                            <Text className="text-white/90 text-sm mb-2">john.doe@company.com</Text>
                            <View className="bg-white/20 self-start px-3 py-1 rounded-full">
                                <Text className="text-white text-xs font-medium">Pro Plan</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Settings Section */}
                <View className="gap-3 mb-6">
                    <ProfileSettingButton
                        icon={<User size={18} color="#3B82F6" strokeWidth={2} />}
                        label="Edit Profile"
                        onPress={() => console.log('Edit Profile')}
                    />

                    <ProfileSettingButton
                        icon={<Mail size={18} color="#8B5CF6" strokeWidth={2} />}
                        label="Email Settings"
                        onPress={() => console.log('Email Settings')}
                    />

                    <ProfileSettingButton
                        icon={<Shield size={18} color="#10B981" strokeWidth={2} />}
                        label="Security"
                        onPress={() => console.log('Security')}
                    />
                </View>

                {/* Preferences Section */}
                <Text className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-3 px-1">
                    Preferences
                </Text>

                <View className="gap-3 mb-6">
                    {/* Notifications Toggle */}
                    <View className="flex-row items-center justify-between bg-white px-4 py-4 rounded-xl shadow-sm border border-gray-100">
                        <View className="flex-row items-center flex-1">
                            <View className="w-8 h-8 rounded-lg bg-amber-50 items-center justify-center mr-3">
                                <Bell size={18} color="#F59E0B" strokeWidth={2} />
                            </View>
                            <Text className="text-gray-700 text-base font-normal">Notifications</Text>
                        </View>
                        <Switch
                            value={notificationsEnabled}
                            onValueChange={setNotificationsEnabled}
                            trackColor={{ false: '#E5E7EB', true: '#10B981' }}
                            thumbColor="#FFFFFF"
                            ios_backgroundColor="#E5E7EB"
                        />
                    </View>

                    {/* Dark Mode Toggle */}
                    <View className="flex-row items-center justify-between bg-white px-4 py-4 rounded-xl shadow-sm border border-gray-100">
                        <View className="flex-row items-center flex-1">
                            <View className="w-8 h-8 rounded-lg bg-gray-100 items-center justify-center mr-3">
                                <Moon size={18} color="#6B7280" strokeWidth={2} />
                            </View>
                            <Text className="text-gray-700 text-base font-normal">Dark Mode</Text>
                        </View>
                        <Switch
                            value={darkModeEnabled}
                            onValueChange={setDarkModeEnabled}
                            trackColor={{ false: '#E5E7EB', true: '#10B981' }}
                            thumbColor="#FFFFFF"
                            ios_backgroundColor="#E5E7EB"
                        />
                    </View>
                </View>

                {/* Log Out Button */}
                <TouchableOpacity
                    className="bg-red-50 rounded-xl py-4 items-center justify-center flex-row border border-red-100"
                    onPress={() => console.log('Log Out')}
                >
                    <LogOut size={18} color="#EF4444" strokeWidth={2} />
                    <Text className="text-red-600 font-semibold text-base ml-2">Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;