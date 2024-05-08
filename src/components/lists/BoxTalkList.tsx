import useTalks from '../../hooks/useTalks';
import TalkList from './TalkList';

export default function BoxTalkList() {
  const { talks, loadingTalks, errorTalks } = useTalks();

  if (loadingTalks) {
    return (
      <div>
        <p>Loading talks...</p>
      </div>
    );
  }

  if (!loadingTalks && errorTalks) {
    return (
      <div>
        <p>{errorTalks.message}</p>
      </div>
    );
  }

  return (
    <div>
      <TalkList talks={talks} />
    </div>
  );
}
