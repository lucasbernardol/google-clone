const formElement = document.querySelector('form');

const GOOGLE_URL = 'https://www.google.com/search?q';

function getURL(searchTerm) {
  return `${GOOGLE_URL}=${searchTerm}`;
}

function makeRequest(search) {
  const anchor = document.createElement('a');

  anchor.href = getURL(search);
  anchor.setAttribute('target', '_blank');

  anchor.click();
}

function formElementHandleEvent(event) {
  event.preventDefault();
  const { target: eventTarget } = event;

  const htmlInputElement = eventTarget.querySelector('input');

  const currentInputData = htmlInputElement.value;

  const hasInputData = Boolean(currentInputData);

  if (hasInputData) {
    htmlInputElement.value = null;
    makeRequest(currentInputData);
  }
}

function load() {
  formElement.addEventListener('submit', formElementHandleEvent);
}

window.addEventListener('load', () => load());
