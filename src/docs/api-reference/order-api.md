# Place an order

To place an order you need to know the destination, origin as well as the times chosen by the user and the times the package is available for pickup.
`POST https://api.porterbuddy.com/order`

Example request:

```bash
curl -X POST \
https://api.porterbuddy-test.com/order \
-H 'x-api-key: <your_api_key>' \
-H 'Content-Type: application/json' \
-H 'Idempotency-Key: <your idempotency key>' \
-d '{
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
            "token": "20hRsgz8AovrLjeOldJ2Wg==:yhr85il4/swdgiEP/DG2wg==:2hBoFcmyTNLp/CTfX3sTGslOJr9sXAMxHggqq/h6tGmUuCEB2Vfy8uyNIWfg3qf6d7nj84Aj2sbwMLK2hETe14L4qgnlZHVSkBcktYPc6VCp9vEZhXErpQS3HoSyRU+mVcF2SNGP4s5TI5x7S6oq4Q==",
        },
        "verifications": {
            "minimumAgeCheck": 16,
            "leaveAtDoorstep": false,
            "idCheck": true,
            "requireSignature": false,
            "onlyToRecipient": true
        }
    },
    "parcels" : [
        {
            "description": "Shoes",
            "widthCm": 1,
            "heightCm": 40,
            "depthCm": 1,
            "weightGrams": 2000,
            "parcelShipmentIdentifier": "12345"
        }
    ],
    "product": "delivery",
    "courierInstructions": "Test",
    "shipmentIdentifier": "12345"
}'
```

Example response:

```json
{
  "orderId": "3520",
  "_links": {
    "self": {
      "href": "https://api.porterbuddy-test.com/order/3520"
    },
    "labelInfo": {
      "href": "https://api.porterbuddy-test.com/order/3520/label"
    },
    "status": {
      "href": "https://api.porterbuddy-test.com/order/3520/status"
    },
    "userInformation": {
      "href": "https://www.porterbuddy-test.com/orders/recipient_tracking/aDpa9ytqp86no9XATds6r2gf"
    }
  }
}
```

**_Arguments_**

