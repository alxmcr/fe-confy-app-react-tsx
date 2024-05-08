import { TalkData } from '../../@types/serviceTypes';

type Props = {
  talk: TalkData;
};

export default function TalkListItem({ talk }: Props) {
  return (
    <div id={talk.id} className="">
      <div className="">
        <span className="">{talk.time}</span>
        <img className="" src={talk.speakerPhoto} alt={talk.speakerName} />
      </div>
      <div className="">
        <span className="">{talk.speakerName}</span>
        <h3 className="">{talk.title}</h3>
      </div>
    </div>
  );
}
