import { ActivityIndicator, View } from "react-native"
import colors from "tailwindcss/colors"

export function Loading() {
  return (
    <View className="flex-1 bg-green-500 items-center justify-center">
      <ActivityIndicator size={56} color="#9FF9CC" />
    </View>
  )
}
