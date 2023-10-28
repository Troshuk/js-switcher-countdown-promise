import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  daysField: document.querySelector('div.timer span[data-days]'),
  hoursField: document.querySelector('div.timer span[data-hours]'),
  minutesField: document.querySelector('div.timer span[data-minutes]'),
  secondsField: document.querySelector('div.timer span[data-seconds]'),
  datePicker: document.querySelector('input#datetime-picker'),
};

class CountDown {
  #disableStartFn;
  #updateDateTimeFn;
  #countDownIntervalId;

  endDateTime;
  isActive = false;

  constructor(disableStartFn, renderTimeFn) {
    this.#disableStartFn = disableStartFn;
    this.#updateDateTimeFn = renderTimeFn;
    this.#disableStartFn(true);
  }

  startCountDown() {
    if (this.isActive || !this.endDateTime) return;
    this.isActive = true;
    this.#disableStartFn(true);
    this.processCountDownTick();

    this.#countDownIntervalId = setInterval(
      this.processCountDownTick.bind(this),
      1000
    );

    Notify.info(
      `Counting down till specified date and time: ${this.endDateTime.toLocaleString()}`
    );
  }

  processCountDownTick() {
    const remainingMsToFinish = this.endDateTime - Date.now();

    if (remainingMsToFinish < 0) return this.stopCountDown();

    this.#updateDateTimeFn(this.convertMs(remainingMsToFinish));
  }

  stopCountDown() {
    if (!this.isActive) return;

    this.isActive = false;
    this.endDateTime = null;
    this.#disableStartFn(false);

    clearInterval(this.#countDownIntervalId);

    Notify.success('Count Down has been completed!');
  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}

const timer = new CountDown(disableStartButton, updateDateTime);

function disableStartButton(isDisabled) {
  refs.startBtn.disabled = isDisabled;

  if (!isDisabled) refs.datePicker.disabled = false;
}

function updateDateTime({ days, hours, minutes, seconds }) {
  refs.daysField.textContent = addLeadingZero(days);
  refs.hoursField.textContent = addLeadingZero(hours);
  refs.minutesField.textContent = addLeadingZero(minutes);
  refs.secondsField.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

refs.startBtn.addEventListener('click', () => {
  if (!timer.endDateTime) return;

  timer.startCountDown();
  refs.datePicker.disabled = true;
});

flatpickr('input#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateTime = selectedDates[0];

    if (dateTime - Date.now() < 0) {
      Notify.failure('Please choose a date in the future');
      return;
    }

    timer.endDateTime = dateTime;
    disableStartButton(false);
  },
});
