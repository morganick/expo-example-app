import React from "react"
import { Text as RNText } from "react-native"

interface TextProps {
  text: string
}

export default function Text({ text }: TextProps) {
  return <RNText>{text}</RNText>
}
