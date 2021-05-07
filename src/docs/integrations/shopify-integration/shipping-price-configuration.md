# Configuring the shipping price in Shopify
The Porterbuddy integration for Shopify is able to handle shipping rate adjustments and discounts for the shipping price displayed in the checkout list. There is two ways to configure the shipping price for Porterbuddy Shipping in Shopify:

- Using "adjust rate" in the Shopify store settings on the entry for "Porterbuddy delivery"
- Using the discount entries in the Porterbuddy Shopify app configuration
## Adjusting the shipping price via Shopify Settings

The shipping rate adjustment is available in the store settings -> Shipping Settings -> General Shipping -> Shipping To. "Porterbuddy delivery" should appear in the tab "carrier and app rates". By opening "edit rate" from the 3-dot menu, the shipping rate can be adjusted either by a percentage or by a fixed amount. This adjustment is always applied to the rates returned by the Porterbuddy app.

## Using the discount configuration in the Porterbuddy app

The Porterbuddy Shopify app allows to configure discounts based on the shopping cart value transferred in the checkout. Multiple discounts can be added depending on value, to offer a higher shipping discount for large purchases. To configure discounts in the app, add the discounts in the app configuration page. A general discount can be added here by adding a discount for a shopping cart value of 0.

![Shopify app discount configuration](https://widget.porterbuddy.com/page-assets/shopify-discounts.png)

## Product card widget

The product card widget needs to be configured separately to show the desired shipping price. It should reflect the discounts configured for the Porterbuddy app, so that the advertised price is the same as the one shown in the checkout. For a flat discount, this can be done by setting the "discount" configuration property of the product card widget.


    <div id="porterbuddy-widget" data-border></div>
    {% raw %}
      <script>
        window.porterbuddy = {
          token: 'y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX',
          view: 'availability',
          discount: 5000
        }
      </script>
    {% endraw %}

For a value based discount, there are several possibilities to use the product card widget. One option is to use the multiple discount feature of the product card widget as [shown here](https://widget.porterbuddy.com/multi-discounts), to add an incentive to add products to the shopping cart.


    <div id="porterbuddy-widget" data-border></div>
    {% raw %}
    <script>
      window.porterbuddy = {
        token: 'y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX',
        view: 'availability',
        discount: 5000,
        additionalDiscounts: {
          largeOrder: 10000
        },
        text: {
          availabilityPostcodeSuccess: "Hjem {{delivery}} med Porterbuddy fra **{{price_lowest_price}}** eller kun **{{price_lowest_price_largeOrder}}** om du handler for over 1000,-"
        }
      }
    </script>
    {% endraw %}

Another option is to take the product price and the current shopping basket value into account when configuring the product card widget. These can be evaluated in the shopify template as in the following example.


    <script>
      var discount = {{ cart.items_subtotal_price }} + {{ product.price }} > 50000 ? 5000 : 0;
    </script>
    <div id="porterbuddy-widget" data-border></div>
    {% raw %}
      <script>
        window.porterbuddy = {
          token: 'y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX',
          view: 'availability',
          discount: discount
        }
      </script>
    {% endraw %}

If this approach is chosen, it's best to replicate the discount levels configured in the app in the template code, to provide an accurate price for what is to be expected in the checkout for Porterbuddy shipping.


