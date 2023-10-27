const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

class ColorSwitcher {
  #switchIntervalId;
  #isActive = false;
  setBackgroundColorFn;
  disabledStartBtnFn;

  constructor(disabledStartBtnFn, setBackgroundColorFn) {
    this.setBackgroundColorFn = setBackgroundColorFn;
    this.disabledStartBtnFn = disabledStartBtnFn;
  }

  startSwitcher() {
    if (this.#isActive) return;

    this.#switchIntervalId = setInterval(
      () => this.setBackgroundColorFn(this.#getRandomHexColor()),
      1000
    );

    this.#isActive = true;
    this.disabledStartBtnFn(true);
  }

  stopSwitcher() {
    if (!this.#isActive) return;

    clearInterval(this.#switchIntervalId);
    this.#isActive = false;
    this.disabledStartBtnFn(false);
  }

  #getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}

const switcher = new ColorSwitcher(disabledStartBtn, changeBackgroundColor);

refs.startBtn.addEventListener('click', switcher.startSwitcher.bind(switcher));
refs.stopBtn.addEventListener('click', switcher.stopSwitcher.bind(switcher));

function changeBackgroundColor(color) {
  refs.body.style.backgroundColor = color;
}

function disabledStartBtn(isDisabled) {
  refs.startBtn.disabled = isDisabled;
}
