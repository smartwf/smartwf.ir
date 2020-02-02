var giflink_display = false;

$(window).on('load', function() {
  $('body').addClass($('#switch').data('current') ? 'dark' : 'light');
  $('#switch').data('current', $('#switch').data('current') ? 1 : 0);
});

$(document).ready(function() {
  if (!$('#giflink').length)
    $('body').append('<div id="giflink"></div>');

  if (!$('#giflink div').length)
    $('#giflink').append('<div></div>');

  $('.soundlink').each(function() {
    if (!$('#'+$(this).data('soundurl').split('/')[1].split('.')[0]).length)
      $('body').append('<audio id="'+$(this).data('soundurl').split('/')[1].split('.')[0]+'" autostart="0" '+($(this).data('loop') ? 'loop' : '')+'><source src="'+$(this).data('soundurl')+'" type="audio/mpeg"></audio>');
    $(this).data('loop') ? $(this).removeAttr('data-loop') : null;
    $(this).data('sound', $(this).data('soundurl').split('/')[1].split('.')[0]);
    $(this).data('soundurl') ? $(this).removeAttr('data-soundurl') : null;
    $(this).data('start') ? $(this).removeAttr('data-start') : null;
    $(this).data('volume') ? $(this).removeAttr('data-volume') : null;
  });

  $('.giflink').each(function() { $(this).data('gif') ? $(this).removeAttr('data-gif') : null; });
});

$('.soundlink').on('mouseenter', function(){
  const sound = document.getElementById($(this).data('sound'));
  sound.currentTime = $(this).data('start') ? $(this).data('start') : 0;
  sound.volume = $(this).data('volume') ? $(this).data('volume') : 1;
  sound.play();
});

$('.soundlink').on('mouseleave', function(){
  const sound = document.getElementById($(this).data('sound'));
  sound.pause();
});

$('.giflink').on('mouseenter', function(){
  $('#giflink').attr('style', 'display: block; background: url('+$(this).data('gif')+');');
  $('#giflink div').html($(this).html());
  giflink_display = true;
});

$('.giflink').on('mouseleave', function(){
   $('#giflink').attr('style', '');
   $('#giflink div').html('');
   giflink_display = false;
});

$('#switch').on('click', function() {
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
    setCookie('dark', 0, 99);
  }
  else {
    $("#names .active").removeClass('active');
    $("#dark").addClass('active');
    $("#toggle").removeClass('right').addClass('left');
    $("body").removeClass('light').addClass('dark');
    $(this).data('current', 1);
    setCookie('dark', 1, 99);
  }
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
