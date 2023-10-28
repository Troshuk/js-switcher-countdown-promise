import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('form.form'),
  createBtn: document.querySelector('form button'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const { delay, step, amount } = e.target.elements;

  if (delay.value <= 0 || step.value <= 0 || amount.value <= 0) {
    return;
  }

  disableCreateButton(true);

  const allPromises = [];

  for (let i = 1; i <= amount.value; i++) {
    const delayTime = Number.parseInt(delay.value) + step.value * (i - 1);

    allPromises.push(
      createPromise(i, delayTime)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        })
    );
  }

  // Enable create button if all the promises has completed
  Promise.allSettled(allPromises).then(() => disableCreateButton(false));
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function disableCreateButton(isDisabled) {
  refs.createBtn.disabled = isDisabled;
}
