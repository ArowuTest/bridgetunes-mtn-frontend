import { AxiosError } from "axios"
import { useRouter } from "next/router"
import { useMutation } from "react-query"
import { toast } from "react-toastify"
import { authAPI } from "../api"
import { ResponseWithError } from "@/types/network-response"
import { getErrorResponse } from "@/utils/get-error-message"
import { useAuth } from "@/contexts/AuthContext"

export const useRequestLoginToken = () => {
  return useMutation(
    async (payload: { phoneNumber: string }) => {
      return authAPI.requestLoginToken(payload)
    },
    {
      onSuccess: ({ message }) => {
        if (message) {
          toast.success(message)
        }
      },
      onError: (error: AxiosError<ResponseWithError>) => {
        const message = getErrorResponse(error)
        toast.error(message)
      },
    }
  )
}

export const useLoginService = () => {
  const { setAuthUser } = useAuth()
  const { push, asPath } = useRouter()

  const parsedQuery = asPath.split("&from=")[1]

  return useMutation(
    async (payload: { phoneNumber: string; token: string }) => {
      return authAPI.login(payload)
    },
    {
      onSuccess: ({ data }) => {
        if (data) {
          const { user, tokens } = data
          setAuthUser({ ...tokens, user })

          push(parsedQuery ? parsedQuery : "/dashboard")
        }
      },
      onError: (error: AxiosError<ResponseWithError>) => {
        const message = getErrorResponse(error)

        toast.error(message)
        push("/login")
      },
    }
  )
}
