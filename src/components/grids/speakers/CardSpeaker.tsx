import { SpeakerData } from '../../../@types/serviceTypes';
import Icon24x24GlobalAmericas from '../../@icons/24x24/Icon24x24GlobalAmericas';

type Props = {
  speaker: SpeakerData;
};

export default function CardSpeaker({ speaker }: Props) {
  const { name, login, picture } = speaker;

  const firstname = name.first;
  const lastname = name.last;
  const id = login.uuid;
  const twitter = login.username;
  const websiteURL = `https://${login.username}.com/`;
  const photo = picture.medium;

  if (speaker === null || speaker === undefined) {
    return null;
  }

  return (
    <article id={id} className="flex flex-col items-center gap-2 rounded-lg bg-golden-400 p-3">
      <img className="size-[80px] rounded-full" src={photo} alt={`${firstname} ${lastname} profile photo`} />
      <div className="flex flex-col items-center gap-1 text-light-950">
        <span className="text-[20px] font-bold">
          {firstname} {lastname}
        </span>
        <a href={`https://twitter.com/${twitter}`} className='text-[18px]'>{`@${twitter}`}</a>
        <a href={websiteURL}>
          <Icon24x24GlobalAmericas />
        </a>
      </div>
    </article>
  );
}
