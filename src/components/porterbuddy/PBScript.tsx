import * as React from "react"
import { Helmet } from "react-helmet"

export const PBScript = () => {
  return (
    <div>
      <Helmet>
        <link
          href="https://widget.porterbuddy.com/porterbuddy-widget.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          async
          src="https://widget.porterbuddy.com/porterbuddy-widget.js"
          // src="https://widget.test.aws.porterbuddy.com/porterbuddy-widget.js"
        ></script>
      </Helmet>
    </div>
  )
}

export const PBScriptUSM = () => {
  return (
    <div>
      <Helmet>
        <link
          href="https://widget.porterbuddy.com/v2/porterbuddy-checkout.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          async
          src="https://widget.porterbuddy.com/v2/porterbuddy-checkout.js"
          // src="https://widget.test.aws.porterbuddy.com/porterbuddy-widget.js"
        ></script>
      </Helmet>
    </div>
  )
}

export const isBrowser = () => typeof window !== "undefined"
