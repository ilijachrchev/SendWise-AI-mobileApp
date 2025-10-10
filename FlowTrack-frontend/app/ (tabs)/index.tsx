// app/index.tsx
import { Text, View } from "react-native";

export default function Welcome() {


    return (
        <View className="flex-1 justify-center items-center bg-[#060014]">
            <Text className="text-cyan-400 text-[48px] font-tekturbold">Welcome!</Text>
            <Text className="text-[#ffc000] font-tekturbold">Use the tabs below to navigate</Text>
        </View>
    );
}