const XHTTPSTATUS = {
  Unsent: 0,
  Opened: 1,
  HeadersReceived: 2,
  Loading: 3,
  Done: 4,
};

function getFormData(form) {
  const nameInput = form.getElementsByClassName('name')[0];
  const emailInput = form.getElementsByClassName('email')[0];
  const subjectInput = form.getElementsByClassName('subject')[0];
  const messageInput = form.getElementsByClassName('message')[0];

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value,
  };

  return formData;
}

function showInputError(input, hint, error) {
  if (error !== undefined) {
    input.classList.add('form__input-text--error');
    hint.classList.remove('hide-out');
    hint.innerText = error;
  } else {
    input.classList.remove('form__input-text--error');
    hint.classList.add('hide-out');
    hint.innerText = '';
  }
}

function updateFormInterface(form, response) {
  const nameInput = form.getElementsByClassName('name')[0];
  const emailInput = form.getElementsByClassName('email')[0];
  const subjectInput = form.getElementsByClassName('subject')[0];
  const messageInput = form.getElementsByClassName('message')[0];

  const nameHint = form.getElementsByClassName('name-hint')[0];
  const emailHint = form.getElementsByClassName('email-hint')[0];
  const subjectHint = form.getElementsByClassName('subject-hint')[0];
  const messageHint = form.getElementsByClassName('message-hint')[0];
  const successBox = form.getElementsByClassName('success-box')[0];

  const nameError = response['errors']['name_msg'];
  const emailError = response['errors']['email_msg'];
  const subjectError = response['errors']['subject_msg'];
  const messageError = response['errors']['message_msg'];

  showInputError(nameInput, nameHint, nameError);
  showInputError(emailInput, emailHint, emailError);
  showInputError(subjectInput, subjectHint, subjectError);
  showInputError(messageInput, messageHint, messageError);

  if (response['is_success']) {
    successBox.classList.remove('hide-out');
    setTimeout(() => {
      successBox.classList.add('hide-out');
    }, 3000);
  } else {
    successBox.classList.add('hide-out');
  }
}

function processFormRequest() {
  const readyState = this.readyState;
  const httpStatus = this.status;

  if (readyState === XHTTPSTATUS.Done && httpStatus === 200) {
    // Response
    const response = JSON.parse(this.response);
    updateFormInterface(form, response);
  }
  if (readyState === XHTTPSTATUS.Done && httpStatus >= 400) {
    alert('Ошибка сервера');
  }
}

function sendRequest(form) {
  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', '../src/save_feedback.php', true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhttp.onreadystatechange = processFormRequest;

  const requestText = 'form_data=' + JSON.stringify(getFormData(form));
  xhttp.send(requestText);
}

function run() {
  const form = document.getElementById("form");
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    sendRequest(form);
  });
}

window.onload = run;
