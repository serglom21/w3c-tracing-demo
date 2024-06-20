import React, { useEffect } from 'react';
import * as Sentry from '@sentry/react';

const Page1 = () => {
  useEffect(() => {
    const span = Sentry.startSpan({ name: 'Page1-Span1 Load' }, async () => {
        fetch('/api/data1')
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          Sentry.captureException(error);
        });
    });

    const span2 = Sentry.startSpan({ name: 'Page1-Span2 Load' }, async () => {
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

  return <div>Page 1</div>;
};

export default Page1;
