import { useState } from 'react'
import { FlatList, View } from 'react-native'

import { Header } from '@/components/header'
import { CategoryButton } from '@/components/category-button'

import { CATEGORIES } from "@/utils/data/products"

export default function Home() {
  const [category, setCategory]  = useState(CATEGORIES[0])

  function handleCategorySelected(selectedCategory: string) {
    setCategory(selectedCategory)
  }

  return (
    <View className="flex-1 pt-8">
      <Header
        cartQuantityItems={2}
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
    </View>
  )
}
