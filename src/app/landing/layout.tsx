import type { Metadata } from "next";
import "@/app/globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Wedding Invitation Maker - Create Beautiful Digital Invitations",
  description: "Design and share beautiful digital wedding invitations with our easy-to-use platform. Customize templates, manage guests, and track RSVPs all in one place.",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientBody>{children}</ClientBody>
  );
}
