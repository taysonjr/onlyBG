(function(){

  var options = {
    minWidth: 800,
    minHeight: 600,
  };

  //要素のキャッシュ
  var $window = $(window),
  $contents = $('#contentContainer'),
  $background = $('#background'),
  $img = $background.find('img');

  //背景画像が画面中央に配置される
  function adjustImage(_obj){
    var ww = $window.width(),
    wh = $window.height(),
    iw = _obj.width(),
    ih = _obj.height(),
    scale = Math.max( ww/iw, wh/ih),
    sw = Math.floor( iw * scale),
    sh = Math.floor( ih * scale),
    moveX = Math.floor((ww-sw)/2),
    moveY = Math.floor((wh-sh)/2);

    _obj.css({
      width: sw,
      height: sh,
      left: moveX,
      top: moveY
    });
  }

  //ブラウザに合わせて画像枠をリサイズ
  function resize(){
    var ww = $window.width(),
    wh = $window.height(),
    _opw = options.minWidth,
    _oph = options.minHeight,
    _res = {
      w: _opw > ww ? _opw : ww,
      h: _oph > wh ? _oph : wh
    };

    $background.css({
      width: _res.w,
      height: _res.h
    });

    $contents.css({
      width: _res.w,
      height: _res.h
    });

    $background.find('img').each(function(){
      adjustImage($(this));
    });
  }
  $window.on('resize', resize);
  $window.on('load', function(){
    setTimeout( function(){
      $contents.css('background', 'none').fadeIn();
    }, 400);
    resize();
  });
}());
