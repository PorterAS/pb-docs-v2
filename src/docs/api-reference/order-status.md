---
title: "Porterbuddy order status"
meta_title: "Fetch Order Status"
publishBy: "29-11-2021"
author: "William Imoh"
meta_description: "Fetch a Porterbuddy order's status"
---

The order status can be retrieved using the URL returned from the Create Order call.
The order status contains the pickup date, which is updated in case the recipient changes the delivery day, so it should be fetched regularly.

```
GET https://api.porterbuddy.com/order/<orderId>/status
```

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

## Response data

| Parameter       | Type                                              | Description                                                                                                                                                                                                       |
|-----------------|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| orderId         | String                                            | The id of the order.                                                                                                                                                                                              |
| orderStatus     | String Examples: [received, delivered, cancelled] | The status of the order. This list is non exhaustive so please take care to display/handle any new statuses that is introduced.                                                                                   |
| ~~pickupDate~~  | ~~Date~~                                          | **Deprecated, use pickupTime instead!** The date when the order parcels will be picked up by Porterbuddy. Depending on the delivery area, the parcels may be picked up one or more days before the delivery date. |
| pickupTime      | DateTime                                          | The calculated date and time the order needs to be picked up to be delivered on time.                                                                                                                             |
| statusUpdatedAt | DateTime                                          | The timestamp of the last order status change, as ISO timestamp with time zone.                                                                                                                                   |
| orderReference  | String                                            | An order reference as specified in order request or the shipment details update                                                                                                                                   |

As the order status variables returned in `orderStatus` can be modified anytime, we recommend making considerations for this when building bespoke user interfaces using the status we return.
The API response currently returns any of the following statuses:

- ready: This is returned on order creation
- in_delivery: The order has been picked up and is currently enroute to it's destination
- delivered: The order is successfully delivered
- cancelled: The order is cancelled

This documentation will be updated if these status values change in the future.