export const faqContent: FAQType[] = [
  {
    question:
      "How do I migrate an old Porterbuddy widget to the updated widget?",
    answer:
      "The porterbuddy documentation is up to date, you can use that to update the specifications of your widgets. For specific product updates, we will provide update guides documenting how an upgrade should be done.",
  },
  {
    question: "How do I get test credentials for the Porterbuddy API?",
    answer:
      "Create a test account on https://retailers.porterbuddy-test.com/CreateNewUser. Once an account is created, you can find your API credentials under your profile on retailers.porterbuddy-test.com.",
  },
  {
    question: "How do I set up new accounts/users in production?",
    answer:
      "Your key account manager will provide you with a link to create a live Porterbuddy account. You can find your live API keys by going to your profile menu under retailers.porterbuddy.com ",
  },
  {
    question: "How do we handle out of stock products?",
    answer: "Porterbuddy deliveries can only be created for products in stock",
  },
  {
    question:
      "Can we have two cut offs times (with warehouse elsewhere than Oslo-area)?",
    answer: "Yes, if they are within Porterbuddy's delivery region",
  },
  {
    question:
      "As a retailer, what do we do if we dont have dimensions on the products?",
    answer:
      "We need at least product or parcel size information to create an order",
  },
  {
    question: "How do we upgrade a Porterbuddy plugin?",
    answer:
      "This depends on the plugin type, and you can update the plugin implementation using an upgrade guide we will provide",
  },
  {
    question:
      "As a retailer, can I have two warehouses and deliver products from each warehouse with the same driver?",
    answer: "Yes",
  },
  {
    question:
      "As a retailer, do we have to send specific opening hours for our warehouse as part of the API integration?",
    answer:
      "Yes you can specify pickup windows when checking for available windows, however, this is not mandatory. Cutoff times are specified in the account settings",
  },
  {
    question:
      "As a retailer, do I have to scan each parcel in connection with packing and label print in the warehouse, and why?",
    answer:
      "No you do not have to but its make its easier for us and you to see what has been scanned on the partner web portal.",
  },
  {
    question:
      "Why does Porterbuddy pick up at retailer warehouses only on scheduled intervals? Why doesn't Porterbuddy pick up goods when ready packed for storing in our warehouse?",
    answer:
      "We currently don't store goods. Our line-haul is scheduled to make pickups are intervals for efficiency. This way, the retailer collates all items on hand. And we have a mandate to deliver packages daily",
  },
  {
    question: "Does Unifaun shipment work with PorterBuddy?",
    answer:
      "Yes it does work. However, we do not entirely recommend it due to the absence of the Samlevert delivery window",
  },
  {
    question: "Does Klarna shipment Assistant + Unifaun checkout work?",
    answer:
      "Yes it does work. However, we do not entirely recommend it due to the awkward presentation of the delivery windows and the absence of the Samlevert window",
  },
  {
    question:
      "When should we use Unified Shipping Module (USM), which systems is it compatible with?",
    answer:
      "The USM can be used in 'any' checkout interface to efficiently present shipping options to a customer. The USM is optimized for conversion in checkout.",
  },
  {
    question:
      "How do I migrate an existing woocommerce plugin over to the new plugin? ",
    answer:
      "Uninstall the old plugin and install the new one along with its configurations. This should follow the setup guide for the WooCommerce plugin",
  },
  {
    question:
      "Can stores sell outside of Norway with the Unified Shipping Module (USM)?",
    answer:
      "As the USM replaces the user interface that displays any shipping options, the USM works regardless of the customer's location",
  },
  {
    question:
      "How can we customize the widget? Can we customize its size and colour?",
    answer:
      "The widget is built to be responsive and scales with the width of the bounding area on the website. Only the text and shipping options images can be customized",
  },
  {
    question: "How can I change the shipping price in shopify?",
    answer:
      "Discounts in shopify are set in the plugin page for Shopify. This is found in the Shopify admin panel",
  },
  {
    question:
      "Which Porterbuddy product should be activated in Consignor and Unifaun (nShift)?",
    answer: "You should activate Delivery and Samlevert",
  },
]

export type FAQType = {
  question: string
  answer: string
}
