// get form elements
const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const regNoInput = document.querySelector('input[name="registration-no"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone-no"]');
const branchInput = document.querySelector('input[name="branch"]');
const yearInput = document.querySelector('input[name="year-of-study"]');

// add submit event listener to form
form.addEventListener('submit', function(event) {
  // prevent form submission
  event.preventDefault();

  // validate name
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return false;
  }

  // validate registration number
  if (regNoInput.value.trim() === '') {
    alert('Please enter your registration number.');
    regNoInput.focus();
    return false;
  }

  // validate email
  if (emailInput.value.trim() === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return false;
  } else if (!validateEmail(emailInput.value.trim())) {
    alert('Please enter a valid email.');
    emailInput.focus();
    return false;
  }

  // validate phone number
  if (phoneInput.value.trim() === '') {
    alert('Please enter your phone number.');
    phoneInput.focus();
    return false;
  } else if (!validatePhoneNumber(phoneInput.value.trim())) {
    alert('Please enter a valid phone number.');
    phoneInput.focus();
    return false;
  }

  // validate branch
  if (branchInput.value.trim() === '') {
    alert('Please enter your branch.');
    branchInput.focus();
    return false;
  }

  // validate year of study
  if (yearInput.value.trim() === '') {
    alert('Please enter your year of study.');
    yearInput.focus();
    return false;
  } else if (!validateYearOfStudy(yearInput.value.trim())) {
    alert('Please enter a valid year of study.');
    yearInput.focus();
    return false;
  }

  // if all fields are valid, submit the form
  alert('Form submitted successfully.');
  form.submit();
});

// function to validate email
function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

// function to validate phone number
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

// function to validate year of study
function validateYearOfStudy(year) {
  const yearRegex = /^[1-4]$/;
  return yearRegex.test(year);
}