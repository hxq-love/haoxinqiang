
	var explem={
		nums:500,
		init:function(){
			this.bindDom();
			this.addContent();
			this.hxq();
		},
		bindDom:function(){
			$(".like").addClass('styles');
		},
		addContent:function(){
		var this_=this; 
			$(".like").bind('click',function(){
			
				$("body").append("<div class='ipt'><input type='text' value='"+this_.nums+"'></div>");
			});
		},
		hxq:function(){
			
		}
	}