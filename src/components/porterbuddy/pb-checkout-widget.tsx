import * as React from "react"
import { useEffect } from "react"
import { PBScript } from "./pb-script"
import { PBCheckoutWidgetType } from "./types"

const isBrowser = () => typeof window !== "undefined"

type PBCheckoutWidgetPropType = {
  options: PBCheckoutWidgetType
}

export const PBCheckoutWidget = ({
  options,
  ...rest
}: PBCheckoutWidgetPropType) => {
  useEffect(() => {
    if (isBrowser()) {
      window.porterbuddy = { ...window.porterbuddy, ...options }
    }
  }, [])
  return (
    <div {...rest}>
      <PBScript />
      <div>
        <div id="porterbuddy-widget"></div>
      </div>
    </div>
  )
}
