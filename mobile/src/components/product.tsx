import { forwardRef } from "react"
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from "react-native"

type ProductDataProps = {
  title: string
  description: string
  quantity?: number
  thumbnail: ImageProps
}

type ProductsProps = TouchableOpacityProps & {
  data: ProductDataProps
}

export const Product =  forwardRef<TouchableOpacity, ProductsProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity className="w-full flex-row items-center pb-4" ref={ref} {...rest}>
        <Image
          className="h-20 w-20 rounded-md"
          source={data.thumbnail}
        />

        <View className="flex-1 ml-3">
          <View className="flex-row items-center">
            <Text className="flex-1 font-subtitile text-base text-slate-100">
              {data.title}
            </Text>

            { data.quantity &&
                <Text className="text-slate-400 text-sm font-subtitle">
                  x {data.quantity}
                </Text>
             }
          </View>

          <Text className="text-slate-400 text-xs leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
)
