import React from "react";
import { useServiceContext } from "shell/Service";
import Content from './Content';

export default function Homepage() {
  const serviceContext = useServiceContext();
  React.useEffect(() => {
    serviceContext.setService({ title: "Homepage" });
  }, []);

  return (
    <main>
      <Content />
    </main>
  );
}
