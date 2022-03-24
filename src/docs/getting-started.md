---
title: "Getting started with Porterbuddy's Integration"
meta_title: "Get started with integrating Porterbuddy"
publishBy: "02-12-2021"
author: "William Imoh"
meta_description: "Learn all you need to integrate your systems with Porterbuddy"
---

This page covers a summary of integrating with Porterbuddy and where to find relevant documentation on each process.
In a nutshell, technology-wise, Porterbuddy enables your business to deliver parcels quickly using the following process.

1. Check for delivery availability with store pickup windows
2. Place an order with an available delivery window
3. Provide parcel information to print labels when packing items.

An ideal flow between a merchant Webshop, a warehouse management system and Porterbuddy’s APIs looks like this.

![](https://lh5.googleusercontent.com/E9lNV0Z3srN_CLiZTnPvoLVXQkIgE6i7CNGT2lo4dcHcfved0220XdbxZ7--O2p2UWaseD6Gm3dwCdO2lUbPMpsn_5GbdgAsyXQZPJNCw_ZP427fpe349qjNiDVlH8HozzyQ0vcW)

## Documentation

This Porterbuddy documentation inlcudes the following:

1. [API Documentation](/api-reference/) - This documents Porterbuddy’s APIs.
2. [Product card widget](/product-card-widget/) - These contain the standard format and documentation for implementing the Porterbuddy product card.
3. [Checkout Widget](/checkout-widget/) - Documentation on implementing the checkout widget on storefronts.
4. [Unified Shipping Module](/usm/) - Neatly display all your shipping options neatly using the USM.
5. [3rd Party Integrations](/integrations/) - Integrations with other ecommerce tools including WMSs, TMSs and full fledged ecommerce platforms.

## Product card widget

Porterbuddy ships a widget with which you can display shipping availability on a product level within your store. Find information on the [Product card widget here](/product-card-widget/).

## Test and Production API Keys

If you want to test the API, you can send a request to dev@porterbuddy.com to receive a test API key. With a production account setup on [retailers.porterbuddy.com](https://retailers.porterbuddy.com) (this is done by your key account manager), you can find your production API key under the _profile_ menu.

## Samlevert/Consolidated Delivery

A feature of Porterbuddy is consolidated deliveries that allow customers to purchase from a store and receive subsequent orders within the same delivery window, placed on other stores, for free. This allows customers to save delivery cost, and helps retailers within the Samlevert network upsell products.
[Here is information on how to handle Samlevert delivery windows](/guides/samlevert-introduction/).

## Full order flow with TMS and WMS

Below is an integration flow diagram showing the process from a storefront to packing completion in a warehouse.

![](https://lh5.googleusercontent.com/4yXW_hxBmEs3ka_w_cu7tifuvkfgoLxbXPP6VzJ0Bouh6vMNRYQ39kqDbMoa2teEyf1fNhFw_9DeiUN-TbZcIx-tHg1hDIg3YufQByIf3WnPHgiixph_JlPid9mxwhSnxx9khWrU)
