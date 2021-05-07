# Excluding Products in Shopify from Porterbuddy Shipping
The Porterbuddy Shopify integration has several configuration options to not offer Porterbuddy shipping options for certain products. Products can be excluded based on inventory levels, inventory levels at a selected location, and not offering Porterbuddy shipping if the shopping cart contains products containing a tag from a list of excluded tags.

## Limit shipping to available products

The Porterbuddy Shopify app can be set to only offer Porterbuddy shipping if all products in the shopping cart are in currently in stock. This is activated by checking the Checkbox "Check inventory if items are in stock" in the app configuration. Activating this option is useful when your shop offers to order products that are currently out of stock to get them when they become available again.

![inventory check configuration dialog](https://widget.porterbuddy.com/page-assets/shopify-inventory-check.png)


There is also the option to limit Porterbuddy shipping to products which are in stock at a certain location by checking the checkbox for that and picking the desired location from the dropdown. This special case could be important in scenarios where inventory is stored at multiple warehouses, but only one of them is able to serve Porterbuddy deliveries.
**Product card widget considerations:** The configuration for the Shopify app only affects the checkout, the product card widget is completely independent from it. To not falsely advertise Porterbuddy delivery when it's actually possible, the product card widget should only be shown in the page when products are actually available. A general check for availability can be done in Shopify's templates by evaluating the property "product.available" in an "if" expression.

    {% if product.available %}
      <div id="porterbuddy-widget" data-border></div>
      {% raw %}
        <script>
          window.porterbuddy = {
            token: 'y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX',
            view: 'availability'
          }
        </script>
      {% endraw %}
    {% endif %}
## Exclude products using tags

Products can also be exempt from Porterbuddy shipping by assigning a special tag to all products that should not have Porterbuddy shipping as an option. A list of these tags can be entered in the Shopify app configuration in the field ", seperated by commas.


![Exclude tag list in configuration](https://widget.porterbuddy.com/page-assets/shopify-exclude-tags.png)


If the shopping cart in checkout contains at least one product that is tagged with one of the tags from the list, Porterbuddy shipping options will not be shown in the shipping option list.
**Product card widget considerations:** To hide the product card widget for products that are tagged not to be shipped with Porterbuddy, the product tags can be checked by evaluating "product.tags" in the Shopify theme. As this property contains a list of tags, using the "contains" function here is the easiest way to check if an excluded tag is present for the product.


    {% unless product.tags contains 'nopb' %}
      <div id="porterbuddy-widget" data-border></div>
      {% raw %}
        <script>
          window.porterbuddy = {
            token: 'y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX',
            view: 'availability'
          }
        </script>
      {% endraw %}
    {% endunless %}

**Considerations regarding tags:** As tags on products are also relevant for searches and indexing in search engines, it's best to choose a tag for this function that is not commonly searched for, so it won't affect search results.

