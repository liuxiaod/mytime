/**
 * Created by Administrator on 2017/11/2.
 */
$(function(){
   $('.pics li').mouseover(function(){
      $(this).stop().animate({'width':400},500).siblings().stop().animate({'width':50},500)
      $(this).find('img').stop().animate({'left':0},500).parent().siblings().find('img').stop().animate({'left':-155},500)
      $(this).find('span').hide().parent().siblings().find('span').show()
   }).mouseout(function(){
           $('.pics li').stop().animate({'width':100},500).find('img').stop().animate({'left':-155},600)
           $('.pics li').find('span').show()
   })
})