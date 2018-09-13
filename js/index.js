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

    let zhoubian=document.getElementsByClassName("zhoubian")[0];
    // console.log(zhoubian);
    xxk(zhoubian);



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

//中下部双下标轮播
    /*let cards=document.querySelectorAll(".content0 .cards");
    let cirbigs=document.querySelectorAll(".content0 .con_circle span");
    let pre1=document.querySelector(".content0 .con-pre");
    let next1=document.querySelector(".content0 .con-next");
    let cirB=document.querySelectorAll(".content0 .con_circle div");
    // console.log(cirB);
    // console.log(cards, cirbigs,pre1,next1);
    let nown=nextn=0;
    let flag=true;
    function RtoL() {
        nextn++;
        if (nextn==cards.length) {
            nextn=0;
        }
        cards[nextn].style.left="275px";
        console.log(cards[nextn]);
        animate( cards[nown],{left:-275});
        animate( cards[nextn],{left:0},function () {
            flag=true;
        });
        cirbigs[nown].classList.remove("cirbig");
        cirbigs[nextn].classList.add("cirbig");
        nown=nextn;
    }
    function LtoR() {
        nextn--;
        if (nextn<0) {
            nextn=cards.length-1;
        }
        cards[nextn].style.left="275px";
        // console.log(cards[nextn]);
        animate( cards[nown],{left:-275});
        animate( cards[nextn],{left:0},function () {
            flag=true;
        });
        cirbigs[nown].classList.remove("cirbig");
        cirbigs[nextn].classList.add("cirbig");
        nown=nextn;
    }
    next1.onclick=function () {
        if (!flag){
            return;
        }
        if (cards[nextn]==cards.length-1){
            return;
        }
        flag=false;
        RtoL();
    }
    pre1.onclick=function () {
        if (!flag){
            return;
        }
        if (cards[nextn]==0) {
            return;
        }
        flag=false;
        LtoR();
    }
    for (let i=0;i<cirbigs.length;i++){
        cirbigs[i].onclick=function () {
            if (i==nown){
                return;
            }else if(i>nown){
                cards[i].style.left="275px";
                animate( cards[nown],{left:-275});
                animate( cards[i],{left:0},function () {
                    flag=true;
                });
                cirbigs[nown].classList.remove("cirbig");
                cirbigs[i].classList.add("cirbig");
                cirB[nown].classList.remove("cirB");
                cirB[i].classList.add("cirB");
            }else{
                cards[i].style.left="275px";
                // console.log(cards[nextn]);
                animate( cards[nown],{left:-275});
                animate( cards[i],{left:0},function () {
                    flag=true;
                });
                cirbigs[nown].classList.remove("cirbig");
                cirbigs[i].classList.add("cirbig");
                cirB[nown].classList.remove("cirB");
                cirB[i].classList.add("cirB");
            }
            nextn=nown=i;
        }
    }*/
//    封装：
    function double(section) {
        let cards=document.querySelectorAll("."+section+" .cards");
        // console.log(cards.length);
        let cirbigs=document.querySelectorAll("."+section+" .con_circle span");
        let pre1=document.querySelector("."+section+" .con-pre");
        let next1=document.querySelector("."+section+" .con-next");
        // console.log(cards);
        let cirB=document.querySelectorAll("."+section+" .con_circle div");
        // console.log(cirB);
        // console.log(cards, cirbigs,pre1,next1);
        let nown=nextn=0;
        let flag=true;
        function RtoL() {
            nextn++;
            if (nextn==cards.length) {
                nextn=0;
            }
            cards[nextn].style.left="275px";
            console.log(cards[nextn]);
            animate( cards[nown],{left:-275});
            animate( cards[nextn],{left:0},function () {
                flag=true;
            });
            cirbigs[nown].classList.remove("cirbig");
            cirbigs[nextn].classList.add("cirbig");
            nown=nextn;
            console.log(nown);
        }
        function LtoR() {
            nextn--;
            if (nextn<0) {
                nextn=cards.length-1;
            }
            cards[nextn].style.left="-275px";
            // console.log(cards[nextn]);
            animate( cards[nown],{left:275});
            animate( cards[nextn],{left:0},function () {
                flag=true;
            });
            cirbigs[nown].classList.remove("cirbig");
            cirbigs[nextn].classList.add("cirbig");
            nown=nextn;
        }
        next1.onclick=function () {
            if (!flag){
                return;
            }
            if (nextn==cards.length-1){
                return;
            }
            flag=false;
            RtoL();
        }
        pre1.onclick=function () {
            if (!flag){
                return;
            }
            if (nextn==0) {
                return;
            }
            flag=false;
            LtoR();
        }
        for (let i=0;i<cirbigs.length;i++){
            cirbigs[i].onclick=function () {
                if (i==nown){
                    return;
                }else if(i>nown){
                    cards[i].style.left="275px";
                    animate( cards[nown],{left:-275});
                    animate( cards[i],{left:0},function () {
                        flag=true;
                    });
                    cirbigs[nown].classList.remove("cirbig");
                    cirbigs[i].classList.add("cirbig");
                    cirB[nown].classList.remove("cirB");
                    cirB[i].classList.add("cirB");
                }else{
                    cards[i].style.left="275px";
                    // console.log(cards[nextn]);
                    animate( cards[nown],{left:-275});
                    animate( cards[i],{left:0},function () {
                        flag=true;
                    });
                    cirbigs[nown].classList.remove("cirbig");
                    cirbigs[i].classList.add("cirbig");
                    cirB[nown].classList.remove("cirB");
                    cirB[i].classList.add("cirB");
                }
                nextn=nown=i;
            }
        }
    }
    double("content0");
    double("content1");
    double("content2");
    double("content3");

