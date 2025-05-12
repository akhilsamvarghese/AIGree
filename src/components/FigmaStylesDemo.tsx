import React, { useState, useEffect } from 'react';
import { figmaClasses } from '@/lib/figma-classes';
import cavernBackground from '@/assets/moonrise.jpeg';
import logo from '@/assets/book-open-text-2.png';
import uploadDoc from '@/assets/Upload_Your_Document.png';
import letAiExtract from '@/assets/Let_AI_Extract.png';
import getAnswers from '@/assets/Get_answers.png';
import riskAssessment from '@/assets/new/risk-assessment.png';
import clauseExtraction from '@/assets/new/clause.png';
import analyticsDashboard from '@/assets/new/analytics.png';
import chatWithDocs from '@/assets/new/chat_with_docs.png';
import automatedEfficiency from '@/assets/new/efficency.png';
import customizableTemplates from '@/assets/new/customizable_temp.png';
import { SignUpModal } from './SignUpModal';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const FigmaStylesDemo: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle navigation and close sheet
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsSheetOpen(false); // Close the sheet after navigation
  };

  return (
    <div className="min-h-screen bg-figma-background text-figma-foreground">
      {/* Floating Card-Style Navbar */}
      <nav className={`${figmaClasses.navbar} ${figmaClasses.navbarFloating} transition-all duration-300 ease-in-out mx-auto my-4 max-w-[1200px] rounded-full ${scrolled ? 'bg-[#0B0121]/95 shadow-lg' : 'bg-[#0B0121]/80'}`}>
        <div className="flex flex-row justify-center items-center w-full max-w-[1200px] h-[72px] px-6">
          <div className="flex flex-row justify-between items-center gap-4 md:gap-[625px] w-full h-[72px]">
            <div className="flex flex-row items-start p-0 w-[138px] h-[22px]">
              <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[138px] h-[22px]">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                    setIsSheetOpen(false); // Close sheet when clicking logo
                  }}
                  className="flex flex-row justify-center items-center gap-[10px]"
                >
                  <img src={logo} alt="AIgree Logo" className="w-[22px] h-[22px] flex-none" />
                  <span className="font-montserrat font-bold text-[22px] leading-[100%] flex items-center tracking-[-0.03em] text-[#ECECEC]">AIgree</span>
                </a>
              </div>
            </div>
            {/* Mobile Menu */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <button 
                  className="md:hidden flex items-center justify-center w-10 h-10 text-white z-50"
                  aria-label="Toggle mobile menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                    className="w-6 h-6 transition-transform duration-200"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent 
                side="top" 
                className="w-full bg-[#0B0121]/95 backdrop-blur-lg border-none pt-20"
              >
                <div className="flex flex-col items-center justify-center space-y-8">
                  <a 
                    href="#workflow" 
                    onClick={(e) => handleNavigation(e, 'workflow')}
                    className="text-2xl font-montserrat text-[#ECECEC] hover:text-purple-400 transition-colors duration-200"
                  >
                    Overview
                  </a>
                  <a 
                    href="#features" 
                    onClick={(e) => handleNavigation(e, 'features')}
                    className="text-2xl font-montserrat text-[#ECECEC] hover:text-purple-400 transition-colors duration-200"
                  >
                    Features
                  </a>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSheetOpen(false);
                    }}
                    className="text-2xl font-montserrat text-[#ECECEC] hover:text-purple-400 transition-colors duration-200"
                  >
                    About us
                  </a>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-row items-center justify-end p-0 gap-[32px] w-auto md:w-[756px] h-[72px]">
              <a 
                href="#workflow" 
                onClick={(e) => handleNavigation(e, 'workflow')}
                className="flex flex-row items-center justify-center p-[24px_12px] w-auto md:w-[81px] h-[72px] hover:text-purple-400 transition-colors duration-200"
              >
                <span className="font-montserrat font-normal text-base leading-[150%] text-[#ECECEC]">Overview</span>
              </a>
              <a 
                href="#features" 
                onClick={(e) => handleNavigation(e, 'features')}
                className="flex flex-row items-center justify-center p-[24px_12px] w-auto md:w-[81px] h-[72px] hover:text-purple-400 transition-colors duration-200"
              >
                <span className="font-montserrat font-normal text-base leading-[150%] text-[#ECECEC]">Features</span>
              </a>
              <a href="#" className="flex flex-row items-center justify-center p-[24px_12px] w-auto md:w-[97px] h-[72px] hover:text-purple-400 transition-colors duration-200">
                <span className="font-montserrat font-normal text-base leading-[150%] text-[#ECECEC]">About us</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from hiding under fixed navbar */}
      {/* Gradient Spacer with Theme Colors - Mobile Only */}
      {/* <div className="md:hidden h-[80px] w-full bg-gradient-to-b from-[#0B0121] via-[#1E0B3B] to-transparent"></div> */}

      {/* Hero Section */}
      <section 
        className={`${figmaClasses.heroBg} pt-36 pb-16 sm:pt-32 md:pt-72 md:pb-40 relative`}
        style={{
          backgroundImage: `url(${cavernBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
         
        <div className={`${figmaClasses.container} relative z-10 px-4 sm:px-6 md:px-8`}>
          <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className={`${figmaClasses.headingHero} ${figmaClasses.animateFadeIn} text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`}>
              Review Contracts 10x Faster with AI
            </h1>
            
            <div className="max-w-xl mx-auto">
              <p className={`${figmaClasses.paragraph} ${figmaClasses.animateFadeInDelay1} text-base sm:text-lg md:text-xl text-gray-300`}>
                Transform your legal workflow with intelligent contract analysis that extracts key clauses,
                flags risks, and summarizes terms in minutes, not days.
              </p>
            </div>
            <div className={`flex flex-col sm:flex-row justify-center gap-4 pt-6 ${figmaClasses.animateFadeInDelay2}`}>
              <button 
                className={`${figmaClasses.buttonPrimary} w-full sm:w-auto text-base sm:text-lg px-6 py-3 sm:px-8`} 
                onClick={() => setIsModalOpen(true)}
              >
                Sign up for Early access
              </button>
              <a 
                href="mailto:hello@aigree.com" 
                className={`${figmaClasses.buttonSecondary} w-full sm:w-auto text-base sm:text-lg px-6 py-3 sm:px-8`}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Progressive Blur Transition */}
        <div className="figma-blur-transition"></div>
       </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-16 sm:py-24 md:py-36 bg-figma-background">
        <div className={`${figmaClasses.container} px-4 sm:px-6 md:px-8`}>
          <div className={`${figmaClasses.sectionTitle} text-center`}>
            <h2 className={`${figmaClasses.headingSection} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4`}>
              From Upload to Insight In Minutes
            </h2>
            <p className={`${figmaClasses.paragraph} mt-4 sm:mt-6 max-w-3xl mx-auto text-gray-400 leading-relaxed text-base sm:text-lg`}>
              Experience the power of AI-driven contract analysis with our streamlined three-step process.
            </p>
          </div>

          {/* 3-Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20">
            {/* Step 1 */}
            <div 
              className={`${figmaClasses.card} group hover:scale-[1.02] transition-all duration-150 ease-out backdrop-blur-lg bg-gradient-to-br from-purple-500/15 via-purple-400/5 to-transparent border border-purple-500/20 h-full p-10 flex flex-col items-center text-center rounded-2xl shadow-xl hover:shadow-purple-500/30 hover:border-purple-500/40`}
            >
              <div className="mb-10 transform group-hover:scale-105 transition-transform duration-150">
                <div className="relative flex items-center justify-center h-[200px]">
                  <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-150"></div>
                  <img src={uploadDoc} alt="Upload Document" className="w-full h-full object-contain relative z-10 p-4" />
                </div>
              </div>
              <h3 className={`${figmaClasses.headingCard} group-hover:text-purple-400 transition-colors duration-300`}>Upload Your Document</h3>
              <p className="text-gray-400 mt-4">Securely upload your contracts for instant analysis</p>
            </div>

            {/* Step 2 */}
            <div 
              className={`${figmaClasses.card} group hover:scale-[1.02] transition-all duration-150 ease-out backdrop-blur-lg bg-gradient-to-br from-pink-500/15 via-pink-400/5 to-transparent border border-pink-500/20 h-full p-10 flex flex-col items-center text-center rounded-2xl shadow-xl hover:shadow-pink-500/30 hover:border-pink-500/40`}
            >
              <div className="mb-10 transform group-hover:scale-105 transition-transform duration-150">
                <div className="relative flex items-center justify-center h-[200px]">
                  <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-150"></div>
                  <img src={letAiExtract} alt="AI Analysis" className="w-full h-full object-contain relative z-10 p-4" />
                </div>
              </div>
              <h3 className={`${figmaClasses.headingCard} group-hover:text-pink-400 transition-colors duration-300`}>Let AI Extract, Analyze & Summarize</h3>
              <p className="text-gray-400 mt-4">Advanced AI processes and analyzes your documents</p>
            </div>

            {/* Step 3 */}
            <div 
              className={`${figmaClasses.card} group hover:scale-[1.02] transition-all duration-150 ease-out backdrop-blur-lg bg-gradient-to-br from-blue-500/15 via-blue-400/5 to-transparent border border-blue-500/20 h-full p-10 flex flex-col items-center text-center rounded-2xl shadow-xl hover:shadow-blue-500/30 hover:border-blue-500/40`}
            >
              <div className="mb-10 transform group-hover:scale-105 transition-transform duration-150">
                <div className="relative flex items-center justify-center h-[200px]">
                  <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-150"></div>
                  <img src={getAnswers} alt="Get Answers" className="w-full h-full object-contain relative z-10 p-4" />
                </div>
              </div>
              <h3 className={`${figmaClasses.headingCard} group-hover:text-blue-400 transition-colors duration-300`}>Get Answers. Take Action.</h3>
              <p className="text-gray-400 mt-4">Make informed decisions with AI-powered insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-24">
        <div className={`${figmaClasses.container} px-4 sm:px-6 md:px-8`}>
          <div className={`${figmaClasses.sectionTitle} text-center mb-12 sm:mb-16`}>
            <h2 className={`${figmaClasses.headingSection} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4`}>
              Features that work for your future.
            </h2>
            <p className={`${figmaClasses.paragraph} mt-4 sm:mt-6 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto`}>
              Discover how Aigree's powerful AI capabilities streamline contract review and empower your team to make faster, more informed decisions.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 max-w-[1400px] mx-auto">
            {/* Feature Card 1 - Risk Assessment (Spans 6 columns) */}
            <div className="group md:col-span-6 h-[400px] hover:scale-[1.01] transition-transform duration-150 ease-out">
              <div className={`${figmaClasses.card} relative h-full overflow-hidden backdrop-blur-lg bg-gradient-to-br from-purple-500/20 via-purple-400/10 to-transparent border border-purple-500/30 rounded-[2rem] shadow-xl hover:shadow-purple-500/30 p-8 flex flex-col justify-between`}>
                <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                <div className="relative z-10">
                  <h3 className={`${figmaClasses.headingCard} text-3xl md:text-4xl mb-4 group-hover:text-purple-400 transition-colors duration-200`}>Risk Assessment</h3>
                  <p className="text-gray-400 text-lg mb-6">Identify potential risks and compliance issues automatically</p>
                </div>
                <div className="relative mt-auto w-full h-[200px] max-w-[400px] mx-auto transform group-hover:scale-[1.02] transition-transform duration-150">
                  <div className="absolute inset-0 bg-purple-500/40 rounded-2xl blur-2xl group-hover:blur-2xl transition-all duration-150"></div>
                  <img src={riskAssessment} alt="Risk Assessment" className="w-full h-full object-contain rounded-2xl relative z-10" />
                </div>
              </div>
            </div>

            {/* Feature Card 2 - Intelligent Clause (Spans 6 columns) */}
            <div className="group md:col-span-6 h-[400px] hover:scale-[1.01] transition-transform duration-150 ease-out">
              <div className={`${figmaClasses.card} relative h-full overflow-hidden backdrop-blur-lg bg-gradient-to-br from-pink-500/20 via-pink-400/10 to-transparent border border-pink-500/30 rounded-[2rem] shadow-xl hover:shadow-pink-500/30 p-8 flex flex-col justify-between`}>
                <div className="absolute inset-0 bg-gradient-radial from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                <div className="relative z-10">
                  <h3 className={`${figmaClasses.headingCard} text-3xl md:text-4xl mb-4 group-hover:text-pink-400 transition-colors duration-200`}>Intelligent Clause Extraction</h3>
                  <p className="text-gray-400 text-lg mb-6">Extract and analyze key contract clauses with precision</p>
                </div>
                <div className="relative mt-auto w-full h-[200px] max-w-[400px] mx-auto transform group-hover:scale-[1.02] transition-transform duration-150">
                  <div className="absolute inset-0 bg-pink-500/40 rounded-2xl blur-2xl group-hover:blur-2xl transition-all duration-150"></div>
                  <img src={clauseExtraction} alt="Intelligent Clause Extraction" className="w-full h-full object-contain rounded-2xl relative z-10" />
                </div>
              </div>
            </div>

            {/* Feature Card 3 - Analytics Dashboard (Spans 4 columns) */}
            <div className="group md:col-span-4 h-[350px] hover:scale-[1.01] transition-transform duration-150 ease-out">
              <div className={`${figmaClasses.card} relative h-full overflow-hidden backdrop-blur-lg bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent border border-blue-500/30 rounded-[2rem] shadow-xl hover:shadow-blue-500/30 p-6 flex flex-col justify-between`}>
                <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                <div className="relative z-10">
                  <h3 className={`${figmaClasses.headingCard} text-2xl md:text-3xl mb-4 group-hover:text-blue-400 transition-colors duration-150`}>Analytics Dashboard</h3>
                  <p className="text-gray-400 text-base mb-4">Track and visualize contract metrics</p>
                </div>
                <div className="relative mt-auto w-full h-[160px] max-w-[300px] mx-auto transform group-hover:scale-[1.02] transition-transform duration-150">
                  <div className="absolute inset-0 bg-blue-500/40 rounded-2xl blur-2xl group-hover:blur-2xl transition-all duration-150"></div>
                  <img src={analyticsDashboard} alt="Analytics Dashboard" className="w-full h-full object-contain rounded-2xl relative z-10" />
                </div>
              </div>
            </div>

            {/* Feature Card 4 - Chat with Docs (Spans 8 columns) */}
            <div className="group md:col-span-8 h-[350px] hover:scale-[1.01] transition-transform duration-150 ease-out">
              <div className={`${figmaClasses.card} relative h-full overflow-hidden backdrop-blur-lg bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent border border-emerald-500/30 rounded-[2rem] shadow-xl hover:shadow-emerald-500/30 p-6`}>
                <div className="absolute inset-0 bg-gradient-radial from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                  <div className="flex flex-col justify-between relative z-10">
                    <div>
                      <h3 className={`${figmaClasses.headingCard} text-2xl md:text-3xl mb-4 group-hover:text-emerald-400 transition-colors duration-500`}>Chat with Docs</h3>
                      <p className="text-gray-400 text-base mb-4">Interactive AI-powered document conversations</p>
                    </div>
                    <div className="relative w-full h-[180px] max-w-[300px] transform group-hover:scale-[1.02] group-hover:rotate-1 transition-all duration-150 -mt-4">
                      <div className="absolute inset-0 bg-emerald-500/40 rounded-2xl blur-3xl group-hover:blur-3xl transition-all duration-150"></div>
                      <img src={chatWithDocs} alt="Chat with Docs" className="w-full h-full object-contain rounded-2xl relative z-10" />
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center relative z-10">
                    <div className="relative w-full h-[180px] max-w-[300px] transform group-hover:scale-[1.01] group-hover:translate-x-1 transition-transform duration-150">
                      <div className="absolute inset-0 bg-emerald-500/30 rounded-2xl blur-2xl group-hover:blur-2xl transition-all duration-150"></div>
                      <div className="bg-gradient-to-br from-emerald-500/30 via-emerald-400/20 to-transparent p-6 rounded-2xl border border-emerald-500/30 h-full flex flex-col justify-center">
                        <p className="text-emerald-200 text-sm mb-4">AI Assistant</p>
                        <p className="text-white text-base">I've analyzed the contract and found several key points that require attention...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Card 5 - Automated Efficiency (Spans 6 columns) */}
            <div className="group md:col-span-6 h-[350px] hover:scale-[1.005] transition-transform duration-75 ease-out">
              <div className={`${figmaClasses.card} relative h-full overflow-hidden backdrop-blur-lg bg-gradient-to-br from-violet-500/20 via-violet-400/10 to-transparent border border-violet-500/30 rounded-[2rem] shadow-xl hover:shadow-violet-500/30 p-6 flex flex-col justify-between`}>
                <div className="absolute inset-0 bg-gradient-radial from-violet-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-75"></div>
                <div className="relative z-10">
                  <h3 className={`${figmaClasses.headingCard} text-2xl md:text-3xl mb-4 group-hover:text-violet-400 transition-colors duration-75`}>Automated Efficiency</h3>
                  <p className="text-gray-400 text-base mb-4">Streamline your workflow with AI automation</p>
                </div>
                <div className="relative w-full h-[180px] max-w-[300px] mx-auto transform group-hover:scale-[1.005] transition-transform duration-75">
                  <div className="absolute inset-0 bg-violet-500/40 rounded-2xl blur-2xl group-hover:blur-2xl transition-all duration-75"></div>
                  <img src={automatedEfficiency} alt="Automated Efficiency" className="w-full h-full object-contain rounded-2xl relative z-10" />
                </div>
              </div>
            </div>

            {/* Feature Card 6 - Customizable Templates (Spans 6 columns) */}
            <div className="group md:col-span-6 h-[350px] hover:scale-[1.005] transition-transform duration-75 ease-out">
              <div className={`${figmaClasses.card} relative h-full overflow-hidden backdrop-blur-lg bg-gradient-to-br from-amber-500/20 via-amber-400/10 to-transparent border border-amber-500/30 rounded-[2rem] shadow-xl hover:shadow-amber-500/30 p-6 flex flex-col justify-between`}>
                <div className="absolute inset-0 bg-gradient-radial from-amber-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-75"></div>
                <div className="relative z-10">
                  <h3 className={`${figmaClasses.headingCard} text-2xl md:text-3xl mb-4 group-hover:text-amber-400 transition-colors duration-75`}>Customizable Templates</h3>
                  <p className="text-gray-400 text-base mb-4">Create and manage custom contract templates</p>
                </div>
                <div className="relative w-full h-[180px] max-w-[300px] mx-auto transform group-hover:scale-[1.005] transition-transform duration-75">
                  <div className="absolute inset-0 bg-amber-500/40 rounded-2xl blur-2xl group-hover:blur-2xl transition-all duration-75"></div>
                  <img src={customizableTemplates} alt="Customizable Templates" className="w-full h-full object-contain rounded-2xl relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${figmaClasses.ctaSection} py-16 md:py-30`}>
        <div className={figmaClasses.container}>
          <div className={figmaClasses.card}>
            <div className={figmaClasses.ctaContent}>
              <h2 className={figmaClasses.headingSection}>Transform Your Contract Review Process Today</h2>
              <p className={figmaClasses.paragraph}>
                Join leading organizations using AIgree to streamline their legal workflows. Our AI-powered platform helps you review contracts faster, reduce risks, and make confident decisions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <button className={figmaClasses.buttonPrimary} onClick={() => setIsModalOpen(true)}>Get Early Access</button>
                {/* <button className={figmaClasses.buttonSecondary}>Schedule a Demo</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 md:py-24 border-t border-figma-text-primary/10">
        <div className={figmaClasses.container}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-6">
              <h3 className="font-montserrat font-medium text-2xl text-figma-text-primary">Contact</h3>
              <div className="space-y-2">
                <p className="font-montserrat font-light text-lg text-figma-text-primary">Work inquires: hello@aigree.com</p>
                <p className="font-montserrat font-light text-lg text-figma-text-primary">PR and speaking: hello@aigree.com</p>
                <p className="font-montserrat font-light text-lg text-figma-text-primary">New business: hello@aigree.com</p>
              </div>
              <p className="font-montserrat font-light text-base text-[#939393]">© 2025 Aigree. All Rights Reserved.</p>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-montserrat font-medium text-2xl text-figma-text-primary">Address</h3>
              <p className="font-montserrat font-light text-lg text-figma-text-primary">
                xyz street,
                12345,
                Kochi,
                India
              </p>
              
              <div className="space-y-2">
                <h3 className="font-montserrat font-medium text-2xl text-figma-text-primary">Social</h3>
                <p className="font-montserrat font-light text-lg text-figma-text-primary">Twitter</p>
                <p className="font-montserrat font-light text-lg text-figma-text-primary">Instagram</p>
                <p className="font-montserrat font-light text-lg text-figma-text-primary">Tik Tok</p>
              </div>
            </div>
            
            <div className="flex justify-end items-end">
              <div className="flex items-center gap-2">
                <img src={logo} alt="AIgree Logo" className="w-[22px] h-[22px] flex-none mb-4" />
                <span className="font-montserrat font-bold text-[22px] leading-[100%] flex items-center tracking-[-0.03em] text-[#ECECEC] mb-4">AIgree</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Sign Up Modal */}
      <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default FigmaStylesDemo;