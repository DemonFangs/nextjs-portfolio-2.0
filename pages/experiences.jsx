import Head from 'next/head';
import { useRouter } from 'next/router';

import { useGlobalContext } from '../contexts/globalContext';

import Highlight from '../components/Highlight';
import Section from '../components/Section';
import Summary from '../components/Summary';

import FullLog from '../components/Experience/FullLog';
import Projects from '../components/Experience/Projects';
import Timeline from '../components/Experience/Timeline';
import { useEffect } from 'react';

function sanitizePath(router_path, valid_paths) {
  const [, path] = router_path.split('=');
  const has_path = valid_paths.includes(path);
  return has_path ? path : '';
}

function toggleActivePanel(query_value) {
  const nav_item_to_focus = document.getElementById(`nav-${query_value}`);
  Array.from(nav_item_to_focus.parentNode.children).forEach(sibling_node => {
    sibling_node.classList.remove('focus');
  });
  nav_item_to_focus.classList.add('focus');

  const dom_to_show = document.getElementById(query_value);
  Array.from(dom_to_show.parentNode.children).forEach(sibling_node => {
    sibling_node.classList.remove('show');
  });
  dom_to_show.classList.add('show');
}

function Experiences() {
  const { panels: panel_options, panel_query_values, valid_paths } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const path_selected = sanitizePath(router.asPath, valid_paths);
    
      toggleActivePanel(path_selected || panel_query_values.all);
      if (!path_selected) {
        console.log('Soft editing url');
        await router.replace(
          `/experiences?show=${panel_query_values.all}`,
          undefined,
          { shallow: true }
        );
      }
    })();
  }, [router.asPath]);

  const renderPanelItem = (panel_item, index) => {
    const { query_value = '', text = '' } = panel_item;

    const handleNavClick = async (query_value) => {
      toggleActivePanel(query_value);
      await router.replace(`/experiences?show=${query_value}`, undefined, { shallow: true });
    }

    return (
      <div 
        key={index}
        id={`nav-${query_value}`}
        className={`btn-bg`}
        onClick={() => handleNavClick(query_value)}
      >{text}</div>
    );
  };

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
        <div className="panel-container">
          <div className="navigation">
            {panel_options.map(renderPanelItem)}
          </div>
          <div className="content" id="experience-views">
            <div id={panel_query_values.all}>
              <FullLog />
            </div>
            <div id={panel_query_values.projects}>
              <Projects />
            </div>
            <div id={panel_query_values.timeline}>
              <Timeline />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Experiences;
