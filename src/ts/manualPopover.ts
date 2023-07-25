const button = document.querySelector('.popoverBtn');
const form = document.querySelector('form');
const warning = document.querySelector('.warning');
const dialog = document.querySelector('dialog');
const mail = document.querySelector('#email');

export const popUp = () => {
  // Function to update the button state based on the email input validity
  const updateButtonState = () => {
    if (mail.validity.valid && mail.value.trim() !== '') {
      // Enable the button when the email is valid and not empty
      button.disabled = false; 
    } else {
      // Disable the button when the email is empty or invalid
      button.disabled = true; 
    }
  };

  mail.addEventListener('input', (e) => {
    if (!mail.validity.valid) {
      warning.textContent = 'Valid Email Required';
    } else {
      // Clear the warning message when the email is valid
      warning.textContent = ''; 
    }
    // Call the function to update the button state
    updateButtonState(); 
  });

  // Attach an event listener to the button to show the popover
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (!mail.validity.valid || mail.value.trim() === '') {
      warning.textContent = 'Valid Email Required';
    } else {
      dialog.showPopover(); 
      // Show the popover dialog if the email is valid
    }
  });

  // Attach an event listener to the form to show the popover when 'Enter' key is pressed
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!mail.validity.valid || mail.value.trim() === '') {
      warning.textContent = 'Valid Email Required';
    } else {
      // Show the popover dialog if the email is valid
      dialog.showPopover(); 
    }
  });

  // Call the function initially to set the initial button state
  updateButtonState();
};