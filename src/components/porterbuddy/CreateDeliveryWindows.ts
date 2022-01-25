import { DeliveryWindowType } from "./types"
import dayjs, { Dayjs } from "dayjs"
dayjs().format()

const isWeekendDay = function (day: Dayjs) {
  const weekendDays = [0, 6]
  return weekendDays.includes(day.day())
}

let today = dayjs()
let cutoff = dayjs().set("hour", 14).set("minute", 30)

export const createDeliveryWindows = (): DeliveryWindowType[] => {
  const arrayOfWindows = []
  for (let i = 0; i < 6; i++) {
    const date = i === 0 ? today : today.add(i, "day")
    if (
      (today.isAfter(cutoff, "hour") || today.isAfter(cutoff, "minute")) &&
      i === 0
    ) {
      continue
    }
    const oneDeliveryOptionPerWindow = {
      product: "delivery",
      start: date.set("hour", 17).set("minute", 30).toISOString(),
      end: date.set("hour", 21).set("minute", 30).toISOString(),
      expiresAt: date.set("hour", 14).set("minute", 30).toISOString(),
      price: {
        fractionalDenomination: 14900,
        currency: "NOK",
      },
    }
    const threeDeliveryOptionPerWindow = [
      {
        product: "delivery",
        start: date.set("hour", 17).set("minute", 30).toISOString(),
        end: date.set("hour", 19).set("minute", 30).toISOString(),
        expiresAt: date.set("hour", 14).set("minute", 30).toISOString(),
        price: {
          fractionalDenomination: 13900,
          currency: "NOK",
        },
      },
      {
        product: "delivery",
        start: date.set("hour", 19).set("minute", 30).toISOString(),
        end: date.set("hour", 21).set("minute", 30).toISOString(),
        expiresAt: date.set("hour", 14).set("minute", 30).toISOString(),
        price: {
          fractionalDenomination: 14900,
          currency: "NOK",
        },
      },
      {
        product: "delivery",
        start: date.set("hour", 17).set("minute", 30).toISOString(),
        end: date.set("hour", 21).set("minute", 30).toISOString(),
        expiresAt: date.set("hour", 14).set("minute", 30).toISOString(),
        price: {
          fractionalDenomination: 14900,
          currency: "NOK",
        },
      },
    ]
    if (isWeekendDay(date)) {
      arrayOfWindows.push(oneDeliveryOptionPerWindow)
    } else {
      arrayOfWindows.push(...threeDeliveryOptionPerWindow)
    }
  }
  return arrayOfWindows
}
