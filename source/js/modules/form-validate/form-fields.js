export const editInputsPlaceholder = () => {
  if (document.querySelectorAll('input[type="text"]')) {
    document.querySelectorAll('input[type="text"]').forEach((input) => {
      input.addEventListener('focus', () => {
        input.removeAttribute('placeholder');
      });

      if (document.querySelector('input[name="user-name"]') && input.getAttribute('name') === 'user-name') {
        input.addEventListener('blur', () => {
          input.setAttribute('placeholder', 'Имя');
        });
      }

      if (document.querySelector('input[name="user-phone"]') && input.getAttribute('name') === 'user-phone') {
        input.addEventListener('blur', () => {
          input.setAttribute('placeholder', 'Телефон');
        });
      }
    });
  }
};
