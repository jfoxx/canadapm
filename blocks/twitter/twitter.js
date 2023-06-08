export default function decorate(block) {
    const cap = document.createElement('img');
    cap.src = '../images/twitter-cap.jpg';
   const wrapper = document.createElement('p');
   const timeline = document.createElement('a');
   timeline.className = 'twitter-timeline';
   timeline.setAttribute('data-aria-polite', 'assertive');
   timeline.setAttribute('data-chrome', 'noheader noscrollbar');
   timeline.setAttribute('data-height', '650');
   timeline.setAttribute('data-width', '520');
   timeline.href = 'https://twitter.com/CanadianPM/lists/canada-live1';
   timeline.text = '';
   const script = document.createElement('script');
   script.setAttribute('async', '');
   script.src = 'https://platform.twitter.com/widgets.js';
   script.setAttribute('charset', 'utf-8');
   wrapper.append(timeline);
   wrapper.append(script);
   block.textContent = '';
   block.append(cap);
   block.append(wrapper);
  }