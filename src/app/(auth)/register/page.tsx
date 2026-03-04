import Link from "next/link"
import HeroSection from "./components/hero-section"
import RegisterForm from "./components/register-form"
import SocialODCButtons from "./components/socials-odc-buttons"

export default function RegisterPage() {
  return (
    <div className="mx-auto grid h-full min-h-[calc(100svh-90px)] w-full max-w-8xl grid-cols-2 place-content-center gap-8 px-20">
      <HeroSection />

      <div className="ml-auto w-full max-w-108 rounded-2xl bg-background px-8 py-8">
        <div className="mb-4 w-full space-y-2 text-center text-foreground">
          <h6 className="text-3xl font-medium">Sign up</h6>
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-primary underline">
              Log in?
            </Link>
          </p>
        </div>

        <RegisterForm />
        <SocialODCButtons />
      </div>
    </div>
  )
}
