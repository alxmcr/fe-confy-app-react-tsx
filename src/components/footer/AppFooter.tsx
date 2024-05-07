import Icon24x24Github from '../@icons/24x24/Icon24x24Github';
import Icon24x24Heart from '../@icons/24x24/Icon24x24Heart';

export default function AppFooter() {
  return (
    <footer className="">
      <p className="">
        <a
          href="https://github.com/alxmcr/fe-confy-app-react-tsx"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <Icon24x24Github />
        </a>
        <span>
          {` | Made with`}
          <Icon24x24Heart />
          {` in Latam`}
        </span>
      </p>
    </footer>
  );
}
