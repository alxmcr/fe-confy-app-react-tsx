type Props = {
  id?: string;
  children: React.ReactNode;
};

export default function BaseSection({ id = '', children }: Props) {
  return (
    <section id={id} className="flex min-h-screen justify-center">
      <div className="w-full lg:w-[1028px]">{children}</div>
    </section>
  );
}
