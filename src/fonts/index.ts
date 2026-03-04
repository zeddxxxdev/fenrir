import { Inter, Outfit, Poppins } from "next/font/google"

export const inter = Inter({
  display: "block",
  subsets: ["latin"],
  variable: "--font-inter-variable",
})
export const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
export const outfit = Outfit({ display: "swap", subsets: ["latin"] })
