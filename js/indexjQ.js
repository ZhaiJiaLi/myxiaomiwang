$(function () {
//    购物车部分选项卡
    $(".mainright").mouseenter(function () {
        $(".shoppingdown").css("height", "98px");
    })
    $(".mainright").mouseleave(function () {
        $(".shoppingdown").css("height", "0px");
    })

//导航栏选项卡
    $(".nav .nava").mouseenter(function () {
        let index=$(this).index();
        $(".nav ul").css("display","none").eq(index).css("display","block")
        $(".navxxk").css({"height":"229px","transition":"all 0.3s ease"});
    })
    $(".nav .nava").mouseleave(function () {
        let index=$(this).index();
        $(".nav ul").css("display","none");
        $(".navxxk").css("height","0");
    })

//侧导航选项卡
    $(".asidenav").mouseenter(function () {
        let index=$(this).index();
        $(".asideBox").eq(index).css("display","block");
    })
    $(".asidenav").mouseleave(function () {
        $(".asideBox").css("display","none");
    })
//banner轮播
    let num=0;
    let t=setInterval(run,1000);
    function run(type="next") {
        if (type=="next"){
            num++;
            if (num>=$(".img-box li").length){
                num=0;
            }
        }else {
            num--;
            if (num<0){
                num=$(".img-box li").length-1;
            }
        }
        $(".img-box li").css("z-index","5").eq(num).css("z-index","10");
        $(".cirfive li").removeClass("hot").eq(num).addClass("hot");

    }
        $(".banner").mouseenter(function () {
            clearInterval(t);
        })
    $(".banner").mouseleave(function () {
        t=setInterval(run,1000);
    })
    $(".pre").click(function () {
        run();
    })
    $(".next").click(function () {
        run();
    })
    $(".cirfive li").click(function () {
        let index=$(this).index();
        $(".cirfive li").removeClass("hot").eq(index).addClass("hot");
        $(".img-box li").css("z-index","5").eq(index).css("z-index","10")
    })

//搜索框部分

    $(".search-text").focus(function () {
        $(".searchdown").show();
        $(this).css("border","1px solid #ff6700");
        $(".search-submit").css({"border":"1px solid #ff6700","border-left":"0"});
        $(".tip").hide();
    })
    $(".search-text").blur(function () {
        $(".searchdown").hide();
        $(this).css("border","1px solid #e0e0e0");
        $(".search-submit").css({"border":"1px solid #e0e0e0","border-left":"0"});
        $(".tip").show();
    })
//    小米闪购部分
    let timess=0;
    let fswidth=($(".fspul").width()-248)/2;
    console.log(fswidth);
    // let fswidth1=$(".fspul").width()/9;

    let fswidth1=$(".fspul li").outerWidth()+14;
    console.log(fswidth);
    $(".fsparr .arrowsright").click(function () {
        timess++;
        if (timess>=3){
            timess=2;
        }
        if (timess>=2) {
            $(this).addClass("grayarr");
            $(".fsparr .arrowsleft").removeClass("grayarr");
        }
        if (timess==1){
            $(".fspul").css("transform","translateX("+(-fswidth*timess)+"px)");
        }else if (timess==2){
            $(".fspul").css("transform","translateX("+(-fswidth1*5)+"px)");
        }

    })
    $(".fsparr .arrowsleft").click(function () {
        timess--;
        if (timess<=-1){
            timess=0;
        }
        if (timess<=0){
            $(this).addClass("grayarr");
            $(".fsparr .arrowsright").removeClass("grayarr")
        }
        console.log(timess);
        if (timess==1){
            console.log(-fswidth * timess);
            $(".fspul").css("transform","translateX("+(-fswidth1)+"px)");


        } else if (timess==0) {
            $(".fspul").css("transform","translateX(0)");
        }

    })

//家电选项卡
    $(".homeele .smallli").hover(function(){
        let index=$(this).index();
        $(".homeele .btn_rightBox").hide().eq(index).show();
        $(this).addClass("smallli_selected").siblings().removeClass("smallli_selected")
    })




})