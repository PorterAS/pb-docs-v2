---
title: "Porterbuddy order webhook"
meta_title: "Order webhook"
publishBy: "02-12-2021"
author: "William Imoh"
meta_description: "Receive a webhook from Porterbuddy when an order changes"
---

## Overview
To receive notifications when the order status or pickup date changes, a webhook URL can be specified in the order request as property `statusWebhookUrl`. This URL gets called with HTTP POST every time the status or pickup date changes, and contains the same body as the [Order Status Endpoint](https://developer.porterbuddy.com/#fetch-order-status). The target endpoint must be reachable from the internet without authentication and respond within 10 seconds. If a status outside the [200..299] range is returned, or the endpoint is unreachable, the call will be retried 2 times with a rising interval. The response body will be ignored by our backend.

## Webhook call body
See [Order Status](https://developer.porterbuddy.com/#order-status)

Example order request body with the webhook

```json
{
      "origin": {
        "name": "Nils Johansen (Sender)",
        "address": {
          "streetName": "Keysers Gate",
          "streetNumber": "3",
          "postalCode": "0165",
          "city": "Oslo",
          "country": "Norway"
        },
        "email": "testemail+sender@porterbuddy.com",
        "phoneCountryCode": "+47",
        "phoneNumber": "65127865",
        "pickupWindows":[{"start":"2023-02-13T10:00+02:00", "end":"2023-02-13T20:00+02:00"}]
      },
      "destination": {
        "name": "Roger Olsen (Recipient)",
        "address": {
          "streetName": "Høyenhallveien",
          "streetNumber": "25",
          "postalCode": "0678",
          "city": "Oslo",
          "country": "Norway"
        },
        "email": "testemail+recipient@porterbuddy.com",
        "phoneCountryCode": "+47",
        "phoneNumber": "65789832",
        "deliveryWindow":{
          "start": "2023-02-13T17:30:00+01:00",
          "end": "2023-02-13T19:30:00+01:00",
          "token": "20hRsgz8AovrLjeOldJ2Wg==:yhr85il4/swdgiEP/DG2wg==:2hBoFcmyTNLp/CTfX3sTGslOJr9sXAMxHggqq/h6tGmUuCEB2Vfy8uyNIWfg3qf6d7nj84Aj2sbwMLK2hETe14L4qgnlZHVSkBcktYPc6VCp9vEZhXErpQS3HoSyRU+mVcF2SNGP4s5TI5x7S6oq4Q=="
        },
        "verifications": {
          "minimumAgeCheck": 0,
          "leaveAtDoorstep": false,
          "idCheck": false,
          "requireSignature": false,
          "onlyToRecipient": false
        }
      },
      "parcels" : [
        {
          "description": "Shoes",
          "widthCm": 20,
          "heightCm": 10,
          "depthCm": 35,
          "weightGrams": 600,
          "parcelShipmentIdentifier": "12345"
        }
      ],
      "items": [
        {
          "name":"Fancy Sneakers",
          "sku":"FANCYSNEAKER43",
          "weightGrams":"600",
          "widthCm":20,
          "heightCm":10,
          "depthCm":35,
          "description":"Fancy sneakers (red/blue) in size 43",
          "category":"shoes",
          "brand":"Fancy Footwear Corp.",
          "imageUrl":"https://awesomewebshop.com/images/5fd71d6f-b0be-4480-900f-f3d008a0bc62.png",
          "price": {
            "fractionalDenomination":"79900",
            "currency":"NOK"
          },
          "barCode": {
            "value":"123-456-789",
            "type":"CODE128"
          }
        }
      ],
      "product": "delivery",
      "courierInstructions": "Test",
      "orderReference": "order-12345",
      "statusWebhookUrl": "https://api.myshopbackend.com/statusUpdated"
}
```

Example webhook payload

```
{
"orderId": "394326",
"orderStatus": "canceled",
"pickupDate": "2023-02-13",
"pickupTime": "2023-02-13T15:00:00+02:00",
"statusUpdatedAt": "2021-06-08T12:16:40.32538Z",
"orderReference": "order-12345",
}
```

## Verifying Webhook Authenticity
To verify that a call to the status webhook was originated by Porterbuddy, we add a header `x-porterbuddy-hmac-SHA256` to the webhook calls. This header contains a base64-encoded HMAC Digest of the call body, using the sender's API key as encryption secret. Authenticity can be verified by calculating the HMAC digest of the request body on the recipient side, and comparing it to the header value.