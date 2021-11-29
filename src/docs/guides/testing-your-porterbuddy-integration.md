---
title: "Testing Porterbuddy"
meta_title: "Testing your Porterbuddy Integration"
publishBy: "21-05-2021"
author: "William Imoh"
meta_description: "Test your Porterbuddy integration to mitigate errors in production"
---

## Overview
After integrating Porterbuddy into your e-commerce platform, it is vital to test your systems end-to-end to ensure its effectiveness.

This testing process aims at mitigating any technical or process issues that could occur during a live operation of your store.

This test recommends starting from your storefront and end at the doorstep of a delivery location.

You should test the following portions of your e-commerce system:

- Porterbuddy and shipping slots availability
- Storefront checkout and order placement
- Printing order labels and packing an order
- Order pickup and delivery

Below, we highlight the following steps to test your Porterbuddy implementation.

**TL: DR**

1. Login to the test Porterbuddy Partner Portal
2. Run the integration in your test environment using test credentials.
3. Assess your store Product interface and checkout flow
4. Place a test order in the test environment and verify the order
5. Activate your live store using your production credentials
6. Place and deliver a live order to test

## Step 1 - Log in to the test Porterbuddy Partner Web Portal

The Partner web portal is a platform where you manage your Porterbuddy orders. You can scan existing orders, create new orders or find information on created orders. Information, including your API key and secret, is also obtained from the web portal.
You can access the test Partner web portal using the link:
https://retailers.porterbuddy-test.com
Your account manager will provide a unique link to create a login account to the portal.

## Step 2 - Run your test environment

While building with Porterbuddy, we advise you do so in two environments, staging (test) and production (live). Both environments require different credentials, which are the public token and the API key. After creating a Porterbuddy account using the unique link sent to you on a commercial contract’s completion, you get both credentials.

The API key is in the partner web portal’s profile settings https://retailers.porterbuddy.com/profile.
In addition to using the test API key, you should also use a test API URL.

Your test environment should simulate an actual store experience with customers seeing the Product widget for each product and the shipping slots from Porterbuddy during checkout.
Placing test orders should also be possible in your test environment.

## Step 3 - Assess your shopping experience

In your test environment/store, you need to assess the shopping experience on your store with Porterbuddy active. Things to check are:

- The Product card widget’s display and if customers can specify a postcode to see delivery availability.
- Shipping slots display in checkout when a customer sets a postcode, either in an input element or using the Universal Shipping Module.
- Suppose you have Samlevert active, and the customer entered an email and postcode used in placing an undelivered order in any store with Samlevert active. In that case, the checkout page should show a shipping option for Samlevert (get it with your existing order) with Zero fees. We deliver the Samlevert orders with other orders placed by the same customer.
- A customer can checkout using the selected Porterbuddy shipping slot.
- The shopping experience doesn’t break your existing storefront user experience.

## Step 4 - Place and verify a test order

You need to place a test order with Porterbuddy shipping options in your test store and select a Porterbuddy shipping slot.
Once you place an order, verify that the order is visible in your test Partner portal account accessible on https://retailers.porterbuddy-test.com.
In the test partner web portal, verify that all information required is present in the order, including the recipient and parcel information, if available at the time.

The parcel information is updated using the `update-shipment-details` API call during integration. https://developer.porterbuddy.com/#update-shipment-information

Shipping labels are available once the parcel information is specified. This shipping label can be printed from the Partner web portal or obtained from the API response to update shipment details.

This step is also an excellent time to test your Warehouse and Transport management systems in production.

## Step 5 - Activate your live store

With the test store active and an order placed and verified, activate your live store using a live API key and public token. You require a live account to obtain access to the live Partner web portal. Contact your sales manager to get a link to create a live Partner web portal account.
You can get your live API key from the live web portal accessible on https://retailers.porterbuddy.com/profile.

The live store should be a replica of the experience tested on the test store. You should only use the API key gotten from the live partner portal in the live store.

> **If you use a test API key in a live store, we will not receive or pick up customer orders. Ensure you use a live API key on a live store**

In addition to using a live API key, you should also change the API URL from a test one to a live one.

## Step 6 - Place a live order

Following the activation of your live store, you need to quickly place a live order to test and understand the process end-end from order placement to delivery.
Our line-haul will pick up this test order during the specified pickup windows. Finally, we will deliver the order during the customer specified delivery window.

You should coordinate this pickup and delivery process with our logistics team. Your account manager will help in setting up the communication lines.

In-between an order placement and its pickup by our drivers, test your WMS and TMS systems when fulfilling the order.

If all these tests pass and you complete these steps, you are ready to deliver exceptional service with Porterbuddy. If you have any questions, quickly reach out to your account manager or send us an email to [partner@porterbuddy.com](mailto:partner@porterbuddy.com).

## Other cases

The following cases are worthy of note when testing:

1. When a customer cancels an order
2. When a customer changes the delivery time before we pick up the order
