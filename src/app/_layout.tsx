import { SafeAreaView, StatusBar } from "react-native"
import { Slot } from "expo-router"
import "../global.css"

export default function Layout() {
  return (
    <SafeAreaView className="flex-1 pt-10 bg-green-500">
      <StatusBar translucent />
      <Slot />
    </SafeAreaView>
  )
}
