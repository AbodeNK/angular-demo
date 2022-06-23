$ (document).ready(function(e){
	
	 var grid = GridStack.init({
      alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator
        .userAgent),
      resizable: {
        handles: 'e, se, s, sw, w,nw,ne,n'
      },
	 
		float:true
	  
    });
		grid.verticalMargin('1px');
		grid.cellHeight('2px');
		//grid.float(true);
	

    $('#closEditor').click(function(){
		
		$('#textEditor').css({
			'display':'none',
			
		});
		
		
	});
	$('#closEdit').click(function(){
		
		$('#Edit').css({
			'display':'none',
			
		});
		
		
	});
	
	 $('#settingof').click(function(){
		
		$('#setting').hide();
		$('#settingof').css({
			'display':'none',
		});
		
		$('#settingon').css({
			'display':'block',
		});
		
		$('#container').css({
			'left':'0.5%',
			'width':'100%',
			'top':'120px',
		});
		
	});
	
	$('#settingon').click(function(){
		
		$('#setting').fadeIn(1000);
		$('#settingon').css({
			'display':'none',
		});
		
		$('#settingof').css({
			'display':'block',
		});
		
		$('#container').css({
			'left':'21%',
			'width':'78%',
			'top':'100px',
		});

    });
	
	$('#div_z-index').change(function(){
			
		var div_zindex = $('#div_z-index').val()
	
		$('#val_div-z').text(div_zindex);
	
		});
		
			$('#file_z-index').change(function(){
			
		var file_zindex = $('#file_z-index').val()
	
		$('#val_file-z').text(file_zindex);
	
		});
		
		
			$('#border_sizecb').change(function(){
			
		var border_sizecb = $('#border_sizecb').val()
	
		$('#val_border_sizecb').text(border_sizecb+'px');
	
		});
		
		
			$('#background_sizecb').change(function(){
			
		var background_sizecb = $('#background_sizecb').val()
	
		$('#val_background_sizecb').text(background_sizecb+'%');
	
		});
		
				$('#border_sizecd').change(function(){
			
		var border_sizecd = $('#border_sizecd').val()
	
		$('#val_border_sizecd').text(border_sizecd+'px');
	
		});
		
		
			$('#background_sizecd').change(function(){
			
		var background_sizecd = $('#background_sizecd').val()
	
		$('#val_background_sizecd').text(background_sizecd+'%');
	
		});

	    $('#div_create').click(function (){
			
	//	var count =  Math.floor((1 + Math.random()) * 0x10000)

		var count = document.getElementById("bodyc").childElementCount;
		var divID ="divID"+count;
		var  divIframID ="divIframID"+count;
		var grid = GridStack.init();
		$('#bodyc').append('<div id="'+divID+'" class="grid-stack-item"  data-gs-x="" data-gs-y="" data-gs-width="" data-gs-height="" data-gs-auto-position="false" ><div class="grid-stack-item-content" id="'+divIframID+'"  >Text</div></div>');
		grid.makeWidget('#'+divID);
		var div_z = $('#div_z-index').val();
		

		
		

		
		
			$('#'+divID).css({
			
			'width':'50px',
			'height':'50px',
			'padding':'0px',
			'margin':'0px',
			'min-height':'50px',
			'z-index':'0',
		}); 
		
		
	
		
		 
		
		$('#'+divIframID).css({
			'width':'100%',
			'height':'100%',
			'padding':'0px',
			'margin':'0px',
			'top':'0px',
			'left':'0px',
			'border-style':'solid',		
			'border-width':'2px',		
			'border-color':'rgb(51, 51, 204)',
			'text-align':'center',
			//'word-wrap':'break-word',
		}); 
		
		
		
	
		
		$('#'+divID).mousedown(function (){
			grid.movable( $('#'+divID), true);
			
			
			});
			$('#'+divID).mouseout(function (){
			grid.movable( $('#'+divID), true);

			
			});
			
			$('#'+divID).mouseup(function (){
			
			grid.movable( $('#'+divID), false);
			
			});	

			
		$('#'+divID).dblclick(function (){	
		$('#'+divIframID).attr('contenteditable','false');
		$('#textEditor').css({
			'display':'none',
			
		});
		});
			
			
		


		
			$('#'+divID).click(function(){
	
		
	
			$('#'+divIframID).attr('contenteditable','true');
	
			var divp=$("#"+divID).offset();
			var Editorh=$('#textEditor').height();
			var Editort= divp.top-Editorh-1;
		
			$('#textEditor').css({
			'display':'block',
			'left':divp.left,
			'top':Editort,
			
			
		});
		
			$( function() {
    $( '#textEditor').draggable({
      cursor:'move',
	  snap: '.gridlines',
   /* stop: function () {
        var l = ( 100 * parseFloat($(this).position().left / parseFloat($(this).parent().width())) ) + "%" ;
        var t = ( 100 * parseFloat($(this).position().top / parseFloat($(this).parent().height())) ) + "%" ;
        $(this).css("left", l);
        $(this).css("top", t);
    }*/
	  
	  
    });
  } );

	 
	
	  
	
	
		
		
		
	});
			
			
			
		

	
	$('#bodyc').click(function (){
		

		
	borderno()
			});
	
	function borderno(){
	
	$('#'+divIframID).css({
			'border':'none',	
		});
	};		
			
			
		$('#'+divID).contextmenu(function(){
			divIDEdit = $(this).attr('id');
				
			$('#Edit').css({
			'display':'block',
			
		});
		
			var divp=$("#"+divID).offset();
			var Editorw=$("#"+divID).width();
			var Editorl= divp.left+(Editorw/2);
			var Editorh=$("#"+divID).height();
			var Editort= divp.top+(Editorh/2);
		
			$('#Edit').css({
			'display':'block',
			'left':Editorl,
			'top':Editort,
		});
		

		 $('#delete').click(function(){
	
		$('#'+divIDEdit).remove();
		
	
		});
		$('#div_zindex').change(function(){
			
		var div_zindex = $('#div_zindex').val()
	
		$('#'+divIDEdit).css({
		'z-Index':''+div_zindex+'',
				
		});
		
		$('#val_divz').text(div_zindex);
	
		});
		
		
		
		$('#background-image').change(function(){
		const file2 = document.querySelector('input[id="background-image"]').files[0];
		const reader = new FileReader();
		
		reader.addEventListener("load", function () {
		// convert image file to base64 string
		$('#'+divIDEdit).css({
		'background-image':'url('+reader.result+')',
			
			
		});
		}, false);

		if (file2) {
		reader.readAsDataURL(file2);
		}
		
		

		});
		
		$('#background_color').change(function(){
			
		var background_color = $('#background_color').val()
	
		$('#'+divIDEdit).css({
		'background-color':''+background_color+'',
				
		});
		
	
		});
		$('#background_repeat').change(function(){
			
		var background_repeat = $('#background_repeat').val()
	
		$('#'+divIDEdit).css({
		'background-repeat':''+background_repeat+'',
				
		});
		
	
		});
		$('#background_size').change(function(){
			
		var background_size = $('#background_size').val()
	
		$('#'+divIDEdit).css({
		'background-size':''+background_size+'%',
				
		});
		$('#val_div-back-size').text(background_size+'%');
	
		});
		
		$('#delete_background-image').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'background-image':'none',
				
		});
		
	
		});
		
		$('#delete_background-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'background-color':'transparent',
				
		});
		
	
		});
			$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()	
		$('#val_divborder-size').text(border_size+'px');
		
		});
		
			$('#border_position').change(function(){
				
				var border_position = $('#border_position').val();
				
			if(border_position == 'border' ){
				
				$('#border_style').change(function(){
			
		var border_style = $('#border_style').val()
	
		$('#'+divIDEdit).css({
		'border-style':''+border_style+'',
				
		});
			/*$('#'+divIDEdit).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});**/
	
		});
		
		$('#border_color').change(function(){
			
		var border_color = $('#border_color').val()
	
		$('#'+divIDEdit).css({
		'border-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()
	
		$('#'+divIDEdit).css({
		'border-width':''+border_size+'px',
				
		});
		
		
		
		});
		
		
		
		$('#delete_bordet-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'border-color':'transient',
				
		});
		
	
		});
		
	
		
				
			}
			
			if(border_position == 'bottom'){
				
				
			$('#border_style').change(function(){
			
		var border_style = $('#border_style').val()
	
		$('#'+divIDEdit).css({
		'border-bottom-style':''+border_style+'',
				
		});
		$('#'+divIDEdit).css({
		'border-top-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_color').change(function(){
			
		var border_color = $('#border_color').val()
	
		$('#'+divIDEdit).css({
		'border-bottom-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()
	
		$('#'+divIDEdit).css({
		'border-bottom-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'border-bottom-color':'transient',
				
		});
		
	
		});	
		
		
				
			}
			if(border_position == 'left'){
				
				
				$('#border_style').change(function(){
			
		var border_style = $('#border_style').val()
	
		$('#'+divIDEdit).css({
		'border-left-style':''+border_style+'',
				
		});
		$('#'+divIDEdit).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_color').change(function(){
			
		var border_color = $('#border_color').val()
	
		$('#'+divIDEdit).css({
		'border-left-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()
	
		$('#'+divIDEdit).css({
		'border-left-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'border-left-color':'transient',
				
		});
		
	
		});
		
		
				
			}
			if(border_position == 'top'){
				$('#border_style').change(function(){
			
		var border_style = $('#border_style').val()
	
		$('#'+divIDEdit).css({
		'border-top-style':''+border_style+'',
				
		});
		$('#'+divIDEdit).css({
		'border-bottom-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_color').change(function(){
			
		var border_color = $('#border_color').val()
	
		$('#'+divIDEdit).css({
		'border-top-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()
	
		$('#'+divIDEdit).css({
		'border-top-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'border-top-color':'transient',
				
		});
		
	
		});
		
			
			}
			if(border_position == 'right'){
				$('#border_style').change(function(){
			
		var border_style = $('#border_style').val()
	
		$('#'+divIDEdit).css({
		'border-right-style':''+border_style+'',
				
		});
		$('#'+divIDEdit).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-left-style':'none',
		
		});	
	
		});
		
		$('#border_color').change(function(){
			
		var border_color = $('#border_color').val()
	
		$('#'+divIDEdit).css({
		'border-right-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()
	
		$('#'+divIDEdit).css({
		'border-right-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'border-right-color':'transient',
				
		});
		
	
		});
				
			}
				
				
				
				
			});
		
		
		
		
		
		
		
		
		
	});
	

/*	 $('.grid-stack').on('change', function () {
	var divy = $('#'+divID).attr('data-gs-y');
	var divt = divy*3;
	$('#'+divID).attr('data-gs-y',divy );
	
    });
	
	*/
	
	});
	
$('#line').click(function(){
	
		var count = document.getElementById("bodyc").childElementCount;
		var line ="line"+count;
		var div_line ="div_line"+count;
		var lastchild = $('#bodyc').children().last().attr('id');
		
		var grid = GridStack.init();
		$('#bodyc').append('<div id="'+div_line+'"  data-gs-x="0" data-gs-y="20"    data-gs-auto-position="false"><hr class="grid-stack-item-content" id="'+line+'"></hr></div>');
		grid.makeWidget('#'+div_line);
		
		
		$('#'+div_line).css({
			'height':'4px',
			'width':'100%',
			
		});
		$('#'+line).css({
			'height':'100%',
			'width':'100%',
			'left':'0px',
			'top':'0px',
			'background-color':'black',
			'border':'0px',
			
		});
		
		
		 $('#'+line).contextmenu(function(){
			divIDEdit = $(this).attr('id');
				
			$('#Edit').css({
			'display':'block',
			
		});
		
			var divp=$("#"+line).offset();
			var Editorw=$("#"+line).width();
			var Editorl= divp.left+(Editorw/2);
			var Editorh=$("#"+line).height();
			var Editort= divp.top+(Editorh/2);
		
			$('#Edit').css({
			'display':'block',
			'left':Editorl,
			'top':Editort,
		});
		

		 $('#delete').click(function(){
	
		$('#'+divIDEdit).remove();
		
	
		});
		$('#div_zindex').change(function(){
			
		var div_zindex = $('#div_zindex').val()
	
		$('#'+divIDEdit).css({
		'z-Index':''+div_zindex+'',
				
		});
		
		$('#val_divz').text(div_zindex);
	
		});
		
		
		
		$('#background-image').change(function(){
		const file2 = document.querySelector('input[id="background-image"]').files[0];
		const reader = new FileReader();
		
		reader.addEventListener("load", function () {
		// convert image file to base64 string
		$('#'+divIDEdit).css({
		'background-image':'url('+reader.result+')',
			
			
		});
		}, false);

		if (file2) {
		reader.readAsDataURL(file2);
		}
		
		

		});
		
		$('#background_color').change(function(){
			
		var background_color = $('#background_color').val()
	
		$('#'+divIDEdit).css({
		'background-color':''+background_color+'',
				
		});
		
	
		});
		$('#background_repeat').change(function(){
			
		var background_repeat = $('#background_repeat').val()
	
		$('#'+divIDEdit).css({
		'background-repeat':''+background_repeat+'',
				
		});
		
	
		});
		$('#background_size').change(function(){
			
		var background_size = $('#background_size').val()
	
		$('#'+divIDEdit).css({
		'background-size':''+background_size+'%',
				
		});
		$('#val_div-back-size').text(background_size+'%');
	
		});
		
		$('#delete_background-image').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'background-image':'none',
				
		});
		
	
		});
		
		$('#delete_background-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'background-color':'transparent',
				
		});
		
	
		});
			$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()	
		$('#val_divborder-size').text(border_size+'px');
		
		});
		
			$('#border_position').change(function(){
				
				var border_position = $('#border_position').val();
				
			if(border_position == 'border' ){
				
				$('#border_style').change(function(){
			
		var border_style = $('#border_style').val()
	
		$('#'+divIDEdit).css({
		'border-style':''+border_style+'',
				
		});
			/*$('#'+divIDEdit).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});**/
	
		});
		
		$('#border_color').change(function(){
			
		var border_color = $('#border_color').val()
	
		$('#'+divIDEdit).css({
		'border-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()
	
		$('#'+divIDEdit).css({
		'border-width':''+border_size+'px',
				
		});
		
		
		
		});
		
		
		
		$('#delete_bordet-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'border-color':'transient',
				
		});
		
	
		});
		
	
		
				
			}
			
			if(border_position == 'bottom'){
				
				
			$('#border_style').change(function(){
			
		var border_style = $('#border_style').val()
	
		$('#'+divIDEdit).css({
		'border-bottom-style':''+border_style+'',
				
		});
		$('#'+divIDEdit).css({
		'border-top-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_color').change(function(){
			
		var border_color = $('#border_color').val()
	
		$('#'+divIDEdit).css({
		'border-bottom-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()
	
		$('#'+divIDEdit).css({
		'border-bottom-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'border-bottom-color':'transient',
				
		});
		
	
		});	
		
		
				
			}
			if(border_position == 'left'){
				
				
				$('#border_style').change(function(){
			
		var border_style = $('#border_style').val()
	
		$('#'+divIDEdit).css({
		'border-left-style':''+border_style+'',
				
		});
		$('#'+divIDEdit).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_color').change(function(){
			
		var border_color = $('#border_color').val()
	
		$('#'+divIDEdit).css({
		'border-left-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()
	
		$('#'+divIDEdit).css({
		'border-left-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'border-left-color':'transient',
				
		});
		
	
		});
		
		
				
			}
			if(border_position == 'top'){
				$('#border_style').change(function(){
			
		var border_style = $('#border_style').val()
	
		$('#'+divIDEdit).css({
		'border-top-style':''+border_style+'',
				
		});
		$('#'+divIDEdit).css({
		'border-bottom-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_color').change(function(){
			
		var border_color = $('#border_color').val()
	
		$('#'+divIDEdit).css({
		'border-top-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()
	
		$('#'+divIDEdit).css({
		'border-top-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'border-top-color':'transient',
				
		});
		
	
		});
		
			
			}
			if(border_position == 'right'){
				$('#border_style').change(function(){
			
		var border_style = $('#border_style').val()
	
		$('#'+divIDEdit).css({
		'border-right-style':''+border_style+'',
				
		});
		$('#'+divIDEdit).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-left-style':'none',
		
		});	
	
		});
		
		$('#border_color').change(function(){
			
		var border_color = $('#border_color').val()
	
		$('#'+divIDEdit).css({
		'border-right-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_size').change(function(){
			
		var border_size = $('#border_size').val()
	
		$('#'+divIDEdit).css({
		'border-right-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-color').click(function(){
			
		
	
		$('#'+divIDEdit).css({
		'border-right-color':'transient',
				
		});
		
	
		});
				
			}
				
				
				
				
			});
		
		
		
		
		
		
		
		
		
	});

	
	
});
 
	 
	 function img_create(){
		//var count =  Math.floor((1 + Math.random()) * 0x10000)
		var count = document.getElementById("bodyc").childElementCount;
		var div_imgID = "div_img"+ count;
		imgID = "img"+ count;
		var grid = GridStack.init();
		$('#bodyc').append('<figure id="'+div_imgID+'"  data-gs-x="0" data-gs-y="0"   data-gs-auto-position="false"><img src="" alt="" id="'+imgID+'"  class="grid-stack-item-content" ></figure>');
		grid.makeWidget('#'+div_imgID);
		
		
		var file_z = $('#file_z-index').val();
		
	 
	 $('#'+div_imgID).css({
			'background':'transient',
			'position':'absolute',
			'width':'200px',
			'height':'180px',
			'min-height':'80px',
			'z-Index':file_z,
			'padding':'0px',
			'margin':'0px',
					
		});				
		$('#'+imgID).css({
			
			'position':'absolute',
			'width':'100%',
			'height':'100%',
			'padding':'0px',
			'margin':'0px',
			'top':'0px',
			'left':'0px',
			'display': 'block',
			 'object-fit':'scale-down',
			
			});
			

  

	return imgID;
};

function audio_create(){
		//var count =  Math.floor((1 + Math.random()) * 0x10000)
		var count = document.getElementById("bodyc").childElementCount;
		var div_AudioId = "div_audio"+ count;
		var AudioID = "audio"+ count;
		var grid = GridStack.init();
		$('#bodyc').append('<div id="'+div_AudioId+'"  data-gs-x="0" data-gs-y="0"   data-gs-auto-position="false"><audio controls src="" type="audio" id="'+AudioID+'" class="grid-stack-item-content"></audio></div>');
		grid.makeWidget('#'+div_AudioId);
		
	 
	 var file_z = $('#file_z-index').val();
	 $('#'+div_AudioId).css({
			'background':'none',
			'width':'200px',
			'height':'90px',
			'z-Index':file_z,
			'min-height':'70px',
			'max-width':'400px',
			'min-width':'200',
			'max-height':'120px',
			});
			
			
			
		$('#'+AudioID).css({
			
			
			'width':'100%',
			'height':'90%',
			'top':'0px',
			'left':'0px',
			'padding':'10px',
			'margin':'0px',
			});
	 
	 
	 
	 
	 
	 

	return AudioID;
};

function video_create(){
		var count = document.getElementById("bodyc").childElementCount;
		var div_videoID = "div_video"+ count;
		var videoID = "video"+ count;
		var grid = GridStack.init();
		$('#bodyc').append('<div id="'+div_videoID+'"  data-gs-x="0" data-gs-y="0"   data-gs-auto-position="false"><video controls src="" type="audio" id="'+videoID+'" class="grid-stack-item-content"></video></div>');
		grid.makeWidget('#'+div_videoID);
	
	
		var file_z = $('#file_z-index').val();
	 
	 $('#'+div_videoID).css({
			'background':'none',
			'position':'absolute',
			'width':'250px',
			'height':'180px',
			'z-Index':file_z,
			'min-height':'90px',
			'min-width':'200',
			
			});

		
	
			
		$('#'+videoID).css({
			
			'position':'absolute',
			'width':'100%',
			'height':'100%',
			'top':'0px',
			'left':'0px',
			'padding':'0px',
			'margin':'0px',
			'display': 'block',
			//'object-fit':'fill',
			
			
			});
	 
	 
	 
	 
	 
	 

	return videoID;
};

		
 $('#fileType').change(function() {
		 
		var filetyp = $('#fileType').val();
 
  if(filetyp == 'imgfile'){
	  $('#File_uplod').css({
		  'display':'block'
	  });
  }
  if(filetyp == 'videofile'){
	     $('#File_uplod').css({
		  'display':'block'
	  });
  }
  if(filetyp == 'audiofile'){
	    $('#File_uplod').css({
		  'display':'block'
	  });
  }
   if(filetyp == ''){
	  alert('pless choes file type');
	  	    $('#File_uplod').css({
		  'display':'none'
	  });
   }
}); 
		$('#File_uplod').change(function() { 

	var filetyp = $('#fileType').val()
  const file = document.querySelector('input[id="File_uplod"]').files[0];
  if(filetyp == 'imgfile'){
	  var fileID =img_create();
	
  }
  if(filetyp == 'videofile'){
	   var fileID = video_create();
	 
  }
  if(filetyp == 'audiofile'){
	   var fileID = audio_create();
  }
	
  const preview = document.querySelector("[id=" + fileID + "]")
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
  
  
  
  
		    $('#File_uplod').css({
		  'display':'none'
			});
  
  
		
		$('#'+fileID).contextmenu(function() {
			$('#'+fileID).css({
			'border-style':'solid',		
			'border-width':'2px',		
			'border-color':'rgb(51, 51, 204)',	
		});
			});
			 $('#bodyc').mousemove(function(){
			$('#'+fileID).css({
			'border':'none',	
		});
		});

  
  	});


function video_backround(){
		var videoID = "videobackround";
		$('#container').append('<video autoplay muted loop src="" type="video" id="'+videoID+'"></video>');	
		
		$('#'+videoID).css({
			
			'position':'fixed',
			'width':'100%',
			'height':'100%',
			'max-height':'1200px',
			'float':'left',
			'padding':'0px',
			'margin':'0px',
			'display': 'block',
			'object-fit':'cover',
			'z-index':'-1',
			'pointer-events':'none',
			
			});
			$('#headc').css({
			
			'background':'transparent',
	
			
			});
			$('#bodyc').css({
			
			'background':'transparent',
			
			});
	 
	 
	 
	 
	 
	 

	return videoID;
};
$('#background_video').change(function() { 

	const file = document.querySelector('input[id="background_video"]').files[0];
   var fileid = video_backround();
	
  const preview = document.querySelector("[id=" + fileid + "]")
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
  
  

  
  	});

	$('#delete_background_video').click(function(){
			
				var bkvideo = video_backround();
			
				$('#'+bkvideo).remove();
	
		
		
	
		});
	

	

$('#img_gallery').click(function(){
		var count = document.getElementById("bodyc").childElementCount;
		var img_gal = "div2_img_gal"+ count;
		var div_img_gal = "div1_img_gal"+ count;
		var ul_img_gal = "ul_img_gal"+ count;
		var next = "next"+ count;
		var prev ="prev"+ count;
		var grid = GridStack.init();
		$('#bodyc').append('<div id="'+div_img_gal+'"  data-gs-x="0" data-gs-y="0"   data-gs-auto-position="false"><div id="'+img_gal+'" class="grid-stack-item-content" ><ul id="'+ul_img_gal +'"></ul><a id="'+prev+'" >&#10094;</a><a id="'+next+'" >&#10095;</a></div></div>');
		grid.makeWidget('#'+div_img_gal);
		
		
		
		
	 
	 $('#'+div_img_gal).css({
			'background':'black',
			'position':'absolute',
			'width':'50%',
			'height':'400px',
			'min-height':'200px',
			'padding':'0px',
			'margin':'0px',
			'border':'solid',
			
					
		});
     $('#'+img_gal).css({
			'width':'100%',
			'height':'100%',
			'padding':'0px',
			'margin':'0px',
			'top':'0px',
			'left':'0px',
		});	
		 $('#'+ul_img_gal).css({
			'width':'100%',
			'height':'100%',
			'padding':'0px',
			'margin':'0px',
			'top':'0px',
			'left':'0px',
			'overflow':'hidden',
		});	
		   $('#'+next).css({
			'cursor':'pointer',
			'position':'absolute',
			'top':'40%',
			'right':'0',
			'width':'auto',
			'padding':'16px',
			'margin-top':'-50px',
			'color':'white',
			'font-weight':'bold',
			'font-size':'20px',
			'border-radius': '3px 0 0 3px',
			'user-select':'none',
			'-webkit-user-select': 'none',
			'z-index':'1',
		});	
			   $('#'+prev).css({
			'cursor':'pointer',
			'position':'absolute',
			'top':'40%',
			'width':'auto',
			'padding':'16px',
			'margin-top':'-50px',
			'color':'white',
			'font-weight':'bold',
			'font-size':'20px',
			'border-radius': '0 3px 3px 0',
			'user-select':'none',
			'-webkit-user-select': 'none',
			'z-index':'1',
		});	
		
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
		


		
	$('#'+img_gal).contextmenu(function(){
		 img_gale = $(this).attr('id');
		// imgs_conten = $("#"+img_gale+" img").clone();
		$('#img_gal_edit').css({'display':'block',});
	
	$('#gal_edit_clos').click(function(){
		
	$('#img_gal_edit').css({'display':'none',});
	});
	//$('#gal_edit_conten').append(imgs_conten);
	 


	
	

	
});
	
	 $('#'+img_gal).mouseover(function(){
		 
		 var img_gales = $(this).attr('id');
			 $('#'+prev).click(function(){
				 
			 
			$("#"+img_gales+" li:last").prependTo("#"+img_gales).css({'display':'block',}).next().css({'display':'none',});
		
		});
		
		$('#'+next).click(function(){
			
			 $("#"+img_gales+" li:first").css({'display':'none',}).next().css({'display':'block',}).end().appendTo("#"+img_gales);
			
		});	

	 });




});



		function img_gal_create(){
		
		//counts++
		var count =  Math.floor((1 + Math.random()) * 0x10000)
		//var counts = document.getElementById('bodyc').childElementCount;
		 var  img_gal_ID = "img_galer"+ count;
		var  img_gal_li = "img_galer_li"+ count;
		 var img_gales = img_gale;
		var img_ul = $('#'+img_gales).find('ul').attr('id');
		
		$('#'+img_ul).append(' <li id="'+img_gal_li+'"> <img src="" alt="" id="'+img_gal_ID+'"  > </li> ');
		
		
		$('#'+img_gal_li).css({
			'width':'100%',
			'height':'100%',
			'padding':'0px',
			'margin':'0px',
			'top':'0px',
			'left':'0px',
			'display': 'none',
			'position':'absolute',
		}); 
					
		$('#'+img_gal_ID).css({
			
			'position':'absolute',
			'width':'100%',
			'height':'100%',
			'padding':'0px',
			'margin':'0px',
			'top':'0px',
			'left':'0px',
			'display': 'block',
			'object-fit':'scale-down',
			
			});
			
		
		 
	
  
	
	return img_gal_ID;
}; 



$('#gal_img_uplod').change(function() { 
	
		
		
  const file = document.querySelector('input[id="gal_img_uplod"]').files[0];
	var  fileID = img_gal_create();
	
  const preview = document.querySelector("[id=" + fileID + "]")
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
  	
  		
 
  	});
	
var counter = 0;	

	  $('#menu').click(function (){
			
		var count =  Math.floor((1 + Math.random()) * 0x10000)
		
		var menuliID ="menuliID"+count;
		var AIDMENU = "AIDMENU"+count;
		
		 var menu_name = $('#menu_name').val();
		var menu_Url = $('#menu_Url').val();
		
	counter++;
    if(counter<11){
		
		$('#menuul').append('<li id="'+menuliID+'"><a id="'+AIDMENU+'" href="'+menu_Url+'" target="_blink" >'+menu_name+'</a></li>');
	}
                    
	
			$('#menu1').css({
			'position':'absolute',
			'top':'0',
			'left': '20%',

			});
	
			$('#'+menuliID).css({
			'display':'inline',
			'left': '0',
			'top':'0',
			'padding':'4px',
			});
			
			$('#'+AIDMENU).css({
			'font-size':'25px',
			'text-decoration':'none',
			'background-image':'url(bg0.jpg)',
			'background-size':'100%',
			'padding':'2px',
			'border-radius':'20px',
			'transition':'background-image 2s,border-radius 3s',
			'color':'white',
			});
			
		$('#'+AIDMENU).mouseover(function() {
		$(this).css({
			
		'background-image':'url(bg6.jpg)',
		'border-radius':'10px',
			
			
		})
		}).mouseout(function() {
		$(this).css({
			'font-size':'25px',
			'text-decoration':'none',
			'background-image':'url(bg0.jpg)',
			'background-size':'100%',
			'padding':'2px',
			'border-radius':'20px',
			'transition':'background-image 2s,border-radius 3s',
			'color':'white',
			
			
		});
		
		});
			
	
		
		
		
	 $( function() {
    $( '#menuul').draggable({
       axis: "x,y",
	  containment: "#headc",
 
    });
  } );
	
	
	});
	
	 function logo_create(){
		//var count =  Math.floor((1 + Math.random()) * 0x10000)
		var count = document.getElementById("headc").childElementCount;
		var div_logoID = "div_logo1";
		var logoID = "logo1";
		$('#headc').append('<div id="'+div_logoID+'"  ><img src="" alt="" id="'+logoID+'"></div>');
	 
	 $('#'+div_logoID).css({
			'background':'none',
			'position':'absolute',
			'width':'14%',
			'height':'100%',
			'top':'0px',
			
			
			});
			
		$('#'+logoID).css({
			
			'position':'absolute',
			'width':'100%',
			'height':'100%',
			'display': 'block',
			'object-fit':'scale-down',
			
			
			});
	 
	 
	 
	 
	 
	 
	$( function() {
		$( '#'+div_logoID).draggable({
      cursor:'move',
	  containment: "#headc",
	  
    stop: function () {
        var l = ( 100 * parseFloat($(this).position().left / parseFloat($(this).parent().width())) ) + "%" ;
       // var t = ( 100 * parseFloat($(this).position().top / parseFloat($(this).parent().height())) ) + "%" ;
        $(this).css("left", l);
       // $(this).css("top", t);
    }
	  
    });
		} );


	
	  
	
$( function() {
				
	var container = $("#headc");
    
 
	
	//var sibTotalheight
    var sibTotalWidth;
    $('#'+div_logoID).resizable({
        handles: 'all',
		containment: "#headc",
        start: function(event, ui){
            sibTotalWidth = ui.originalSize.width + ui.originalElement.next().outerWidth();
		//	sibTotalheight = ui.originalSize.height + ui.originalElement.next().outerHeight();
        },
        stop: function(event, ui){     
            var cellPercentWidth=100 * ui.originalElement.outerWidth()/ container.innerWidth();
            ui.originalElement.css('width', cellPercentWidth + '%'); 
			//var cellPercentHeight=100 * ui.originalElement.outerHeight()/ container.innerHeight();
          //  ui.originalElement.css('height', cellPercentHeight + '%');  
			
            var nextCell = ui.originalElement.next();
            var nextPercentWidth=100 * nextCell.outerWidth()/container.innerWidth();
            nextCell.css('width', nextPercentWidth + '%');
			
		//	var nextCel = ui.originalElement.next();
         //   var nextPercentHeight=100 * nextCel.outerHeight()/container.innerHeight();
          //  nextCel.css('height', nextPercentHeight + '%');
        },
      
    });
				
 
 
  } );
	return logoID;
};
	$('#logo').change(function() {
		
  const file1 = document.querySelector('input[id="logo"]').files[0];
  var file1ID =logo_create();
  const preview = document.querySelector("[id=" + file1ID + "]")
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file1) {
    reader.readAsDataURL(file1);
  }
  
  
  
  
  
  
  
		
		$('#'+file1ID).contextmenu(function() {
			$('#'+fileID).css({
			'border-style':'solid',		
			'border-width':'2px',		
			'border-color':'rgb(51, 51, 204)',	
		});
			});
			 $('#headcc').mousemove(function(){
			$('#'+file1ID).css({
			'border':'none',	
		});
		});
  
  	});
	
	
	oncontextmenu = function(){
	return false;
	
	}

$('#headEdi').mouseover(function(){
			 containerEditcd = $('#headc').attr('id');
				
		
		
		
		
		$('#background-imagecd').change(function(){
		const file2 = document.querySelector('input[id="background-imagecd"]').files[0];
		const reader1 = new FileReader();
		
		reader1.addEventListener("load", function () {
		// convert image file to base64 string
		$('#'+containerEditcd).css({
		'background-image':'url('+reader1.result+')',
			
			
		});
		}, false);

		if (file2) {
		reader1.readAsDataURL(file2);
		}
		
		

		});
		
		$('#background_colorcd').change(function(){
			
		var background_color1 = $('#background_colorcd').val()
	
		$('#'+containerEditcd).css({
		'background-color':''+background_color1+'',
				
		});
		
	
		});
		$('#background_repeatcd').change(function(){
			
		var background_repeat1 = $('#background_repeatcd').val()
	
		$('#'+containerEditcd).css({
		'background-repeat':''+background_repeat1+'',
				
		});
		
	
		});
		$('#background_sizecd').change(function(){
			
		var background_size1 = $('#background_sizecd').val()
	
		$('#'+containerEditcd).css({
		'background-size':''+background_size1+'%',
				
		});
		
	
		});
		
		$('#delete_background-imagecd').click(function(){
			
		
	
		$('#'+containerEditcd).css({
		'background-image':'none',
				
		});
		
	
		});
		
		$('#delete_background-colorcd').click(function(){
			
		
	
		$('#'+containerEditcd).css({
		'background-color':'transparent',
				
		});
		
	
		});
		
				$('#border_positioncd').change(function(){
				
				var border_positioncd = $('#border_positioncd').val();
				
			if(border_positioncd == 'border' ){
				
				$('#border_stylecd').change(function(){
			
		var border_stylecd = $('#border_stylecd').val()
	
		$('#'+containerEditcd).css({
		'border-style':''+border_stylecd+'',
				
		});
			/*$('#'+divIDEdit).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});**/
	
		});
		
		$('#border_colorcd').change(function(){
			
		var border_colorcd = $('#border_colorcd').val()
	
		$('#'+containerEditcd).css({
		'border-color':''+border_colorcd+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_sizecd').change(function(){
			
		var border_sizecd = $('#border_sizecd').val()
	
		$('#'+containerEditcd).css({
		'border-width':''+border_sizecd+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-colorcd').click(function(){
			
		
	
		$('#'+containerEditcd).css({
		'border-color':'transient',
				
		});
		
	
		});
		
	
		
				
			}
			
			if(border_positioncd == 'bottom'){
				
				
			$('#border_stylecd').change(function(){
			
		var border_stylecd = $('#border_stylecd').val()
	
		$('#'+containerEditcd).css({
		'border-bottom-style':''+border_stylecd+'',
				
		});
		$('#'+containerEditcd).css({
		'border-top-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_colorcd').change(function(){
			
		var border_colorcd = $('#border_colorcd').val()
	
		$('#'+containerEditcd).css({
		'border-bottom-color':''+border_colorcd+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_sizecd').change(function(){
			
		var border_sizecd = $('#border_sizecd').val()
	
		$('#'+containerEditcd).css({
		'border-bottom-width':''+border_sizecd+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-colorcd').click(function(){
			
		
	
		$('#'+containerEditcd).css({
		'border-bottom-color':'transient',
				
		});
		
	
		});	
		
		
				
			}
			if(border_positioncd == 'left'){
				
				
				$('#border_stylecd').change(function(){
			
		var border_stylecd = $('#border_stylecd').val()
	
		$('#'+containerEditcd).css({
		'border-left-style':''+border_stylecd+'',
				
		});
		$('#'+containerEditcd).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_colorcd').change(function(){
			
		var border_colorcd = $('#border_colorcd').val()
	
		$('#'+containerEditcd).css({
		'border-left-color':''+border_colorcd+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_sizecd').change(function(){
			
		var border_sizecd = $('#border_sizecd').val()
	
		$('#'+containerEditcd).css({
		'border-left-width':''+border_sizecd+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-colorcd').click(function(){
			
		
	
		$('#'+containerEditcd).css({
		'border-left-color':'transient',
				
		});
		
	
		});
		
		
				
			}
			if(border_positioncd == 'top'){
				$('#border_stylecd').change(function(){
			
		var border_stylecd = $('#border_stylecd').val()
	
		$('#'+containerEditcd).css({
		'border-top-style':''+border_stylecd+'',
				
		});
		$('#'+containerEditcd).css({
		'border-bottom-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_colorcd').change(function(){
			
		var border_colorcd = $('#border_colorcd').val()
	
		$('#'+containerEditcd).css({
		'border-top-color':''+border_colorcd+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_sizecd').change(function(){
			
		var border_sizecd = $('#border_sizecd').val()
	
		$('#'+containerEditcd).css({
		'border-top-width':''+border_sizecd+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-colorcd').click(function(){
			
		
	
		$('#'+containerEditcd).css({
		'border-top-color':'transient',
				
		});
		
	
		});
		
			
			}
			if(border_positioncd == 'right'){
				$('#border_stylecd').change(function(){
			
		var border_stylecd = $('#border_stylecd').val()
	
		$('#'+containerEditcd).css({
		'border-right-style':''+border_stylecd+'',
				
		});
		$('#'+containerEditcd).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-left-style':'none',
		
		});	
	
		});
		
		$('#border_colorcd').change(function(){
			
		var border_colorcd = $('#border_colorcd').val()
	
		$('#'+containerEditcd).css({
		'border-right-color':''+border_colorcd+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_sizecd').change(function(){
			
		var border_sizecd = $('#border_sizecd').val()
	
		$('#'+containerEditcd).css({
		'border-right-width':''+border_sizecd+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-colorcd').click(function(){
			
		
	
		$('#'+containerEditcd).css({
		'border-right-color':'transient',
				
		});
		
	
		});
				
			}
				
				
				
				
			});
		
	});
	
	
	$('#bodyEdi').mouseover(function(){
			containerEdit = $('#bodyc').attr('id');
				
	
		
		
		
		$('#background-imagecb').change(function(){
		const file2 = document.querySelector('input[id="background-imagecb"]').files[0];
		const reader1 = new FileReader();
		
		reader1.addEventListener("load", function () {
		// convert image file to base64 string
		$('#'+containerEdit).css({
		'background-image':'url('+reader1.result+')',
			'background-size':'50%',
			
		});
		}, false);

		if (file2) {
		reader1.readAsDataURL(file2);
		}
		
		

		});
		
		$('#background_colorcb').change(function(){
			
		var background_color1 = $('#background_colorcb').val()
	
		$('#'+containerEdit).css({
		'background-color':''+background_color1+'',
				
		});
		
	
		});
		$('#background_repeatcb').change(function(){
			
		var background_repeat1 = $('#background_repeatcb').val()
		
		if(background_repeat1 == 'no-repeat'){
				$('#'+containerEdit).css({
		'background-repeat':background_repeat1,
		'background-attachment': 'fixed',
				
		});
			
		}
	
		$('#'+containerEdit).css({
		'background-repeat': background_repeat1,
				
		});
		
	
		});
		$('#background_sizecb').change(function(){
			
		var background_size1 = $('#background_sizecb').val()
	
		$('#'+containerEdit).css({
		'background-size':''+background_size1+'%',
				
		});
		
	
		});
		
		$('#delete_background-imagecb').click(function(){
			
		
	
		$('#'+containerEdit).css({
		'background-image':'none',
				
		});
		
	
		});
		
		$('#delete_background-colorcb').click(function(){
			
		
	
		$('#'+containerEdit).css({
		'background-color':'transparent',
				
		});
		
	
		});
	
	$('#border_positioncb').change(function(){
				
				var border_position = $('#border_positioncb').val();
				
			if(border_position == 'border' ){
				
				$('#border_stylecb').change(function(){
			
		var border_style = $('#border_stylecb').val()
	
		$('#'+containerEdit).css({
		'border-style':''+border_style+'',
				
		});
			/*$('#'+divIDEdit).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});**/
	
		});
		
		$('#border_colorcb').change(function(){
			
		var border_color = $('#border_colorcb').val()
	
		$('#'+containerEdit).css({
		'border-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_sizecb').change(function(){
			
		var border_size = $('#border_sizecb').val()
	
		$('#'+containerEdit).css({
		'border-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-colorcb').click(function(){
			
		
	
		$('#'+containerEdit).css({
		'border-color':'transient',
				
		});
		
	
		});
		
	
		
				
			}
			
			if(border_position == 'bottom'){
				
				
			$('#border_stylecb').change(function(){
			
		var border_style = $('#border_stylecb').val()
	
		$('#'+containerEdit).css({
		'border-bottom-style':''+border_style+'',
				
		});
		$('#'+containerEdit).css({
		'border-top-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_colorcb').change(function(){
			
		var border_color = $('#border_colorcb').val()
	
		$('#'+containerEdit).css({
		'border-bottom-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_sizecb').change(function(){
			
		var border_size = $('#border_sizecb').val()
	
		$('#'+containerEdit).css({
		'border-bottom-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-colorcb').click(function(){
			
		
	
		$('#'+containerEdit).css({
		'border-bottom-color':'transient',
				
		});
		
	
		});	
		
		
				
			}
			if(border_position == 'left'){
				
				
				$('#border_stylecb').change(function(){
			
		var border_style = $('#border_stylecb').val()
	
		$('#'+containerEdit).css({
		'border-left-style':''+border_style+'',
				
		});
		$('#'+containerEdit).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_colorcb').change(function(){
			
		var border_color = $('#border_colorcb').val()
	
		$('#'+containerEdit).css({
		'border-left-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_sizecb').change(function(){
			
		var border_size = $('#border_sizecb').val()
	
		$('#'+containerEdit).css({
		'border-left-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-colorcb').click(function(){
			
		
	
		$('#'+containerEdit).css({
		'border-left-color':'transient',
				
		});
		
	
		});
		
		
				
			}
			if(border_position == 'top'){
				$('#border_stylecb').change(function(){
			
		var border_style = $('#border_stylecb').val()
	
		$('#'+containerEdit).css({
		'border-top-style':''+border_style+'',
				
		});
		$('#'+containerEdit).css({
		'border-bottom-style':'none',
		'border-left-style':'none',
		'border-right-style':'none',
		});
	
		});
		
		$('#border_colorcb').change(function(){
			
		var border_color = $('#border_colorcb').val()
	
		$('#'+containerEdit).css({
		'border-top-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_sizecb').change(function(){
			
		var border_size = $('#border_sizecb').val()
	
		$('#'+containerEdit).css({
		'border-top-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-colorcb').click(function(){
			
		
	
		$('#'+containerEdit).css({
		'border-top-color':'transient',
				
		});
		
	
		});
		
			
			}
			if(border_position == 'right'){
				$('#border_stylecb').change(function(){
			
		var border_style = $('#border_stylecb').val()
	
		$('#'+containerEdit).css({
		'border-right-style':''+border_style+'',
				
		});
		$('#'+containerEdit).css({
		'border-bottom-style':'none',
		'border-top-style':'none',
		'border-left-style':'none',
		
		});	
	
		});
		
		$('#border_colorcb').change(function(){
			
		var border_color = $('#border_colorcb').val()
	
		$('#'+containerEdit).css({
		'border-right-color':''+border_color+'',
				
		});
		
	
		});
		
		
	
		
		$('#border_sizecb').change(function(){
			
		var border_size = $('#border_sizecb').val()
	
		$('#'+containerEdit).css({
		'border-right-width':''+border_size+'px',
				
		});
		
	
		});
		
		
		
		$('#delete_bordet-colorcb').click(function(){
			
		
	
		$('#'+containerEdit).css({
		'border-right-color':'transient',
				
		});
		
	
		});
				
			}
				
				
				
				
			});
		
	});

	$('#container').click(function(){
			containerEdit = $(this).attr('id');
				
			$('#Edit').css({
			'display':'none',
			
		});
		
		
	});
	

	 $( function() {
    $( '#Edit').draggable({
	  cursor:'move',
	  snap: '.gridlines',
    stop: function () {
        var l = ( 100 * parseFloat($(this).position().left / parseFloat($(this).parent().width())) ) + "%" ;
        var t = ( 100 * parseFloat($(this).position().top / parseFloat($(this).parent().height())) ) + "%" ;
        $(this).css("left", l);
        $(this).css("top", t);
    }
	  
    });
  } );

	
	$( "#bodyc").resizable({      	
	  handles :'s',
	 minHeight: 800,
	  
    });
	$( "#headc").resizable({      	
	  handles :'s',
	 maxHeight: 500,
	 minHeight: 70,
	  
	 stop: function(){     
	 var headcHeight = $('#headc' ).height();
	 var count = document.getElementById("bodyc").childElementCount;
         	$('#bodyc').css({
			'width':'100%',
			'min-height':'800px',
			'top':''+headcHeight+'',
			'left':'0%',
			'height':'100%',
			'position':'absolute',
			'padding':'0px',
			'margin':'0px',
		});

        },
		

	  
    });
	
		$('#headc').css({
			'width':'100%',
			'height':'140px',
			'min-height':'70px',
			'float':'left',
			'position':'absolute',
			'z-Index':'2',
			'padding':'0px',
			'margin':'0px',
		});
		     var divps=$( document ).height();
	 	 var headcHeight = $('#headc' ).height();
		         $('#bodyc').css({
			'width':'100%',
			'top':''+headcHeight+'',
			'left':'0%',
			'position':'absolute',
			'min-height':'800px',
			'height':'100%',
			'padding':'0px',
			'margin':'0px',
		});


	$('#container').css({
			'width':'78%',
			'height':'100vh',
			
		});
	


	
		
	$('#ss').click(function(){
		
		//$('.grid-stack-item').attr('data-gs-locked',true);
		var inhalt = document.getElementById('container').innerHTML;
		var filed = new Blob([inhalt],{type:'text/html'});
		var filecreat = window.URL.createObjectURL(filed);
		
	 
	 
	 var dow = document.getElementById('dow');
	  dow.style= "display:block; font-size:20px ;color:rgb(217, 109, 8); text-decoration:none;"; 
	  dow.href= filecreat;
		
	$('#dow').click(function(){
		
		$('#dow').css({'display':'none',});
		});
	});


//Editor
	var fonts = document.querySelectorAll('#font_famlie' );
	 for(var i=0; i<fonts.length; i++  ){
		 
		 fonts[i].style.fontFamily = fonts[i].value;
		 
	 }
 $ (document).ready(function(s){
 
$('#boldbutton').click(function(){
			 document.execCommand('Bold',false,null);  
		
	});
		 
			$('#italicbutton').click(function(){
			 document.execCommand('italic',false,null); 
		
	});
	
	$('#supbutton').click(function(){
			 document.execCommand('Superscript',false,null); 
		
	});
	$('#subbutton').click(function(){
			document.execCommand('Subscript',false,null); 
		
	});
		
		
		 
	$('#strikebutton').click(function(){
			 document.execCommand('Strikethrough',false,null);  
		
	});
	
	$('#nlistbutton').click(function(){
			 document.execCommand('InsertOrderedList',false,"nwol"+Math.round(Math.random() * 10000)); 
		
	});
		 
	
	$('#blistbutton').click(function(){
			 document.execCommand('InsertunOrderedList',false,"nwol"+Math.round(Math.random() * 10000));  
		
	});
	
	$('#color_font').change(function(event){
			 document.execCommand('ForeColor',false,event.target.value); 
		
	});
		
	$('#color_backfont').change(function(event){
			 document.execCommand('BackColor',false,event.target.value);  
		
	});
	
		$('#font_famlie').change(function(event){
			 document.execCommand('FontName',false,event.target.value);  
		
	});
		 
		$('#font_size').change(function(event){
			 document.execCommand('FontSize',false,event.target.value);  
		
	});
	
		 
		  
				$('#linkbutton').click(function(){
			
			var url = prompt("Enter a URL","http://");
			document.execCommand('CreateLink',false,url); 
		
	}); 
	
		 
	$('#redobutton').click(function(){
			 document.execCommand('redo',false,null); 
		
	}); 
	
		$('#unlinkbutton').click(function(){
			 document.execCommand('UnLink',false,null);  
		
	}); 	 
		 
		$('#undobutton').click(function(){
			 document.execCommand('undo',false,null); 
		
	}); 	
		 
			$('#align_left').click(function(){
			 document.execCommand('JustifyLeft',false,null); 
		
	}); 
		 		$('#align_center').click(function(){
			 document.execCommand('JustifyCenter',false,null);  
		
	}); 
	$('#align_right').click(function(){
			 document.execCommand('JustifyRight',false,null);  
		
	}); 
	$('#align_justify').click(function(){
			 document.execCommand('JustifyFull',false,null); 
		
	});
	
	$('#align_justify').click(function(){
			 document.execCommand('JustifyFull',false,null); 
		
	});
	$('#cut').click(function(){
			 document.execCommand('cut',false,null);  
	});	
		$('#copy').click(function(){
			 document.execCommand('copy',false,null);  
	});		 
		$('#indent').click(function(){
			 document.execCommand('Indent',false,null);  
	});		
		 
	$('#dedent').click(function(){
			 document.execCommand('Outdent',false,null); 
	});	
	});	 


});


 