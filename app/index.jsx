import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
const app = () => {
    return (
        <>
            <View className="flex justify-center items-center flex-1 ">
                <Text className="font-pblack text-4xl ">Drop!</Text>
                <Link href="/home">go to</Link>
                <StatusBar style="auto" />
            </View>
        </>
    )
}

export default app