| Parameter           | Required | Type                                                          | Default | Description                                                                               |
| ------------------- | -------- | ------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| origin              | Yes      | [Origin](https://developer.porterbuddy.com/#origin)           | none    | Information about the origin location.                                                    |
| destination         | Yes      | [Destination](https://developer.porterbuddy.com/#destination) | none    | Information about the destination.                                                        |
| parcels             | Yes      | List<[Parcel](https://developer.porterbuddy.com/#parcel)>     | none    | Information about the parcels.                                                            |
| product             | Yes      | String                                                        | none    | The product associated with the window chosen.                                            |
| orderReference      | No       | String                                                        | none    | Your internal order reference.                                                            |
| courierInstructions | No       | String                                                        | ""      | A message to the courier about the delivery.                                              |
| shipmentIdentifier  | No       | Digits[5-20]                                                  | none    | Shipping identifier. The 5 last digits will be used as a pickup pin if this is specified. |

**Origin**

| Parameter        | Required | Type                                                        | Default | Description                                                                                                                                                 |
| ---------------- | -------- | ----------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name             | Yes      | String                                                      | none    | Full name                                                                                                                                                   |
| address          | Yes      | [Address](https://developer.porterbuddy.com/#address)       | none    | The address where the package will be collected                                                                                                             |
| email            | Yes      | String                                                      | none    | Email                                                                                                                                                       |
| phoneCountryCode | No       | String                                                      | +47     | Country code for the phone number                                                                                                                           |
| phoneNumber      | Yes      | String                                                      | none    | Phone number                                                                                                                                                |
| pickupWindows    | Yes      | `List<[Window](https://developer.porterbuddy.com/#window)>` | none    | The available windows to pick up the package. We recommend as large as possible over several days in case the customer wants to change the delivery window. |

**Destination**

| Parameter           | Required | Type                                                                        | Default | Description                                                                                                                                                                                                                                      |
| ------------------- | -------- | --------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name                | Yes      | String                                                                      | none    | Full name                                                                                                                                                                                                                                        |
| address             | Yes      | [Address](https://developer.porterbuddy.com/#address)                       | none    | The address where the package will be delivered                                                                                                                                                                                                  |
| email               | Yes      | String                                                                      | none    | Email                                                                                                                                                                                                                                            |
| phoneCountryCode    | No       | String                                                                      | +47     | Country code for the phone number                                                                                                                                                                                                                |
| phoneNumber         | Yes      | String                                                                      | none    | Phone number                                                                                                                                                                                                                                     |
| bestAvailableWindow | No       | Boolean                                                                     | false   | IF this is true, find the "best available" window. This might be today or tomorrow, or even the next day if tomorrow is a holiday. To have some idea about when something can be delivered it is always best to verify availability through API. |
| deliveryWindow      | Yes\*    | [Window](https://developer.porterbuddy.com/#window)                         | none    | The agreed upon window to deliver within. This should be a window fetched from the /availability request. _ This is not required if bestAvailableWindow or consolidatedWindow is used._                                                          |
| consolidatedWindow  | No       | [ConsolidatedWindow](https://developer.porterbuddy.com/#consolidatedwindow) | none    | if the user chose the consolidated delivery window, this field needs to be filled with the consolidated window data from the availability request.                                                                                               |
| verifications       | Yes      | [Verifications](https://developer.porterbuddy.com/#verifications)           | none    | The verifications to be performed by the courier.                                                                                                                                                                                                |

**Address**

| Parameter    | Required | Type   | Default | Description                                          |
| ------------ | -------- | ------ | ------- | ---------------------------------------------------- |
| streetName   | Yes      | String | none    | Name of the street                                   |
| streetNumber | Yes      | String | none    | Number of the street. Including any letters. Ex: 10d |
| postalCode   | Yes      | String | none    | The postal code of the address                       |
| city         | Yes      | String | none    | The city of the address                              |
| country      | Yes      | String | none    | The country of the address                           |

**Verifications**
Some of the verifications will affect each other. In that case, the couriers will check the strictest union of the requirements to make sure nothing is delivered to the wrong person.

| Parameter        | Required | Type    | Default | Description                                                                                                                                                      |
| ---------------- | -------- | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| leaveAtDoorstep  | Yes      | Boolean | none    | Can the courier leave the package at the doorstep if no one is at home?                                                                                          |
| requireSignature | Yes      | Boolean | none    | Should the recipient sign for the package?                                                                                                                       |
| idCheck          | Yes      | Boolean | none    | Should the courier check the real identity of the recipient?                                                                                                     |
| onlyToRecipient  | Yes      | Boolean | none    | Should the courier only deliver to the named recipient? This option implies an ID check.                                                                         |
| minimumAgeCheck  | No       | Integer | none    | Should the courier verify the age of the recipient is equal to or above this value? Package will not be delivered if recipient is younger than the age provided. |

**Window**

| Parameter | Required | Type     | Default | Description                                                                |
| --------- | -------- | -------- | ------- | -------------------------------------------------------------------------- |
| start     | Yes      | DateTime | none    | The start of the window                                                    |
| end       | Yes      | DateTime | none    | The end of the window                                                      |
| token     | No       | String   | none    | The token from the availability response. Only used when placing an order. |

**ConsolidatedWindow**

| Parameter | Required | Type   | Default | Description                                                                |
| --------- | -------- | ------ | ------- | -------------------------------------------------------------------------- |
| token     | Yes      | String | none    | The token from the availability response. Only used when placing an order. |

**Parcel**

| Parameter                | Required | Type         | Default | Description                                                                           |
| ------------------------ | -------- | ------------ | ------- | ------------------------------------------------------------------------------------- |
| description              | Yes      | String       | none    | Description of the parcel and contents                                                |
| widthCm                  | Yes      | Int          | none    | The width of the parcel in cm                                                         |
| heightCm                 | Yes      | Int          | none    | The height of the parcel in cm                                                        |
| depthCm                  | Yes      | Int          | none    | The depth of the parcel in cm                                                         |
| weightGrams              | Yes      | Int          | none    | The weight of the package in grams                                                    |
| parcelShipmentIdentifier | No       | Digits[5-20] | none    | The shipping identifier for the package. This is usually the number for the bar code. |

**_Response_**

| Parameter | Type                                                                          | Description                 |
| --------- | ----------------------------------------------------------------------------- | --------------------------- |
| orderId   | String                                                                        | The id of the created order |
| \_links   | [OrderResponseLinks](https://developer.porterbuddy.com/#order-response-links) | Links for this resource.    |

**Order response links**

| Parameter       | Type                                                     | Description                                                                                                                                                                                   |
| --------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| self            | [HrefLink](https://developer.porterbuddy.com/#href-link) | Link to the created order.                                                                                                                                                                    |
| labelInfo       | [HrefLink](https://developer.porterbuddy.com/#href-link) | Link to information about the labels for this order. WARNING: The contents from this URL should not be stored. The addresses have limited existense because of security concerns.             |
| status          | [HrefLink](https://developer.porterbuddy.com/#href-link) | Link to fetch the status of the order. Returns a [Order status](https://developer.porterbuddy.com/#order-status) on a GET request.                                                            |
| userInformation | [HrefLink](https://developer.porterbuddy.com/#href-link) | Address of a wep page that displays the status of the order. This link is intended for the use of the end user and is sensitive as it also gives access to modify some elements of the order. |

**Order status**

| Parameter       | Type                                              | Description                                                                                                                                                               |
| --------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| orderId         | String                                            | The id of the order.                                                                                                                                                      |
| orderStatus     | String Examples: [received, delivered, cancelled] | The status of the order. This list is non exhaustive so please take care to display/handle any new statuses that is introduced.                                           |
| pickupDate      | Date                                              | The date when the order parcels will be picked up by Porterbuddy. Depending on the delivery area, the parcels may be picked up one or more days before the delivery date. |
| statusUpdatedAt | DateTime                                          | The timestamp of the last order status change, as ISO timestamp with time zone.                                                                                           |

**Href Link**

| Parameter | Type   | Description              |
| --------- | ------ | ------------------------ |
| href      | String | Link for the given role. |

## **Update shipment information**

This update is supposed to be used whenever you need to update the packages and shipment information after placing the order. Note that the packages list needs to be complete, so any content here removes the information from the previous order.
`PUT https://api.porterbuddy.com/order/<orderId>/update-shipment-details`

Example request:

```bash
curl -X PUT \
    https://api.porterbuddy-test.com/order/<orderId>/update-shipment-details \
    -H 'x-api-key: <your_api_key>' \
    -H 'Content-Type: application/json' \
    -H 'Idempotency-Key: <your idempotency key>' \
    -d '{
        "parcels" : [
            {
                "description": "Shoes",
                "widthCm": 1,
                "heightCm": 40,
                "depthCm": 1,
                "weightGrams": 2000,
                "parcelShipmentIdentifier": "12345"
            }
        ],
        "shipmentIdentifier": "12345",
        "orderReference": "order-#12345678"
    }'
```

Example response:

```json
{
  "_links": {
    "self": {
      "href": "https://api.porterbuddy-test.com/order/3520"
    },
    "labelInfo": {
      "href": "https://api.porterbuddy-test.com/order/3520/label"
    }
  }
}
```

**_Arguments_**

| Parameter          | Required | Type                                                        | Default | Description                                                                                                   |
| ------------------ | -------- | ----------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| parcels            | Yes      | `List<[Parcel](https://developer.porterbuddy.com/#parcel)>` | none    | Information about the parcels.                                                                                |
| shipmentIdentifier | No       | Digits[5-20]                                                | none    | Shipping identifier.                                                                                          |
| orderReference     | No       | String                                                      | none    | Your internal order reference. If this parameter is not set, the current order reference will not be removed. |

**_Response_**

| Parameter | Type                                                                          | Description              |
| --------- | ----------------------------------------------------------------------------- | ------------------------ |
| \_links   | [OrderResponseLinks](https://developer.porterbuddy.com/#order-response-links) | Links for this resource. |

## **Fetch order status**

The order status can be retrieved using the URL returned from the Create Order call. The order status contains the pickup date, which is updated in case the recipient changes the delivery day, so it should be fetched regularly.

`GET https://api.porterbuddy.com/order/<orderId>/status`

Example Request

```bash
curl -X GET \
    https://api.porterbuddy-test.com/order/<orderId>/status \
    -H 'x-api-key: <your_api_key>' \
    -H 'Accept: application/json'
```

Example Response

```json
{
  "orderId": "3520",
  "orderStatus": "ready",
  "pickupDate": "2023-02-13",
  "statusUpdatedAt": "2021-03-25T10:30:35.742857Z",
  "orderReference": "order-#12345678"
}
```

**Response**
see [Order Status](https://developer.porterbuddy.com/#order-status)

## **Confirmed Parcel Scan**

**Note:** We provide a solution to scan outgoing parcels on our partner portal. This endpoint is only intended to be used when integrating scanning of outgoing parcels into an own solution.
This endpoint confirms that the parcels with the specified parcel shipment identifiers belonging to the specified order have been scanned and are confirmed to be sent. The list of parcel shipment identifiers is matched agains the parcel shipment identifiers specified in the parcel data of the order. In case unknown shipment identifiers are specified, the response contains a list of all unknown identifiers, and the HTTP Response code is 422.

`PUT https://api.porterbuddy.com/order/<orderId>/confirmed-scan`

Example Request

```bash
https://api.porterbuddy-test.com/order/<orderId>/confirmed-scan \
    -H 'x-api-key: <your_api_key>' \
    -H 'Content-Type: application/json' \
    -H 'Idempotency-Key: <your idempotency key>' \
    -d '{
            "parcelShipmentIds": ["12345", "67890"]
        }
```

Example Response

```json
{
  "unknownIds": []
}
```

**_Arguments_**

| Parameter         | Required | Type           | Default | Description                                                 |
| ----------------- | -------- | -------------- | ------- | ----------------------------------------------------------- |
| parcelShipmentIds | Yes      | `List<String>` | none    | parcel shipment identifiers to confirm to have been scanned |

## **Place a consolidated order**

Example request:

```bash
curl -X POST \
https://api.porterbuddy-test.com/order \
-H 'x-api-key: <your_api_key>' \
-H 'Content-Type: application/json' \
-H 'Idempotency-Key: <your idempotency key>' \
-d '{
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
        "consolidatedWindow":{
            "token": "20hRsgz8AovrLjeOldJ2Wg==:yhr85il4/swdgiEP/DG2wg==:2hBoFcmyTNLp/CTfX3sTGslOJr9sXAMxHggqq/h6tGmUuCEB2Vfy8uyNIWfg3qf6d7nj84Aj2sbwMLK2hETe14L4qgnlZHVSkBcktYPc6VCp9vEZhXErpQS3HoSyRU+mVcF2SNGP4s5TI5x7S6oq4Q==",
        },
        "verifications": {
            "minimumAgeCheck": 16,
            "leaveAtDoorstep": false,
            "idCheck": true,
            "requireSignature": false,
            "onlyToRecipient": true
        }
    },
    "parcels" : [
        {
            "description": "Shoes",
            "widthCm": 1,
            "heightCm": 40,
            "depthCm": 1,
            "weightGrams": 2000,
            "parcelShipmentIdentifier": "12345"
        }
    ],
    "product": "delivery",
    "courierInstructions": "Test",
    "shipmentIdentifier": "12345"
}'
```

Consolidated orders (the "Samlevert" product) are created via the same request as regular orders, by using the token from the consolidated window returned in the availability call to fill the data for the "consolidatedWindow" property in the create order request. This should be done if the customer has chosen the consolidated delivery option in the checkout. The data model for request and response is explained in the section [Place Order](https://developer.porterbuddy.com/#place-an-order), so this section only contains the different example request, the response has the same structure as for the non-consolidated case.

Note: The example request will not work as is, as to create an actually consolidated order, several conditions have to be met:

1. The customer needs to already have an orders placed
2. The cutoff for the delivery window chosen in the existing order is still in the future.
3. The consolidated window token is not expired yet.
4.

If the consolidated window token is expired or invalid, the order is created using the "best-available" approach.

```bash
`POST https://api.porterbuddy.com/order`
```
