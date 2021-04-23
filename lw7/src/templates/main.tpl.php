<?php if (isset($args['is_success'])): ?>
  <p class="success_text">Form is successfully saved!</p>
<?php endif; ?>

<form class="contact__form" method="POST">
  <div class="contact-form__input_container">
    <input class="contact-form__input_text" type="text" name="name" id="name" value="<?php echo $args['name'] ?? ''; ?>" placeholder="Name"/>
    <?php if (isset($args['name_error_msg'])): ?>
      <p class="error_text"><?php echo $args['name_error_msg']; ?></p>
    <?php endif; ?>
  </div>
  <div class="contact-form__input_container">
    <input class="contact-form__input_text" type="email" name="email" id="email" value="<?php echo $args['email'] ?? ''; ?>" placeholder="Email"/>
    <?php if (isset($args['email_error_msg'])): ?>
      <p class="error_text"><?php echo $args['email_error_msg']; ?></p>
    <?php endif; ?>
  </div>
  <div class="contact-form__input_container">
    <input class="contact-form__input_text" type="text" name="subject" id="subject" value="<?php echo $args['subject'] ?? ''; ?>" placeholder="Subject"/>
    <?php if (isset($args['subject_error_msg'])): ?>
      <p class="error_text"><?php echo $args['subject_error_msg']; ?></p>
    <?php endif; ?>
  </div>
  <div class="contact-form__input_container">
    <textarea class="contact-form__input_text contact-form__textarea" placeholder="Message" name="message" id="message"><?php echo $args['message'] ?? ''; ?></textarea>
    <?php if (isset($args['message_error_msg'])): ?>
      <p class="error_text"><?php echo $args['message_error_msg']; ?></p>
    <?php endif; ?>
  </div>
  <button class="action_button form__button">
    Send message
  </button>
</form>