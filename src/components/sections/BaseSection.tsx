type Props = {
  id?: string;
  children: React.ReactNode;
};

export default function BaseSection({ id = '', children }: Props) {
  return (
    <section id={id} className="flex h-screen justify-center bg-blue-500 p-4 md:p-10">
      <div className="h-[500px] w-full bg-pink-500 lg:w-[1028px]">{children}</div>
    </section>
  );
}
