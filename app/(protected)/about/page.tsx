import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "Page to show information about company",
  keywords: ["About Page", "Company Information"]
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">Hello from about page!</span>
    </>
  );
}
