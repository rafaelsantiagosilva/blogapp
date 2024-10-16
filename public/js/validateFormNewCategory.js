'use strict';

const nameInput = document.getElementById('name');
const slugInput = document.getElementById('slug');
const inputs = [nameInput, slugInput];

const isValidSlug = (slug) => {
  const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return regex.test(slug);
};

const isNameInputValid = () => {
  const nameValue = nameInput.value;

  if (nameValue.length > 0)
    return true;
  else
    return false;
}

const isSlugInputValid = () => {
  const slugValue = slugInput.value;

  if (isValidSlug(slugValue))
    return true;
  else
    return false;
}

const isAllInputValid = () => {
  const allInputsIsValid = isNameInputValid() && isSlugInputValid();
  const btnSubmit = document.getElementById('btn-add-category');

  if (allInputsIsValid) {
    btnSubmit.classList.remove('btn-disabled');
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.classList.add('btn-disabled');
    btnSubmit.setAttribute('disabled', true);
  }
}

inputs.forEach((input) => {
  input.addEventListener('input', isAllInputValid);
});