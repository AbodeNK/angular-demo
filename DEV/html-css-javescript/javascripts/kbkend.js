  $ (document).ready(function(e){
  
  var grid = GridStack.init({
      alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator
        .userAgent),
      resizable: {
        handles: 'e, se, s, sw, w,nw,ne,n'
      },
	 
		float:true
    });
  	    grid.movable('.grid-stack-item', false);
		grid.resizable('.grid-stack-item', false);
		grid.verticalMargin('1px');
		grid.cellHeight('2px');
		$('div').attr('contenteditable','false');
		
		var count = document.getElementById("bodyc").childElementCount;
		var img_gal = $('[id^="img_gal"]').attr('id') ;
	
		
	
		$('[id^="div2_img_gal"]').mouseover(function(){
		 
		 var img_gales = $(this).attr('id');
		 var next = $("#"+img_gales+" a:last").attr('id') ;
		var prev = $("#"+img_gales+" a:first").attr('id');
		$('#'+prev).mouseover(function(){
			 $('#'+prev).css({
				 'background':'rgba(0, 0, 0, 0.8)',
				 });
		 });
		$('#'+prev).mouseout(function(){
			 $('#'+prev).css({
				 'background':'transparent',
				 });
		});
		$('#'+next).mouseover(function(){
			 $('#'+next).css({
				 'background':'rgba(0, 0, 0, 0.8)',
				 });
		});
		$('#'+next).mouseout(function(){
			 $('#'+next).css({
				 'background':'transparent',
				 });
		});
		 
		 
			 $('#'+prev).click(function(){
				 
			 
			$("#"+img_gales+" li:last").prependTo("#"+img_gales).css({'display':'block',}).next().css({'display':'none',});
		
		});
		
		$('#'+next).click(function(){
			
			 $("#"+img_gales+" li:first").css({'display':'none',}).next().css({'display':'block',}).end().appendTo("#"+img_gales);
			
		});	

	 });


});



				