//小米闪购部分移动
//     let fspbtn=document.querySelectorAll(".fastshop .fsparr div");
//     let fspul=document.querySelector(".fastshop .fspul");
//     let fspwidth=parseInt(getComputedStyle(fspul,null).width)/2;
//     console.log(fspbtn[0],fspbtn[1], fspul, fspwidth);
//     let timess=0;
//     fspbtn[1].onclick=function () {
//         timess++;
//         if (timess>=2){
//             timess=1;
//         }
//         if (timess>=1) {
//             this.classList.add("grayarr");
//         }
//         if (timess>0){
//             fspbtn[0].classList.remove("grayarr");
//         }
//         fspul.style.transform="translateX("+(-fspwidth*timess)+"px)";
//     }
//     fspbtn[0].onclick=function () {
//         timess--;
//         if (timess==-1){
//             timess=0;
//         }
//         if (timess<=0){
//             this.classList.add("grayarr");
//         }
//         if (timess<1) {
//             fspbtn[1].classList.remove("grayarr")
//         }
//         fspul.style.transform="translateX("+(-fspwidth*timess)+"px)";
//     }


//为你推荐部分移动
    let forbtn=document.querySelectorAll(".servicefor .fs_right div");
    let ul=document.querySelector("#wh");
    let widthul=parseInt(getComputedStyle(ul,null).width)/4;
    // console.log(forbtn[0],forbtn[1],ul,widthul);
    let times=0;
    forbtn[1].onclick=function () {
        times++;
        if (times>=3) {
           this.classList.add("grayarr");
        }
        if(times>0) {
            forbtn[0].classList.remove("grayarr");
        }
        if (times>=4){
            times=3;
        }
        ul.style.transform="translateX("+(-widthul*times)+"px)";

    }
    forbtn[0].onclick=function () {
        times--;
        console.log(times);
        if (times<=0) {
            this.classList.add("grayarr");
        }
        if (times<=-1){
            times=0;
        }
        if (times<3) {
            forbtn[1].classList.remove("grayarr");
        }
        ul.style.transform="translateX("+(-widthul*times)+"px";
    }
    //nav部分选项卡
    let xxklis=document.querySelectorAll(".nav .nava");
    let navul=document.querySelector(".nav");
    let uls=document.querySelectorAll(".nav ul");
    let navxxk=document.querySelector(".navxxk");
    console.log(xxklis, uls, navxxk);
    navul.onmouseenter=function(){
        navxxk.style.height="229px";
        navxxk.classList.add("navxxk-top");
    };
    navul.onmouseleave=function(){
        navxxk.style.height="0";
        navxxk.classList.remove("navxxk-top");
    };
    for (let i=0;i<xxklis.length;i++){
        xxklis[i].onmouseenter=function () {
            for(let j=0;j<xxklis.length;j++){
                uls[j].style.display="none";
            }
            uls[i].style.display="block";
        }
        xxklis[i].onmouseleave=function () {
            for(let j=0;j<xxklis.length;j++){
               uls[j].style.display="none";
            }
            uls[i].style.display="none";
        }
    }



}
