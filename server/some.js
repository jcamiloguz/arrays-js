const { areIntervalsOverlapping } = require("date-fns")

const numbers = [1, 7, 3, 9]

const evenNumbers = numbers.some((item) => item % 2 === 0)

const orders = [
  { name: "pizza", price: 10, delivered: false },
  { name: "burger", price: 20, delivered: true },
  { name: "fries", price: 30, delivered: false },
  { name: "ice cream", price: 40, delivered: false },
  { name: "pasta", price: 50, delivered: false },
]

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
]

const deliveredOrders = orders.some((item) => item.delivered)

const newAppointment = {
  startDate: new Date(2021, 1, 1, 30),
  endDate: new Date(2021, 1, 1, 31),
}
console.log(deliveredOrders)

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    )
  })
}
console.log(isOverlap(newAppointment))
