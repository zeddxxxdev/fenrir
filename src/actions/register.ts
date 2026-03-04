"use server"

import { auth } from "@/lib/auth/server"
import { redirect } from "next/navigation"
import { headers } from "next/headers"

export const register = async () => {
  const h = await headers()

  const result = await auth.api
    .signUpEmail({
      body: {
        email: "demo1@gmail.com",
        name: "john1 doe",
        password: "something@123",
        rememberMe: true,
      },
      headers: h,
    })
    .catch(() => null) // user already exists — fall through to sign in

  if (!result?.user) {
    await auth.api.signInEmail({
      body: {
        email: "demo1@gmail.com",
        password: "something@123",
        rememberMe: true,
      },
      headers: h,
    })
  }

  redirect("/dashboard")
}
