const sendForm = () => {
  const popupThank = document.querySelector('.popup-thank'),
    statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 18px; color: #000000';

  const messages = {
    error: 'Что-то пошло не так...',
    load: `<div class="sk-circle-bounce">
              <div class="sk-child sk-circle-1"></div>
              <div class="sk-child sk-circle-2"></div>
              <div class="sk-child sk-circle-3"></div>
              <div class="sk-child sk-circle-4"></div>
              <div class="sk-child sk-circle-5"></div>
              <div class="sk-child sk-circle-6"></div>
              <div class="sk-child sk-circle-7"></div>
              <div class="sk-child sk-circle-8"></div>
              <div class="sk-child sk-circle-9"></div>
              <div class="sk-child sk-circle-10"></div>
              <div class="sk-child sk-circle-11"></div>
              <div class="sk-child sk-circle-12"></div>
            </div>`
  };

  const patterns = {
    'name': /^[а-яё ]+$/i,
    'phone': /^\+?[78]([-() ]*\d){10}$/
  };

  const animateError = elem => {
    elem.classList.remove('input-error');
    setTimeout(() => elem.classList.add('input-error'), 0);
  };

  const postData = async body => {
    const response = await fetch('server.php', { method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      }
    });

    if (response.status !== 200) throw new Error('Error ' + response.status);

    statusMessage.textContent = '';
    popupThank.classList.add('popup--opened');

    return response;
  };

  const formHandler = evt => {
    evt.preventDefault();
    const errors = new Set(),
      formElements = [...evt.target.elements]
        .filter(elem => elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button');

    formElements.forEach(elem => {
      if (!elem.value.trim()) {
        errors.add(elem);
        animateError(elem);
      } else if (elem.type !== 'checkbox' && !patterns[elem.name].test(elem.value)) {
        errors.add(elem);
        animateError(elem);
      } else if (elem.type === 'checkbox' && !elem.checked) {
        errors.add(elem);
        animateError(elem.closest('.checkbox'));
      } else {
        errors.delete(elem);
        elem.classList.remove('input-error');
      }
    });

    if (errors.size) return;

    const body = {},
      formData = new FormData(evt.target);
    formData.forEach((value, key) => body[key] = value.trim());

    evt.target.append(statusMessage);
    statusMessage.innerHTML = messages.load;

    postData(body)
      .catch(err => {
        statusMessage.textContent = messages.error;
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => {
          statusMessage.textContent = '';
          popupThank.classList.remove('popup--opened');
          document.body.style.overflowY = '';
        }, 5000);
        formElements.forEach(elem => {
          if (elem.type === 'checkbox') {
            elem.checked = false;
          } else {
            elem.value = '';
          }
        });
      });

  };

  document.body.addEventListener('submit', formHandler);
};

export default sendForm;
