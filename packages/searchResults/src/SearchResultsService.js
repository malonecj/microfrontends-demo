import React from "react";
import {
  useLocation
} from "react-router-dom";
import { useServiceContext } from "shell/Service";
import AdItemList from './AdItemList';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Homepage() {
  const serviceContext = useServiceContext();
  React.useEffect(() => {
    serviceContext.setService({ title: "Homepage" });
  }, []);
  const query = useQuery();
  const category = query.get('category');
  return (
    <main>
      <AdItemList category={category} />
    </main>
  );
}
