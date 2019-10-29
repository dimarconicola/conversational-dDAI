import React from "react";
import Navbar from "./../components/Navbar";
import HeroSection from "./../components/HeroSection";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import ContactSection from "./../components/ContactSection";
import Footer from "./../components/Footer";
import { useRouter } from "./../util/router.js";
import Conversation from "../components/Conversation";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="../images/logo.svg"
      />
      <Conversation />
      {/* <HeroSection
        color="white"
        size="medium"
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Start Free Trial"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      /> */}
      <ClientsSection
        color="white"
        size="medium"
        title="You're in good company"
        subtitle=""
      />
      <TestimonialsSection
        color="white"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
      />
      <ContactSection
        color="white"
        size="medium"
        title="Contact Us"
        subtitle=""
        showNameField={true}
        buttonText="Send message"
      />
      <Footer
        color="white"
        size="medium"
        logo="../images/logo.svg"
        description="Earn dDai - Interest with smart DeFi recipes"
        copyright="© 2019 Dexlab.io"
      />
    </>
  );
}

export default IndexPage;
