import Head from 'next/head';

import ExternalLink from '../components/ExternalLink';
import TagList from '../components/TagList';

function Experiences() {
  return (
    <>
      <Head>
        <title>Experiences</title>
      </Head>

      <section className="hero job-details" id="adbridg-inc">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">
              <span>Platform Engineer @ AdBridg</span>
              <span>(January 2021 - April 2024)</span>
            </h1>
            <p className="sub-point">
              <b>Optimized platform performance</b> by refactoring monolithic services into micro-services, improving
              system performance by 4% and scalability by nearly 20%.
            </p>
            <p className="sub-point">
              <b>Led migration efforts</b> for legacy features to Next.js from in-house framework by migrating old
              features to the new framework and improving performance compared to legacy system by 10% including added
              features.
            </p>
            <p className="sub-point">
              <b>Developed and optimized scalable data aggregation pipelines</b> to process large datasets from
              multiple sources, automating roll-ups and summarizing tasks for additional data points and breakpoints.
              Updated aggregators to reduce processing time by nearly 3%, developed logging system ease of
              debugging with notification for minimum manual intervention by a factor of 2, and improved data
              reliability with error handling resulting in easy debugging and reduced confusions from users by 9%.
            </p>
            <p className="sub-point">
              <b>Developed and managed CI/CD tools</b> by designing an in-house queuing system for Continuous
              Deployment, reducing deployment errors significantly by nearly 30% and notify users with real-time
              state-changes.
            </p>
            <p className="sub-point">
              <b>Mentored new DevOps team members</b> on the internal application and back-end systems. Helped them
              with on-boarding on all the internal systems and analytical tools.
            </p>
            <p className="sub-point">
              <b>Develop new features and functionalities</b> for back-end APIs and other dependent applications.
            </p>
          </div>
          <TagList
            caption="Tech stack"
            tags={['express', 'mysql', 'aws', 'dfp', 'pbd', 'boot', 'jira', 'conf', 'docker', 'next', 'd3', 'plot']}
          />
        </div>
      </section>
      <hr className="break-section" />
      <section className="hero job-details">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">
              <span>Full-stack Developer @ AdBridg</span>
              <span>(February 2020 - January 2021)</span>
            </h1>
            <p className="sub-point">
              <b>Enhanced web application functionality</b> by delivering new features for client-facing apps, allowing
              users/publishers more options and nearly 10% increase in user engagement.
            </p>
            <p className="sub-point">
              <b>Designed CI/CD pipeline</b> by integrating a versatile testing suite, redesigned existing pipeline
              with at the time modern queuing system to reduce deployment time by 30%, improving team efficiency and
              reducing production bugs
            </p>
            <p className="sub-point">
              <b>Developed scraper tool</b> for scraping ads.txt from selected websites adhering to IAB guidelines and
              cross-referencing them with SSPs sellers.json to confirm validity of entries on both sides, which
              enhanced ad placement accuracy and compliance by 15%
            </p>
            <p className="sub-point">
              <b>Mentored Junior Developer</b> on current and legacy systems. Trained them on efficient coding, good
              code practices and testing methodologies.
            </p>
            <p className="sub-point">
              <b>Developed multitudes of new features</b> for in-house application, leading to a increase in client
              retention by 14% and nearly 19% increase in productivity for the Analytics team   
            </p>
            <p className="sub-point">
              <b>Debugged distributed applications</b> reducing client-side and server-side errors through thorough
              testing and optimization reducing errors during production by 20%.
            </p>
          </div>
          <TagList
            caption="Tech stack"
            tags={['mysql', 'aws', 'pbd', 'jira', 'conf', 'docker', 'd3']}
          />
        </div>
      </section>
      <hr className="break-section" />
      <section className="hero job-details">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">
              <span>Junior Developer @ AdBridg</span>
              <span>(February 2019 - February 2020)</span>
            </h1>
            <p className="sub-point">
              <b>Spearheaded client-facing application development</b>: Built and launched a new front-end client 
              application using a custom in-house framework, improving client satisfaction and usability.
            </p>
            <p className="sub-point">
              <b>Developed in-house analytics tool</b> for data visualization using Plotly.js, enabling stakeholders to
              make data-driven decisions 20% faster.
            </p>
          </div>
          <TagList caption="Tech stack" tags={['mysql', 'aws', 'jira', 'conf', 'docker']} />
        </div>
      </section>

      <hr className="break-section double" />

      <section className="hero" id="fizzz-design-corp">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">
              <span>Junior Front-end Developer @ Fizzz Design Corp.</span>
              <span>(November 2017 - January 2018)</span>
            </h1>
            <p className="sub-point">
              Built web applications for clients from scratch or as per Graphics Designers specifications
            </p>
            <p className="sub-point">
              Built, static, both single page and multiple-page applications with whichever framework best suits the
              clients needs.
            </p>
            <p className="sub-point">
              Developed both front end and back end web applications.
            </p>
            <p className="sub-point">
              Integrated data structures to generate dynamic web pages.
            </p>
            <p className="sub-point">
              Implemented more accessible web pages.
            </p>

            <hr className="short" />
            <h3>
              <ExternalLink href="http://www.fizzz.com" text="Fizzz Design Corp. Official webpage" />
            </h3>
            <p className="sub-point">
              Developed, updated, maintained and deployed the web page according to the mock-up provided by the
              graphic designer.
            </p>

            <hr className="short" />
            <h3>
              <ExternalLink
                href="http://web.archive.org/web/20190929015820/http://www.oico.on.ca/ar/2017-2018/"
                text="Office of Integrity Commissioner of Ontario Annual Report 2017 to 2018 webpage"
              />
            </h3>
            <p className="sub-point">
              Developing a web page according to the mock-up provided by graphic designer
            </p>
            <p className="sub-point">
              Making sure the web page is AODA compliant and passes all WCAG 2.0 tests
            </p>
          </div>
          {TagList({
            caption: 'Tech stack',
            tags: [
              'angular',
              'firebase',
              'jquery',
              'nosql',
              'typescript',
              'boot'
            ]
          })}
        </div>
      </section>

      <hr className="break-section double" />

      <section className="hero job-details">
        <div className="container">
          <div className="text-wrapper w-full">
            <h2>Common Tech stack:</h2>
            <p className="sub-point">With over 7+ years of experience</p>
            <TagList tags={['shell', 'linux', 'vscode', 'js', 'node', 'html', 'css', 'express', 'react']} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Experiences;
