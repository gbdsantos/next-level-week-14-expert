import { Pressable, PressableProps, Text } from "react-native"
import { clsx } from "clsx"

type CategoryProps = PressableProps & {
  isSelected?: boolean
  title: string
}

export function CategoryButton({ isSelected, title, ...rest}: CategoryProps) {
  return (
    <Pressable
      className={
        clsx("bg-slate-800 justify-center h-10 px-4 rounded-md",
        isSelected && "border-2 border-lime-300"
        )}
      {...rest}
    >
      <Text className="font-subtitle text-slate-100 text-sm">
        {title}
      </Text>
    </Pressable>
  )
}
