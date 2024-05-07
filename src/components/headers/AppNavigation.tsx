
type Props = {
  children: React.ReactNode;
};

export default function AppNavigation({ children }: Props) {
  return <nav>{children}</nav>;
}
