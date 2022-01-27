import { createDeliveryWindows } from "./CreateDeliveryWindows"
import postenLogo from "../../images/usm/posten.svg"
import postnordLogo from "../../images/usm/postnord.svg"
import webshopLogo from "../../images/usm/webshop-logo.svg"
import {
  AvailabilityResponseType,
  IPickupShippingOption,
  IPorterbuddyShippingOption,
  IServiceLevelShippingOption,
} from "./types"

export const pbAvailabilityDataUSM: AvailabilityResponseType = {
  originResolvedAddress: {
    streetName: "Haraldrudveien",
    streetNumber: "11",
    postalCode: "0581",
    city: "Oslo",
    country: "Norge",
    location: {
      latitude: 59.93022998178418,
      longitude: 10.824324998724737,
    },
    norwegian: true,
    locationLookup: false,
  },
  destinationResolvedAddress: {
    streetName: "Høyenhallveien",
    streetNumber: "25",
    postalCode: "0678",
    city: "OSLO",
    country: "Norway",
    location: null,
    norwegian: true,
    locationLookup: false,
  },
  deliveryWindows: createDeliveryWindows(),
}

export const homeOptions: (
  | IPorterbuddyShippingOption
  | IServiceLevelShippingOption
)[] = [
  {
    id: "porterbuddy",
    name: "Levert hjem",
    availabilityResponse: pbAvailabilityDataUSM,
    discount: 5000,
    default: true,
  },
  {
    id: "postnord",
    name: "Levert hjemme",
    price: {
      fractionalDenomination: 9900,
      currency: "NOK",
    },
    deliveryTime: {
      format: "rangeOfWeekdays",
      minDays: 2,
      maxDays: 5,
    },
    logoUrl: postnordLogo,
    additionalData: {
      product: "Standard Insured Parcel",
    },
  },
  {
    id: "postenhome",
    name: "Posten på døren",
    logoUrl: postenLogo,
    levels: [
      {
        id: "bedrift",
        name: "Posten Bedriftspakke",
        deliveryTime: { format: "rangeOfWeekdays", minDays: 1, maxDays: 3 },
        price: {
          fractionalDenomination: 29900,
          currency: "NOK",
        },
        description: "Direkte til din bedrift med sporing",
      },
      {
        id: "express",
        name: "Posten Expresspakke",
        deliveryTime: { format: "exactNumberOfWeekdays", days: 1 },
        price: {
          fractionalDenomination: 49900,
          currency: "NOK",
        },
        description:
          "Levering innen kl. 09:00 eller kl. 11:30 neste morgen, mandag til fredag",
      },
    ],
  },
]

export const pickupOptions: IPickupShippingOption[] = [
  {
    id: "posten",
    name: "Hente på utleveringssted",
    price: {
      fractionalDenomination: 5900,
      currency: "NOK",
    },
    deliveryTime: { format: "rangeOfWeekdays", minDays: 1, maxDays: 3 },
    locations: [
      {
        id: "location_1",
        name: "Coop Mega Sjølyst",
        address: "Karenslyst Allé 58, 0277 Oslo",
        openingHours: "Man - Fre: 08:00 - 22:00, Lør: 08:00 - 20:00",
        logoUrl: postenLogo,
      },
      {
        id: "location_2",
        name: "Hoff Post i Butikk",
        address: "Hoffsveien 10 E, 0275 Oslo",
        openingHours: "Man - Lør: 06:00 - 23:59",
        logoUrl: postenLogo,
      },
      {
        id: "location_3",
        name: "Elisenberg postkontor",
        address: "Balchens Gate 7, 0265 Oslo",
        openingHours: "Man - Fre: 09:00 - 18:00, Lør: 10:00 - 15:00",
        logoUrl: postnordLogo,
      },
    ],
  },
]

export const storeOptions: IPickupShippingOption[] = [
  {
    id: "pickup",
    name: "Store pickup",
    deliveryTime: { format: "exactNumberOfWeekdays", days: 0 },
    locations: [
      {
        id: "shop",
        name: "Butikken på Skøyen",
        address: "Karenslyst Allé 16, 0278 Oslo",
        openingHours: "Man - Fre: 09:00 - 17:00, Lør: stengt",
      },
    ],
    logoUrl: webshopLogo,
  },
]
