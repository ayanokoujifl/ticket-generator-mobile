import { Image, Text, View } from "react-native"
import Logo from "@/assets/logo.png"
import { Input } from "@/components/Input"
import { colors } from "../styles/colors"
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons"
import { Button } from "@/components/Button"

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center p-8">
      <Image source={Logo} className="h-16" resizeMode="contain" />
      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field placeholder="Código do ingresso" />
        </Input>
        <Button value="Clique aqui" />
      </View>
    </View>
  )
}
