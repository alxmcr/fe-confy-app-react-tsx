export default function HeroSection() {
  return (
    <section id="hero" className="flex w-full justify-center">
      <div className="flex w-full flex-col gap-4 border px-[16px] md:px-[40px] lg:w-[1028px] lg:px-0">
        <div className="bg-golden-300">
          <h1 className="font-bungee-inline text-[54px]">Confy</h1>
          <p className="">
            Online Tech Conference <span className="">October 4th., 2021</span>
          </p>
          <p className="">París, France</p>
        </div>
        <div className="">
          <a
            href="#tickets"
            className="flex h-[42px] w-[100px] items-center justify-center bg-golden-300 text-center font-semibold"
          >
            Tickets
          </a>
        </div>
      </div>
    </section>
  );
}
