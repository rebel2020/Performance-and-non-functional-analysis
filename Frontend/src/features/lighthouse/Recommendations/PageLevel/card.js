import React, { useEffect, useState } from 'react';
import formatString from 'src/utilities/formatString';
import { getRecommendations } from 'src/components/graphql/Queries';
import FetchData from 'src/components/graphql/utils';

import './main.scss';

const Cards = props => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const { url, audit, score, field, weight } = props;

  useEffect(() => {
    setQuery(FetchData(getRecommendations(audit, field), setData));
  }, []);
  let value = '';
  if (data)
    value = data.recommendationDescription ? data.recommendationDescription[audit][field] : '';
  // const recommendationList = value.split(/\d*\./).filter(val => !!val.trim());
  const recommendationList = value.split('\n').map(item => item.slice(3));
  return (
    <div>
      <div style={{ width: '100%', height: '10%' }}>
        <div className="cardRec">
          <div className="cardRecHead">{formatString(field)}</div>
          <p className="text-left col s11">
            <font color="green">Average Score : </font>
            {Math.round(score * 10000) / 100}
          </p>
          <br />
          <p className="text-left col s11">
            <font color="green">Weight : </font>
            {weight}
          </p>
          <br />
          <p className="text-left col s11">
            <font color="green">Recommendation :</font>
            <ul>
              {recommendationList.map((val, idx) => (
                <li key={`${url}-${field}-${val}`}>{val}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
      {query}
    </div>
  );
};

export default Cards;
