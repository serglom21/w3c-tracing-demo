import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Sentry from '@sentry/react';
import './utils/customFetch';


Sentry.init({
  dsn: '{DSN}',
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0, // Adjust this value in production as needed
});

Sentry.setTag("version", "1");

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={"An error has occurred"}>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

