import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type ProductDataProps = {
  title: string
  description: string
  thumbnail: ImageProps
}

type ProductsProps = TouchableOpacityProps & {
  data: ProductDataProps
}

export function Product({ data, ...rest }: ProductsProps) {
  return (
    <TouchableOpacity className="w-full flex-row items-center pb-4" {...rest}>
      <Image
        className="h-20 w-20 rounded-md"
        source={data.thumbnail}
      />
      <View className="flex-1 ml-3">
        <Text className="flex-1 font-subtitile text-base text-slate-100">
          {data.title}
        </Text>
        <Text className="text-slate-400 text-xs leading-5 mt-0.5">
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
