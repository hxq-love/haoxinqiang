$(function(){
	$(".one").addClass("yanse");
	$(".note .biaoti").click(function(){

		$(this).parent("div").siblings("div").children(".menu").css("display","none");
		$(this).parent("div").siblings("div").children("p").toggleClass("yanse");
			$(this).parent("div").siblings("div").children(".biaoti").removeClass("yanse");
			$(this).siblings(".menu").fadeToggle("slow");
			$(this).toggleClass("yanse");
	});
	

	$(".xiala .biaoti_2").click(function(){

		$(this).parent("div").siblings("div").children(".xiala_neirong").css("display","none");
		$(this).parent("div").siblings("div").children("p").toggleClass("yanse");
			$(this).parent("div").siblings("div").children(".biaoti_2").removeClass("yanse");
			$(this).siblings(".xiala_neirong").fadeToggle("slow");
			$(this).toggleClass("yanse");
	});

	$(".fujiyemian .qiehuan").click(function(){
		var flg=$(".fujiyemian .qiehuan").attr("flag");
		switch(flg)
		{
			case "0":
			$(this).addClass("qiehuan_left");
			$(this).siblings(".fujiyemian_left").css("display","none");
			$(this).siblings(".fujiyemian_right").css("width","100%");
			$(this).attr("flag","1");
			break;

			case "1":
				
				$(this).removeClass("qiehuan_left");
			$(".fujiyemian_left").css("display","block");
			$(this).siblings(".fujiyemian_right").css("width","70%");
			$(this).attr("flag","0");
			
		}
	});
	$(".btn").click(function(){
				$(".fuji_2").show();


			});
			$(".fuji_2").click(function(){
					$(".fuji_2").hide();
				});


			$(".ziji").click(function(event){ 
				    event.stopPropagation(); 
				}); 
	$(".qiehuan").click(function(){
		$(this).toggleClass("qiehuan_2");
	});

	$(".jiedian ul li").click(function(){
		var zhi=$(this).index();
		alert("这个的索引是"+zhi);
	})

})