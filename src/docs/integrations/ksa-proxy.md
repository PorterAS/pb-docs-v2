---
title: "Porterbuddy Klarna TMS Proxy Guide"
meta_title: "Porterbuddy Klarna TMS Proxy Guide"
publishBy: "29-11-2021"
author: "William Imoh"
meta_description: "Integrate Porterbuddy TMS in Klarna using KSA"
---

Multiple Transport Management Systems (TMS) abound, each having different data requirements and API specifications. Businesses run into issues integrating their existing systems with these TMSs.

Klarna is a robust e-commerce solution widely used in the region to manage payment. Subsequently, Klarna Shipping Service/Assistant (KSS or KSA) operates and presents shipping options during client checkout on an e-commerce store.

We solved multiple compatibility issues of Klarna shipping and TMSs (refer to these subsequently as upstream TMSs) when serving Porterbuddy as a shipping option. We created a service that standardizes shipping options received from a TMS. After that, we present these shipping options in Klarna checkout, including Porterbuddy.

## Current TMS Support

The TMSs currently supported on the Porterbuddy TMS are:

- Consignor
- Unifaun

If you would like us to include your TMS, kindly send us an email at dev@porterbuddy.com.

## Setup

Setting up the Porterbuddy TMS in Klarna is similar to setting up a regular TMS. There are two environments to use the PB TMS on - the test and live environment. The test TMS is available on the Klarna playground as “Porterbuddy - TEST”. At the same time, the live TMS is available in Klarna as “Porterbuddy”.

To set up a proxy account, we require the following:

1. Porterbuddy API Key - Your Porterbuddy API Key
2. Upstream TMS Klarna Identifier - This is obtained from the TMS provider
3. Upstream TMS Klarna Key - This is obtained from the TMS provider
4. Upstream TMS name - i.e. Unifaun or Consignor

We require this information for both your Test and Live environments.

Send this information to your Porterbuddy account manager, requesting the Porterbuddy TMS setup on Klarna.

Once we have set up your TMS account on Porterbuddy, we will provide you with a key and identifier. Use this identifier and key to create a new logistics profile on Klarna.

![https://paper-attachments.dropbox.com/s_E890D66C5DFC8616E8873F4BABC97C5FEB201DD53FB31C63A26C0BFC96493987_1627030359502_image.png](https://paper-attachments.dropbox.com/s_E890D66C5DFC8616E8873F4BABC97C5FEB201DD53FB31C63A26C0BFC96493987_1627030359502_image.png)

The identifier and key are entered next.

![https://paper-attachments.dropbox.com/s_E890D66C5DFC8616E8873F4BABC97C5FEB201DD53FB31C63A26C0BFC96493987_1627030440365_image.png](https://paper-attachments.dropbox.com/s_E890D66C5DFC8616E8873F4BABC97C5FEB201DD53FB31C63A26C0BFC96493987_1627030440365_image.png)

Once you complete this setup, you will receive shipping options in the Klarna shipping assistant portion of your Klarna checkout window.

These options will include Porterbuddy and all other shipping options served by the upstream TMS we configured.

## How it works

In a webshop using the Klarna Shipping Assistant in the checkout, Klarna displays the shipping options like this:

![https://paper-attachments.dropbox.com/s_E890D66C5DFC8616E8873F4BABC97C5FEB201DD53FB31C63A26C0BFC96493987_1627030944759_image.png](https://paper-attachments.dropbox.com/s_E890D66C5DFC8616E8873F4BABC97C5FEB201DD53FB31C63A26C0BFC96493987_1627030944759_image.png)

Once a user selects a delivery time, fills in the required information and places an order, if the order is shipped with Porterbuddy, a Porterbuddy order is created in our system. If it is shipped with any other provider, data is sent to the provider to create the shipping/shipment order.

## Feedback

While this is in beta testing, we appreciate feedback on using this service to make shipping with Klarna, TMSs and Porterbuddy seamless. Please send us an email to dev@porterbuddy.com with any feedback.