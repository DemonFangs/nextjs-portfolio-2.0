import Link from 'next/link';

import Highlight from '../Highlight';
import TagList from '../TagList';
import Section from '../Section';
import { Segment, SubSegment } from '../Segment';

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

function FullLog() {
  return (
    <>
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

      <Segment>
        <ExpHeader
          title="Junior developer"
          company="AdBridg" 
          date_range="February 2019 - February 2020"
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

      <Segment>
        <ExpHeader
          title="Junior Front-end developer"
          company="Fizzz Design Corp." 
          date_range="November 2017 - February 2019"
        />

        <hr />

        <ExpDetails title="Design and Branding">
          <SubSegment>
            Built user interfaces and experiences based on branding criterias provided by inhouse 
            graphic designer; including animations built using images provided by the designer 
            and <Highlight text="CSS keyframes" />.
          </SubSegment>
          <SubSegment>
            <Highlight text="Bootstrap" /> library integrated selectively, due to resistions of
            bandwidth or customer needs.
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="Functionality and User experince" id="ci-cd-pipeline">
          <SubSegment>
            All applications were <Highlight text="AODA/WCAG 1.0" /> validated, creating a 
            comfortable experience for all users.
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="Public projects: Fizzz Design Corp. official webpage">
          <SubSegment>
            Design based on mockup created by inhouse graphic designer. Implemented 
            using <Highlight text="VanillaJS" />, <Highlight text="CSS" /> and
            {' '}<Highlight text="HTML" />.
          </SubSegment>
          <SubSegment>
            A modular design architecture that uses a file-based routing system — similar 
            to <Highlight text="NextJS" /> — allowing anyone to easily make changes to 
            the site.
          </SubSegment>
          <SubSegment>
            Link: <Link 
              target="_blank"
              href="http://www.fizzz.com" 
              title="Fizzz official webpage"
            >
              <Highlight text="Fizzz Design Corp. official webpage" />
            </Link>
          </SubSegment>
        </ExpDetails>

        <ExpDetails title="Public projects: Office of Integrity Commissioner">
          <SubSegment>
            Design based on mockup created by inhouse graphic designer. Implemented 
            using <Highlight text="AngularJS" />, <Highlight text="CSS" /> and
            {' '}<Highlight text="XML" />.
          </SubSegment>
          <SubSegment>
            Built proof-of-concept demos in both <Highlight text="ReactJS" />{' '}
            and <Highlight text="AngularJS" /> for a key site section, evaluating 
            each framework's suitability for client requirements and project timeline.
          </SubSegment>
          <SubSegment>
            Implemented custom <Highlight text="webpack" /> to generate a lightweight static 
            application.
          </SubSegment>
          <SubSegment>
            Archived link: <Link 
              target="_blank"
              href=" http://web.archive.org/web/20190929015820/http://www.oico.on.ca/ar/2017-2018/" 
              title="Archived link to Office of Integrity Commissioner Annual report 2017 to 2018"
            >
              <Highlight text="Office of Integrity Commissioner of Ontario Annual Report 2017- 18 web page" />
            </Link>
          </SubSegment>
        </ExpDetails>

        <hr />

        <ExpFooter tags={[
          'CSS',
          'VanillaJS',
          'HTML',
          'AngularJS',
          'ReactJS',
          'Bootstrap',
          'XML',
          'AODA/WCAG 1.0',
          'Team Work',
          'Webpack',
        ]} />
      </Segment>
    </>
  );
}

export default FullLog;
