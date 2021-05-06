function showInputError(input, hint, error) {
  console.log("OH MY");
  if (error !== undefined) {
    input.classList.add("form__input-text--error");
    hint.classList.remove("hide-out");
    hint.innerText = error;
  } else {
    input.classList.remove("form__input-text--error");
    hint.classList.add("hide-out");
    hint.innerText = "";
  }
}

function sendRequest() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const nameHint = document.getElementById("name-hint");
  const emailHint = document.getElementById("email-hint");
  const subjectHint = document.getElementById("subject-hint");
  const messageHint = document.getElementById("message-hint");
  const successBox = document.getElementById("success-box");
  
  
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "../src/save_feedback.php", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // Response
      const response = JSON.parse(this.response);
      
      const nameError = response['errors']['name_msg'];
      const emailError = response['errors']['email_msg'];
      const subjectError = response['errors']['subject_msg'];
      const messageError = response['errors']['message_msg'];

      showInputError(nameInput, nameHint, nameError);
      showInputError(emailInput, emailHint, emailError);
      showInputError(subjectInput, subjectHint, subjectError);
      showInputError(messageInput, messageHint, messageError);

      if (response['is_success']) {
        successBox.classList.remove("hide-out");
        setTimeout(() => {
          successBox.classList.add("hide-out");
        }, 3000);
      } else {
        successBox.classList.add("hide-out");
      }
    }
    if (this.readyState === 4 && this.status >= 400) {
      alert('Ошибка сервера');
    }
  };

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value,
  };

  const requestText = 'form_data=' + JSON.stringify(formData);
  xhttp.send(requestText);

}
