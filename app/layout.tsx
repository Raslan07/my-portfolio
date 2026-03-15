import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Mostafa Raslan — Full-Stack Developer",
  description:
    "Portfolio of Mostafa Raslan — CS Student, Full-Stack Developer from Egypt. Specializing in React, Next.js, TypeScript, and modern web development.",
  keywords: ["Mostafa Raslan", "Full-Stack Developer", "React", "Next.js", "TypeScript", "Egypt"],
  authors: [{ name: "Mostafa Raslan" }],
  openGraph: {
    title: "Mostafa Raslan — Full-Stack Developer",
    description: "CS Student passionate about building clean, performant web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
