import { TalkData } from '../../@types/serviceTypes';

export interface ITalkService {
  findAllTalks(): Promise<TalkData[]>;
}
