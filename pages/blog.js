function page_blog() {
  $('page').addClass('page-blog');
  $('title').html('بلاگ - وبگاه شخصی محمدرضا هوشمند');
  let content = '  <main>\n'+
      '  </main>\n' +
      '\n' +
      '  <footer>\n' +
      '    <div class="links">\n' +
      '      <a href="https://twitter.com/smart_wf" target="_blank">توییتر</a>\n' +
      '      <a href="https://github.com/smartwf" target="_blank">گیت‌هاب</a>\n' +
      '      <a href="tg://resolve/?domain=smartwf" target="_blank">تلگرام</a>\n' +
      '      <a href="https://discordapp.com/users/537323904243466280" target="_blank">دیسکورد</a>\n' +
      '      <a href="mailto:me@smartwf.ir" target="_blank">ایمیل</a>\n' +
      '    </div>\n' +
      '    <div id="designed-by">\n' +
      '        طراحی شده با <i class="soundlink" id="heart" data-soundurl="sounds/heartbeat.mp3" data-loop="1"></i> توسط <span>خودم</span>\n' +
      '    </div>\n' +
      '  </footer>';

  $('page').html(content);
  $('page main').append('<article id="nothing-to-show">هنوز هیچ پستی ننوشتیم، یه چند روز دیگه دوباره سر بزن ببین چه خبره!</article>');

  $.ajax({
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https://virgool.io/feed/@smartwf',
    type: 'GET',
    async: false,
    success: function( response ){
      if (response.items.length)
        $('#nothing-to-show').remove();

      response.items.forEach(e => {
        $('page main').append('<article><content><a target="_blank" href="'+e.link+'"><title>'+e.title+'</title><description>'+e.description+'</description></a><time>'+(new Date(e.pubDate).toLocaleDateString('fa-IR'))+'</time><a class="read-more" target="_blank" href="'+e.link+'"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve"><path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111	C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 	c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>بیشتر بخوانید</a></content><a target="_blank" href="'+e.link+'"><figure style="background: url('+(e.thumbnail ? e.thumbnail : 'img/no-image.svg')+') center center;"></figure></a></article>');
      });

    }
  });

  setTimeout(function () {$('#blog-link').addClass('lactive');}, 500);
}
