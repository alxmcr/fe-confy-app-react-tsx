import Icon24x24Github from '../@icons/24x24/Icon24x24Github';
import Icon24x24Heart from '../@icons/24x24/Icon24x24Heart';

export default function AppFooter() {
  return (
    <footer className="flex h-[60px] items-center justify-center gap-2 bg-light-950 text-light-50">
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
        <Icon24x24Heart />
        {` in Latam`}
      </span>
    </footer>
  );
}
