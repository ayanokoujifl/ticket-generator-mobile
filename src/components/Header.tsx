import { Text, View } from "react-native"

type Props = {
  title: string
}

export function Header({ title }: Props) {
  return (
    <View className="w-full h-28 flex-row items-end bg-black/20 px-8 pb-4 border-b border-white/20">
      <Text className="text-white flex-1 font-medium text-center">{title}</Text>
    </View>
  )
}
