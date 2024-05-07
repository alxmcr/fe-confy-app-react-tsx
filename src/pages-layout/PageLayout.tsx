import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return <div>{children}</div>;
}
