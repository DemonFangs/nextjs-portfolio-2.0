import Head from 'next/head';
import Link from 'next/link';

import { useGlobalContext } from '../contexts/globalContext';
import Card from '../components/Card';
import DecoratedText from '../components/DecorateText';
import Highlight from '../components/Highlight';
import Section from '../components/Section';
import Summary from '../components/Summary';
import TagList from '../components/TagList';
import YearsExperience from '../components/YearsExperience';

const Home = () => {
  const global_values = useGlobalContext();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Section
        className="hero"
        title={`Building digital "experiences" with persistence`}
      >
        <div className="background"></div>
        <div className="description">
          <p className="sub-point">
            Software engineer of{' '}<YearsExperience />. I create elegant solutions,
            drink lots of tea, and believe every failure is a step forward.
          </p>
          <p>
            <Link className="btn-bg inline" href="/experiences">View my work</Link>
            <Link className="btn-bg inline" href="#about-me">Learn more</Link>
          </p>
        </div>
      </Section>
      <Section title="Overview" className="summary">
        <Summary items={[
          { title: 'Years of Experience', value: '7+' },
          { title: 'Project ownership', value: '6+' },
          { title: 'Cups of Tea', value: '∞' },
          { title: 'Timezone', value: 'EST' },
          { title: 'Persistency', value: '9000%' },
        ]} />
      </Section>
      <Section title="About me" className="about-me" id="about-me">
        <div className="about-profile-content">
          <div className="description">
            <p className="sub-point">
              <DecoratedText text={[
                `An interest in Computer Programming led me to pursue a degree in "Computer Science". The`,
                `journey took much longer than most, with ups and downs spanning seven years. But with`,
                `"persistence" and "perseverance" through repeated failures, I finally graduated.`
              ].join(' ')} />
            </p>
            <p className="sub-point quote">
              "Let this be an example of how failure is not an obstacle but an opportunity to get stronger."
            </p>
            <p className="sub-point">
              <DecoratedText text={[
                `Today, I channel that same determination into building robust software`,
                `solutions and "leading" teams to success.`
              ].join(' ')} />
            </p>
            <TagList tags={[
              'Full-Stack Development',
              'Cloud Architecture',
              'Team Leadership',
              'Problem Solving',
              'Agile Methodologies',
              'Tenacious',
            ]} />
          </div>
          <div className="profile-picture">
            {/* <img src="/profile_pic.jpg" alt="Khadem Avinoor Alam potrait" /> */}
            <div className="background profile-pic"></div>
          </div>
        </div>
      </Section>
      <Section title="Highlights" className="featured-project">
        <div className="cards-container">
          <Card 
            title="Custom MVC Framework"
            icon="MVC"
            text_as_icon
            link="/projects#custom-mvc"
            link_button
          >
            <p>
              Lead and developed an <Highlight text="Model View Controller" /> framework 
              for an web app for both Customers and in-house DevOps.
            </p>
          </Card>

          <Card 
            title="CI/CD pipeline"
            link="/projects/#ci-cd-pipeline"
            icon="/ci-cd.png"
            link_button
          >
            <p>
              Built a <Highlight text="CI/CD pipeline" /> from concept to production, 
              combining existing and new systems.
            </p>
          </Card>

          <Card
            title="Change Visualization UI"
            icon="/github-icon.png"
            link="/projects/#git-like-diff"
            link_button
          >
            <p>
              Built a <Highlight text="git" /> like UI for reviewing changes between deployments.
            </p>
          </Card>

          <Card
            title="Spreadsheet-Style Editor"
            icon="/table.png"
            link="/projects/#google-sheet-features"
            link_button
          >
            <p>
              Implemented a google sheet like user experience in <Highlight text="Custom MVC" /> framework.
            </p>
          </Card>
        </div>
      </Section>
      <Section 
        title={`Let's work "together"!`}
        className="lets-work-together text-center center-all"
      >
        <p>
          <DecoratedText text={[
            `Have a project in mind or just want to chat about tech over tea? I'm always open to new`,
            '"opportunities" and "conversations".'
          ].join(' ')} />
        </p>
        <p>
          <Link className="btn-bg inline focus" href={`mailto:${global_values.email}`}>
            Send me an email
          </Link>
        </p>
      </Section>
    </>
  );
};

export default Home;
