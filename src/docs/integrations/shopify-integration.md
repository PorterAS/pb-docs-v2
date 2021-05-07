# Shopify Integration

The Porterbuddy integration for Shopify consists of two components. The regular [product card widget](https://widget.porterbuddy.com/availability) can be used on product pages to show availability of Porterbuddy delivery early in the shopping process. For the checkout, a Shopify App is provided that will insert Porterbuddy delivery options in the checkout and handle the creation of orders in Porterbuddy's system when a customer chooses a Porterbuddy delivery window.

## Requirements

The Porterbuddy Shopify App requires that the Shopify plan for the target shop must include the feature "Carrier Calculated Shipping" to work as intended. This feature is available per default on the Shopify Advanced and Shopify Plus plans (as shown [here](https://en.shopify.no/pricing)) , but can also be enabled for other plans for an additional fee by contacting Shopify support. For some plans, this feature can also be added free-of-charge by switching from monthly to yearly payment, please also contact Shopify support for enquiries if this is possible.
To be able to use both product card widget and the Porterbuddy app in a shopify store, a Porterbuddy API key and an access token is required. For enquiries, please use the [contact button](https://porterbuddy.com/business) on our public website. If you already have an agreement and a sender account with Porterbuddy, you can find your API key and public token in the profile page of our partner portal by clicking the button "Hent API-Nøkler".

## Checkout - Porterbuddy Shopify App

As Shopify does not allow customization of the checkout page, the regular checkout or consolidated checkout widgets cannot be used here. The Porterbuddy Shopify app inserts Porterbuddy delivery window options into the list of shipping options shown during the checkout flow in Shopify stores. Additionally, the Shopify app configures a webhook to receive orders from the store to create Porterbuddy orders in the backend when customers chose Porterbuddy as delivery option. No manual implementation is required in the Shopify store setup to use the Porterbuddy Shopify app.

![shopify checkout example](https://widget.porterbuddy.com/page-assets/shopify-checkout.png)

## Installation

The installation process for the Shopify app will redirect to the Shopify page to authorize the app to access the store's data via the Shopify API. After authenticating the app, it will appear in "installed apps" in the shop administration pages, clicking on the app there will open the configuration page for the app. The installation is started by entering your Shopify shop name `(<your-shop>.myshopify.com)` into the input below and clicking on "Install".
.myshopify.com Install App

## Product Card Widget

The product card widget can be added to a Shopify store in similar fashion as in any other webshop environment. The way of integrating the product card widget is dependent on the shop's theme structure, so a step-by-step guide is not possible to provide. In general, integrating it should be adding the product card widget as described in the [documentation page](https://widget.porterbuddy.com/availability) to the template for product pages.

## Integration example

An integration based on Shopify's debut theme could look like this:

- Add the tags to load porterbuddy-widget.js and the css to the head section of the theme in "theme.liquid"

```html
<link
  href="https://widget.porterbuddy.com/porterbuddy-widget.css"
  rel="stylesheet"
  type="text/css"
/>
<script
  async
  src="https://widget.porterbuddy.com/porterbuddy-widget.js"
></script>
```

- Add a `<div>` with id "porterbuddy-widget" and a `<script>` element configuring the widget in the product page template "product-template.liquid".

```html
{% raw %}
<div id="porterbuddy-widget"></div>
<script>
  window.porterbuddy = {
    token: "y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX",
    view: "availability",
  }
</script>
{% endraw %}
```

## Shipping price

The Porterbuddy API returns a default shipping price (kr 149,- in the default case). To adjust this to the desired price for the Porterbuddy option, best practice is to configure a discount that will be subracted from the standard price. Detailed instructions how to configure this in both Shopify checkout and product card widget can be [found here](https://widget.porterbuddy.com/shopify-discounts).

## Recommendations and hints

Some recommendations in regard to integrating the product card widget:

- Configure discounts the same as in the Shopify App or store configuration to not advertise a false price
- Only show the product card widget for products that are currently in stock - advertising same day delivery when it cannot be fulfilled is disappointing

## Tips and best practices

- Porterbuddy requires both email address as well as a phone number. To ensure customers provide both in the checkout process, choose the option "Customers can only check out using email" in Store Settings -> Checkout -> Customer contact. The customer will be asked to add a phone number if they chose Porterbuddy delivery in the shipping options.
- If "Samlevert" should be offered to customers, the phone number should be made mandatory in the checkout. This can be adjusted in the "form" settings for the checkout page in the Shopify shop settings page.
- If there is a discount configured in the Shopify settings for Porterbuddy shipping as well as in the app configuration page, both discounts will be applied to the prices shown in the shipping option list.
- If the "test mode" checkbox is enabled in the app configuration, Porterbuddy shipping options will only be offered when "pbtest" is entered into the second line of the address input in the checkout. Note that this will still create orders in the production system if a checkout is completed using that magic string. For testing the setup of a new shop before going public, this page on [widget.porterbuddy-test.com](https://widget.porterbuddy-test.com/shopify) will install a test version of the app that is connected to Porterbuddy's test enviroment. To switch to production, delete the test app from your store and install the production version app from [widget.porterbuddy.com](https://widget.porterbuddy.com/shopify), and configure it in the same way as the test app.
