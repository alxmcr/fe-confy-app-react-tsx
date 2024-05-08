import { useEffect, useState } from 'react';
import { SpeakerService } from '../services/speakers/SpeakerService';
import { SpeakerData } from '../@types/serviceTypes';

export function useSpeakers() {
  const [loading, setLoading] = useState(false);
  const [speakers, setSpeakers] = useState<SpeakerData[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const service = new SpeakerService();

        const speakers = await service.findAllSpeakers();
        setSpeakers(speakers);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  return { loading, speakers, error };
}
