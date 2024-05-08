import BoxGridSpeakers from '../grids/speakers/BoxGridSpeakers';

export default function SpeakersSection() {
  return (
    <section id="#speakers" className="flex size-full justify-center bg-light-950 py-4">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <h2>Speakers</h2>
        <BoxGridSpeakers />
      </div>
    </section>
  );
}
