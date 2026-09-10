const ageGate = document.getElementById('ageGate');
if (sessionStorage.getItem('wellDosedAge') === '21plus') ageGate.classList.add('hidden');

document.getElementById('enterSite').addEventListener('click', () => {
  sessionStorage.setItem('wellDosedAge', '21plus');
  ageGate.classList.add('hidden');
});

document.getElementById('leaveSite').addEventListener('click', () => {
  document.querySelector('.age-card').innerHTML =
    '<h1>Thanks for stopping by.</h1><p>This site is intended only for adults age 21 and older.</p>';
});

const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('mainNav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
