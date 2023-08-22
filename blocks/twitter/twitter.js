export default function decorate(block) {
  const cap = document.createElement('img');
  cap.src = '../images/twitter-cap.jpg';
  cap.width = '338';
  cap.height = '184';
  const wrapper = document.createElement('p');
  block.textContent = '';
  block.append(cap);
  block.append(wrapper);
}
