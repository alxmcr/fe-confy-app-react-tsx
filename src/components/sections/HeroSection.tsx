export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex size-full justify-center bg-[url('/assets/images/eiffel-tower.jpg')] bg-cover bg-center bg-no-repeat py-4"
    >
      <div className="relative flex w-full flex-col items-center justify-center gap-3">
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
        <p className="absolute bottom-0 right-0 px-2 text-golden-300">
          {`Photo by `}
          <a href="https://www.pexels.com/photo/illuminated-eiffel-tower-at-night-18353583/">
            Stephen Leonardi.
          </a>
        </p>
      </div>
    </section>
  );
}
