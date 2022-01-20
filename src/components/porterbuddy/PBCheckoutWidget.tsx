import * as React from "react"
import { useEffect } from "react"
import { isBrowser, PBScript } from "./PBScript"
import { IPBCheckoutWidgetType } from "./types"

type PBCheckoutWidgetPropType = {
  options: IPBCheckoutWidgetType
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
