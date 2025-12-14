import React, {Component, useMemo} from 'react';
import {FlatList, Text, View, useWindowDimensions ,Platform} from 'react-native';
import {AddSkillCard} from "../reusableComponents/addSkillCard";
import {ProfileSettingButton} from "@/app/reusableComponents/ProfileSettingButton";
import {User} from "lucide-react-native";
import AppointmentButtonCard from "@/app/reusableComponents/AppointmentButtonCard";
import StatusSummaryAppointments from "@/app/reusableComponents/StatusSummaryAppointments";



const DATA = ["Instrument","Language","Math","Sport"]


export default function AddTask() {

    const {width } = useWindowDimensions();

    const numColumns = useMemo(()=>{

        if(width >= 768) return 4;
        else return 2;

    },[width])

    const gap = 12;
    const padX = 16

    const cardWidth = useMemo(()=>
        (width - padX*2 - gap*(numColumns-1)) / numColumns,
        [width,numColumns]
    );

        return (
            <View className='flex-1 bg-[#060014] pt-20'>
                <View style={{paddingHorizontal: gap}} >
                <FlatList data={DATA} key={numColumns}  keyExtractor={(item) => item} numColumns={numColumns} columnWrapperStyle={{gap,justifyContent:"flex-start"}} ItemSeparatorComponent={()=><View style={{height:gap}}/>    } renderItem={({item})=> (

                    <View style={{width:cardWidth, aspectRatio:1}}>
                        <AddSkillCard title={item}></AddSkillCard>
                    </View>

                )} scrollEnabled={false} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical:gap}} />
                </View>
                <ProfileSettingButton icon = { <User size = { 18 } color = " #3B82F6 " strokeWidth = { 2 } /> } label = " Edit Profile " onPress = { ( ) => console . log ( 'Edit Profile pressed' ) } />
                <AppointmentButtonCard/>
                <StatusSummaryAppointments></StatusSummaryAppointments>
            </View>
        );
    }

