"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { register } from "@/actions/register"
import Link from "next/link"
import { useTransition } from "react"
import { Loader } from "lucide-react"

export default function RegisterForm() {
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      await register()
    })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-7 text-foreground">
      <div className="w-full space-y-4">
        <Input placeholder="First name*" />
        <Input placeholder="Last name*" />
        <Input autoComplete="off" placeholder="Email address*" />
        <Input
          autoComplete="off"
          type="password"
          placeholder="Password (8+ characters)*"
        />

        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="terms-checkbox" name="terms-checkbox" />
            <FieldLabel htmlFor="terms-checkbox" className="font-normal">
              <p>
                I agree to Aps's{" "}
                <Link href="#" className="text-blue-500 underline">
                  Terms & Conditions
                </Link>{" "}
                and acknowledge the{" "}
                <Link href="#" className="text-blue-500 underline">
                  Privacy Policy
                </Link>
              </p>
            </FieldLabel>
          </Field>
        </FieldGroup>
      </div>

      <Button
        size="lg"
        type="submit"
        disabled={isPending}
        className="w-full rounded-full dark:text-white"
      >
        {isPending && <Loader className="animate-spin" />} Create account
      </Button>
    </form>
  )
}
