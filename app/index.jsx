import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";
const app = () => {
    const { isLoading, isLoggedin } = useGlobalContext()
    if (!isLoading && isLoggedin) return <Redirect href="/home" />
    return (
        <>
            <SafeAreaView className="bg-primary h-full">
                <ScrollView contentContainerStyle={{ height: '100%' }}>
                    <View className='w-full min-h-screen items-center justify-center px-4'>
                        <Image
                            src="https://img.icons8.com/fluency/48/drop-shipping.png" alt="drop-shipping"
                            className="w-12 h-12 rounded-full"
                        />
                        <Text className="text-white text-4xl font-pblack">Drop
                            <Text className="text-secondary">!</Text>
                        </Text>
                        <Image
                            source={images.cards}
                            className="max-w-[300px] w-full h-[300px]"
                            resizeMode="contain"
                        />
                        <View className="relative mt-5">
                            <Text className="text-3xl text-white font-psemibold   text-center">
                                Discover Endless Possibilities with{' '}
                                <Text className="text-secondary-200 font-psemibold ">
                                    Drop
                                </Text>
                            </Text>
                            <Image
                                source={images.path}
                                className="absolute -bottom-2 -right-8  w-[136px] h-[15px]"
                                resizeMode="contain"
                            />
                        </View>
                        <CustomButton
                            title="Continue with Email"
                            handlePress={() => router.push("/sign-in")}
                            containerStyles="w-full mt-7"
                        />
                    </View>
                </ScrollView>

            </SafeAreaView>
        </>
    )
}

export default app
