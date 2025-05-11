/**
 * Figma Design System Utility Classes
 * 
 * This file provides utility functions that return Tailwind class strings
 * matching the Figma design system for the SaaS Futuristic App.
 * Updated based on the Figma design: FiG2NZIQrdbomWrHVAsFmR
 */

export const figmaClasses = {
  // Layout
  container: "max-w-[1200px] mx-auto px-6",
  
  // Typography
  headingHero: "font-montserrat font-medium text-5xl md:text-7xl lg:text-[80px] leading-none tracking-tight text-center bg-gradient-to-b from-white to-[#ECECEC]/0 bg-clip-text text-transparent",
  headingSection: "font-montserrat font-medium text-3xl md:text-4xl lg:text-[48px] leading-[1.2em] tracking-[-0.67%] text-center text-figma-text-primary",
  headingCard: "font-montserrat font-medium text-2xl md:text-[32px] leading-[1.3em] tracking-[-0.5%] text-figma-text-primary",
  paragraph: "font-montserrat font-normal text-base md:text-[18px] leading-[1.6em] text-figma-text-secondary text-center",
  paragraphSmall: "font-montserrat font-normal text-[14px] leading-[1.5em] text-figma-text-primary",
  
  // Buttons
  buttonPrimary: "bg-white text-[#0B081C] font-montserrat font-normal text-base leading-normal py-3 px-6 rounded-[60px] inline-flex justify-center items-center transition-all duration-300 hover:bg-opacity-90 hover:-translate-y-0.5 shadow-figma-button",
  buttonSecondary: "bg-transparent text-figma-text-primary font-montserrat font-normal text-base leading-normal py-3 px-6 rounded-[60px] border border-figma-text-primary inline-flex justify-center items-center transition-all duration-300 hover:bg-opacity-10 hover:bg-white",
  
  // Cards
  card: "bg-gradient-to-b from-white/5 to-transparent rounded-[20px] p-6 md:p-12 lg:p-[60px] shadow-figma-card",
  cardPink: "bg-gradient-to-b from-pink-500/5 to-transparent rounded-[20px] p-6 md:p-12 lg:p-[60px] shadow-figma-card",
  
  // Icon wrappers
  iconWrapperPurple: "w-12 h-12 rounded-full bg-figma-purple-light flex items-center justify-center shadow-figma-icon-purple",
  iconWrapperPink: "w-12 h-12 rounded-full bg-figma-purple-light flex items-center justify-center shadow-figma-icon-pink",
  iconWrapperMagenta: "w-12 h-12 rounded-full bg-figma-pink/30 flex items-center justify-center shadow-figma-icon-magenta",
  
  // Backgrounds
  heroBg: "bg-gradient-to-b from-figma-purple-dark to-figma-purple-medium relative",
  heroBlurTransition: "absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent to-[#0B0121]/80 backdrop-blur-[20px]",

  


 // Navbar wrapper
 navbar: "w-full bg-[#0B0121] flex justify-center items-start px-4 sm:px-6 h-[72px]",
 // Navbar inner container (centers and constrains width)
 navbarContainer: "w-full max-w-[1440px] h-[72px] flex items-center justify-between",
 // Wrapper for logo and menu with spacing on large screens
 navbarContent: "w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-[625px]", // Brand section
 navbarBrand: "flex flex-row items-start w-[138px] h-[22px] mx-auto md:mx-0",
 navbarLogo: "flex flex-row justify-center items-center gap-[10px] w-[138px] h-[22px]",
 navbarLogoText: "font-montserrat font-bold text-[22px] leading-[100%] tracking-[-0.03em] text-[#ECECEC] w-[74px] h-[22px]",// Optional: logo icon can stay hidden on mobile if needed
 navbarLogoIcon: "hidden md:block absolute left-[16px] top-0 w-[22px] h-[22px] bg-[url('/path/to/image.png')]",// Menu (stacked on mobile, horizontal on md+)
 navbarMenu: "flex flex-col md:flex-row items-center gap-6 md:gap-[32px] w-full md:w-auto",// Link
 navbarLink: "font-montserrat font-normal text-base leading-[150%] text-[#ECECEC] px-3 py-2 md:py-6 md:px-3",// Optional fixed widths for uniform look
 navbarLinkFeatures: "w-[94px]",
 navbarLinkPricing: "w-[81px]",
 navbarLinkAbout: "w-[97px]",// Primary Button (Sign up)
 navbarButton: "flex justify-center items-center px-5 py-2 gap-2 w-full md:w-[228px] h-[40px] bg-[#ECECEC] border border-[#ECECEC] rounded-full text-[#0B081C] font-montserrat text-base leading-[150%]",// Outline Button (Contact us)
 navbarButtonOutline: "flex justify-center items-center px-5 py-2 gap-2 w-full md:w-[128px] h-[40px] border border-[#ECECEC] rounded-full text-[#ECECEC] font-montserrat text-base leading-[150%]",
 
  // Sections
  sectionTitle: "max-w-2xl mx-auto text-center mb-16",
  featureGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  ctaSection: "py-16",
  ctaContent: "max-w-2xl mx-auto text-center space-y-6",
  
  // Feature Cards
  featureCardContent: "flex flex-col gap-4",
  featureCardIcon: "w-12 h-12 rounded-full flex items-center justify-center",
  featureCardImagePlaceholder: "rounded-2xl bg-figma-purple-dark/50 h-48 md:h-auto flex items-center justify-center",
  
  // Animations
  animateFadeIn: "animate-fade-in",
  animateFadeInDelay1: "animate-fade-in-delay-1 opacity-0",
  animateFadeInDelay2: "animate-fade-in-delay-2 opacity-0",
  animateFadeInDelay3: "animate-fade-in-delay-3 opacity-0",
  animateFadeInLeft: "animate-fade-in-left",
};