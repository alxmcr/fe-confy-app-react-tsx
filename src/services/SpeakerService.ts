import { SpeakerData } from '../@types/serviceTypes';
import { ISpeakerService } from './ISpeakerService';

type SpeakersResponseData = {
  results: SpeakerData[];
};

export class SpeakerService implements ISpeakerService {
  async findAllSpeakers(): Promise<SpeakerData[]> {
    const url = 'https://randomuser.me/api/?results=12';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API call failed with status ${response.status}`);
    }

    const data = (await response.json()) as SpeakersResponseData;
    return data.results;
  }
}
