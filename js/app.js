var giflink_display = false;

$(window).on('load', function() {
  loading();
  routing();
  $('body').addClass(getCookie('dark') == 1 ? 'dark' : 'light');
  $('#switch').data('current', getCookie('dark') == 1 ? 1 : 0);

  console.log('❤️ https://github.com/smartwf/smartwf.ir');
});

$(document).ready(function() {
  if (!$('#giflink').length)
    $('body').append('<div id="giflink"></div>');

  if (!$('#giflink div').length)
    $('#giflink').append('<div></div>');

  $('.soundlink').each(function() { $(this).addSoundlink(); });
  $('.giflink').each(function() { $(this).addGiflink(); });
});

$(document).on('mouseenter', '.soundlink', function(){
  const sound = document.getElementById($(this).data('sound'));
  sound.currentTime = $(this).data('start') ? $(this).data('start') : 0;
  sound.volume = $(this).data('volume') ? $(this).data('volume') : 1;
  sound.play();
});

$(document).on('mouseleave', '.soundlink', function(){
  const sound = document.getElementById($(this).data('sound'));
  sound.pause();
});

$(document).on('mouseenter', '.giflink', function(){
  $('#giflink').attr('style', 'display: block; background: url('+$(this).data('gif')+');');
  $('#giflink div').html($(this).html());
  giflink_display = true;
});

$(document).on('mouseleave', '.giflink', function(){
   $('#giflink').attr('style', '');
   $('#giflink div').html('');
   giflink_display = false;
});

$(document).on('click', '#switch', function() {
  let switchSound = document.getElementById('switch-sound');

  switchSound.currentTime = 0;
  switchSound.play();

  let isDark = $(this).data('current') ? 1 : 0;
  if (isDark) {
    $("#names .active").removeClass('active');
    $("#light").addClass('active');
    $("#toggle").removeClass('left').addClass('right');
    $("body").removeClass('dark').addClass('light');
    $(this).data('current', 0);
    setCookie('dark', 0, 9999);
  }
  else {
    $("#names .active").removeClass('active');
    $("#dark").addClass('active');
    $("#toggle").removeClass('right').addClass('left');
    $("body").removeClass('light').addClass('dark');
    $(this).data('current', 1);
    setCookie('dark', 1, 9999);
  }
});

$(document).on('click', '.locallink', function() {
  if (!$(this).hasClass('lactive'))
    changeUrl($(this).attr('href'));

  return false;
});

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function loading() {
  $('body').addClass('loading');
  $('loading').css('opacity', '1');
}

function loaded() {
  setTimeout(() => {
    $('loading').css('opacity', '0')
    setTimeout(() => {$('body').removeClass('loading');}, 1000);
  }, 500);
}

(function($){
  $.fn.addSoundlink = function() {
    if (!$('#'+$(this).data('soundurl').split('/')[1].split('.')[0]).length)
      $('body').append('<audio id="'+$(this).data('soundurl').split('/')[1].split('.')[0]+'" autostart="0" '+($(this).data('loop') ? 'loop' : '')+'><source src="'+$(this).data('soundurl')+'" type="audio/mpeg"></audio>');
    $(this).data('loop') ? $(this).removeAttr('data-loop') : null;
    $(this).data('sound', $(this).data('soundurl').split('/')[1].split('.')[0]);
    $(this).data('soundurl') ? $(this).removeAttr('data-soundurl') : null;
    $(this).data('start') ? $(this).removeAttr('data-start') : null;
    $(this).data('volume') ? $(this).removeAttr('data-volume') : null;
  };

  $.fn.addGiflink = function() {
    $(this).data('gif') ? $(this).removeAttr('data-gif') : null;
  };
})(jQuery);
