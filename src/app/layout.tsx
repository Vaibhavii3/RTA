import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raboche Institute of Technology & Management | Hospitality Education",
  description:
    "From intensive diplomas to fast-track certifications — hands-on lab training, international hospitality standards, and mandatory internships. Job-ready from day one.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
