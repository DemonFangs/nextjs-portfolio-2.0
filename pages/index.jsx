import Head from 'next/head';

import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

const START_DATE = new Date('2017-10-24');
const YEAR_DIVIDER = 31536000000;

const Home = () => {
  const experienceTime = (Date.now() - START_DATE.getTime()) / YEAR_DIVIDER;
  const yearsExperience = Math.floor(experienceTime);
  const remainingWeeksTime = ((experienceTime - yearsExperience) * 365) / 7;
  const weeks = Math.floor(remainingWeeksTime);
  const remainingDays = Math.floor((remainingWeeksTime - weeks) * 7);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Contact asBar={true} />
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Hello, I&apos;m Khadem Avinoor Alam</h1>
            <p className="description">
              Welcome to my portfolio. I am a <span className="hl">software engineer</span> with{' '}
              <span
                className="hl"
                title={`${yearsExperience} years ${weeks} weeks and ${remainingDays} days`}>
                {yearsExperience}+ years
              </span>{' '}
              of experience, but I also like playing games, drink lots of tea and listen to music.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
