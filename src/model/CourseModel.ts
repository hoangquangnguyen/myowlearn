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
interface IResponse {
  fields: {
    id: number
    title: string
    start: string
    end: string
    amount: number
    price: number
    discount: number
    imgurl: string
    sumary: string
    // if you don't need the `vaccinated` field, just don't include it in your interface and it will be ignored
  }
}

export function parseAsAnimal(response: IResponse): CourseModel {
  return new CourseModel(
    response.fields.id,
    response.fields.title,
    response.fields.start,
    response.fields.end,
    response.fields.amount,
    response.fields.price,
    response.fields.discount,
    response.fields.imgurl,
    response.fields.sumary
  )
}
