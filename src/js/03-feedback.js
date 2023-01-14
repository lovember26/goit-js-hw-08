import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const STORAGE_DATA = 'feedback-form-state';
let storageObj = {};

form.addEventListener('input', throttle(addStorageData, 500));
form.addEventListener('submit', clearFormAndStorage);
window.addEventListener('DOMContentLoaded', fillFormValues);

function addStorageData({ target }) {
  storageObj[target.name] = target.value;

  localStorage.setItem(STORAGE_DATA, JSON.stringify(storageObj));
}

function fillFormValues() {
  if (localStorage.getItem(STORAGE_DATA)) {
    storageObj = JSON.parse(localStorage.getItem(STORAGE_DATA));
    input.value = storageObj.email || '';
    textarea.value = storageObj.message || '';
  }
}

function clearFormAndStorage(e) {
  e.preventDefault();
  form.reset();
  localStorage.removeItem(STORAGE_DATA);
  console.log(storageObj);
}
