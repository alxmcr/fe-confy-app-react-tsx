import BoxTalkList from '../lists/BoxTalkList';
import BaseSection from './BaseSection';

export default function ScheduleSection() {
  return (
    <BaseSection id="speakers">
      <div className="flex flex-col gap-4 py-8">
        <h2 className="font-bungee-inline text-[34px] text-golden-300">Schedule</h2>
        <BoxTalkList />
      </div>
    </BaseSection>
  );
}
