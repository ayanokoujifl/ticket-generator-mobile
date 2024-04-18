import { SafeAreaView, StatusBar } from "react-native"
import "../global.css"

import { Loading } from "@/components/Loading"
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto"
import Ticket from "./ticket"
import { Slot } from "expo-router"

export default function Layout() {
  const fontsLoaded = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  return (
    <SafeAreaView className="flex-1  bg-green-500">
      <StatusBar translucent barStyle={"light-content"} />
      {fontsLoaded ? <Ticket /> : <Loading />}
    </SafeAreaView>
  )
}
