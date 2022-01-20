import * as React from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { isBrowser } from "./PBScript"
import {
  AvailabilityResponseType,
  DeliveryWindowType,
  IPBWidget,
} from "./types"

declare global {
  interface Window {
    porterbuddy: any
    udpateDeliveryWindows: (
      availabilityResponse:
        | AvailabilityResponseType
        | DeliveryWindowType[]
        | undefined
    ) => void
    unselectDeliveryWindow: () => void
    setSelectedDeliveryWindow: (
      deliveryWindow: DeliveryWindowType | null | undefined,
      selectDefault?: boolean
    ) => void
    forceRefreshReference: () => Promise<void>
    selectedDeliveryWindow: DeliveryWindowType
  }
}

type PBProductCardPropType = {
  options: IPBWidget
}

export const PBProductCard = ({ options, ...rest }: PBProductCardPropType) => {
  useEffect(() => {
    if (isBrowser()) {
      window.porterbuddy = { ...window.porterbuddy, ...options }
    }
  }, [])
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
