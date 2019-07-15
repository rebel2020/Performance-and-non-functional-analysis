import React, { useEffect, useState } from 'react';
import { RECOMMENDATION_URL } from 'src/components/graphql/Queries';
import FetchData from 'src/components/graphql/utils';
import Collapse from './page_collapsible';

const RecommendationsPage = props => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const { history } = props;
  useEffect(() => {
    setQuery(FetchData(RECOMMENDATION_URL, setData));
  }, []);
  useEffect(() => {
    const hash = history.location.hash.replace('#', '');
    if (hash) {
      const node = document.getElementsByName(hash)[0];
      console.log(hash, node);
      if (node) {
        node.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
  });
  const rec = data.recommendation ? data.recommendation : [];
  const display = rec.map(field => (
    <Collapse key={field.fetchURL} url={field.fetchURL} recommend={field.recommend} />
  ));
  return (
    <>
      <div className="alertpageheader text-center">
        <h1>Page Level Recommendations</h1>
      </div>
      <div>{display}</div>
      {query}
    </>
  );
};
export default RecommendationsPage;
