import Head from 'next/head';

import Card from '../components/Card';
import DecoratedText from '../components/DecorateText';
import Section from '../components/Section';
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
        <title>Khadem A. Alam | Projects</title>
      </Head>

      <Section
        className="hero w-full"
        title={`Built through "persistence" and passion`}
      >
        <div className="background"></div>
        <div className="description">
          <DecoratedText text={[
            'Every project represents countless hours of learning, iteration, and',
            'growth — transforming obstacles into opportunities',
            'through "persistent effort".'
          ].join(' ')} />
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
              'Documentation',
              'Team Player',
              'Project Owner',
              'XML',
              'Project Owner',
              'Bash',
              'Linux'
            ] 
          },
          {
            title: '6+',
            values: [
              'Design Architect',
              'Advertisement Technology (AdTech)',
              'REST',
              'Agile Development',
              'Jira',
              'Confluence',
              'CI/CD Pipeline',
              'SQL/MySQL',
              'Docker',
            ]
          },
          {
            title: '5+',
            values: [
              'Database Design',
              'Google Ad Manager (GAM)',
              'Doubleclick for Publisher (DFP)',
              'Prebid.js',
              'Team Leader',
              'Plotly.js',
              'Aurora (AWS)',
            ]
          },
          {
            title: '4+',
            values: [
              'EC2 (AWS)',
              'S3 (AWS)',
              'CloudFront (AWS)',
              'Concurrent Projects',
            ]
          },
          {
            title: '3+',
            values: [
              'Next.js',
              'D3.js',
              'Network Protocol Pipeline strategy',
            ]
          },
          {
            title: '2+',
            values: [
              'WCAG 1.0 Compliant Design',
              'Angular JS / Angular 2.0',
            ]
          },
          {
            title: '<2',
            values: [
              'Go Lang',
              'Lambda (AWS)',
              'AppScript (Google)',
              'Firebase',
              'NoSQL',
              'Heroku'
            ]
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
              highlight="Owned — 2020 to 2024"
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
                loading when conditions allow parallel processing. Models maintain inter-connectivity, 
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

            <SegmentContent title="Challenges">
              <SubSegment>
                Single-developer ownership slowed maintenance and debugging as issues had to be addressed 
                between other projects, delaying resolution while developing "stronger multi-project 
                management skills".
              </SubSegment>
              <SubSegment>
                Creating components from scratch allowed precise customization but required significant 
                testing investment and accumulated technical debt as the application grew and components 
                became more feature-heavy.
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
              'Concurrent Projects',
            ]} />
          </Segment>

          {/* --------------- CI/CD Pipeline ----------------- */}
          <Segment id="ci-cd-pipeline">
            <SegmentHeader
              title="CI/CD Pipeline"
              sub_text="AdBridg" 
              highlight="Owned — 2020 to 2024"
            />

            <hr />
            
            <SegmentContent title="Design Concept">
              <SubSegment>
                Allow users to push deployments on the fly with basic tests (related to ::bidder:: 
                adapters) for both production and staged/test domains.
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
                A proprietary **Ad Engine** that generates customized applications for publisher 
                platforms, optimizing bidding life-cycle to ensure optimal value delivery for each 
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
                Architected a "Redis" based queuing system in the "RESTful" API layer — which serves as the 
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

            <SegmentContent title="Challenges">
              <SubSegment>
                The rudimentary "queuing system" lacked the ability to cancel queued deployments, occasionally 
                requiring multiple deployments to correct issues — creating unnecessary noise in the deployment 
                pipeline.
              </SubSegment>
              <SubSegment>
                "Git"'s synchronous commit model prevents concurrent modifications, causing merge conflicts 
                when multiple deployments, across many branches, modify the same lines of code.
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
              highlight="Refactored — 2022"
            />

            <hr />
            
            <SegmentContent title="Problem to solve">
              <SubSegment>
                Existing roll-up time bleeds to crashes or opens too many database connections causing lag on 
                other operations resulting in applications crashing due to timeouts. Required manual restarts 
                of VMs via EC2 dashboard or restart of docker containers depending on crash level.
              </SubSegment>
              <SubSegment>
                Too many joins, nested queries and/or large data aggregations were lagging the system.
              </SubSegment>
            </SegmentContent>
            
            <SegmentContent title="Solutions">
              <SubSegment>
                Created new intermediate aggregation tables to breakdown large datasets into related chunks, 
                freeing processing time at the cost of space.
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
              'Concurrent Projects',
            ]} />
          </Segment>

          {/* --------- Ads.txt Validation Crawler ------------ */}
          <Segment id="ads-txt-validator" className="deprecated">
            <SegmentHeader
              title="Ads.txt Validator"
              sub_text="AdBridg"
              highlight="Owned — 2022 to 2023"
            />

            <hr />
            
            <SegmentContent title="Design Concept">
              <SubSegment>
                To be able to crawl any publisher's `ads.txt` file — provided the URL — and 
                determine if all ::IAB:: guidelines are maintained and cross reference if all 
                the listed ::SSP::s list the mentioned domains.
              </SubSegment>
              <SubSegment>
                Structured validation output into three severity levels — errors, warnings, and passed — with 
                occurrence counts for each category. Provided expandable detailed explanations for each issue, 
                supplemented with tool-tips linking to applicable ::IAB:: specification rules.
              </SubSegment>
            </SegmentContent>
            
            <SegmentContent title="Implementation">
              <SubSegment>
                Architected a modular "crawler" that fetches `ads.txt` files from specified domains and 
                recursively retrieves referenced `ads.txt` files per ::IAB:: guidelines. The modular design extends 
                functionality to retrieve `sellers.json` files from associated ::SSP::s automatically.
              </SubSegment>
              <SubSegment>
                Built automated "cron jobs" that periodically update and cache frequently-accessed 
                `sellers.json` files, significantly reducing validation processing overhead. Implemented user 
                preference controls for fresh data retrieval versus cached file usage, with cache timestamps 
                for informed decision-making.
              </SubSegment>
              <SubSegment>
                Designed a hierarchical information architecture with layered UI components that progressively 
                reveal nested datasets, balancing simplicity with comprehensive data access. Refined the 
                interface through multiple design iterations to optimize cognitive load and user comprehension.
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
              highlight="Owned — 2020 to 2024"
            />

            <hr />
            
            <SegmentContent title="Design Concept">
              <SubSegment>
                Develop a visual change tracking system that enables users to quickly identify 
                and understand modifications across the application. The interface provides clear 
                visual indicators for three change types — additions, deletions, and edits — with 
                contextual references linking each change to its specific location within the 
                application. 
              </SubSegment>
              <SubSegment>
                Modeled the visualization pattern after "Git's diff" functionality to leverage 
                familiar developer paradigms and easy recognition.
              </SubSegment>
            </SegmentContent>
            
            <SegmentContent title="Implementation">
              <SubSegment>
                Created a summary dashboard displaying total change count with categorical 
                breakdowns for each change type.
              </SubSegment>
              <SubSegment>
                Implemented a color-coded change visualization using "Git diff"'s standard color 
                scheme — green for additions, red for deletions, yellow for modifications — to 
                ensure immediate visual comprehension.
              </SubSegment>
              <SubSegment>
                Each change entry features an expandable detail panel that presents side-by-side 
                comparisons between the current undeployed and previous deployed versions, 
                accompanied by direct navigation links to the modified application sections for 
                contextual review.
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'JavaScript',
              'Git',
              'Model View Controller (MVC)',
              'Visualization',
            ]} />
          </Segment>

          {/* ------- Google Sheets API Integration ---------- */}
          <Segment id="google-sheet-api-integration">
            <SegmentHeader
              title="Google Sheets API Integration"
              sub_text="AdBridg"
              highlight="Owned — 2022 to 2024"
            />

            <hr />
            
            <SegmentContent title="Design Concept">
              <SubSegment>
                To design a Google Sheets integration that bridges the existing API with a familiar 
                spreadsheet interface, enabling non-technical users to manage publisher line 
                items without direct database access.
              </SubSegment>
              <SubSegment>
                The system should be able to validate data entries in real-time by querying the 
                database for reference data such as publisher IDs, campaign details, or other 
                relational information.
              </SubSegment>
              <SubSegment>
                Users should be able to perform standard CRUD operations (create, read, update, 
                delete) within the spreadsheet, with visual color-coding mirroring the "Git diff" 
                pattern — green for additions, yellow for modifications, and red for deletions — 
                providing immediate feedback on pending changes before database commits.
              </SubSegment>
            </SegmentContent>
            
            <SegmentContent title="Implementation">
              <SubSegment>
                Implemented a security layer by designating the first sheet as an authentication 
                gateway, requiring users to log in before accessing line item data. Upon successful 
                authentication, users select a specific deployment environment to work within, 
                ensuring changes are isolated to the appropriate context.
              </SubSegment>
              <SubSegment>
                To accommodate "Google AppsScript"'s API rate limits in the free tier (which 
                restricts daily outgoing requests), replaced auto-fill on paste with a manual 
                trigger button. This design decision significantly reduced API calls, preventing 
                quota exhaustion while maintaining functionality. The button-triggered approach 
                batches validation, optimizing API usage while preserving data integrity.
              </SubSegment>
            </SegmentContent>
            
            <SegmentContent title="Challenges">
              <SubSegment>
                Initial real-time validation proved inefficient as each row change triggered 
                individual API requests, creating performance bottlenecks and slow user experience. 
                Migrated "validation logic" to operate at the page level with validation checks 
                performed locally within "AppsScript" rather than making additional API requests.
              </SubSegment>
              <SubSegment>
                The "validation architectural" shift eliminated redundant API calls by caching 
                reference data locally, reduced server load, improved response times dramatically, 
                and provided a smoother user experience while staying within Apps Script's request 
                limitations.
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'JavaScript',
              'AppScript (Google)',
              'Google Spreadsheet',
              'Data Validation',
              'Validation Schema',
            ]} />
          </Segment>

          {/* ---------- Spreadsheet-Style Editor ------------- */}
          <Segment id="google-sheet-features">
            <SegmentHeader
              title="Spreadsheet-Style Editor"
              sub_text="AdBridg"
              highlight="Owned — 2020 to 2024"
            />

            <hr />
            
            <SegmentContent title="Design Concept">
              <SubSegment>
                Design an interactive spreadsheet-style table interface with seamless toggling 
                between view and edit modes, enabling users to work efficiently without leaving 
                the table context.
              </SubSegment>
              <SubSegment>
                To implement keyboard shortcuts to traverse within the table context, providing 
                a more spreadsheet like user experience.
              </SubSegment>
            </SegmentContent>

            <SegmentContent title="Implementation">
              <SubSegment>
                Developed a modular, reusable table component that replicates spreadsheet 
                functionality with bidirectional state management for view and edit modes.
              </SubSegment>
              <SubSegment>
                Implemented keyboard navigation patterns familiar to spreadsheet users: `Enter` 
                and `Shift+Enter` for vertical row navigation, and `Tab` and `Shift+Tab` for 
                horizontal cell traversal, ensuring a fluid, mouse-free workflow for power users 
                accustomed to traditional spreadsheet applications.
              </SubSegment>
              <SubSegment>
                Integrated intelligent column sorting that responds to header interactions, 
                automatically toggling between ascending and descending order based on user 
                clicks — mirroring pivot table behavior for intuitive data organization.
              </SubSegment>
              <SubSegment>
                Built a robust multi-row selection system with context-sensitive action menus, 
                allowing bulk operations tailored to each table's specific use case.
              </SubSegment>
              <SubSegment>
                Engineered a comprehensive cell type library supporting diverse input formats 
                including JSON objects, radio buttons, single-select drop-downs, multi-select 
                drop-downs, date pickers, number inputs, rich text editors, and custom validators, 
                providing flexibility to handle virtually any data structure or user input 
                requirement.
              </SubSegment>
            </SegmentContent>

            <hr />

            <SegmentFooter tags={[
              'JavaScript',
              'Git',
              'User Experience Strategies',
              'Model View Controller (MVC)',
            ]} />
          </Segment>
        </div>
      </Section>
    </>
  );
}

export default Projects;
