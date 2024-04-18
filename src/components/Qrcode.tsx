import QRCodeSvg from "react-native-qrcode-svg"

type Props = {
  value: string
  size: number
}

export function QRCode({ size, value }: Props) {
  return (
    <QRCodeSvg
      value={value}
      size={size}
      backgroundColor="transparent"
      color="#fff"
    />
  )
}
