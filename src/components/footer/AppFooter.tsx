import Icon24x24Github from '../@icons/24x24/Icon24x24Github';
import Icon24x24Heart from '../@icons/24x24/Icon24x24Heart';

export default function AppFooter() {
  return (
    <footer className="h-[60px] bg-light-950 p-4 text-light-50 md:p-10">
      <div className="flex h-[40px] w-full items-center justify-center gap-2 bg-pink-500 lg:w-[1028px]">
        <a
          href="https://github.com/alxmcr/fe-confy-app-react-tsx"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <Icon24x24Github />
        </a>
        <span className="flex items-center gap-2">
          {` | Made with `}
          <span className="text-golden-300">
            <Icon24x24Heart />
          </span>
          {` in Latam`}
        </span>
      </div>
    </footer>
  );
}
