import * as React from "react"
import { useEffect } from "react"
import { isBrowser, PBScript } from "./PBScript"
import { IPBUnifiedShippingModule } from "./types"

type PBUnifiedShippingModulePropType = {
  options: IPBUnifiedShippingModule
}

export const PBUSM = ({
  options,
  ...rest
}: PBUnifiedShippingModulePropType) => {
  useEffect(() => {
    if (isBrowser()) {
      window.porterbuddy = { ...window.porterbuddy, ...options }
    }
  }, [])
  return (
    <div {...rest}>
      <PBScript />
      <div>
        <div id="porterbuddy-checkout"></div>
      </div>
    </div>
  )
}
