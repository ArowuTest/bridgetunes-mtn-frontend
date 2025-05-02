export type BaseResponse = {
  status: string
  message: string
  code?: number
}

export type ResponseWithError = BaseResponse & {
  data:
    | string[]
    | {
        field: string
        message: string
      }[]
}
