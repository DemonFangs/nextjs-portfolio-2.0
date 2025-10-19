import Head from 'next/head';
import Link from 'next/link';

import ExperienceSummary from '../components/ExperinceSummary';
import Highlight from '../components/Highlight';
import TagList from '../components/TagList';
import Section from '../components/Section';
import { Segment, SubSegment } from '../components/Segment';
import Summary from '../components/Summary';
import { useGlobalContext } from '../contexts/globalContext';

function ExpHeader({ title, company, date_range }) {
  return (
    <div className="exp-header">
      <div className="header">
        <h2>{title}</h2>
        <div className="date-range">
          <Highlight text={date_range} bg />
        </div>
      </div>
      <div>{company}</div>
    </div>
  );
};

function ExpDetails({ title = '', children = [], id = '' }) {
  return (
    <div className="exp-details" id={id}>
      <h3 className="header"><Highlight text={title} /></h3>
      <div className="content">{children}</div>
    </div>
  );
}

function ExpFooter({ tags = [] }) {
  return (
    <div className="exp-footer">
      <div>Technologies & skills</div>
      <div><TagList tags={tags} /></div>
    </div>
  )
};

function Experiences() {
  const global_values = useGlobalContext();
  return (
    <>
      <Head>
        <title>Experiences</title>
      </Head>

      <Section
        className="hero w-full"
        title="Driving innovation through engineering excellence"
      >
        <div className="background"></div>
        <div className="description">
          <Highlight text="7+" /> years of transforming complex challenges into scalable solutions. 
          Specialized in platform engineering, microservices architecture, and team leadership.
        </div>
      </Section>
      
      <Section title="Overall impact" className="summary">
        <Summary items={[
          { title: 'Reduced deployment errors', value: '30%' },
          { title: 'Improved scalability', value: '20%' },
          { title: 'Increased productivity', value: '19%' },
          { title: 'Enhanced compliance', value: '15%' },
          { title: 'Client retention boost', value: '14%' },
          { title: 'User engagement growth', value: '10%' },
        ]} />
      </Section>

      <Section title="Professional Journey" className="experiences">
        <Segment>
          <ExpHeader
            title="Platform Engineer"
            company="AdBridg" 
            date_range="January 2021 - April 2024"
          />

          <hr />

          <ExpDetails title="Architecture & Performance">
            <SubSegment>
              Optimized platform performance by refactoring monolithic services into microservices,
              improving system performance by<Highlight text="4%" />and scalability by
              <Highlight text="20%" />
            </SubSegment>
            <SubSegment>
              Led migration from legacy framework to Next.js, achieving<Highlight text="10%" /> 
              performance improvement with enhanced features
            </SubSegment>
            <SubSegment>
              Developed scalable data aggregation pipelines, reducing processing time by 
              <Highlight text="3%" />and improving data reliability with<Highlight text="9%" /> 
              reduction in user confusion
            </SubSegment>
          </ExpDetails>

          <ExpDetails title="DevOps & CI/CD" id="ci-cd-pipeline">
            <SubSegment>
              Integrated the new <Highlight text="NextJS" /> system to the existing CI/CD pipeline,
              
            </SubSegment>
            <SubSegment>
              Redesigned CI/CD pipeline with modern testing suite, reducing deployment time by 
              <Highlight text="30%" />and production bugs significantly
            </SubSegment>
            <SubSegment>
              Developed logging system with automated notifications, reducing manual intervention by 
              <Highlight text="50%" />
            </SubSegment>
          </ExpDetails>

          <ExpDetails title="Client Impact & Leadership">
            <SubSegment>
              Enhanced web application with new features, increasing user engagement by 
              <Highlight text="10%" />and client retention by<Highlight text="14%" />
            </SubSegment>
            <SubSegment>
              Developed ads.txt scraper tool adhering to IAB guidelines, enhancing ad placement 
              accuracy and compliance by<Highlight text="15%" />
            </SubSegment>
            <SubSegment>
              Mentored DevOps team members and junior developers on internal systems, coding 
              practices, and testing methodologies
            </SubSegment>
            <SubSegment>
              Built in-house analytics tool using Plotly.js, enabling<Highlight text="20%" /> 
              faster data-driven decisions
            </SubSegment>
            <SubSegment>
              Increased Analytics team productivity by<Highlight text="19%" />through development 
              of multiple in-house application features
            </SubSegment>
          </ExpDetails>

          <ExpDetails title="Development & Quality">
            <SubSegment>
              Debugged distributed applications, reducing production errors by 
              <Highlight text="20%" />through thorough testing and optimization
            </SubSegment>
            <SubSegment>
              Spearheaded client-facing application development using custom in-house framework, 
              improving client satisfaction and usability
            </SubSegment>
          </ExpDetails>

          <hr />

          <ExpFooter tags={[
            'Microservices',
            'Next.js',
            'CI/CD',
            'Data Pipelines',
            'DevOps',
            'Testing',
            'Mentorship',
            'Full-Stack',
            'Git versioning strategy'
          ]} />
        </Segment>
        {/* Platform Engineear */}

        <Segment>
          <ExpHeader
            title="Intermediate Full-stack developer"
            company="AdBridg" 
            date_range="February 2020 - January 2021"
          />

          <hr />

          <ExpDetails title="Architecture & Performance">
            <SubSegment>
              Optimized platform performance by refactoring monolithic services into microservices,
              improving system performance by<Highlight text="4%" />and scalability by
              <Highlight text="20%" />
            </SubSegment>
            <SubSegment>
              Led migration from legacy framework to Next.js, achieving<Highlight text="10%" /> 
              performance improvement with enhanced features
            </SubSegment>
            <SubSegment>
              Developed scalable data aggregation pipelines, reducing processing time by 
              <Highlight text="3%" />and improving data reliability with<Highlight text="9%" /> 
              reduction in user confusion
            </SubSegment>
          </ExpDetails>

          <ExpDetails title="DevOps & CI/CD" id="ci-cd-pipeline">
            <SubSegment>
              Designed in-house queuing system for Continuous Deployment, reducing deployment errors 
              by<Highlight text="30%" />with real-time notifications
            </SubSegment>
            <SubSegment>
              Redesigned CI/CD pipeline with modern testing suite, reducing deployment time by 
              <Highlight text="30%" />and production bugs significantly
            </SubSegment>
            <SubSegment>
              Developed logging system with automated notifications, reducing manual intervention by 
              <Highlight text="50%" />
            </SubSegment>
          </ExpDetails>

          <ExpDetails title="Client Impact & Leadership">
            <SubSegment>
              Enhanced web application with new features, increasing user engagement by 
              <Highlight text="10%" />and client retention by<Highlight text="14%" />
            </SubSegment>
            <SubSegment>
              Developed ads.txt scraper tool adhering to IAB guidelines, enhancing ad placement 
              accuracy and compliance by<Highlight text="15%" />
            </SubSegment>
            <SubSegment>
              Mentored DevOps team members and junior developers on internal systems, coding 
              practices, and testing methodologies
            </SubSegment>
            <SubSegment>
              Built in-house analytics tool using Plotly.js, enabling<Highlight text="20%" /> 
              faster data-driven decisions
            </SubSegment>
            <SubSegment>
              Increased Analytics team productivity by<Highlight text="19%" />through development 
              of multiple in-house application features
            </SubSegment>
          </ExpDetails>

          <ExpDetails title="Development & Quality">
            <SubSegment>
              Debugged distributed applications, reducing production errors by 
              <Highlight text="20%" />through thorough testing and optimization
            </SubSegment>
            <SubSegment>
              Spearheaded client-facing application development using custom in-house framework, 
              improving client satisfaction and usability
            </SubSegment>
          </ExpDetails>

          <hr />

          <ExpFooter tags={[
            'Microservices',
            'Next.js',
            'CI/CD',
            'Data Pipelines',
            'DevOps',
            'Testing',
            'Mentorship',
            'Full-Stack',
            'Git versioning strategy'
          ]} />
        </Segment>
      </Section>
      
      <Section title="Experience in Years" className="summary">
        <ExperienceSummary items={[
          { 
            title: '7+',
            values: [
              'NodeJS',
              'ExpressJS',
              'HTML5',
              'VanillaJS',
              'CSS/SCSS',
              'TypeScript',
              'ExpressJS',
              'git',
            ] 
          },
          {
            title: '6+',
            values: []
          },
          {
            title: '5+',
            values: []
          },
          {
            title: '4+',
            values: []
          },
          {
            title: '3+',
            values: []
          },
          {
            title: '2+',
            values: []
          },
          {
            title: 'Other',
            values: []
          },
        ]} />
      </Section>
    </>
  );
}

export default Experiences;
