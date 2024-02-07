import { TextInput, TextInputProps } from "react-native"

import colors from "tailwindcss/colors"

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="h-32 bg-slate-800 font-body rounded-md px-4 py-3 text-sm text-white"
      multiline
      placeholderTextColor={colors.slate[400]}
      textAlignVertical="top"
      {...rest}
    />
  )
}
