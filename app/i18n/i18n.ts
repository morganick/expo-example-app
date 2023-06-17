import { getLocales } from "expo-localization"
import { I18n } from "i18n-js"

import en from "./en"

export const i18n = new I18n({
  en,
})

const { languageCode } = getLocales()[0]

i18n.locale = languageCode
i18n.enableFallback = true
