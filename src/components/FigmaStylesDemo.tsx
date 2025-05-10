import React from 'react';
import { figmaClasses } from '@/lib/figma-classes';
import blueLaptopUser from '@/assets/blue_laptop_user.webp';
import cavernBackground from '@/assets/mono_light_distortion_2.jpeg';

export const FigmaStylesDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-figma-background text-figma-foreground">
      {/* Navbar */}
      <nav className="flex flex-row justify-center items-start p-0 w-full h-[72px] bg-[#0B0121]">
        <div className="flex flex-row justify-center items-center p-0 w-[1200px] h-[72px]">
          <div className="flex flex-row justify-between items-center p-0 gap-[625px] w-[1200px] h-[72px]">
            <div className="flex flex-row items-start p-0 w-[138px] h-[22px]">
              <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[138px] h-[22px]">
                <img src="/src/assets/book-open-text-2.png" alt="AIgree Logo" className="w-[22px] h-[22px] flex-none" />
                <span className="font-montserrat font-bold text-[22px] leading-[100%] flex items-center tracking-[-0.03em] text-[#ECECEC]">AIgree</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end p-0 gap-[32px] w-[756px] h-[72px]">
              <a href="#" className="flex flex-row items-start p-[24px_12px] w-[94px] h-[72px]">
                <span className="font-montserrat font-normal text-base leading-[150%] text-[#ECECEC]">Features</span>
              </a>
              <a href="#" className="flex flex-row items-start p-[24px_12px] w-[81px] h-[72px]">
                <span className="font-montserrat font-normal text-base leading-[150%] text-[#ECECEC]">Pricing</span>
              </a>
              <a href="#" className="flex flex-row items-start p-[24px_12px] w-[97px] h-[72px]">
                <span className="font-montserrat font-normal text-base leading-[150%] text-[#ECECEC]">About us</span>
              </a>
              {/* <button className="flex flex-row justify-center items-center py-2 px-5 gap-2 w-[228px] h-[40px] bg-[#ECECEC] border border-[#ECECEC] rounded-[50px]">
                <span className="font-montserrat font-normal text-base leading-[150%] text-[#0B081C]">Sign up for Early access</span>
              </button>
              <button className="flex flex-row justify-center items-center py-2 px-5 gap-2 w-[128px] h-[40px] border border-[#ECECEC] rounded-[50px]">
                <span className="font-montserrat font-normal text-base leading-[150%] text-[#ECECEC]">Contact Us</span>
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className={`${figmaClasses.heroBg} py-20 md:py-40 relative`}
        style={{
          backgroundImage: `url(${cavernBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-figma-purple-dark/80 to-figma-purple-medium/80"></div>
        <div className={`${figmaClasses.container} relative z-10`}>
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h1 className={`${figmaClasses.headingHero} ${figmaClasses.animateFadeIn}`}>
              Review Contracts 10x Faster with AI
            </h1>
            <div className="max-w-xl mx-auto">
              <p className={`${figmaClasses.paragraph} ${figmaClasses.animateFadeInDelay1}`}>
                Transform your legal workflow with intelligent contract analysis that extracts key clauses,
                flags risks, and summarizes terms in minutes, not days.
              </p>
            </div>
            <div className={`flex flex-col sm:flex-row justify-center gap-4 pt-6 ${figmaClasses.animateFadeInDelay2}`}>
              <button className={figmaClasses.buttonPrimary}>Sign up for Early access</button>
              <button className={figmaClasses.buttonSecondary}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className={figmaClasses.container}>
          <div className={figmaClasses.sectionTitle}>
            <h2 className={figmaClasses.headingSection}>Features that work for your future.</h2>
            <p className={`${figmaClasses.paragraph} mt-6`}>
              Discover how Aigree's powerful AI capabilities streamline contract review and empower your team to make faster, more informed decisions.
            </p>
          </div>

          <div className={figmaClasses.featureGrid}>
            {/* Feature Card 1 */}
            <div className={figmaClasses.card}>
              <div className={figmaClasses.featureCardContent}>
                <div className={figmaClasses.iconWrapperPurple}>
                  <span className="text-white text-xl">🔍</span>
                </div>
                <h3 className={figmaClasses.headingCard}>Risk Assessment</h3>
                <p className={figmaClasses.paragraphSmall}>
                  Protect your organization with intelligent risk detection. Aigree identifies non-standard terms, potential liabilities, and compliance issues, highlighting them for your review. Our customizable risk thresholds adapt to your organization's unique requirements and risk tolerance.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className={figmaClasses.card}>
              <div className={figmaClasses.featureCardContent}>
                <div className={figmaClasses.iconWrapperPink}>
                  <span className="text-white text-xl">📄</span>
                </div>
                <h3 className={figmaClasses.headingCard}>Intelligent Clause Extraction</h3>
                <p className={figmaClasses.paragraphSmall}>
                  Our AI engine automatically identifies and extracts critical clauses from any contract. From indemnification to termination provisions, Aigree instantly surfaces what matters most, reducing review time by up to 90% while ensuring nothing important is missed.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card - Full Width */}
          <div className={`${figmaClasses.cardPink} mt-6`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${figmaClasses.featureCardContent} pt-8`}>
                <div className={figmaClasses.iconWrapperMagenta}>
                  <span className="text-white text-xl">💬</span>
                </div>
                <h3 className={figmaClasses.headingCard}>Chat with Docs</h3>
                <p className={figmaClasses.paragraphSmall}>
                  Interact with your contracts conversationally. Ask questions, get instant answers, and understand complex terms with ease. Save time and reduce errors with Aigree's intelligent document chat.
                </p>
              </div>
              <div className="flex items-center justify-center">
              <img src={blueLaptopUser} alt="User interacting with document chat" className="w-[300px] h-auto object-cover rounded-lg"/>
              </div>
            </div>
          </div>

          {/* Additional Feature Cards */}
          <div className={`${figmaClasses.featureGrid} mt-6`}>
            {/* Feature Card 3 */}
            <div className={figmaClasses.card}>
              <div className={figmaClasses.featureCardContent}>
                <div className={figmaClasses.iconWrapperPurple}>
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className={figmaClasses.headingCard}>Automated Efficiency</h3>
                <p className={figmaClasses.paragraphSmall}>
                  Protect your organization with intelligent risk detection. Aigree identifies non-standard terms, potential liabilities, and compliance issues, highlighting them for your review. Our customizable risk thresholds adapt to your organization's unique requirements and risk tolerance.
                </p>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className={figmaClasses.card}>
              <div className={figmaClasses.featureCardContent}>
                <div className={figmaClasses.iconWrapperPink}>
                  <span className="text-white text-xl">📊</span>
                </div>
                <h3 className={figmaClasses.headingCard}>Analytics Dashboard</h3>
                <p className={figmaClasses.paragraphSmall}>
                  Gain real-time insights with our clear, intuitive dashboard. 
                  Aigree provides actionable data, enabling your team to monitor trends and optimize contract performance effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={figmaClasses.ctaSection}>
        <div className={figmaClasses.container}>
          <div className={figmaClasses.card}>
            <div className={figmaClasses.ctaContent}>
              <h2 className={figmaClasses.headingSection}>Our powerful analytics provides invaluable insights.</h2>
              <p className={figmaClasses.paragraph}>
                Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement.
              </p>
              <div className="pt-4">
                <button className={figmaClasses.buttonPrimary}>Sign up for Early access</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-figma-text-primary/10">
        <div className={figmaClasses.container}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-6">
              <h3 className="font-montserrat font-medium text-2xl text-figma-text-primary">Contact</h3>
              <div className="space-y-2">
                <p className="font-montserrat font-light text-lg text-figma-text-primary">Work inquires: hello@aigree.com</p>
                <p className="font-montserrat font-light text-lg text-figma-text-primary">PR and speaking: hello@aigree.com</p>
                <p className="font-montserrat font-light text-lg text-figma-text-primary">New business: hello@aigree.com</p>
              </div>
              <p className="font-montserrat font-light text-base text-[#939393]">© 2023 Aigree. All Rights Reserved.</p>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-montserrat font-medium text-2xl text-figma-text-primary">Address</h3>
              <p className="font-montserrat font-light text-lg text-figma-text-primary">
                398 11th Street, Floor 2<br />
                San Francisco, CA 94103
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
                <img src="/src/assets/book-open-text-2.png" alt="AIgree Logo" className="w-[22px] h-[22px] flex-none mb-4" />
                <span className="font-montserrat font-bold text-[22px] leading-[100%] flex items-center tracking-[-0.03em] text-[#ECECEC] mb-4">AIgree</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FigmaStylesDemo;