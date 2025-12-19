import { LinearGradient } from 'expo-linear-gradient';
import { TrendingUp } from 'lucide-react-native';
import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import QuickActions from "@/app/reusableComponents/quickActions";
import ActivityItem from '@/app/reusableComponents/activityItem';
interface Activity {
    id: string;
    userName: string;
    action: string;
    time: string;
}

export default function HomeScreen() {
    const router = useRouter();

    const activities: Activity[] = [
        {
            id: '1',
            userName: "Sarah Johnson",
            action: "replied to chat",
            time: "2m ago"
        },
        {
            id: '2',
            userName: "Mike Peters",
            action: "booked appointment",
            time: "15m ago"
        },
        {
            id: '3',
            userName: "Emma Wilson",
            action: "opened email",
            time: "1h ago"
        },
    ];

    return (
        <View className="flex-1 bg-white">
            <LinearGradient
                colors={['#667eea', '#764ba2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="px-4 pt-12 pb-6 rounded-b-[32px]"
            >
                <View className="flex-row items-start justify-between mb-4">
                    <View>
                        <Text className="text-white/70 text-xs">Good morning</Text>
                        <Text className="text-white font-bold text-2xl mt-1">Dashboard</Text>
                    </View>
                    <View className="w-10 h-10 rounded-full bg-white/20 items-center justify-center">
                        <Text className="text-white text-sm font-semibold">JD</Text>
                    </View>
                </View>

                {/* Quick Stats */}
                <View className="bg-white/20 backdrop-blur rounded-2xl p-4">
                    <View className="flex-row items-center gap-2">
                        <TrendingUp color="#FFFFFF" size={16} />
                        <Text className="text-white text-sm font-medium">+24% this week</Text>
                    </View>
                    <Text className="text-white/80 text-xs mt-1">Overall engagement</Text>
                </View>
            </LinearGradient>

            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
            >
                {/* Quick Actions Component */}
                <View className="pt-4">
                    <QuickActions
                        onMessagePress={() => router.push('/messages')}
                        onAppointmentPress={() => router.push('/appointmentsScreen')}
                        onContactPress={() => router.push('/appointmentsDetailsScreen')}
                        onCampaignPress={() => router.push('/campaigns')}
                    />
                </View>

                {/* Recent Activity */}
                <View className="px-4 pt-6 pb-6">
                    <Text className="text-black font-bold text-base mb-3">Recent Activity</Text>

                    <View>
                        {activities.map((activity) => (
                            <ActivityItem
                                key={activity.id}
                                userName={activity.userName}
                                action={activity.action}
                                time={activity.time}
                                onPress={() => console.log(`Pressed ${activity.userName}`)}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}