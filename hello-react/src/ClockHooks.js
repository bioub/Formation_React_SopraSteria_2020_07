import React, { useState, useEffect, useRef } from 'react';
import { format as formatDate } from 'date-fns';

function ClockHooks({ format = 'HH:mm:ss', delay = 1000 }) {
  const [now, setNow] = useState(new Date());
  const _interval = useRef();

  useEffect(() => {
    console.log('componentDidMount / componentDidUpdate');
    if (_interval.current) {
      clearInterval(_interval.current);
      _interval.current = null;
    }

    _interval.current = setInterval(() => {
      setNow(new Date());
    }, delay);
    return () => {
      console.log('componentWillUnmount');
      clearInterval(_interval.current);
    };
  }, [delay]);

  return <div className="Clock">{formatDate(now, format)}</div>;
}

export default ClockHooks;
