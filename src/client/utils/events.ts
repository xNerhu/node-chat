import { SyntheticEvent } from 'react';

export const executeEventStopPropagation = (
  e: SyntheticEvent<any>,
  event: any,
) => {
  e.preventDefault();
  e.stopPropagation();

  if (typeof event === 'function') {
    event(e);
  }
};
