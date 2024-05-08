import { SpeakerData } from '../../@types/serviceTypes';

export interface ISpeakerService {
  findAllSpeakers(): Promise<SpeakerData[]>;
}
