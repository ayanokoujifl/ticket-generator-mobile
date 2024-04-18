import { Credential } from "@/components/Crendential"
import { Header } from "@/components/Header"
import { colors } from "@/styles/colors"
import { FontAwesome } from "@expo/vector-icons"
import { Text, View } from "react-native"

export default function Ticket() {
  return (
    <View className="flex-1">
      <Header title="Minha credencial" />
      <Credential />
      <FontAwesome
        name="angle-double-down"
        size={24}
        color={colors.gray[300]}
        className="self-center my-6"
      />
      <Text className="text-white font-bold">Compartilhar Credencial</Text>
      <Text>Mostre ao mundo que você vai participar do Unite Summit</Text>
    </View>
  )
}
