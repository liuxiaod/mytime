;(function($){
	$.fn.extend({
		star:function(opt){
			var stars={
				width:22,
				height:21,
				cont:10,
				img1:"./img/starky.png",
				img2:"./img/starsy.png",
				casen:true,// 整颗星
				score:5,//分数
				think:[
					"与卖家描述的严重不符，非常不满意",
					"差得太离谱，很不满意",
					"不满意",
					"质量有轻微差别，不太满意",
					"一般",
					"没有卖家描述的那么好",
					"满意",
					"与卖家描述的基本一致，挺满意的",
					"非常满意",
					"质量非常好，与卖家描述的完全一致，非常满意"
				]
			}
			stars=$.extend(stars,opt);
			if(stars.casen){
				stars.width=stars.width/2;
				
			}else{
				stars.cont=stars.cont/2
				//遍历评价 删除偶数行或奇数行
				
				for(var i=stars.think.length;i>=0;i--){
                   if(i%2==1){
                   	stars.think.splice(i,1)
                   }
				}
         
				
			}
			stars.score=stars.score/stars.cont
			var parent=this.find(".parent"),
				score=this.find(".score"),
				think=this.find(".think");
			init()
			function init(){
				for(var i=0;i<stars.cont;i++){
					$("<a>").css({
						"position":'absolute',
						"height":stars.height,
						"width":stars.width*(i+1),
						"z-index":stars.cont-i
					}).appendTo(parent.get(0));
				}
				parent.css({
					"background":"url("+stars.img1+")",
					"height":stars.height,
					"width":stars.width*stars.cont
				})
			}
			var flag=-1
			parent.find("a").hover(function(){
				if(flag>=0) return false;
				$(this).addClass("a");
				var index=$(this).index()+1;
				score.text(index*stars.score);
				think.text(stars.think[index-1]);
			},function(){
				if(flag>=0) return false;
				$(this).removeClass("a");
				score.text("0");
				think.text("");
			})
			parent.on("click","a",function(){
				if(flag>=0) return false;
				flag=$(this).index()+1;
				$(this).addClass("a");
				score.text(flag*stars.score);
				think.text(stars.think[flag-1]);
			})
		}
		
	})
	
	
})($)