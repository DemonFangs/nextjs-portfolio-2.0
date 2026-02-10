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
        <title>Khadem A. Alam | Experiences</title>
      </Head>

      <Section
        className="hero w-full"
        title={`Driving "innovation" through engineering excellence`}
      >
        <div className="background"></div>
        <div className="description">
          <DecoratedText text={[
            `"7+" years of transforming complex challenges into scalable solutions.`,
            `Specialized in platform engineering, micro-services architecture, and`,
            `team leadership.`
          ].join(' ')} />
        </div>
      </Section>
      
      <Section title="Overall impact" className="summary">
        <Summary items={[
          { title: 'Reduced errors', value: '30%' },
          { title: 'Improved scalability', value: '20%' },
          { title: 'Increased productivity', value: '19%' },
          { title: 'Enhanced compliance', value: '15%' },
          { title: 'Increased deliverables', value: '7%' },
          { title: 'Client retention boost', value: '14%' },
          { title: 'User engagement growth', value: '18%' },
        ]} />
      </Section>

      <Section title="Experience" className="experiences">
        <div className="segments-container">

          {/* ------------------- Platform Engineer ---------------- */}
          <Segment>
            <SegmentHeader
              title="Platform Engineer"
              sub_text="AdBridg" 
              highlight="January 2021 — April 2024"
            />

            <hr />

            <SegmentContent title="Applications & Status">
              <SubSegment>
                The **Hub app (v2.0)** — built on the [Custom MVC framework](/projects/#custom-mvc) — 
                completely replaced the legacy application with significantly expanded features. This 
                unified several disparate systems into a cohesive interface and achieved nearly "19%" 
                improvement in user engagement.
              </SubSegment>
              <SubSegment>
                The **Hub app (v3.0)** — built on the "Next.js" framework following the latest practices 
                back then, to create more complex UI designs allowing to mesh together multiple segments 
                scattered in **Hub app (v2.0)** to a more homogenized page.
              </SubSegment>
              <SubSegment>
                The **Roll-up engine** is responsible for receiving and aggregating data from various 
                pixel trackers out in production.
              </SubSegment>
              <SubSegment>
                The proprietary **Ad Engine** built on top of the "Prebid.js" library that optimizes Ad 
                revenue for publisher's products through various strategies that can be tweaked using 
                both the **Hub app (v2.0)** and **Hub app (v3.0)**.
              </SubSegment>
              <SubSegment>
                The [Ads.txt Validator](/projects/#ads-txt-validator) **app** [[deprecated]] designed to 
                validate publishers' ::Ads.txt:: file to the standards set by the ::IAB::.
              </SubSegment>
              <SubSegment>
                The **API (REST)** operates as the central middle-ware layer, orchestrating secure 
                communication between the database, internal application suite, and external third-party 
                integrations.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Research & Planning">
              <SubSegment>
                Researched and created benchmarks in collaboration with other engineers to find 
                existing Javascript Frameworks that best matches all the criteria to develop the 
                next iteration of the **Hub app (v3.0)**.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Architecture & Performance">
              <SubSegment>
                Migrated and developed new features in "Next.js" powered **Hub app (v3.0)**, 
                including adding a new route within the existing 
                [CI/CD pipeline](/projects/#ci-cd-pipeline) to deploy from **Hub app (v3.0)** 
                alongside **Hub app (v2.0)** while keeping the deployment branches separated.
              </SubSegment>
              <SubSegment>
                Collaborated with engineers to design a "dynamic query generation" system that 
                constructs database queries based on user actions and selections in the frontend, 
                with queries tailored per page or model context. Since the API layer was 
                originally architected around strict, predefined relational queries, this required 
                rethinking the query architecture to support flexible, user-driven data retrieval 
                while maintaining data integrity and performance.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Improvements & Impact">
              <SubSegment>
                Designed a [Google Sheets integration](/projects/#google-sheet-api-integration) using 
                "AppScript" to allow internal team to maintain line items provided by publishers over 
                Google sheets.
              </SubSegment>
              <SubSegment>
                Developed a **Dynamic Ad Slot Injection** system that dynamically injects ad slots into 
                an infinite scrolling page. This system includes configurable controls that allow users 
                to manage key parameters such as the number of ad slots to display, refresh intervals, 
                and conditions for halting ad display.
              </SubSegment>
              <SubSegment>
                Implemented a **Sticky Ad Slot** functionality to convert any existing ad slot into a 
                sticky (on-scroll) ad. Additionally, introduced conditional behavior setups that enable 
                specific ad slots to become sticky based on customization criteria.
              </SubSegment>
              <SubSegment>
                Created a suite of **UI Tools for Visualization and Debugging** complex ad behaviors, 
                providing users with an intuitive interface to monitor and adjust ad slot dynamics in 
                real-time.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Leadership & Training">
              <SubSegment>
                "Mentored" and developed junior engineering talent through comprehensive training 
                on development ecosystem tools, best practices, and architectural patterns.
              </SubSegment>
              <SubSegment>
                "Collaborated" hands-on across diverse micro-projects, providing real-time 
                guidance on problem-solving approaches for both straightforward implementations 
                and complex technical challenges.
              </SubSegment>
              <SubSegment>
                Fostered a culture of code quality through "pair programming" and thorough code 
                reviews, ensuring adherence to clean code principles, consistent naming conventions, 
                and maintainable coding standards that elevated overall team output.
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'Google AppScript',
              'Microservices',
              'Next.js',
              'CI/CD Pipeline',
              'Data Pipelines',
              'DevOps',
              'Testing',
              'Mentorship',
              'Pair Programming',
              'Full-Stack',
              'Git versioning strategy',
              'Web Crawler',
              'Validation Engine',
              'Node.js',
              'Dynamic Query',
              'SQL',
              'MySQL',
              'Docker',
              'Data Pipelines',
              'JavaScript',
              'Model View Controller (MVC)',
              'Concurrent Projects',
              'Prebid.js',
              'Revenue Optimization',
            ]} />
          </Segment>

          {/* ----------- Intermediate Full-stack developer -------- */}
          <Segment>
            <SegmentHeader
              title="Intermediate Full-stack developer"
              sub_text="AdBridg" 
              highlight="February 2020 — January 2021"
            />

            <hr />

            <SegmentContent title="Applications & Status">
              <SubSegment>
                The **Analytics app** [[deprecated]] delivered sophisticated ad inventory performance 
                analysis with flexible filtering capabilities for customers and administrators. 
                Functionality was later consolidated into the unified **Hub app (v2.0)** experience.
              </SubSegment>
              <SubSegment>
                The **Hub app (v1.0)** [[deprecated]] provided deployment and configuration management 
                with custom branding aligned to client specifications.
              </SubSegment>
              <SubSegment>
                The **Hub app (v2.0)** — built on the [Custom MVC framework](/projects/#custom-mvc) — 
                completely replaced the legacy application with significantly expanded features. This 
                unified several disparate systems into a cohesive interface and achieved nearly "19%" 
                improvement in user engagement.
              </SubSegment>
              <SubSegment>
                The proprietary **Ad Engine** built on top of the "Prebid.js" library that optimizes Ad 
                revenue for publisher's products through various strategies that can be tweaked using 
                the **Hub app**s.
              </SubSegment>
              <SubSegment>
                The **API (REST)** operates as the central middle-ware layer, orchestrating secure 
                communication between the database, internal application suite, and external third-party 
                integrations.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Changes and Impact">
              <SubSegment>
                Collaborated closely with senior developers to architect and prototype 
                the [Custom MVC framework](/projects/#custom-mvc). Progressively assumed full 
                ownership and shepherded the project from initial concept through production 
                deployment and ongoing evolution.
              </SubSegment>
              <SubSegment>
                Successfully migrated the **Analytics app** into the new framework while 
                simultaneously enhancing its capabilities with advanced visualization features 
                powered by "Plotly.js". Abstracted the library's complexity through well-designed 
                component interfaces that ensured consistent user experience throughout the 
                application.
              </SubSegment>
              <SubSegment>
                Engineered a robust automated [CI/CD pipeline](/projects/#ci-cd-pipeline) for 
                the Ad Management application, integrating comprehensive testing frameworks that 
                reduced runtime errors by nearly "28%" and accelerated release cycles.
              </SubSegment>
              <SubSegment>
                Designed and implemented innovative features like the [Spreadsheet-Style 
                Editor](/projects/#google-sheet-features) that replicated familiar Google Sheets 
                and Microsoft Excel interactions. This resulted in "16%" increase in user engagement 
                and generated overwhelmingly positive qualitative feedback from users.
              </SubSegment>
              <SubSegment>
                Delivered a sophisticated deployment management interface featuring [Change 
                Visualization UI](/projects/#git-like-diff) with Git-inspired diff visualization, 
                providing clear visibility into changes between deployments and reduced unnecessary 
                deployment cycles by "31%".
              </SubSegment>
              <SubSegment>
                Created ::SSP::s adapters in the **Ad Engine** to allow added options on top of the 
                "Prebid.js" library for more granular control and better ad revenue. This allowed 
                publishers' across the entire platform to seamlessly add these ::bidders:: to their 
                auction list — adding additional revenue opportunities up to "1.8%".
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'Microservices',
              'CI/CD Pipeline',
              'SQL',
              'MySQL',
              'Data Pipelines',
              'DevOps',
              'Testing',
              'Mentorship',
              'Full-Stack',
              'JavaScript',
              'Git Versioning Strategy',
              'Model View Controller (MVC)',
              'Plotly.js',
              'Migration Strategies',
              'Concurrent Projects',
              'Prebid.js',
              'Revenue Optimization',
              'Node.js',
              'Docker',
            ]} />
          </Segment>

          {/* ----------------- Junior developer ------------------- */}
          <Segment>
            <SegmentHeader
              title="Junior developer"
              sub_text="AdBridg" 
              highlight="February 2019 — February 2020"
            />

            <hr />

            <SegmentContent title="Applications">
              <SubSegment>
                The **Analytics app** [[deprecated]] allowed both customers and admins \
                to view and analyze performance of ad inventories based on certain filters.
              </SubSegment>
              <SubSegment>
                The **Hub app (v1.0)** [[deprecated]] allows both customers and admins to 
                push and deploy necessary changes. Colors and theme were taken from the 
                branding profile provided.
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
                redesigned API architecture to strategically combine queries with "JavaScript" 
                functions, leveraging each technology's strengths to significantly reduce 
                processing time on complex datasets by an average of "17%".
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
                Modernized UI design for the Hub application with colors and themes taken from the
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
              'Node.js',
              'Docker',
            ]} />
          </Segment>

          {/* ------------- Junior Front-end developer ------------- */}
          <Segment>
            <SegmentHeader
              title="Junior Front-end developer"
              sub_text="Fizzz Design Corp." 
              highlight="November 2017 — February 2019"
            />

            <hr />

            <SegmentContent title="Design and Branding">
              <SubSegment>
                Built user interfaces and experiences based on list of branding criteria provided 
                by in-house graphic designer; including animations built using images provided by 
                the designer and "CSS keyframes".
              </SubSegment>
              <SubSegment>
                "Bootstrap" library integrated selectively, due to restrictions of bandwidth or 
                customer needs.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Functionality and User experience" id="ci-cd-pipeline">
              <SubSegment>
                All applications were "AODA/WCAG 1.0" validated, creating a comfortable experience 
                for all users.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Public projects: Fizzz Design Corp. official webpage">
              <SubSegment>
                Design based on mock-up created by in-house graphic designer. Implemented 
                using "JavaScript", "CSS" and "HTML".
              </SubSegment>
              <SubSegment>
                A modular design architecture that uses a file-based routing system — similar 
                to "Next.js" — allowing anyone to easily make changes to the site.
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
                Design based on mock-up created by in-house graphic designer. Implemented 
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
