# Shopify: Order handling options
The Porterbuddy integration for Shopify has several features to make handling Porterbuddy orders in Shopify easier. After a Shopify order with Porterbuddy delivery chosen as shipping option. These features include

- Storing the Porterbuddy order id on the Shopify order as additional info
- Tagging Shopify orders to be shipped with Porterbuddy to allow filtering/sorting in the shop admin view
## Note

To get access to these features, the Porterbuddy Shopify App needs the permission to write / update Shopify orders. As this permissions was not requested before September 23rd, 2020, these feature might not yet be active in your installation. If you cannot see a section "Order Handling" in the bottom of the app configuration page, you have to re-authenticate the app to allow the updated permissions. To do this, please use the installation link on [this page](https://widget.porterbuddy.com/shopify) with your Shopify shop domain again. This will update the permissions for the app, but keep the existing configuration.

## Porterbuddy Order IDs

If the permission to write orders is present, this feature will always be active. Every time a Shopify order with Porterbuddy delivery is created, the Porterbuddy order id will be stored on the Shopify order as additional info.

![Shopify: Display Porterbuddy-order-id](https://widget.porterbuddy.com/page-assets/shopify-order-id.png)

## Tagging Orders with Porterbuddy Delivery

You can configure a tag that will be added to all orders with Porterbuddy delivery selected after creating the order object in Porterbuddy's systems. To add a tag, specify the value to be added in the appropriate section of the app configuration page, and click "Configure Delivery" to save the updated configuration. If you want to disable writing a tag, delete the current value from the input field and save that, this will stop writing tags to new orders.

![Shopify: Configure writing tags for Porterbuddy orders](https://widget.porterbuddy.com/page-assets/shopify-write-tag.png)



