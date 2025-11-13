import Head from 'next/head';

import Section from '../components/Section';
import Card from '../components/Card';
import { Segment, SubSegment, SegmentHeader, SegmentContent, SegmentFooter } from '../components/Segment';
import TagList from '../components/TagList';

/** 
 * @typedef ExpSummaryItem
 * @property {string} title The title of the summary
 * @property {string[]} value The value associated with the title
*/

/**
 * Generates list of experience tags with number of 
 * experience for each
 * @param {object} props Set of attributes for summary 
 * @param {ExpSummaryItem[]} props.items The items to render
 */
function ExperienceSummary({ items }) {
  return (
    <div className="cards-container small-cards exp-summary">
      {items.map((item, index) => {
        const { title = '', values = [] } = item || {};
        const key = `experience-summary-child-${index}`;
        return (
          <Card
            key={key}
            className="summary-item"
            icon={title}
            text_as_icon
          >
            <div className="ignore-style">
              <TagList tags={values} />
            </div>
          </Card>
        );
      })}
    </div>
  );
}

function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <Section
        className="hero w-full"
        title={`Built through "persistence" and passion`}
      >
        <div className="background"></div>
        <div className="description">
          Every project represents countless hours of learning, iteration, and 
          {' '}growth — transforming obstacles into opportunities 
          through "persistent effort".
        </div>
      </Section>
      
      <Section title="Skills" className="summary">
        <ExperienceSummary items={[
          { 
            title: '7+',
            values: [
              'NodeJS',
              'ExpressJS',
              'HTML5',
              'JavaScript',
              'CSS/SCSS',
              'TypeScript',
              'ExpressJS',
              'Git',
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
            title: '<2',
            values: []
          },
        ]} />
      </Section>

      <Section title="Projects" className="projects">
        <div className="segments-container">

          {/* --------------- Custom MVC -------------------- */}
          <Segment id="custom-mvc">
            <SegmentHeader
              title="Custom MVC"
              sub_text="AdBridg" 
              highlight="Owned - 2020 to 2024"
            />

            <hr />
            
            {/* Don't forget to mention the API layer but not in detail for security reasons */}
            <SegmentContent title="Why do it at all?">
              <SubSegment>
                Developing a lightweight, **dependency-agnostic** application to complement the 
                existing centralized API layer made sense with user experience being streamlined 
                across browsers out of the box.
              </SubSegment>
              <SubSegment>
                Building a custom frontend avoided unnecessary framework complexity and bloat, 
                providing granular control over feature development.
              </SubSegment>
              <SubSegment>
                Some features required ground-up implementation but it may prove more time and 
                cost-effective than introducing a heavy framework with unused functionality.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Implementation — The MVC">
              <SubSegment>
                Architected MVC pattern where "Views" are driven by model data, "Models" encapsulate 
                application state, and "Controllers" define Model behavior by prescribing transformation 
                logic that shapes how data flows and changes — whether processing incoming API responses 
                or formatting outgoing requests.
              </SubSegment>
              <SubSegment>
                Large datasets can be partitioned into modular, manageable Models and determine their 
                initialization strategy: sequential loading when dependencies exist or asynchronous 
                loading when conditions allow parallel processing. Models maintain interconnectivity, 
                and Views are built as reusable modular components.
              </SubSegment>
              <SubSegment>
                Each View can coordinate multiple Models to update page state asynchronously, with support 
                for sequential Model initialization when inter-Model dependencies are required.
              </SubSegment>
              <SubSegment>
                Deployed global "caching strategy" utilizing local storage, session storage, cookies, and 
                instantiated objects to minimize network requests and optimize data retrieval performance.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Iterations">
              <SubSegment>
                Migrated and rebuilt the analytics application with a modern interface and including a 
                centralized analytics dashboard powered by versatile custom components that utilize various 
                visualization tools from the "Plotly.js" library with additional features.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Challanges">
              <SubSegment>
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'Architecture Design',
              'Model View Controller (MVC)',
              'Caching Strategy',
              'JavaScript',
              'Git',
              'Plotly.js',
            ]} />
          </Segment>

          {/* --------------- CI/CD Pipeline ----------------- */}
          <Segment id="ci-cd-pipeline">
            <SegmentHeader
              title="CI/CD Pipeline"
              sub_text="AdBridg" 
              highlight="Owned - 2020 to 2024"
            />

            <hr />
            
            <SegmentContent title="Design Concept">
              <SubSegment>
                Allow users to push deployments on the fly with basic tests (related to SSP adapters)
                for both production and staged/test domains.
              </SubSegment>
              <SubSegment>
                Show current and past deployment metrics including status of deployment.
              </SubSegment>
              <SubSegment>
                Integrate git to deployments for tracking and easier rollbacks (if needed).
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Pre-existing applications">
              <SubSegment>
                A proprietary compilation engine that generates customized applications for publisher 
                platforms, optimizing bidding lifecycle to ensure optimal value delivery for each 
                configured line item.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Implementation">
              <SubSegment>
                Created a deployment dashboard that displays all previous deployments with their status, shows 
                undeployed changes for the current build, and provides deployment options for both production 
                and testing environments. Required users to document changes before deployment, with descriptions 
                automatically used as "Git" commit messages and each deployment tracked in its own dedicated 
                branch for better change management.
              </SubSegment>
              <SubSegment>
                Engineered a rigorous "unit testing" suite to validate each stage of the application lifecycle, 
                built a centralized logging system to facilitate debugging and monitoring, and containerized 
                the framework with "Docker" for horizontal scalability.
              </SubSegment>
              <SubSegment>
                Architected a "Redis" based queueing system in the "RESTful" API layer — which serves as the 
                central data interface for the "SQL" database, "AWS S3" storage, and external applications; then 
                modified the "Docker" container to function as a worker consuming tasks from the "Redis" queue.
              </SubSegment>
              <SubSegment>
                The "Redis" worker executes a "bash" script that compiles deployment changes and runs the testing 
                suite; upon test success, it commits and pushes changes via "Git", exiting with appropriate 
                success or error codes based on test results.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Incremental upgrades">
              <SubSegment>
                Deployment status was now pushed to dedicated "Slack" channel for better tracking by admins.
              </SubSegment>
              <SubSegment>
                In the latest **Hub App** release built on "Next.js", integrated "Socket.IO" to deliver 
                real-time status updates to users, complemented by automated email notifications for all 
                stakeholders.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Challanges">
              <SubSegment>
                The rudimentary "queuing system" lacked the ability to cancel queued deployments, occasionally 
                requiring multiple deployments to correct issues — creating unnecessary noise in the deployment 
                pipeline.
              </SubSegment>
              <SubSegment>
                "Git"'s synchronous commit model prevents concurrent modifications, causing merge conflicts 
                when multiple deployments, accorss many branches, modify the same lines of code.
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'Architecture Design',
              'Unit Testing',
              'Next.js',
              'JavaScript',
              'Git',
              'Jasmine',
              'Slack API',
              'Bash',
              'REST',
              'Redis',
              'Docker',
              'MySQL',
              'S3 (AWS)',
              'Socket.IO',
            ]} />
          </Segment>

          {/* --- Optimized Data Aggregation Engine ----------- */}
          <Segment id="data-rollup-engine">
            <SegmentHeader
              title="Optimized Data Aggregation Engine"
              sub_text="AdBridg"
              highlight="Refactored - 2022"
            />

            <hr />
            
            <SegmentContent title="Problem to solve">
              <SubSegment>
                Existing rollup time bleeds to crashes or opens too many database connections causing lag on other operations 
                resulting in applications crashing due to timeouts. Required manual restarts of VMs via EC2 dashboard or 
                restart of docker containers depending on crash level.
              </SubSegment>
              <SubSegment>
                Too many joins, nested queries and/or large data aggregrations were lagging the system.
              </SubSegment>
            </SegmentContent>
            
            <SegmentContent title="Solutions">
              <SubSegment>
                Created new intermediate aggregation tables to breakdown large datasets into related chunks, freeing processing 
                time at the cost of space.
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'JavaScript',
              'Git',
              'Bash',
              'Cron Job',
              'Redis',
              'Database Design',
              'MySQL',
            ]} />
          </Segment>

          {/* --------- Ads.txt Validation Crawler ------------ */}
          <Segment id="ads-txt-validator" className="deprecated">
            <SegmentHeader
              title="Ads.txt Validator"
              sub_text="AdBridg"
              highlight="Owned - 2022 to 2023"
            />

            <hr />
            
            <SegmentContent title="Design Concept">
              <SubSegment>
                To be able to crawl any publiser's `ads.txt` file — provided the URL — and 
                determine if all IAB guidelines are maintained and cross reference if all 
                the listed SSPs list the mentioned domains.
              </SubSegment>
              <SubSegment>
                Structured validation output into three severity levels—errors, warnings, and passed — with 
                occurrence counts for each category. Provided expandable detailed explanations for each issue, 
                supplemented with tooltips linking to applicable IAB specification rules.
              </SubSegment>
            </SegmentContent>
            
            <SegmentContent title="Implementation">
              <SubSegment>
                Architected a modular "crawler" that fetches `ads.txt` files from specified domains and recursively 
                retrieves referenced `ads.txt` files per IAB guidelines. The modular design extends functionality 
                to retrieve `sellers.json` files from associated SSPs automatically.
              </SubSegment>
              <SubSegment>
                Built automated "cron jobs" that periodically update and cache frequently-accessed `sellers.json` 
                files, significantly reducing validation processing overhead. Implemented user preference controls for 
                fresh data retrieval versus cached file usage, with cache timestamps for informed decision-making.
              </SubSegment>
              <SubSegment>
                Designed a hierarchical information architecture with layered UI components that progressively reveal 
                nested datasets, balancing simplicity with comprehensive data access. Refined the interface through 
                multiple design iterations to optimize cognitive load and user comprehension.
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'JavaScript',
              'Git',
              'Bash',
              'Cron Job',
              'Crawler',
              'Caching',
            ]} />
          </Segment>

          {/* ---------- Change Visualization UI ------------- */}
          <Segment id="git-like-diff">
            <SegmentHeader
              title="Change Visualization UI"
              sub_text="AdBridg"
              highlight="Owned - 2020 to 2024"
            />

            <hr />
            
            <SegmentContent title="Design Concept">
              <SubSegment>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at repudiandae 
                quaerat iste quas voluptatem, commodi rerum perferendis alias sunt doloribus rem 
                nesciunt nihil dicta dolorum unde quasi ut quibusdam!
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'JavaScript',
              'Git',
              'Model View Controller (MVC)',
            ]} />
          </Segment>

          {/* ---------- Spreadsheet-Style Editor ------------- */}
          <Segment id="google-sheet-features">
            <SegmentHeader
              title="Spreadsheet-Style Editor"
              sub_text="AdBridg"
              highlight="Owned - 2020 to 2024"
            />

            <hr />
            
            <SegmentContent title="Design Concept">
              <SubSegment>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at repudiandae 
                quaerat iste quas voluptatem, commodi rerum perferendis alias sunt doloribus rem 
                nesciunt nihil dicta dolorum unde quasi ut quibusdam!
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'JavaScript',
              'Git',
              'Model View Controller (MVC)',
            ]} />
          </Segment>
        </div>
      </Section>
    </>
  );
}

export default Projects;
