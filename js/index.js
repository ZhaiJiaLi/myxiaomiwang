window.onload=function () {
    //头部的选项卡
    let shoppingdown=document.getElementsByClassName("shoppingdown")[0];
    let mainright=document.getElementsByClassName("mainright")[0];

    mainright.onmouseenter=function () {
        shoppingdown.style.height="98px";
        shoppingdown.style.boxShadow="0 1px 10px 0.5px rgba(0,0,0,0.6)";
    }
    mainright.onmouseleave=function () {
        shoppingdown.style.height="0";
    }

    //侧导航的选项卡
    // let aside=document.getElementsByClassName("aside");
    // let lis=aside[0].getElementsByTagName("li");
    let asidenav=document.getElementsByClassName("asidenav");
    let asideBox=document.getElementsByClassName("asideBox");
    for (let i=0;i<asidenav.length;i++){
        asidenav[i].onmouseenter=function () {
            asideBox[i].style.display="block";

        }
        asidenav[i].onmouseleave=function () {
            asideBox[i].style.display="none";
        }
    }
    //家电的选项卡
    let homeele=document.getElementsByClassName("homeele")[1];
    let header_right=homeele.getElementsByClassName("header_right")[0];
    let smallli=header_right.getElementsByClassName("smallli");
    // let lis=header_right.getElementsByTagName("li");

    let btn_rightBox=homeele.getElementsByClassName("btn_rightBox");
    console.log(smallli,btn_rightBox);
    for (let i=0;i<smallli.length;i++){
        smallli[i].onmouseenter=function () {
            for (let j=0;j<smallli.length;j++) {
                btn_rightBox[j].style.zIndex="5";
                smallli[j].style.borderBottom="2px solid #f5f5f5";
                smallli[j].style.color="#424242";
            }
            btn_rightBox[i].style.zIndex="10";
            smallli[i].style.borderBottom="2px solid #ff6700";
            smallli[i].style.color="#ff6700";

        }
    }



    // console.log(zhineng);
    //将家电部分封装
    function xxk(section) {
        let header_right=section.getElementsByClassName("header_right")[0];
        let smallli=header_right.getElementsByClassName("smallli");
        // let lis=header_right.getElementsByTagName("li");

        let btn_rightBox=section.getElementsByClassName("btn_rightBox");
        // console.log(smallli,btn_rightBox);
        for (let i=0;i<smallli.length;i++){
            smallli[i].onmouseenter=function () {
                for (let j=0;j<smallli.length;j++) {
                    btn_rightBox[j].style.zIndex="5";
                    smallli[j].style.borderBottom="2px solid #f5f5f5";
                    smallli[j].style.color="#424242";
                }
                btn_rightBox[i].style.zIndex="10";
                smallli[i].style.borderBottom="2px solid #ff6700";
                smallli[i].style.color="#ff6700";
            }
        }
    }
    let zhineng=document.getElementsByClassName("zhineng")[0];
    xxk(zhineng);

    let dapei=document.getElementsByClassName("dapei")[0];
    xxk(dapei);

    let peijian=document.getElementsByClassName("peijian")[0];
    xxk(peijian);



//    轮播图
    //1.css初始化
    let  imgBox=document.getElementsByClassName("img-box")[0];
    let  imgLis=imgBox.getElementsByTagName("li");
    let  cirfive=document.getElementsByClassName("cirfive")[0];
    let  cirlis=cirfive.getElementsByTagName("li");
    // console.log(imgLis,cirlis);

    let num=0;
    let t=setInterval(move,2000);
    function move() {
        num++;
        if (num==imgLis.length) {
            num=0;
        }
        for (let i=0;i<imgLis.length;i++){
            imgLis[i].style.zIndex="5";
            cirlis[i].className="";
        }
        imgLis[num].style.zIndex="10";
        cirlis[num].className="hot";
    }
//2.banner移入不动  移出动
    let banner=document.getElementsByClassName("banner")[0];
    // console.log(banner);
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,1000);
    }
//    3.设置左右箭头
    let leftarr=document.getElementsByClassName("pre")[0];
    let rightarr=document.getElementsByClassName("next")[0];
    // console.log(leftarr, rightarr);
    rightarr.onclick=function () {
        move();
    }
    function moveL() {
        num--;
        if (num<0) {
            num=imgLis.length-1;
        }
        for (let i=0;i<imgLis.length;i++){
            imgLis[i].style.zIndex="5";
            cirlis[i].className="";
        }
        imgLis[num].style.zIndex="10";
        cirlis[num].className="hot";
    }
    leftarr.onclick=function () {
        moveL();
    }
//    小原点点击的时候图片动
    for (let i=0;i<cirlis.length;i++){
        cirlis[i].onclick=function () {
            for (let j=0;j<imgLis.length;j++){
                imgLis[j].style.zIndex="5";
                cirlis[j].className="";
            }
            imgLis[i].style.zIndex="10";
            cirlis[i].className="hot";
            num=i;
        }








    }






}
