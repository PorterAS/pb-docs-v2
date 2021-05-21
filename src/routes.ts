export const sidebarRoutes: SidebarRouteType[] = [
  {
    group: "api_reference",
    label: "API Reference",
    parentPath: "/api-reference/",
    children: [
      {
        routePath: "/api-reference/availability-api/",
        label: "Delivery availability",
      },
      {
        routePath: "/api-reference/order-api/",
        label: "Plaing an order",
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
    parentPath: "/checkout_widget/",
    children: [
      // {
      //   routePath: "",
      //   label: "",
      // },
    ],
  },
  {
    group: "guides",
    label: "Guides",
    parentPath: "/guides/",
    children: [
      {
        routePath: "/samlevert-upgrade-guide/",
        label: "Samlevert upgrade guide",
      },
      {
        routePath: "/testing-your-porterbuddy-integration/",
        label: "Testing your integration",
      },
    ],
  },
]

interface SidebarRouteType {
  group: string
  label: string
  parentPath: string
  children: RouteType[]
}

type RouteType = {
  routePath: string
  label: string
}
