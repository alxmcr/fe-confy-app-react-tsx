export default function HeroSection() {
  return (
    <section id="hero" className="flex w-full justify-center py-4">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <div className="w-full bg-golden-300">
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
