import { TalkData } from '../../@types/serviceTypes';

type Props = {
  talk: TalkData;
};

export default function TalkListItem({ talk }: Props) {
  return (
    <div
      id={talk.id}
      className="flex items-center justify-between border-b border-light-50 py-3 text-light-50"
    >
      <div className="flex items-center gap-4">
        <span className="text-[22px] font-bold">{talk.time}</span>
        <img className="size-[72px] rounded-lg" src={talk.speakerPhoto} alt={talk.speakerName} />
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[16px]">{talk.speakerName}</span>
        <h3 className="text-[28px] font-bold">{talk.title}</h3>
      </div>
    </div>
  );
}
