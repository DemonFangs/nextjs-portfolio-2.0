import Head from 'next/head';
import Link from 'next/link';

import { useGlobalContext } from '../contexts/globalContext';
import Card from '../components/Card';
import DecoratedText from '../components/DecorateText';
import Highlight from '../components/Highlight';
import Section from '../components/Section';

function Contact() {
  const global_values = useGlobalContext();

  return (
    <>
      <Head>
        <title>Experiences</title>
      </Head>

      <Section
        className="hero w-full"
        title={`Let's start a "conversation"`}
      >
        <div className="background"></div>
        <div className="description">
          <Highlight text="Available for new opportunities." /> Whether you have a 
          project in mind, want to discuss opportunities, or just chat about tech 
          over tea — I'd love to hear from you.
        </div>
      </Section>
      
      <Section title="Find me at" className="summary">
        <div className="cards-container small-cards">
          <Card
            title="Email"
            icon='/mail-icon.png'
          >
            <p>
              For project inquiries, collaborations, or general questions
            </p>
            <Link
              className="btn btn-bg btn-sm focus" 
              href={`mailto:${global_values.email}`}
              target="_blank"
            >
              {global_values.email}
            </Link>
          </Card>
          <Card
            title="LinkedIn"
            icon='/linkedin-icon.png'
          >
            <p>
              Connect professionally and view my complete work history
            </p>
            <Link
              className="btn btn-bg btn-sm focus" 
              href="https://linkedin.com/in/khadem-avinoor-alam" 
              target="_blank"
            >
              Khadem Avinoor Alam
            </Link>
          </Card>
          <Card
            title="Github"
            icon='/github-icon.png'
          >
            <p>
              Check out my code, projects, and open source contributions
            </p>
            <Link
              className="btn btn-bg btn-sm focus"
              href="https://github.com/DemonFangs"
              target="_blank"
            >
              DemonFangs
            </Link>
          </Card>
        </div>
      </Section>
      
      <Section 
        title={`Looking forward to hearing from "you"!`}
        className="contact-form text-center center-all"
      >
        <p>
          <DecoratedText text={`Let's build and innovate "together".`} />
        </p>
      </Section>
    </>
  );
}

export default Contact;
