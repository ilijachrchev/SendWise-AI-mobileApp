import {Tabs} from 'expo-router'
import {Ionicons}   from "@expo/vector-icons";

export default function TabsLayout(){
    return(

        <Tabs screenOptions={{headerShown: false,
        tabBarActiveTintColor:'#652864',
        tabBarStyle: {
          backgroundColor:'#120A26',
            borderTopWidth: 0,
            elevation: 8,
        }



        }}>
            <Tabs.Screen name="index" options={{title: 'Welcome',
            tabBarIcon:({color,size,focused}) => (
              <Ionicons name={focused ? "sparkles" : "sparkles-outline"} size={size} color={color} />
            ),
            }} />
            <Tabs.Screen name="home" options={{title: 'Home',
            tabBarIcon:({color,size,focused}) =>(
              <Ionicons name={ focused ? "home" : "home-outline" } color={color} size={size}  />
            ),
            }} />
            <Tabs.Screen name="profile" options={{title: 'Profile',
            tabBarIcon:({color,size,focused}) =>(
              <Ionicons name={focused ? "person" : "person-outline"} color={color} size={size}/>
            )
            }}/>
            <Tabs.Screen name="addTask" options={{title: 'Add Task',
            tabBarIcon:({color,size,focused}) =>(
                <Ionicons name={focused ? "add-circle" : "add-circle-outline"} size={size} color={color} />
            ),
            }} />
        </Tabs>

    );
}