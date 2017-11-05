$(function(){
  var result=0;
  var score=[];
  var refer=['javascript库','桌布','俄罗斯','38万公里']
  $(".testpaper span").on("click",function(){//点击span变色效果并让按钮显示
  var ind=$(this).index()
  $(this).css({"background":'skyblue'}).addClass('bg').siblings('span').css({'background':'#eee'}).removeClass('bg');
  $(this).parent().find('.next').show()
  })
  
   $(".next").on("click",function(){//点击下一页
    var ind=$(this).parents('.testpaper').index();
    var txt=$(this).parent().find('.bg').text();
    $(this).parent().next().fadeIn().siblings().fadeOut();
    score[ind-1]=txt;
  })

  $(".prev").on("click",function(){//点击上一页
    $(this).parent().prev().fadeIn().siblings().fadeOut();
  })

  $("#go").on("click",function(){//点击开始
    $("#test1").fadeIn().siblings().fadeOut();
  });

  $(".over").on("click",function(){//点击完成并实现分数判断
    $("#answer").fadeIn().siblings().fadeOut();
    for(var i=0;i<refer.length;i++){   
      if(score[i]==refer[i]){
        result+=25;
        $('.result').eq(i).text('√')
        $("#answer span").eq(i).addClass('correct')
      }else{
        var sci=score[i];
        $('.result').eq(i).text('×');
        $("#answer span").eq(i).addClass('fault');
        $('li:contains('+sci+')').addClass('fault');
      }
    }
    $("#answer").find('b').text(result)//输出最终成绩
    
    var speak=$("#answer").find('#speak')//考试成绩高低决定语气好坏
    if(result<=75){
      speak.text('你太可怜了！')
    }else{
      speak.text('表现不错！')
    }
  })

  $('#answer span').hover(function(e){//滑动span后显示题目的详情
      var i=$(this).index()-2;     
      $('.narrow').eq(i).fadeIn().siblings('.narrow').hide()
  },function(){
     $('.narrow').hide()
  })

})