import { TalkData } from '../../@types/serviceTypes';

type Props = {
  talk: TalkData;
};

export default function TalkListItem({ talk }: Props) {
  return (
    <div
      id={talk.id}
      className="flex flex-col justify-start border-b border-light-50 py-3 text-light-50 md:flex-row md:items-center md:justify-between"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <span className="text-[1.25rem] font-bold md:text-[1.375rem]">{talk.time}</span>
        <img className="size-[4.375rem] rounded-lg" src={talk.speakerPhoto} alt={talk.speakerName} />
      </div>
      <div className="flex flex-col md:items-end">
        <span className="text-[1.125rem]">{talk.speakerName}</span>
        <h3 className="text-[1.75rem] font-bold">{talk.title}</h3>
      </div>
    </div>
  );
}
