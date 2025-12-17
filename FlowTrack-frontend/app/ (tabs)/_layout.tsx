import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#F9FAFB' },
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="home" />
            <Stack.Screen name="profile" />
            <Stack.Screen name="addTask" />
            <Stack.Screen name="messages" />
            <Stack.Screen name="appointments" />
            <Stack.Screen name="contacts" />
            <Stack.Screen name="campaigns" />
        </Stack>
    );
}