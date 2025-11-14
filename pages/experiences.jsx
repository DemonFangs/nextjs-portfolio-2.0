import Head from 'next/head';
import Link from 'next/link';

import DecoratedText from '../components/DecorateText';
import Section from '../components/Section';
import Summary from '../components/Summary';
import { Segment, SubSegment, SegmentHeader, SegmentContent, SegmentFooter } from '../components/Segment';

function Experiences() {
  return (
    <>
      <Head>
        <title>Experiences</title>
      </Head>

      <Section
        className="hero w-full"
        title={`Driving "innovation" through engineering excellence`}
      >
        <div className="background"></div>
        <div className="description">
          <DecoratedText text={[
            `"7+" years of transforming complex challenges into scalable solutions.`,
            `Specialized in platform engineering, microservices architecture, and`,
            `team leadership.`
          ].join(' ')} />
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

      <Section title="Experience" className="experiences">
        <div className="segments-container">
          <Segment>
            <SegmentHeader
              title="Platform Engineer"
              sub_text="AdBridg" 
              highlight="January 2021 — April 2024"
            />

            <hr />

            <SegmentContent title="Architecture & Performance">
              <SubSegment>
                Optimized platform performance by refactoring monolithic services into microservices,
                improving system performance by "4%" and scalability by "20%".
              </SubSegment>
              <SubSegment>
                Led migration from legacy framework to Next.js, achieving "10%" performance improvement 
                with enhanced features
              </SubSegment>
              <SubSegment>
                Developed scalable data aggregation pipelines, reducing processing time by "3%" and 
                improving data reliability with "9%" reduction in user confusion.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="DevOps & CI/CD" id="ci-cd-pipeline">
              <SubSegment>
                Integrated the new "NextJS" system to the existing CI/CD pipeline,
                
              </SubSegment>
              <SubSegment>
                Redesigned CI/CD pipeline with modern testing suite, reducing deployment time by "30%" and 
                production bugs significantly.
              </SubSegment>
              <SubSegment>
                Developed logging system with automated notifications, reducing manual intervention by "50%".
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Client Impact & Leadership">
              <SubSegment>
                Enhanced web application with new features, increasing user engagement by "10%" and 
                client retention by "14%".
              </SubSegment>
              <SubSegment>
                Developed ads.txt scraper tool adhering to IAB guidelines, enhancing ad placement 
                accuracy and compliance by "15%".
              </SubSegment>
              <SubSegment>
                Mentored DevOps team members and junior developers on internal systems, coding 
                practices, and testing methodologies.
              </SubSegment>
              <SubSegment>
                Built in-house analytics tool using Plotly.js, enabling "20%" faster data-driven decisions.
              </SubSegment>
              <SubSegment>
                Increased Analytics team productivity by "19%" through development 
                of multiple in-house application features.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Development & Quality">
              <SubSegment>
                Debugged distributed applications, reducing production errors by "20%" through thorough 
                testing and optimization
              </SubSegment>
              <SubSegment>
                Spearheaded client-facing application development using custom in-house framework, 
                improving client satisfaction and usability
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
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
            <SegmentHeader
              title="Intermediate Full-stack developer"
              sub_text="AdBridg" 
              highlight="February 2020 — January 2021"
            />

            <hr />

            <SegmentContent title="Design & Architecture">
              <SubSegment>
                ???
              </SubSegment>
              <SubSegment>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis et, tenetur sit 
                facilis quisquam repellendus doloribus quod exercitationem optio maxime repellat veniam 
                aliquam tempore autem beatae, reprehenderit quis sequi!
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Leadership & Training">
              <SubSegment>
                ???
              </SubSegment>
              <SubSegment>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis et, tenetur sit 
                facilis quisquam repellendus doloribus quod exercitationem optio maxime repellat veniam 
                aliquam tempore autem beatae, reprehenderit quis sequi!
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
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

          <Segment>
            <SegmentHeader
              title="Junior developer"
              sub_text="AdBridg" 
              highlight="February 2019 — February 2020"
            />

            <hr />

            <SegmentContent title="Applications">
              <SubSegment>
                The **Analytics app** <i>{'(deprecated)'}</i> allowed both customers and admins \
                to view and analyze performance of ad inventories based on certain filters.
              </SubSegment>
              <SubSegment>
                The **Hub app** allows both customers and admins to push and deploy necessary changes. 
                Colors and theme were taken from the branding profile provided.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Analytic Tool & Performance">
              <SubSegment>
                Refactored and cleaned up code for analytical tool implemented by
                {' (previous)'} developers. Cleaned up UI design by creating concise modules
                of each type of graph that can be re-used as necessary. Reduced page load
                time by approximately "12%".
              </SubSegment>
              <SubSegment>
                Rewrote "SQL" queries and optimized table indexes for better performance; 
                redesigned API architecture to strategically combine "SQL" queries with 
                "JavaScript" functions, leveraging each technology's strengths to significantly 
                reduce processing time on complex datasets by an average of "17%".
              </SubSegment>
              <SubSegment>
                Modernized analytics application UI; implemented role-based feature access with 
                admin-level controls restricted from customer users; developed timezone query 
                functionality with client-side date transformation using native "JavaScript" Date 
                before API calls.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Design and Features">
              <SubSegment>
                Mordernized UI design for the Hub application with colors and themes taken from the
                branding profile provided.
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'Performance Improvement',
              'SQL',
              'MySQL',
              'Indexing',
              'JavaScript',
              'Code Reader',
              'Aurora (AWS)',
              'Branding',
            ]} />
          </Segment>

          <Segment>
            <SegmentHeader
              title="Junior Front-end developer"
              sub_text="Fizzz Design Corp." 
              highlight="November 2017 — February 2019"
            />

            <hr />

            <SegmentContent title="Design and Branding">
              <SubSegment>
                Built user interfaces and experiences based on branding criterias provided by inhouse 
                graphic designer; including animations built using images provided by the designer 
                and "CSS keyframes".
              </SubSegment>
              <SubSegment>
                "Bootstrap" library integrated selectively, due to resistions of bandwidth or customer 
                needs.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Functionality and User experince" id="ci-cd-pipeline">
              <SubSegment>
                All applications were "AODA/WCAG 1.0" validated, creating a comfortable experience 
                for all users.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Public projects: Fizzz Design Corp. official webpage">
              <SubSegment>
                Design based on mockup created by inhouse graphic designer. Implemented 
                using "JavaScript", "CSS" and "HTML".
              </SubSegment>
              <SubSegment>
                A modular design architecture that uses a file-based routing system — similar 
                to "NextJS" — allowing anyone to easily make changes to the site.
              </SubSegment>
              <SubSegment className="link">
                <Link 
                  target="_blank"
                  href="http://www.fizzz.com" 
                  title="Fizzz official webpage"
                >
                  <span>Fizzz Design Corp. official webpage</span>
                  <span>↗</span>
                </Link>
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Public projects: Office of Integrity Commissioner">
              <SubSegment>
                Design based on mockup created by inhouse graphic designer. Implemented 
                using "AngularJS", "CSS" and "XML".
              </SubSegment>
              <SubSegment>
                Built proof-of-concept demos in both "ReactJS" and "AngularJS" for a key 
                site section, evaluating each framework's suitability for client requirements 
                and project timeline.
              </SubSegment>
              <SubSegment>
                Implemented custom "webpack" to generate a lightweight static application.
              </SubSegment>
              <SubSegment className="link">
                <Link 
                  target="_blank"
                  href="http://web.archive.org/web/20190929015820/www.oico.on.ca/ar/2017-2018/" 
                  title="Archived link to Office of Integrity Commissioner Annual report 2017 to 2018"
                >
                  <span>Office of Integrity Commissioner of Ontario Annual Report 2017- 18 webpage</span>
                  <span>↗</span>
                </Link>
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'CSS',
              'JavaScript',
              'HTML',
              'AngularJS',
              'ReactJS',
              'Bootstrap',
              'XML',
              'AODA/WCAG 1.0',
              'Team Work',
              'Webpack',
              'Branding',
            ]} />
          </Segment>
        </div>
      </Section>
    </>
  );
}

export default Experiences;
