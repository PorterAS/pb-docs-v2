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
  price: { fractionalDenomination: number; currency: string }
  displayPrice?: { fractionalDenomination: number; currency: string }
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

export interface PBCheckoutWidgetType extends IPBWidget {
  availabilityResponse?: AvailabilityResponseType
  initialSelectedWindow?: DeliveryWindowType
  onSelectDeliveryWindow?: (window: DeliveryWindowType) => void
  wrapInForm?: boolean
  preserveStateAcrossRerender?: boolean
}
