<?php if (isset($args['user_infos'])) : ?>
<ul class="user_info">
  <?php foreach($args['user_infos'] as $user_info): ?>
    <li><?php echo $user_info; ?></li>
  <?php endforeach; ?>
</ul>
<? endif; ?>

<?php if (isset($args['user_infos_error_msg'])): ?>
  <p class="error_text"><?php echo $args['user_infos_error_msg']; ?></p>
<?php endif; ?>

<form class="contact__form" method="POST">
  <div class="contact-form__input_container">
    <input class="contact-form__input_text" type="email" name="email" id="email" value="<?php echo $args['email'] ?? ''; ?>" placeholder="Email"/>
    <?php if (isset($args['email_error_msg'])): ?>
      <p><?php echo $args['email_error_msg']; ?></p>
    <?php endif; ?>
  </div>
  <button class="action_button form__button">
    Get info
  </button>
</form>