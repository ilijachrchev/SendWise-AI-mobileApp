// app/index.tsx
import { Text, View } from "react-native";

export default function Index() {


    return (
        <View className="flex-1 justify-center items-center bg-red-500">
            <Text className="text-white text-2xl font-bold">
                Tailwind should be white on red
            </Text>
        </View>
    );
}