declare global {
  interface Window {
    porterbuddy: any
    udpateDeliveryWindows: (
      availabilityResponse:
        | AvailabilityResponseType
        | DeliveryWindowType[]
        | undefined
    ) => void
    unselectDeliveryWindow: () => void
    setSelectedDeliveryWindow: (
      deliveryWindow: DeliveryWindowType | null | undefined,
      selectDefault?: boolean
    ) => void
    forceRefreshReference: () => Promise<void>
    selectedDeliveryWindow: DeliveryWindowType
  }
}

type PriceType = {
  fractionalDenomination: number
  currency: string
}

export type AvailabilityResponseType = {
  originResolvedAddress: ResolvedAddressType
  destinationResolvedAddress: ResolvedAddressType
  deliveryWindows: DeliveryWindowType[]
  consolidatedWindow?: DeliveryWindowType
  flags?: string[]
}

export type ResolvedAddressType = {
  streetName: string
  streetNumber: string
  postalCode: string
  city: string
  country: string
  location: { latitude: number; longitude: number } | null
  norwegian: boolean
  locationLookup: boolean
}

export type DeliveryWindowType = {
  start: string
  end: string
  product: string
  price: PriceType
  displayPrice?: PriceType
  expiresAt: string
  token: string
  consolidated: boolean
}
export interface IPBWidget {
  token: string
  view: "availability" | "checkout" | "deliveryInfo"
  language?: "NO" | "EN"
  apiMode?: "test" | "development" | "stage" | "production"
  apiBaseUrl?: string
  resetContext?: boolean
  allowStorage?: boolean
  allowGeoLocation?: boolean
  postalCode?: string
  cssClassPrefix?: string
  hideIfUnavailable?: boolean
  alternateAvailabilityView?: boolean
  text?: object
  discount?: number
  onUpdateDeliveryWindows?: (
    callback: (arg0: AvailabilityResponseType) => void,
    additionalInfo: any
  ) => void
  updateDeliveryWindowsInterval?: number
  availabilityCacheTTL?: number
  now?: string
  originAddress?: boolean
  additionalDiscounts?: any
  onStartFetchAvailability?: void
  onSetCallbacks?: (callbacks: any) => void
}

export interface IPBCheckoutWidgetType extends IPBWidget {
  availabilityResponse?: AvailabilityResponseType
  initialSelectedWindow?: DeliveryWindowType
  onSelectDeliveryWindow?: (window: DeliveryWindowType) => void
  wrapInForm?: boolean
  preserveStateAcrossRerender?: boolean
}

export interface IPBUnifiedShippingModule {
  homeDeliveryOptions: IShippingOption[]
  pickupPointOptions: IShippingOption[]
  storeOptions: IShippingOption[]
  resetContext?: boolean
  text?: object
  now?: string
  allowStorage?: boolean
  language?: "NO" | "EN"
  recipientinfoLocked?: boolean
  recipientInfo?: RecipientInfoType
  enableHtmlDescriptions?: boolean
  onSelectionChanged?: (
    category: "home" | "pickupPoint" | "store",
    selected: SelectedShippingType
  ) => void
  getPbAvailability?: (
    recipientInfo: RecipientInfoType
  ) => Promise<AvailabilityResponseType>
  getShhippingOptions?: (recipientInfo: RecipientInfoType) => Promise<{
    homeDeliveryOptions: IShippingOption[]
    pickupPointOptions: IShippingOption[]
    storeOptions: IShippingOption[]
  }>
  getStreetAddress?: (recipientInfo: {
    email: string
    postCode: string
  }) => Promise<string | undefined>
  onUnselectedShipping?: () => void
  onFirstLineEntered?: (data: { email: string; postCode: string }) => void
  onRecipientInfoEntered?: (recipientInfo: RecipientInfoType) => void
  selectionPropertyChangeListeners?: SelectionPropertyChangeListenerType[]
  onSetCallbacks?: (callbacks: CheckoutCallbacksType) => void
  padding?: "none" | undefined
}

interface IShippingOption {
  id?: string
  name?: string
  price?: PriceType
  description?: string
  deliveryTime?: DeliveryTimeType
  logoUrl?: string
  additionalData?: any
  updateInterval?: number
  onUpdateOption?: (callback: () => void) => void
  default?: boolean
}

interface PickupShippingOptionType extends IShippingOption {
  locations?: ShippingLocationType[]
}

interface ServiceLevelShippingOptionType extends IShippingOption {
  levels?: ShippingServiceLevelType[]
}
interface PorterbuddyShippingOptionType extends IShippingOption {
  availabilityResponse: AvailabilityResponseType
  discount?: number
}

type ShippingLocationType = {
  id?: string
  name?: string
  address?: string
  openingHours?: string
  logoUrl?: string
  description?: string
}

type ShippingServiceLevelType = {
  id?: string
  name?: string
  deliveryTime?: DeliveryTimeType
  price?: PriceType
}

type DeliveryTimeType = {
  text?: { format: "text"; line1: string; line2: string }
  exactDate?: { format: "exactDate"; date: string }
  estimatedDate?: { format: "estimatedDate"; date: string }
  rangeOfWeekdays?: {
    format: "rangeOfWeekdays"
    minDays: number
    maxDays: number
  }
  rangeOfDays?: { format: "rangeOfDays"; minDays: number; maxDays: number }
  exactNumberOfWeekdays?: { format: "exactNumberOfWeekdays"; days: number }
  exactNumberOfDays?: { format: "exactNumberOfDays"; days: number }
  estimatedNumberOfWeekdays?: {
    format: "estimatedNumberOfWeekdays"
    days: number
  }
  estimatedNumberOfDays?: { format: "estimatedNumberOfDays"; days: number }
}

type SelectedShippingType = {
  id?: string
  price?: PriceType
  deliveryTime?: DeliveryTimeType
  data?:
    | ShippingLocationType
    | ShippingServiceLevelType
    | SelectedPorterbuddyOptionType
  additionalData?: any
}

type SelectedPorterbuddyOptionType = {
  deliveryWindow?: DeliveryWindowType
  deliveryWindowIndex?: number
}

type SelectionPropertyChangeListenerType = {
  optionId: string
  propertyPath: string
  onChange: (value: any) => void
}

type RecipientInfoType = {
  email?: string
  postCode?: string
  streetAddress?: string
}

type CheckoutCallbacksType = {
  forceRefresh?: () => Promise<void>
  setRecipientInfo?: (recipientInfo: RecipientInfoType) => void
  refreshShippingOptions?: () => void
  setRecipientInfoLocked?: (recipientInfoLocked: boolean) => void
}
