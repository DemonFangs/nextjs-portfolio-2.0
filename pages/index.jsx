import Head from 'next/head';

import { useGlobalContext } from '../contexts/globalContext';

const YEAR_DIVIDER = 31536000000;

const Home = () => {
  const global_values = useGlobalContext();

  const experience_time = global_values.range.reduce((total_time, current_range) => {
    const start_time = (new Date(current_range[0])).getTime();
    const end_time = (new Date(current_range[1])).getTime();
    return (total_time + (end_time - start_time)); 
  }, 31536000000)
  const experience_time_years = experience_time / YEAR_DIVIDER;
  const years_of_experience = Math.floor(experience_time_years);
  const remaining_weeks_time = ((experience_time_years - years_of_experience) * 365) / 7;
  const weeks = Math.floor(remaining_weeks_time);
  const remaining_days = Math.floor((remaining_weeks_time - weeks) * 7);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
          <h1 className="title">Hello, I&apos;m Khadem Avinoor Alam</h1>
            <div className="about-profile-content">
              <div className="description">
                <p className="sub-point">
                  Welcome to my portfolio. I am a <span className="hl">software engineer</span> with{' '}
                  <span
                    className="hl"
                    title={`${years_of_experience} years ${weeks} weeks and ${remaining_days} days`}>
                    {years_of_experience}+ years
                  </span>{' '}
                  of experience, but I also like playing games, drink lots of tea and listen to music.
                </p>
                <p className="sub-point">
                  An interest in Computer Programming led me to do a degree in Computer Science. It
                  took much longer than most, with ups and downs during these seven years. But with
                  persistence and perseverance through repeated failures have finally graduated. Let
                  this be an example how failure is not an obstacle but an opportunity to get
                  stronger.
                </p>
              </div>
              <div className="profile-picture">
                <img src="/profile_pic.jpg" alt="Khadem Avinoor Alam potrait" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
