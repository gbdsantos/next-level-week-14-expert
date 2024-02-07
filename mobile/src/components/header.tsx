import { Image, Text, TouchableOpacity, View } from "react-native"
import { Link } from "expo-router"

import { Feather } from "@expo/vector-icons"
import colors from "tailwindcss/colors"

type HeaderProps = {
  cartQuantityItems?: number
  title: string
}

export function Header({ cartQuantityItems = 0, title }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 mx-5 pb-5">
      <View className="flex-1">
        <Image
          className="h-6 w-32"
          source={require("@/assets/logo.png")}
        />
        <Text className="font-heading mt-2 text-white text-xl">
          {title}
        </Text>
      </View>

      {
        cartQuantityItems > 0 &&
        <Link href="/cart" asChild>
          <TouchableOpacity activeOpacity={0.7} className="relative">
            <View className="items-center justify-items-center bg-lime-300 w-4 h-4 rounded-full top-2 z-10 -right-3.5">
              <Text className="font-bold text-slate-900 text-xs" >
                {cartQuantityItems}
              </Text>
            </View>

            <Feather color={colors.white} name="shopping-bag" size={24} />
          </TouchableOpacity>
        </Link>
      }
    </View>
  )
}
