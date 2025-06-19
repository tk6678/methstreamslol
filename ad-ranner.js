let clickCount = 0;

function runPopups() {
  clickCount++;

  // Your ad: 1st, 3rd, 4th click
  if ([1, 3, 4].includes(clickCount)) {
    let s = document.createElement('script');
    s.src = '//pl16114040.profitableratecpm.com/21/1c/db/211cdb34f125d154b6b894159ed8397b.js';
    document.body.appendChild(s);
  }

  // AdCash: 2nd click
  if (clickCount === 2) {
    let s = document.createElement('script');
    s.src = '//acscdn.com/script/aclib.js';
    s.onload = function () {
      aclib.runPop({ zoneId: '10085650' });
    };
    document.body.appendChild(s);
  }

  // 5th click = remove overlay and allow embed interaction
  if (clickCount >= 5) {
    document.getElementById('clickLayer').style.display = 'none';
  }
}
