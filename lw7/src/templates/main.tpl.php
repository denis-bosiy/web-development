<?php if (isset($args['is_success'])): ?>
  <p class="text text--success">Form is successfully saved!</p>
<?php endif; ?>

<form class="form" method="POST">
  <div class="form__input-container">
    <input class="form__input-text" type="text" name="name" id="name" value="<?php echo $args['name'] ?? ''; ?>" placeholder="Name"/>
    <?php if (isset($args['name_error_msg'])): ?>
      <p class="text text--error"><?php echo $args['name_error_msg']; ?></p>
    <?php endif; ?>
  </div>
  <div class="form__input-container">
    <input class="form__input-text" type="email" name="email" id="email" value="<?php echo $args['email'] ?? ''; ?>" placeholder="Email"/>
    <?php if (isset($args['email_error_msg'])): ?>
      <p class="text text--error"><?php echo $args['email_error_msg']; ?></p>
    <?php endif; ?>
  </div>
  <div class="form__input-container">
    <input class="form__input-text" type="text" name="subject" id="subject" value="<?php echo $args['subject'] ?? ''; ?>" placeholder="Subject"/>
    <?php if (isset($args['subject_error_msg'])): ?>
      <p class="text text--error"><?php echo $args['subject_error_msg']; ?></p>
    <?php endif; ?>
  </div>
  <div class="form__input-container">
    <textarea class="form__input-text form__textarea" placeholder="Message" name="message" id="message"><?php echo $args['message'] ?? ''; ?></textarea>
    <?php if (isset($args['message_error_msg'])): ?>
      <p class="text text--error"><?php echo $args['message_error_msg']; ?></p>
    <?php endif; ?>
  </div>
  <button class="action-button form__button">
    Send message
  </button>
</form>