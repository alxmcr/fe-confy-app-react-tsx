import BaseSection from './BaseSection';

export default function HeroSection() {
  return (
    <BaseSection id="hero">
      <div className="relative flex h-full flex-col items-center justify-center gap-4 bg-[url('/assets/images/eiffel-tower.jpg')] bg-cover bg-center bg-no-repeat px-2 py-3">
        <div className="flex w-full flex-col gap-2 bg-golden-300 py-3">
          <h1 className="text-center font-bungee-inline text-[60px]">Confy</h1>
          <div className="flex flex-col gap-1">
            <p className="text-center text-[20px]">
              Online Tech Conference <span className="">October 4th., 2024</span>
            </p>
            <p className="text-center text-[18px]">París, France</p>
          </div>
        </div>
        <div className="">
          <a
            href="#tickets"
            className="flex h-[48px] w-[140px] items-center justify-center bg-golden-300 text-center text-[20px] font-semibold"
          >
            Tickets
          </a>
        </div>
        <p className="absolute bottom-2 right-1 px-2 text-golden-300">
          {`Photo by `}
          <a href="https://www.pexels.com/photo/illuminated-eiffel-tower-at-night-18353583/">
            Stephen Leonardi.
          </a>
        </p>
      </div>
    </BaseSection>
  );
}
