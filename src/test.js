import string from "./css.js";

let n = 1;
let time = 150;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);

const run = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

let id = setInterval(() => {
  run();
}, time);

btnPause.onclick = () => {
  window.clearInterval(id);
};

btnPaly.onclick = () => {
  id = setInterval(() => {
    run();
  }, time);
};

btnSlow.onclick = () => {
  window.clearInterval(id);
  time = 300;
  id = setInterval(() => {
    run();
  }, time);
};

btnNormal.onclick = () => {
  window.clearInterval(id);
  time = 100;
  id = setInterval(() => {
    run();
  }, time);
};

btnFast.onclick = () => {
  window.clearInterval(id);
  time = 0;
  id = setInterval(() => {
    run();
  }, time);
};
