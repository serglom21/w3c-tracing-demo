import React, { useEffect } from 'react';
import * as Sentry from '@sentry/react';

const Page2 = () => {
  useEffect(() => {
    const span = Sentry.startSpan({ name: 'Page2 Load' }, async () => {
        fetch('/api/data2')
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          Sentry.captureException(error);
        });
    });
    
    
    
  }, []);

  return <div>Page 2</div>;
};

export default Page2;
