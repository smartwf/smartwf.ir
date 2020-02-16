const directory = ''

var uri;
var uri_array;

const routes = {
  "/" : "index",
  "secret" : "secret",
  "works" : "works",
  "message" : "message",
  "blog" : "blog",
  "about" : "about",
  "default" : "404"
}

const redirects = {
  "msg" : "message"
};

function routing() {
  getUri();

  if (uri.toLowerCase() in redirects)
    return localRedirect(redirects[uri.toLowerCase()]);

  if (uri.toLowerCase() in routes) {
    $('page').attr('class', '');
    $.getScript('pages/'+routes[uri.toLowerCase()]+'.js', function() {
            window['page_' + routes[uri.toLowerCase()]]();
            $(".lactive").removeClass('lactive');
            $('.soundlink').each(function() { $(this).addSoundlink(); });
            $('.giflink').each(function() { $(this).addGiflink(); });

            if (!$('#switch').data('current')) {
              $("#names .active").removeClass('active');
              $("#light").addClass('active');
              $("#toggle").removeClass('left').addClass('right');
            }
            else {
              $("#names .active").removeClass('active');
              $("#dark").addClass('active');
              $("#toggle").removeClass('right').addClass('left');
            }
    });
  }
  else
    $.getScript('pages/'+routes['default']+'.js', function() {window['page_' + routes['default']](); $('.soundlink').each(function() { $(this).addSoundlink(); });});

    loaded();
}

function getUri() {
  uri = window.location.pathname;

  if (directory && uri.indexOf(directory)) uri = uri.replace(directory, '');
  if (uri[0] == '/') uri = uri.substr(1);
  if (uri[uri.length-1] == '/') uri = uri.substr(0, uri.length-1);
  if (uri == '') uri = '/';

  uri_array = (uri == '/') ? ["/"] : uri.split('/');
}

function localRedirect(url) {
  loading();
  window.history.replaceState('smartwf', '', '/'+directory+url);
  routing();
}

function changeUrl(url) {
  loading();
  window.history.pushState('smartwf', '', '/'+directory+(url == '/' ? '' : url));
  routing();
}

$(window).on('popstate', function() {
  loading();
  routing();
});
