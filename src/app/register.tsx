import { Input } from "@/components/Input"
import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons"
import { Alert, Image, View } from "react-native"
import Logo from "@/assets/logo.png"
import colors from "tailwindcss/colors"
import { Button } from "@/components/Button"
import { Link, router } from "expo-router"
import { useState } from "react"

export default function Register() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")

  function handleRegister() {
    if (nome.trim() === "" || email.trim() === "") {
      return Alert.alert("Inscrição", "Por favor, preencha todos os campos")
    }
    router.push("/ticket")
  }

  return (
    <View className="flex-1 justify-center items-center p-8">
      <Image source={Logo} className="h-16" resizeMode="contain" />
      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome6
            name="user-circle"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field placeholder="Nome completo" onChangeText={setNome} />
        </Input>
        <Input>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </Input>
        <Button value="Realizar inscrição" onPress={handleRegister} />
        <Link
          href={"/"}
          className="text-center font-bold text-base text-gray-100 mt-8"
        >
          Já possui ingresso?
        </Link>
      </View>
    </View>
  )
}
