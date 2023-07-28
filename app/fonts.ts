import { Libre_Franklin, Space_Mono } from "next/font/google";

export const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
});

export const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
