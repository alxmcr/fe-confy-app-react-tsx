import { TalkData } from '../../@types/serviceTypes';
import { ITalkService } from './ITalkService';
import MOCK_TALKS from '../../mocks/mock-talks.json';

export class TalkService implements ITalkService {
  async findAllTalks(): Promise<TalkData[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(MOCK_TALKS as TalkData[]);
        } catch (error) {
          reject(error);
        }
      }, 1000);
    });
  }
}
