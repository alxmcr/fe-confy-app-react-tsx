type Props = {
  children: React.ReactNode;
};

export default function AppNavigation({ children }: Props) {
  return <nav className="w-full">{children}</nav>;
}
