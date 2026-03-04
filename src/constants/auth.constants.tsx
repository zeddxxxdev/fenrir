import { JSX } from "react"
import { FcGoogle } from "react-icons/fc"
import { FaMeta } from "react-icons/fa6"
import { FaApple } from "react-icons/fa"

export type OAuthProvider = {
  icon: JSX.Element
  className: string
}

export const OAUTH_PROVIDERS: Record<string, OAuthProvider> = {
  apple: {
    icon: <FaApple className="size-5 text-white" />,
    className: "bg-black",
  },
  google: {
    icon: <FcGoogle className="size-5" />,
    className: "bg-google-foreground",
  },
  meta: {
    icon: <FaMeta className="size-5 text-white" />,
    className: "bg-meta-foreground",
  },
}
