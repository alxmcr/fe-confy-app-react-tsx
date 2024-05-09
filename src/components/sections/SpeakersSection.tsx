import BoxGridSpeakers from '../grids/speakers/BoxGridSpeakers';
import BaseSection from './BaseSection';

export default function SpeakersSection() {
  return (
    <BaseSection id="speakers">
      <div className="flex flex-col gap-4 py-8">
        <h2 className="font-bungee-inline text-[34px] text-golden-300">Speakers</h2>
        <BoxGridSpeakers />
      </div>
    </BaseSection>
  );
}
