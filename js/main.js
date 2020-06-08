$(function(){


$('.dashboard-item img').click(function(){	
	$(this).parent().parent().hide();			
	});

$('.close').click(function(){	
	$('.popup').hide();			
	});
$('.popup-button').click(function(){	
	$('.popup').css('display', 'flex');			
	});
$('.empty__sub-text span').click(function(){	
	$('.popup').css('display', 'flex');			
	});

$('.msg-close').click(function(){
	$('.msg').hide();
})

setTimeout(function(){
	document.getElementById('msg').style.display = 'none';
}, 15000);



});

//-----------start close popup---------
jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".popup"); 
    var divWrap = $(".popup-content");
    if (!divWrap.is(e.target) 
        && divWrap.has(e.target).length === 0) {
      div.hide();

    }
  });
});
//-----------end close popup---------