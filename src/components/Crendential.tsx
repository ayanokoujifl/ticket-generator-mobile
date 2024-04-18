import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

export function Credential() {
  return (
    <View className="w-full self-stretch items-center">
      <Image
        source={require("@/assets/ticket/band.png")}
        className="w-24 h-52 z-10"
      />
      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/20 mx-3 rounded-xl -mt-5">
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">Unite Summit</Text>
            <Text className="text-zinc-50 text-sm font-bold">#123</Text>
          </View>
          <View className="size-40 bg-black rounded-full" />
        </ImageBackground>
        <Image
          source={{ uri: "https://github.com/ayanokoujifl.png" }}
          className=" size-36 rounded-full -mt-24"
        />
        <Text className="font-bold text-2xl text-zinc-50 mt-4">
          Luís Gustavo
        </Text>
        <Text className="font-regular text-base text-zinc-300">
          guleite3@gmail.com
        </Text>
        <Image
          source={require("@/assets/ticket/qrcode.png")}
          className="mt-4 size-32"
        />
        <TouchableOpacity className="mt-6" activeOpacity={0.7}>
          <Text className="font-body text-orange-500 text-sm">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
