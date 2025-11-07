"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Calendar, Facebook, Github, Globe, Instagram, Linkedin, MapPin, Navigation, Quote, Rocket, Settings, Shield, Star, Telescope, TrendingUp, Twitter, Users, Youtube, Zap } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="small"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Missions", id: "hero" },
            { name: "Features", id: "feature" },
            { name: "Spacecraft", id: "product" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://images.pexels.com/photos/5255410/pexels-photo-5255410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          brandName="NASA Missions"
          button={{
            text: "Explore Space",
            href: "https://nasa.gov"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Exploring the Final Frontier"
          description="Journey through NASA's groundbreaking space missions, from Apollo to Mars exploration and beyond"
          tag="Space Missions"
          tagIcon={Rocket}
          buttons={[
            { text: "Explore Missions", href: "feature" },
            { text: "View Spacecraft", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/34521/space-shuttle-lift-off-liftoff-nasa.jpg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="NASA space shuttle launch"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="NASA's Mission Legacy"
          description="Since 1958, NASA has been at the forefront of space exploration, pushing the boundaries of human knowledge and technological capability"
          tag="Our Story"
          tagIcon={Star}
          bulletPoints={[
            {
              title: "60+ Years of Exploration",
              description: "Leading humanity's journey to the stars with groundbreaking missions",
              icon: Calendar
            },
            {
              title: "Revolutionary Technology",
              description: "Developing cutting-edge spacecraft and exploration systems",
              icon: Zap
            },
            {
              title: "Scientific Discovery",
              description: "Expanding our understanding of the universe and our place in it",
              icon: Telescope
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7672253/pexels-photo-7672253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="NASA mission control center"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Mission Capabilities"
          description="Advanced systems and technologies that power our space exploration missions"
          tag="Features"
          tagIcon={Settings}
          features={[
            {
              title: "Mission Planning",
              description: "Advanced trajectory calculations and mission scheduling systems for optimal space exploration",
              icon: MapPin
            },
            {
              title: "Advanced Propulsion",
              description: "State-of-the-art rocket engines and propulsion systems for deep space missions",
              icon: Rocket
            },
            {
              title: "Life Support Systems",
              description: "Critical life support technology ensuring astronaut safety in extreme environments",
              icon: Shield
            },
            {
              title: "Navigation & Control",
              description: "Precision navigation and spacecraft control systems for accurate space travel",
              icon: Navigation
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Spacecraft Fleet"
          description="Explore NASA's impressive collection of spacecraft and exploration vehicles"
          tag="Vehicles"
          tagIcon={Rocket}
          products={[
            {
              id: "apollo",
              name: "Apollo Command Module",
              price: "Historical",
              imageSrc: "https://images.pexels.com/photos/586073/pexels-photo-586073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Apollo command module spacecraft"
            },
            {
              id: "shuttle",
              name: "Space Shuttle Orbiter",
              price: "Operational",
              imageSrc: "https://images.pexels.com/photos/15337511/pexels-photo-15337511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "NASA space shuttle orbiter"
            },
            {
              id: "rover",
              name: "Mars Perseverance Rover",
              price: "Active Mission",
              imageSrc: "https://images.pexels.com/photos/8474451/pexels-photo-8474451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mars Perseverance rover"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Mission Achievements"
          description="Key statistics showcasing NASA's incredible accomplishments in space exploration"
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "missions",
              icon: Rocket,
              title: "Missions Completed",
              value: "200+"
            },
            {
              id: "astronauts",
              icon: Users,
              title: "Astronauts Trained",
              value: "350+"
            },
            {
              id: "discoveries",
              icon: Star,
              title: "Scientific Discoveries",
              value: "1000+"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Mission Team"
          description="Meet the dedicated professionals who make space exploration possible"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "commander",
              name: "Sarah Mitchell",
              role: "Mission Commander",
              description: "Veteran astronaut with over 400 days in space across three missions to the International Space Station",
              imageSrc: "https://images.pexels.com/photos/7661457/pexels-photo-7661457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mission Commander Sarah Mitchell",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/nasa" },
                { icon: Linkedin, url: "https://linkedin.com/company/nasa" }
              ]
            },
            {
              id: "specialist",
              name: "Dr. Elena Rodriguez",
              role: "Mission Specialist",
              description: "Astrophysicist and mission specialist focusing on deep space exploration and planetary science",
              imageSrc: "https://images.pexels.com/photos/7709017/pexels-photo-7709017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dr. Elena Rodriguez mission specialist",
              socialLinks: [
                { icon: Globe, url: "https://nasa.gov" },
                { icon: Linkedin, url: "https://linkedin.com/company/nasa" }
              ]
            },
            {
              id: "director",
              name: "James Chen",
              role: "Flight Director",
              description: "Experienced flight director overseeing mission operations from NASA's Mission Control Center",
              imageSrc: "https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Flight Director James Chen",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/nasa" },
                { icon: Globe, url: "https://nasa.gov" }
              ]
            },
            {
              id: "engineer",
              name: "Maria Santos",
              role: "Systems Engineer",
              description: "Lead systems engineer responsible for spacecraft design and mission critical system operations",
              imageSrc: "https://images.pexels.com/photos/586105/pexels-photo-586105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Systems Engineer Maria Santos",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/company/nasa" },
                { icon: Github, url: "https://github.com/nasa" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Astronaut Testimonials"
          description="Hear from the brave men and women who have ventured into space"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "astronaut1",
              name: "Commander Lisa Johnson",
              role: "ISS Commander",
              company: "NASA Astronaut Corps",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7709017/pexels-photo-7709017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Commander Lisa Johnson"
            },
            {
              id: "astronaut2",
              name: "Dr. Michael Thompson",
              role: "Mission Specialist",
              company: "Mars Mission Team",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8851605/pexels-photo-8851605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dr. Michael Thompson"
            },
            {
              id: "astronaut3",
              name: "Captain Jennifer Lee",
              role: "Pilot",
              company: "Artemis Program",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Captain Jennifer Lee"
            },
            {
              id: "astronaut4",
              name: "Dr. Robert Kim",
              role: "Science Officer",
              company: "Deep Space Missions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7169839/pexels-photo-7169839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dr. Robert Kim"
            },
            {
              id: "astronaut5",
              name: "Commander Sarah Davis",
              role: "Flight Engineer",
              company: "Space Station Crew",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/586059/pexels-photo-586059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Commander Sarah Davis"
            },
            {
              id: "astronaut6",
              name: "Major David Wilson",
              role: "Test Pilot",
              company: "Spacecraft Development",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/60126/pexels-photo-60126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Major David Wilson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          faqs={[
            {
              id: "astronaut-training",
              title: "How long does astronaut training take?",
              content: "Astronaut training typically takes 2-3 years of intensive preparation including spacewalk training, spacecraft systems, and mission-specific preparation."
            },
            {
              id: "mission-duration",
              title: "How long do space missions last?",
              content: "Mission duration varies greatly - ISS missions are typically 6 months, while deep space missions like Mars exploration can take years to complete."
            },
            {
              id: "space-safety",
              title: "How does NASA ensure astronaut safety?",
              content: "NASA implements multiple redundant safety systems, extensive testing, continuous monitoring, and rigorous training protocols to ensure maximum crew safety."
            },
            {
              id: "future-missions",
              title: "What are NASA's future mission plans?",
              content: "NASA is focused on returning to the Moon through the Artemis program, establishing a lunar base, and preparing for eventual human missions to Mars."
            }
          ]}
          sideTitle="Mission Questions"
          sideDescription="Common questions about NASA space missions and exploration"
          textPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Connect with NASA Missions"
          description="Get in touch with our mission team for collaboration opportunities, educational programs, or mission information"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "organization", type: "text", placeholder: "Organization", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your interest in NASA missions...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://images.pexels.com/photos/7672253/pexels-photo-7672253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="NASA mission control center"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoSrc="https://images.pexels.com/photos/5255410/pexels-photo-5255410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoText="NASA Missions"
          columns={[
            {
              title: "Missions",
              items: [
                { label: "Current Missions", href: "hero" },
                { label: "Mission Archive", href: "https://nasa.gov/missions" },
                { label: "Future Missions", href: "https://nasa.gov/future" }
              ]
            },
            {
              title: "Explore",
              items: [
                { label: "Spacecraft", href: "product" },
                { label: "Technology", href: "feature" },
                { label: "Discoveries", href: "metric" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Team", href: "team" },
                { label: "NASA History", href: "https://nasa.gov/history" },
                { label: "Careers", href: "https://nasa.gov/careers" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Education", href: "https://nasa.gov/education" },
                { label: "Media", href: "https://nasa.gov/media" },
                { label: "Data Portal", href: "https://data.nasa.gov" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/nasa", ariaLabel: "NASA on Twitter" },
            { icon: Youtube, href: "https://youtube.com/nasa", ariaLabel: "NASA on YouTube" },
            { icon: Instagram, href: "https://instagram.com/nasa", ariaLabel: "NASA on Instagram" },
            { icon: Facebook, href: "https://facebook.com/nasa", ariaLabel: "NASA on Facebook" }
          ]}
          copyrightText="© 2025 NASA. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}