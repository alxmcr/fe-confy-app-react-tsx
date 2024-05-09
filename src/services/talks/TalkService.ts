import { TalkData } from '../../@types/serviceTypes';
import { ITalkService } from './ITalkService';

export class TalkService implements ITalkService {
  async findAllTalks(): Promise<TalkData[]> {
    const response = await fetch('/json/mock-talks.json');

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: TalkData[] = await response.json();

    return data;
  }
}
