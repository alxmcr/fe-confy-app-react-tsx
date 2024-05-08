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
    <article id={id}>
      <img className="" src={photo} alt={`${firstname} ${lastname} profile photo`} />
      <div className="">
        <span className="">
          {firstname} {lastname}
        </span>
        <a className="" href={`https://twitter.com/${twitter}`}>{`@${twitter}`}</a>
        <a className="" href={websiteURL}>
          <Icon24x24GlobalAmericas />
        </a>
      </div>
    </article>
  );
}
