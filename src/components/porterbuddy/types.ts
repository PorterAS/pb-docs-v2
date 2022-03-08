declare global {
  interface Window extends ICheckoutCallbacks {
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
  expiresAt?: string
  token?: string
  consolidated?: boolean
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

export interface IPBCheckoutWidget extends IPBWidget {
  availabilityResponse?: AvailabilityResponseType
  initialSelectedWindow?: DeliveryWindowType
  onSelectDeliveryWindow?: (window: DeliveryWindowType) => void
  wrapInForm?: boolean
  preserveStateAcrossRerender?: boolean
}

export interface IPBUnifiedShippingModule {
  homeDeliveryOptions?: IShippingOption[] | undefined
  pickupPointOptions?: IShippingOption[] | undefined
  storeOptions?: IShippingOption[] | undefined
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
  getShippingOptions?: (recipientInfo: RecipientInfoType) => Promise<{
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
  selectionPropertyChangeListeners?: SelectionPropertyChangeListenerType[] // Deprecated
  onSetCallbacks?: (callbacks: ICheckoutCallbacks) => void
  padding?: "none" | undefined
}

export interface IShippingOption {
  id: string
  name: string
  price?: PriceType
  description?: string
  deliveryTime?: DeliveryTimeType
  logoUrl?: string
  additionalData?: any
  updateInterval?: number
  onUpdateOption?: (callback: () => void) => void
  default?: boolean
}

// Obsolete
export interface IPickupShippingOption extends IShippingOption {
  locations?: ShippingLocationType[]
}
// Obsolete

export interface IServiceLevelShippingOption extends IShippingOption {
  levels?: ShippingServiceLevelType[]
  availabilityResponse?: any
}

// Obsolete
export interface IPorterbuddyShippingOption extends IShippingOption {
  availabilityResponse: AvailabilityResponseType
  discount?: number
}

type ShippingLocationType = {
  id: string
  name: string
  address: string
  openingHours: string
  logoUrl?: string
  description?: string
}

type ShippingServiceLevelType = {
  id?: string
  name?: string
  deliveryTime?: DeliveryTimeType
  price?: PriceType
  description?: string
}

type LocalDateType = string // "YYYY-MM-DD"
export type DeliveryTimeType =
  | { format: "text"; line1: string; line2: string } // e.g. "${line1}, ${line2}"
  | { format: "exactDate"; date: LocalDateType } // e.g. "om 4 dg, 4. okt" / "I dag, 30. sept" / "I morgen, 1. okt"
  | { format: "estimatedDate"; date: LocalDateType } // e.g. "ca 4 dg, forventet 4. okt" / "I dag, 30. sept" / "I morgen, forventet 1. okt"
  | { format: "rangeOfWeekdays"; minDays: number; maxDays: number } // e.g. "1-4 dg, innen 4. okt"
  | { format: "rangeOfDays"; minDays: number; maxDays: number } // e.g. "1-4 dg, innen 4. okt"
  | { format: "exactNumberOfWeekdays"; days: number } // e.g. "4 dg, 4. okt"
  | { format: "exactNumberOfDays"; days: number } // e.g. "4 dg, 4. okt"
  | { format: "estimatedNumberOfWeekdays"; days: number } // e.g. "ca 4 dg, forventet 4. okt"
  | { format: "estimatedNumberOfDays"; days: number } // e.g. "ca 4 dg, forventet 4. okt"
export interface ISelectedPorterbuddyConsolidationOption {
  deliveryWindow?: DeliveryWindowType
  consolidatedWindow?: DeliveryWindowType
  deliveryWindowIndex?: number
  leaveAtDoorstep?: boolean
  comment?: string
}

type SelectedShippingType = {
  id?: string
  price?: PriceType
  deliveryTime?: DeliveryTimeType
  data?:
    | ShippingLocationType
    | ShippingServiceLevelType
    | SelectedPorterbuddyOptionType
    | ISelectedPorterbuddyConsolidationOption
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

export type RecipientInfoType = {
  email?: string
  postCode: string
  streetAddress: string
}

interface ICheckoutCallbacks {
  forceRefresh: () => Promise<void>
  setRecipientInfo: (recipientInfo: RecipientInfoType) => void
  refreshShippingOptions: () => void
  setRecipientInfoLocked: (recipientInfoLocked: boolean) => void
}
