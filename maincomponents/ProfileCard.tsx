// ProfileCard.tsx
import { View, Text, Pressable, Image, TextInput } from "react-native";
import { useState } from "react";
import profilePic from "../assets/images/icon.png";
import {LinearGradient} from "expo-linear-gradient";
import {styled} from "nativewind"
const Gradient = styled(LinearGradient)


const ProfileCard = () => {
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState("25");
    const [email, setEmail] = useState("john@example.com");
    const [gender, setGender] = useState("unknown");
    const handleUpdate = () => {
        console.log("Updated Info:", { name, age, email, });
    };

    return (
        <View

            className="w-80 border-[#4a0f0a] border-4 rounded-2xl bg-[#1a1830] shadow-lg p-6">

                <Image
                    source={profilePic}
                    className="w-24 h-24 rounded-full self-center"
                />

            <Text className="text-[#ffc000] font-tekturbold text-2xl font-bold text-center mt-4">
                Profile Card
            </Text>


            <Text className="text-white font-tektur  mt-4">Name</Text>
            <TextInput
                className="border font-tektur border-gray-300 bg-[#797979] opacity-75 rounded p-2 mt-1"
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />

            <Text className="text-white font-tektur mt-4">Age</Text>
            <TextInput
                className="border font-tektur border-gray-300 bg-[#797979] opacity-75 rounded p-2 mt-1"
                value={gender}
                onChangeText={setGender}
                placeholder="Enter your gender"
                keyboardType="numeric"
            />

            <Text className="text-white font-tektur mt-4">Age</Text>
            <TextInput
                className="border font-tektur border-gray-300 bg-[#797979] opacity-75 rounded p-2 mt-1"
                value={age}
                onChangeText={setAge}
                placeholder="Enter your age"
                keyboardType="numeric"
            />

            <Text className="text-white font-tektur mt-4">Email</Text>
            <TextInput
                className="border font-tektur border-gray-300 bg-[#797979] opacity-75 rounded p-2 mt-1"
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <Pressable
                className="bg-cyan-400 rounded mt-6 py-2 self-center px-6  "
                onPress={handleUpdate}
            >
                <Text className="tex-black font-tekturbold font-semibold">Update</Text>
            </Pressable>
        </View>
    );
};
export default ProfileCard;
