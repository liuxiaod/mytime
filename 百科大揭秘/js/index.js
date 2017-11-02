window.onload = function(){
   var but1 = document.getElementById("but1");
   var but2 = document.getElementById("but2");
   var img  = document.getElementById("img");
   var img1 = img.getElementsByTagName("img")[0];
   var imgs = ["images/img/bg2-04.png","images/img/bg2-05.png","images/img/bg2-06.png","images/img/bg2-07.png"];
   var index = 0;
    but1.onclick = function () {
        // console.log(index);
        index = index-1;

        if (index < 0) {
            index = imgs.length - 1;

        }
        img1.src = imgs[index];

    };
    but2.onclick = function () {
        index = index + 1;
        // console.log(index);
        if (index > imgs.length - 1) {
            index = 0;
        }
        img1.src = imgs[index];
    };

    $(function () {
        $("#zhaop li").click(function () {
            $("#zhaop li").removeClass("active");
            $(this).addClass("active");
        });

        $("#jiemi5  p").click(function () {
            //切换div
            console.log($(this).index());
            $("#jiemi5  div").css("display","none");
            $("#jiemi5  p").removeClass("acti");
            $("#jiemi5  div").eq($(this).index()).css("display","block");
            $(this).addClass("acti");
        });
    })


}