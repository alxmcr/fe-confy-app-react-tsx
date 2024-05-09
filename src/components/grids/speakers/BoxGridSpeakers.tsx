import { useSpeakers } from '../../../hooks/useSpeakers';
import GridSpeakers from './GridSpeakers';

export default function BoxGridSpeakers() {
  const { loading, error, speakers } = useSpeakers();

  if (loading) {
    return (
      <div>
        <p>Loading speakers</p>
      </div>
    );
  }

  if (!loading && error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <GridSpeakers speakers={speakers} />
    </div>
  );
}
