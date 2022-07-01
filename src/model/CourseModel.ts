export class CourseModel {
  id: number
  title: string
  start: string
  end: string
  amount: number
  price: number
  discount: number
  imgurl: string
  sumary: string

  constructor(
    id: number,
    title: string,
    start: string,
    end: string,
    amount: number,
    price: number,
    discount: number,
    imgurl: string,
    sumary: string
  ) {
    this.id = id
    this.title = title
    this.imgurl = imgurl
    this.start = start
    this.end = end
    this.amount = amount
    this.price = price
    this.discount = discount
    this.sumary = sumary
  }
}
