import { SpeakerData } from '../../../@types/serviceTypes';
import CardSpeaker from './CardSpeaker';

type Props = {
  speakers: SpeakerData[];
};

export default function GridSpeakers({ speakers = [] }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {speakers.map((speaker) => (
        <CardSpeaker key={speaker.login.uuid} speaker={speaker} />
      ))}
    </div>
  );
}
