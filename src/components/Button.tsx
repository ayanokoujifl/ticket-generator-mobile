import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native"

type ButtonProps = TouchableOpacityProps & {
  value: string
  isLoading?: boolean
}

export function Button({ value, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.7}
      className="w-full bg-orange-500 p-4 rounded-lg justify-center items-center"
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) : (
        <Text className="text-green-500 font-bold text-base uppercase">
          {value}
        </Text>
      )}
    </TouchableOpacity>
  )
}
