// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
(function loadTwitter() {
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.src = 'https://platform.twitter.com/widgets.js';
  script.setAttribute('charset', 'utf-8');
  document.querySelector('body').append(script);
}());
