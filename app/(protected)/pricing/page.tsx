import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing page",
  description: "Page to show company pricing information",
  keywords: ["Pricing Page", "Pricing Information"]
};

export default function PrincingPage() {
  return (
    <>
      <span className="text-7xl">Hello from pricing page!</span>
    </>
  )
}
