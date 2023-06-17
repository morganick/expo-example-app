import React from "react"
import { Text as RNText } from "react-native"
import { i18n } from "../i18n/i18n"

interface TextProps {
  text?: string
  tx?: string
}

export default function Text({ text, tx }: TextProps) {
  return <RNText>{tx ? i18n.t(tx) : text}</RNText>
}
