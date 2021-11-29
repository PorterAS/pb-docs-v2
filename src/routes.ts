export const sidebarRoutes: SidebarRouteType[] = [
  {
    group: "getting_started",
    label: "Get started",
    parentPath: "/getting-started/",
    icon: "FaPlay",
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
      {
        routePath: "/product-card-widget/callback-functions/",
        label: "Callback functions",
      },
    ],
  },
  {
    group: "checkout_widget",
    label: "Checkout Widget",
    icon: "FaShoppingCart",
    parentPath: "/checkout-widget/",
    children: [
      // {
      //   routePath: "",
      //   label: "",
      // },
    ],
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
    label: "Frequently asked questions",
    parentPath: "/faqs/",
    icon: "FaInfoCircle",
  },
  {
    group: "pb_community",
    label: "PB Community",
    parentPath: "/community/",
    icon: "FaPeopleCarry",
  },
  {
    group: "changelog",
    label: "Changelog",
    parentPath: "/changelog/",
    icon: "FaCodeBranch",
  },
]

interface SidebarRouteType {
  group: string
  label: string
  parentPath: string
  icon?: string
  children?: RouteType[]
}

type RouteType = {
  routePath: string
  label: string
}
