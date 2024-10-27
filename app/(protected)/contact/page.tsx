import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description: "Page to show information about company contact",
  keywords: ["Contact Page", "Contact Information"]
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Hello from contact page!</span>
    </>
  )
}
