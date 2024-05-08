import TalkList from '../lists/TalkList';
import BaseSection from './BaseSection';

export default function ScheduleSection() {
  return (
    <BaseSection id="speakers">
      <div className="flex flex-col gap-4">
        <h2 className="font-bungee-inline text-[34px] text-golden-300">Schedule</h2>
        <TalkList />
      </div>
    </BaseSection>
  );
}
