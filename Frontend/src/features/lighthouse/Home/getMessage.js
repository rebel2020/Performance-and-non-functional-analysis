import React from 'react';
import searchParams from 'src/utilities/searchParams';
import { getDate } from 'src/utilities/timeConversions';

const getMessage = search => {
  const { phase, brand, page, date } = searchParams(search);
  let message = <></>;
  const datetxt = <span className="greentxt">{getDate(date, 0)}</span>;
  const phasetxt = <span className="redtxt">{phase}</span>;
  const pagetxt = <span className="yellowtxt">{page}</span>;
  const brandtxt = <span className="bluetxt">{brand}</span>;
  if (!page && !brand && !phase) {
    message = (
      <div>
        The Average Metric Scores of All the Pages on
        {datetxt}.
      </div>
    );
  } else if (!page && !brand) {
    message = (
      <div>
        The Average Metric Scores of All the Pages in {phasetxt} Environment on {datetxt}.
      </div>
    );
  } else if (!page && !phase) {
    message = (
      <div>
        The Average Metric Scores of All the Pages of {brandtxt} Brand in All Environments on{' '}
        {datetxt}.
      </div>
    );
  } else if (!phase && !brand) {
    message = (
      <div>
        The Average Metric Scores of {pagetxt} in All Environments on {datetxt}.
      </div>
    );
  } else if (!phase) {
    message = (
      <div>
        The Average Metric Scores of {pagetxt} in All Environments on {datetxt}.
      </div>
    );
  } else if (!brand) {
    message = (
      <div>
        The Average Metric Scores of {pagetxt} in ${phasetxt} Environment on {datetxt}.
      </div>
    );
  } else if (!page) {
    message = (
      <div>
        The Average Metric Scores of All the Pages of {brandtxt} in {phasetxt} Environment on{' '}
        {datetxt}.
      </div>
    );
  } else {
    message = (
      <div>
        The Average Metric Scores of {pagetxt} in {phasetxt} Environment on {datetxt}.
      </div>
    );
  }
  return message;
};

export default getMessage;
