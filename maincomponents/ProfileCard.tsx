// ProfileCard.tsx
import { View, Text, Pressable, Image, TextInput } from "react-native";
import { useState } from "react";
import profilePic from "../assets/images/icon.png";

const ProfileCard = () => {
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState("25");
    const [email, setEmail] = useState("john@example.com");

    const handleUpdate = () => {
        console.log("Updated Info:", { name, age, email, });
    };

    return (
        <View className="w-80 bg-white rounded-2xl shadow-lg p-6">


                <Image
                    source={profilePic}
                    className="w-24 h-24 rounded-full self-center"
                />

            <Text className="text-blue-500 text-2xl font-bold text-center mt-4">
                Profile Card
            </Text>


            <Text className="text-gray-600 mt-4">Name</Text>
            <TextInput
                className="border border-gray-300 rounded p-2 mt-1"
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />


            <Text className="text-gray-600 mt-4">Age</Text>
            <TextInput
                className="border border-gray-300 rounded p-2 mt-1"
                value={age}
                onChangeText={setAge}
                placeholder="Enter your age"
                keyboardType="numeric"
            />

            <Text className="text-gray-600 mt-4">Email</Text>
            <TextInput
                className="border border-gray-300 rounded p-2 mt-1"
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <Pressable
                className="bg-blue-500 rounded mt-6 py-2 self-center px-6  "
                onPress={handleUpdate}
            >
                <Text className="text-white font-semibold">Update</Text>
            </Pressable>
        </View>
    );
};

export default ProfileCard;
