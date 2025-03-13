import { createContext, useContext } from 'react';

const EXPERIENCE_OVERIVIEW = {
  range: [['2017-10-24', '2024-04-11']],
  breakdown: {
    angular: {
      title: 'AngularJS',
      link: 'https://angularjs.org/',
      experience_dates: [['2017-10', '2019-02']],
    },
    js: {
      title: 'VanillaJS',
      link: 'http://vanilla-js.com/',
      experience_dates: [['2017-10', '2024-04']],
    },
    dfp: {
      title: 'Google DoubleClick for Publishers',
      link: 'https://admanager.google.com/home/',
      experience_dates: [['2021-01', '2024-04']],
    },
    firebase: {
      title: 'Google Firebase',
      link: 'https://firebase.google.com/',
      experience_dates: [['2017-10', '2019-02']],
    },
    jquery: {
      title: 'JQuery',
      link: 'https://jquery.com/',
      experience_dates: [['2017-10', '2019-02']],
    },
    boot: {
      title: 'Bootstrap',
      link: 'https://getbootstrap.com/',
      experience_dates: [['2017-10', '2019-02'], ['2021-01', '2024-04']],
    },
    next: {
      title: 'NextJS',
      link: 'https://nextjs.org/',
      experience_dates: [['2021-01', '2024-04']],
    },
    node: {
      title: 'NodeJS',
      link: 'https://nodejs.org/',
      experience_dates: [['2017-10', '2024-04']],
    },
    nosql: {
      title: 'MongoDB (NoSQL)',
      link: 'https://www.mongodb.com/nosql-explained',
      experience_dates: [['2017-10', '2019-02']],
    },
    mysql: {
      title: 'MySQL (and Workbench)',
      link: 'https://www.mysql.com/',
      experience_dates: [['2019-02', '2024-04']],
    },
    react: {
      title: 'ReadtJS',
      link: 'https://reactjs.org/',
      experience_dates: [['2017-10', '2024-04']],
    },
    pbd: {
      title: 'Prebid.js',
      link: 'https://prebid.org/',
      experience_dates: [['2020-02', '2024-04']],
    },
    typescript: {
      title: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
      experience_dates: [['2017-10', '2019-02']],
    },
    express: {
      title: 'ExpressJS',
      link: 'https://expressjs.com/',
      experience_dates: [['2017-10', '2024-04']],
    },
    aws: {
      title: 'Amazon Web Servies (AWS)',
      link: 'https://aws.amazon.com/',
      experience_dates: [['2019-02', '2024-04']],
    },
    css: {
      title: 'CSS/SCSS',
      link: 'https://en.wikipedia.org/wiki/CSS',
      experience_dates: [['2017-10', '2024-04']],
    },
    html: {
      title: 'HTML/HTML5',
      link: 'https://en.wikipedia.org/wiki/HTML5',
      experience_dates: [['2017-10', '2024-04']],
    },
    d3: {
      title: 'D3 JS',
      link: 'https://d3js.org/',
      experience_dates: [['2020-02', '2024-04']],
    },
    plot: {
      title: 'Plotly',
      link: 'https://plotly.com/javascript/',
      experience_dates: [['2021-01', '2024-04']],
    },
    shell: {
      title: 'Bash / Shell',
      link: 'https://www.gnu.org/software/bash/',
      experience_dates: [['2017-10', '2024-04']],
    },
    linux: {
      title: 'Linux/Ubuntu',
      link: 'https://ubuntu.com/',
      experience_dates: [['2017-10', '2024-04']],
    },
    vscode: {
      title: 'Visual Studio Code',
      link: 'https://code.visualstudio.com/',
      experience_dates: [['2017-10', '2024-04']],
    },
    docker: {
      title: 'Docker',
      link: 'https://www.docker.com/',
      experience_dates: [['2019-02', '2024-04']],
    },
    jira: {
      title: 'Jira',
      link: 'https://www.atlassian.com/software/jira',
      experience_dates: [['2019-02', '2024-04']],
    },
    conf: {
      title: 'Confluence',
      link: 'https://www.atlassian.com/software/confluence',
      experience_dates: [['2019-02', '2024-04']],
    },
  }
}

// Create Context object.
const GlobalContext = createContext(EXPERIENCE_OVERIVIEW);

// Export Provider.
export function GlobalProvider({ children }) {
  return (
    <GlobalContext.Provider value={EXPERIENCE_OVERIVIEW}>
      {children}
    </GlobalContext.Provider>
  );
}

// Export useContext Hook.
export function useGlobalContext() {
  return useContext(GlobalContext);
}