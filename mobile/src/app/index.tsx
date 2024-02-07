import { useRef, useState } from 'react'
import { FlatList, SectionList, Text, View } from 'react-native'

import { Link } from "expo-router"

import { Header } from '@/components/header'
import { CategoryButton } from '@/components/category-button'
import { Product } from '@/components/product'

import { useCartStore } from '@/stores/cart-store'
import { CATEGORIES, MENU } from "@/utils/data/products"

export default function Home() {
  const cartStore = useCartStore()
  const [category, setCategory]  = useState(CATEGORIES[0])
  const sectionListRef = useRef<SectionList>(null)

  const cartQuantityItems = cartStore.products.reduce((acc, product) =>  acc + product.quantity, 0)

  function handleCategorySelected(selectedCategory: string) {
    setCategory(selectedCategory)

    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)

    if(sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0
      })
    }
  }

  return (
    <View className="flex-1 pt-8">
      <Header
        cartQuantityItems={cartQuantityItems}
        title="Faça seu pedido"
      />

      <FlatList
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12 , paddingHorizontal: 20}}
        data={CATEGORIES}
        keyExtractor={(item) => item}
        horizontal
        renderItem={({ item }) => (
          <CategoryButton
            isSelected={item === category}
            onPress={() => handleCategorySelected(item)}
            title={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />

      <SectionList
        className="flex-1 p-5"
        contentContainerStyle={{ paddingBottom: 100 }}
        keyExtractor={(item) => item.id}
        ref={sectionListRef}
        renderItem={({ item }) => (
          <Link asChild href={`/product/${item.id}`}>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title} }) => (
          <Text className="font-heading mb-3 mt-8 text-xl text-white">
            {title}
          </Text>
        )}
        sections={MENU}
        showsHorizontalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />
    </View>
  )
}
