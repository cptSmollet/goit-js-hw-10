import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = form.elements.delay.value;
    const state = form.elements.state.value;

    createPromise(Number(delay), state)
        .then(message => {
            iziToast.success({ title: 'Success', message });
        })
        .catch(error => {
            iziToast.error({ title: 'Error', message: error });
        });
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(`✅ Fulfilled promise in ${delay}ms`);
            } else {
                reject(`❌ Rejected promise in ${delay}ms`);
            }
        }, delay);
    });
}