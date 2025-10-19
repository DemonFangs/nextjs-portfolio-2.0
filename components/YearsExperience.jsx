import { useGlobalContext } from '../contexts/globalContext';
import Highlight from './Highlight';

const YEAR_DIVIDER = 31536000000;

function YearsExperience() {
  const global_values = useGlobalContext();
  
  const experience_time = global_values.range.reduce((total_time, current_range) => {
    const start_time = (new Date(current_range[0])).getTime();
    const end_time = (new Date(current_range[1])).getTime();
    return (total_time + (end_time - start_time)); 
  }, YEAR_DIVIDER)
  const experience_time_years = experience_time / YEAR_DIVIDER;
  const years_of_experience = Math.floor(experience_time_years);
  const remaining_weeks_time = ((experience_time_years - years_of_experience) * 365) / 7;
  const weeks = Math.floor(remaining_weeks_time);
  const remaining_days = Math.floor((remaining_weeks_time - weeks) * 7);

  return (
    <span
      title={`${years_of_experience} years ${weeks} weeks and ${remaining_days} days`}
    >
      <Highlight text={`${years_of_experience}+ years`} />
    </span>
  );
}

export default YearsExperience;