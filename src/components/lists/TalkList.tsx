import { TalkData } from '../../@types/serviceTypes';
import TalkListItem from './TalkListItem';

type Props = {
  talks: TalkData[];
};

export default function TalkList({ talks = [] }: Props) {
  return (
    <div>
      {talks.map((talk) => (
        <TalkListItem key={talk.id} talk={talk} />
      ))}
    </div>
  );
}
