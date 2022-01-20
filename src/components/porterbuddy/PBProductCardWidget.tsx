import * as React from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { isBrowser } from "./PBScript"
import { IPBWidget } from "./types"

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
