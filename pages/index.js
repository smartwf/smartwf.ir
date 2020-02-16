function page_index(){
  $('page').addClass('page-index');
  $('title').html('وبگاه شخصی محمدرضا هوشمند');
  let content = '  <main>\n' +
      '    <section>\n' +
      '    <img id="spaceman" src="img/spaceman.png" class="soundlink" data-soundurl="sounds/apollo.mp3" data-volume=".2">\n' +
      '    <h2>سلام من محمدرضا هوشمند هستم، یه نیمچه <a class="giflink soundlink" data-gif="gif/typing.gif" data-soundurl="sounds/typing.mp3" data-loop="1">برنامه‌نویس</a></h2>\n' +
      '\n' +
      '    <article>\n' +
      '      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.\n' +
      '    </article>\n' +
      '\n' +
      '    <div class="links">\n' +
      '      <a href="#" target="_blank">دانلود رزومه من</a>\n' +
      '      <a href="#" target="_blank">آخرین کارها</a>\n' +
      '      <a href="#" target="_blank">یه راز بهم بگو</a>\n' +
      '      <a href="#" target="_blank">ارسال پیام</a>\n' +
      '    </div>\n' +
      '  </section>\n' +
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
  setTimeout(function () {$('#index-link').addClass('lactive');}, 500);
}
