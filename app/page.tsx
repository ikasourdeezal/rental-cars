"use client";

import React from "react";
import dynamic from "next/dynamic";

// Standard imports for providers
import { TogglersProvider } from "./context/togglers";
import { InputValueProvider } from "./context/inputValue";
import { CurrentValueProvider } from "./context/currentValue";

// Load components with SSR disabled
const Header = dynamic(() => import("./components/Header"), { ssr: false });
const MobileNavbar = dynamic(() => import("./components/MobileNavbar"), { ssr: false });
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const Booking = dynamic(() => import("./components/Booking"), { ssr: false });
const BookingModal = dynamic(() => import("./components/BookingModal"), { ssr: false });
const QuickEasy = dynamic(() => import("./components/QuickEasy"), { ssr: false });
const RentalFleet = dynamic(() => import("./components/RentalFleet"), { ssr: false });
const SaveBig = dynamic(() => import("./components/SaveBig"), { ssr: false });
const ChooseUs = dynamic(() => import("./components/ChooseUs"), { ssr: false });
const Testimonials = dynamic(() => import("./components/Testimonials"), { ssr: false });
const Faq = dynamic(() => import("./components/Faq"), { ssr: false });
const DownloadApp = dynamic(() => import("./components/DownloadApp"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });
const ToTop = dynamic(() => import("./components/ToTop"), { ssr: false });

function Home() {
  return (
    <TogglersProvider>
      <InputValueProvider>
        <CurrentValueProvider>
          <main>
            <Header />
            <MobileNavbar />
            <Hero />
            <ToTop />
            <Booking />
            <BookingModal />
            <QuickEasy />
            <RentalFleet />
            <SaveBig />
            <ChooseUs />
            <Testimonials />
            <Faq />
            <DownloadApp />
            <Footer />
          </main>
        </CurrentValueProvider>
      </InputValueProvider>
    </TogglersProvider>
  );
}

export default Home;