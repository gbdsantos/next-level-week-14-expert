import { useState } from "react"
import { Alert, Linking, ScrollView, Text, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { useNavigation } from "expo-router"

import { Button } from "@/components/button"
import { Header } from "@/components/header"
import { Input } from "@/components/input"
import { LinkButton } from "@/components/link-buttom"
import { Product } from "@/components/product"

import { Feather } from "@expo/vector-icons"

import { ProductCartProps, useCartStore } from "@/stores/cart-store"

import { formatCurrency } from "@/utils/functions/format-currency"

const PHONE_NUMBER = "" // DDI + DDD + phone number

export default function Cart() {
  const [address, setAddress] = useState("")
  const cartStore = useCartStore()
  const { goBack } = useNavigation()

  const total = formatCurrency(cartStore.products.reduce((acc, product) => acc + product.price * product.quantity, 0))

  function handleProductRemove(product: ProductCartProps) {
    Alert.alert(
      "Remover",
      `Deseja remover ${product.title} do carrinho?`,
      [
        { text: "Cancelar" },
        {
          text: "Remover",
          onPress: () => cartStore.remove(product.id)
        }
      ]
    )
  }

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert(
        "Pedido",
        "Informe os dados da entrega."
      )
    }

    const products = cartStore.products
    .map((product) => `\n ${product.quantity} ${product.title}`)
    .join("")

    const message = `
      🍔 NOVO PEDIDO
      \n Entregar em: ${address}

      ${products}

      \n Valor total: ${total}
    `
    Linking.openURL(`http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`)
    cartStore.clear()
    goBack()
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />

      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="p-5 flex-1">
            {
              cartStore.products.length > 0 ?
              <View className="border-b border-slate-700">
                {
                  cartStore.products.map((product) => (
                    <Product
                      data={product}
                      key={product.id}
                      onPress={() => handleProductRemove(product)}
                    />
                  ))
                }
              </View>
              :
              <Text className="font-body text-center text-slate-400 my-8">
                Seu carrinho está vazio.
              </Text>
            }

            <View className="flex-row items-center gap-2 mb-4 mt-5">
              <Text className="font-subtitle text-white text-xl">
                Total:
              </Text>

              <Text className="font-heading text-lime-400 text-2xl">
                {total}
              </Text>
            </View>

            <Input
              blurOnSubmit={true}
              onChangeText={setAddress}
              onSubmitEditing={handleOrder}
              placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
              returnKeyType="next"
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="p-5 gap-5">
        <Button onPress={handleOrder}>
          <Button.Text>
              Enviar pedido
          </Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>

        <LinkButton href="/" title="Voltar ao cardápio" />
      </View>
    </View>
  )
}
