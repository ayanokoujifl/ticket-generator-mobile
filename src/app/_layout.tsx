import { SafeAreaView } from "react-native"
import { Slot } from "expo-router"

export default function Layout() {
  return (
    <SafeAreaView className="pt-10">
      <Slot />
    </SafeAreaView>
  )
}
