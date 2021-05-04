export const sidebarRoutes: SidebarRouteType[] = [
  {
    group: "api_reference",
    label: "API Reference",
    parentPath: "/api-reference/",
    children: [
      {
        routePath: "/api-reference/get-delivery-window/",
        label: "Get delivery window",
      },
    ],
  },
  {
    group: "product_card",
    label: "Product Card",
    parentPath: "/product-card/",
    children: [
      {
        routePath: "",
        label: "",
      },
    ],
  },
  {
    group: "checkout_widget",
    label: "Checkout Widget",
    parentPath: "/checkout_widget/",
    children: [
      {
        routePath: "",
        label: "",
      },
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
    ],
  },
]

interface SidebarRouteType {
  group: string
  label: string
  parentPath?: string
  children: RouteProps[]
}

type RouteType = {
  routePath: string
  label: string
}
