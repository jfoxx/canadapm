export default function decorate(block) {
  const cap = document.createElement('img');
  cap.src = '../images/twitter-cap.jpg';
  cap.width = '338';
  cap.height = '184';
  const wrapper = document.createElement('p');
  const timeline = document.createElement('a');
  timeline.className = 'twitter-timeline';
  timeline.setAttribute('data-aria-polite', 'assertive');
  timeline.setAttribute('data-chrome', 'noheader noscrollbar');
  timeline.setAttribute('data-height', '650');
  timeline.setAttribute('data-width', '336');
  timeline.href = 'https://twitter.com/CanadianPM/lists/canada-live1';
  timeline.text = '';
  wrapper.append(timeline);
  block.textContent = '';
  block.append(cap);
  block.append(wrapper);
}
