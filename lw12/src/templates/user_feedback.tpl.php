<?php if (isset($args['user_infos'])) : ?>
<ul class="user-info">
  <?php foreach($args['user_infos'] as $user_info): ?>
    <li><?php echo $user_info; ?></li>
  <?php endforeach; ?>
</ul>
<?php endif; ?>

<?php if (isset($args['user_infos_error_msg'])): ?>
  <p class="text text--error"><?php echo $args['user_infos_error_msg']; ?></p>
<?php endif; ?>

<form class="form" method="POST">
  <div class="form__input-container">
    <input class="form__input-text" type="email" name="email" id="email" value="<?php echo $args['email'] ?? ''; ?>" placeholder="Email"/>
    <?php if (isset($args['email_error_msg'])): ?>
      <p><?php echo $args['email_error_msg']; ?></p>
    <?php endif; ?>
  </div>
  <button class="action-button form__button">
    Get info
  </button>
</form>