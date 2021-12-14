import * as React from "react"
import { useEffect } from "react"
import { isBrowser, PBScript } from "./pb-script"
import { PBCheckoutWidgetType } from "./types"

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
