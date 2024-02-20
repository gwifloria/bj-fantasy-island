import { PersonalIntroduction } from '@/components/PersonalIntroduction';
import './index.scss';
import { WorkExperience } from '@/components/WorkExperience';
const Main = () => {
  return (
    <div className="main-page--container">
      {/* avatar */}
      <PersonalIntroduction></PersonalIntroduction>
      <WorkExperience></WorkExperience>
    </div>
  );
};
export default Main;
