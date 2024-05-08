import { SpeakerData } from '../../../@types/serviceTypes';
import CardSpeaker from './CardSpeaker';

type Props = {
  speakers: SpeakerData[];
};

export default function GridSpeakers({ speakers = [] }: Props) {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {speakers.map((speaker) => (
        <CardSpeaker key={speaker.login.uuid} speaker={speaker} />
      ))}
    </div>
  );
}
