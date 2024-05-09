import React from 'react';
import { TalkData } from '../@types/serviceTypes';
import { TalkService } from '../services/talks/TalkService';

export default function useTalks() {
  const [talks, setTalks] = React.useState<TalkData[]>([]);
  const [loadingTalks, setLoadingTalks] = React.useState(false);
  const [errorTalks, setErrorTalks] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchTalks = async () => {
      try {
        setLoadingTalks(true);
        const service = new TalkService();
        const talksData = await service.findAllTalks();
        setTalks(talksData);
      } catch (error) {
        if (error instanceof Error) {
          setErrorTalks(error);
        }
      } finally {
        setLoadingTalks(false);
      }
    };

    fetchTalks();
  }, []);

  return { talks, loadingTalks, errorTalks };
}
