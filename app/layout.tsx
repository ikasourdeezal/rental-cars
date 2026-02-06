import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Rental Car - Rent Your Dream Car",
  description:
    "Experience the road like never before. From luxury sedans to high-performance SUVs, rent your dream car with flexible booking and unbeatable rates.",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Add suppressHydrationWarning to the body because some browser extensions are injecting attributes that cause the mismatch. 
      */}
      <body 
        className={`${poppins.className} bg-custom-white`} 
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;