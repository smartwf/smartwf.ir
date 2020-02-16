function page_404() {
  let content = '<section><img class="soundlink" data-soundurl="sounds/breathing.mp3" data-loop="1" data-volume=".3" src="img/astronaut.png"></section>';
  $('page').html(content);
  $('page').addClass('page-404');
  $('title').html('404 - وبگاه شخصی محمدرضا هوشمند');
}
