import { Image, Text, View } from "react-native"
import { useLocalSearchParams, useNavigation } from "expo-router"

import { Button } from "@/components/button"

import { Feather } from "@expo/vector-icons"

import { useCartStore } from "@/stores/cart-store"

import { PRODUCTS } from "@/utils/data/products"
import { formatCurrency } from "@/utils/functions/format-currency";
import { LinkButton } from "@/components/link-buttom"

export default function Product() {
  const { id } = useLocalSearchParams()
  const cartStore = useCartStore()
  const navigation = useNavigation()

  const product = PRODUCTS.filter((item) => item.id === id)[0]

  // console.log(cartStore.products)

  function handleAddToCart() {
    cartStore.add(product)
    navigation.goBack()
  }

  return (
    <View className="flex-1">
      <Image
        className="w-full h-52"
        resizeMode="cover"
        source={product.cover}
      />

      <View className="flex-1 mt-8 p-5">
        <Text className="font-heading my-2 text-lime-400 text-2xl">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {
          product.ingredients.map((ingredient) => (
            <Text
              className="text-slate-400 font-body text-base leading-6"
              key={ingredient}
            >
              {"\u2022"} {ingredient}
            </Text>
          ))
        }
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>
              Adicionar ao pedido
          </Button.Text>
        </Button>

        <LinkButton href="/" title="Voltar ao cardápio" />
      </View>
    </View>
  )
}
