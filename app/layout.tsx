import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "DriveHub | Premium Car Rentals",
  description: "Rent your dream car at unbeatable prices. Unlimited miles, flexible pick-up, and premium vehicles.",
  keywords: ["car rental", "rent a car", "luxury cars", "affordable rental", "car hire", "suv rental", "sports car rental"],
  
  // Open Graph
  openGraph: {
    title: "DriveHub | Premium Car Rentals",
    description: "Rent your dream car at unbeatable prices. Unlimited miles, flexible pick-up, and premium vehicles.",
    url: "https://rental-cars-ashen.vercel.app", // Change to your actual URL
    siteName: "DriveHub Car Rentals",
    images: [
      {
        url: "https://rental-cars-ashen.vercel.app/thumbnail.png", // Change to your actual URL
        width: 1200,
        height: 630,
        alt: "DriveHub - Premium Car Rentals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "DriveHub | Premium Car Rentals",
    description: "Rent your dream car at unbeatable prices. Unlimited miles, flexible pick-up, and premium vehicles.",
    images: ["https://rental-cars-ashen.vercel.app/thumbnail.png"], // Change to your actual URL
    creator: "@yourtwitterhandle", // Optional: Add your Twitter handle
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  
  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* You can also add additional meta tags in the head if needed */}
      <head>
        {/* Additional meta tags */}
        <meta name="theme-color" content="#1a56db" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest for PWA (optional) */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      
      {/* Add suppressHydrationWarning to the body because some browser extensions are injecting attributes that cause the mismatch. */}
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