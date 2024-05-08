import BoxGridSpeakers from '../grids/speakers/BoxGridSpeakers';

export default function SpeakersSection() {
  return (
    <section id="#speakers" className="flex h-screen justify-center bg-light-950 py-4">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <h2 className="font-bungee-inline text-[28px] text-golden-300">Speakers</h2>
        <BoxGridSpeakers />
      </div>
    </section>
  );
}
