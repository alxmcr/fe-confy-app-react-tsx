import { useSpeakers } from '../../hooks/useSpeakers';

export default function SpeakersSection() {
  const { speakers } = useSpeakers();
  console.log('🚀 ~ SpeakersSection ~ speakers:', speakers);

  return (
    <section id="#speakers" className="flex size-full justify-center bg-light-950 py-4">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <h2>Speakers</h2>
      </div>
    </section>
  );
}
