export const sidebarRoutes: SidebarRouteType[] = [
  {
    group: "getting_started",
    label: "Get started",
    parentPath: "/getting-started/",
    icon: "FaPlay",
    accordion: false,
  },
  {
    group: "api_reference",
    label: "API Reference",
    icon: "FaBook",
    parentPath: "/api-reference/",
    children: [
      {
        routePath: "/api-reference/availability-api/",
        label: "Delivery availability",
      },
      {
        routePath: "/api-reference/order-api/",
        label: "Planing an order",
      },
      {
        routePath: "/api-reference/place-a-consolidated-order/",
        label: "Consolidated Order - Samlevert",
      },
      {
        routePath: "/api-reference/fetching-order-data/",
        label: "Fetch order data",
      },
      {
        routePath: "/api-reference/update-shipment-information/",
        label: "Update shipment information",
      },
      {
        routePath: "/api-reference/set-parcel-details/",
        label: "Set parcel details",
      },
      {
        routePath: "/api-reference/fetch-labels/",
        label: "Fetch labels",
      },
      {
        routePath: "/api-reference/order-status/",
        label: "Order status",
      },
      {
        routePath: "/api-reference/order-status-webhook/",
        label: "Order status webhook",
      },
      {
        routePath: "/api-reference/confirmed-parcel-scan/",
        label: "Confirmed parcel scan",
      },
      {
        routePath: "/api-reference/implementation-notes/",
        label: "Implementation notes",
      },
      {
        routePath: "/api-reference/confirm-order/",
        label: "Confirm order",
      },
      {
        routePath: "/api-reference/errors/",
        label: "Errors",
      },
    ],
  },
  {
    group: "product_card",
    label: "Product Card Widget",
    icon: "GiClothJar",
    parentPath: "/product-card-widget/",
    children: [
      {
        routePath: "/product-card-widget/configuration-options/",
        label: "Configuration options",
      },
      {
        routePath: "/product-card-widget/callback-functions/",
        label: "Callback functions",
      },
      {
        routePath: "/product-card-widget/text-replacement/",
        label: "Text replacement",
      },
      {
        routePath: "/product-card-widget/origin-addresses/",
        label: "Origin addresses",
      },
      {
        routePath: "/product-card-widget/multiple-discounts/",
        label: "Multiple discounts",
      },
      {
        routePath: "/product-card-widget/customizing-text/",
        label: "Customizing text",
      },
    ],
  },
  {
    group: "checkout_widget",
    label: "Checkout Widget",
    icon: "FaShoppingCart",
    parentPath: "/checkout-widget/",
    children: [
      {
        routePath: "/checkout-widget/configuration/",
        label: "Configuration",
      },
      {
        routePath: "/checkout-widget/callbacks/",
        label: "Callbacks",
      },
      {
        routePath: "/checkout-widget/periodic-updates/",
        label: "Periodic updates",
      },
      {
        routePath: "/checkout-widget/checkout-iframe/",
        label: "Checkout iframe",
      },
      {
        routePath: "/checkout-widget/customizing-text/",
        label: "Customizing text",
      },
      {
        routePath: "/checkout-widget/text-replacement/",
        label: "Text replacement",
      },
      {
        routePath: "/checkout-widget/integration-example/",
        label: "Integration example",
      },
      {
        routePath: "/checkout-widget/anonymous-consolidation/",
        label: "Anonymous consolidation",
      },
      {
        routePath: "/checkout-widget/consolidation-check/",
        label: "Consolidation check",
      },
    ],
  },
  {
    group: "usm",
    label: "Unified Shipping Module",
    parentPath: "/usm/",
    icon: "FaCircle",
    children: [
      {
        routePath: "/usm/integration/",
        label: "Integration",
      },
      {
        routePath: "/usm/configuration/",
        label: "Configuration",
      },
      {
        routePath: "/usm/data-model/",
        label: "Data models",
      },
      {
        routePath: "/usm/callbacks/",
        label: "Callback functions",
      },
      {
        routePath: "/usm/consolidation/",
        label: "Consolidation",
      },
      {
        routePath: "/usm/periodic-updates/",
        label: "Periodic updates",
      },
      {
        routePath: "/usm/text-replacement/",
        label: "Text replacement",
      },
      {
        routePath: "/usm/logos/",
        label: "Shipping option logos",
      },
      {
        routePath: "/usm/interoperation/",
        label: "Interoperation",
      },
      {
        routePath: "/usm/iframe-integration/",
        label: "Iframe integration",
      },
      {
        routePath: "/usm/html-descriptions/",
        label: "HTML descriptions",
      },
    ],
    accordion: true,
  },
  {
    group: "integrations",
    label: "Integrations",
    parentPath: "/integrations/",
    icon: "GrIntegration",
    children: [
      {
        routePath: "/integrations/shopify-integration/",
        label: "Shopify",
      },
      {
        routePath: "/integrations/woocommerce/",
        label: "WooCommerce",
      },
      {
        routePath: "/integrations/unifaun/",
        label: "nShift - Unifaun",
      },
      {
        routePath: "/integrations/ksa-proxy/",
        label: "Klarna KSA",
      },
    ],
  },
  {
    group: "guides",
    label: "Guides",
    parentPath: "/guides/",
    icon: "FaBookOpen",
    children: [
      {
        routePath: "/guides/porterbuddy-large/",
        label: "Porterbuddy Large???",
      },
      {
        routePath: "/guides/samlevert-introduction/",
        label: "Introduction to Samlevert",
      },
      {
        routePath: "/guides/samlevert-upgrade-guide/",
        label: "Samlevert upgrade guide",
      },
      {
        routePath: "/guides/testing-your-porterbuddy-integration/",
        label: "Testing your integration",
      },
    ],
  },
  {
    group: "faqs",
    label: "FAQs",
    parentPath: "/faqs/",
    icon: "FaInfoCircle",
    accordion: false,
  },
  {
    group: "pb_community",
    label: "PB Community",
    parentPath: "/community/",
    icon: "FaPeopleCarry",
    accordion: false,
  },
  {
    group: "changelog",
    label: "Changelog",
    parentPath: "/changelog/",
    icon: "FaCodeBranch",
    accordion: false,
  },
]

export interface SidebarRouteType {
  group: string
  label: string
  parentPath: string
  icon?: string
  children?: RouteType[]
  accordion?: boolean
}

type RouteType = {
  routePath: string
  label: string
}
