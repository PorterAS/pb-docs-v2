import * as React from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"

declare global {
  interface Window {
    porterbuddy: any
  }
}
export type PBProductCardType = {
  token: string
  view: "availability" | "checkout" | "deliveryInfo"
  language: "NO" | "EN"
  apiMode: "test" | "development" | "stage" | "production"
  apiBaseUrl?: string
  resetContext?: boolean
  allowStorage?: boolean
  allowGeoLocation?: boolean
  postalCode?: string
  cssClassPrefix?: string
  hideIfUnavailable: boolean
  alternateAvailabilityView?: boolean
  text?: object
  discount?: number
  onUpdateDeliveryWindows?: void
  updateDeliveryWindowsInterval?: number
  availabilityCacheTTL?: number
  now?: string
  originAddress?: boolean
  onStartFetchAvailability?: void
  onSetCallback?: void
}
type PBProductCardPropType = {
  options: PBProductCardType
}

export const PBProductCard = ({ options, ...rest }: PBProductCardPropType) => {
  useEffect(() => {
    if (window) {
      window.porterbuddy = options
    }
  }, [window.porterbuddy])
  return (
    <div {...rest}>
      <Helmet>
        <link
          href="https://widget.porterbuddy.com/porterbuddy-widget.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          async
          src="https://widget.porterbuddy.com/porterbuddy-widget.js"
        ></script>
      </Helmet>
      <div>
        <div id="porterbuddy-widget"></div>
      </div>
    </div>
  )
}
