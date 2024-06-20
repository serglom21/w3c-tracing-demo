import * as Sentry from '@sentry/react';


const originalFetch = window.fetch;

function getTraceparentString() {
    const span = Sentry.getActiveSpan();
    if (!span) {
      return undefined;
    }
    return`00-${span.spanContext().traceId}-${span.spanContext().spanId}-0${span.spanContext().traceFlags}`;
}

window.fetch = async function(url, options = {}) {
  options = options || {};
  options.headers = options.headers || {};

  options.headers['traceparent'] = getTraceparentString();

  Sentry.getCurrentScope().setExtras({
    headers: options.headers
  });
  console.log(options.headers);
  return originalFetch(url, options);
};

export default window.fetch;
