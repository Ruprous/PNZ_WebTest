$(function(){

	const opVideo = $('#opv').get(0);
	$('#Video').fadeIn(1000);

	opVideo.addEventListener('loadedmetadata', function() {
    const playTime = opVideo.duration * 1000 - 1000;

    // 確認用
    console.log('動画の時間（長さ）： ' + opVideo.duration);
    console.log('動画の表示時間： ' + playTime);

    setTimeout(function(){
      $('#Video').fadeOut(1000, function(){
        $('main').fadeIn(1000);
      });
    }, playTime);

  });
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW > 800){
		var headerH =0;
	}
	else{
		var headerH =70;
	}
	
	$(nav).on('click', function(){
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		if (winW < 890){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});
});
