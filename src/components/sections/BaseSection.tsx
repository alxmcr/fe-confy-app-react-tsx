type Props = {
  id?: string;
};

export default function BaseSection({ id = '' }: Props) {
  return (
    <section id={id} className="flex h-screen justify-center bg-blue-500 p-4 md:p-10">
      <div className="h-[500px] w-full bg-pink-500 lg:w-[1028px]"></div>
    </section>
  );
}
