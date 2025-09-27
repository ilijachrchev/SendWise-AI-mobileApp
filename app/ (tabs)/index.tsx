// app/index.tsx
import { Text, View } from "react-native";

export default function Welcome() {


    return (
        <View className="flex-1 justify-center items-center bg-blue-300">
            <Text className="text-white text-xl">Welcome!</Text>
            <Text className="text-white">Use the tabs below to navigate</Text>
        </View>
    );
}