import { Alert, Image, Text, View } from "react-native"
import Logo from "@/assets/logo.png"
import { Input } from "@/components/Input"
import { colors } from "../styles/colors"
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons"
import { Button } from "@/components/Button"
import { Link } from "expo-router"
import { useState } from "react"

export default function Home() {
  const [credential, setCredential] = useState("")

  const handleAcessCredential = () => {
    if (credential.trim() === "") {
      return Alert.alert("Erro", "Por favor, informe o seu ingresso")
    }
  }

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
          <Input.Field
            placeholder="Código do ingresso"
            onChangeText={setCredential}
          />
        </Input>
        <Button value="Acessar credencial" onPress={handleAcessCredential} />
        <Link
          href={"/register"}
          className="text-center font-bold text-base text-gray-100 mt-8"
        >
          Ainda não possui Ingresso?
        </Link>
      </View>
    </View>
  )
}
