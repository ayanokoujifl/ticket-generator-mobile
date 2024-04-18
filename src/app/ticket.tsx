import { Button } from "@/components/Button"
import { Credential } from "@/components/Crendential"
import { Header } from "@/components/Header"
import { colors } from "@/styles/colors"
import { FontAwesome } from "@expo/vector-icons"
import { useState } from "react"
import {
  Alert,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import * as ImagePicker from "expo-image-picker"
import { QRCode } from "@/components/Qrcode"

export default function Ticket() {
  const [avatar, setAvatar] = useState("")
  const [expand, setExpand] = useState(false)

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      })
      if (result.assets) {
        setAvatar(result.assets[0].uri)
      }
    } catch (err) {
      console.log(err)
      Alert.alert("Erro", "Não foi possível selecionar a imagem")
    }
  }

  return (
    <View className="flex-1">
      <StatusBar translucent barStyle={"light-content"} />

      <Header title="Minha credencial" />
      <ScrollView
        className="-mt-28 -z-10"
        contentContainerClassName="px-8 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential
          avatar={avatar}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setExpand(true)}
        />
        <FontAwesome
          name="angle-double-down"
          size={24}
          color={colors.gray[300]}
          className="self-center my-6"
        />
        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar Credencial
        </Text>
        <Text className="text-white font-regular mt-1 mb-6 text-base">
          Mostre ao mundo que você vai participar do Unite Summit
        </Text>
        <Button value="Compartilhar" />
        <TouchableOpacity activeOpacity={0.7} className="mt-10">
          <Text className="text-white font-bold text-base text-center">
            Remover Ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={expand} statusBarTranslucent animationType="slide">
        <View className="flex-1 bg-green-500 justify-center items-center">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setExpand(false)}
          >
            <QRCode value="teste" size={272} />
            <Text className="text-center font-body text-sm text-orange-500 mt-10">
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}
