$("#listfore").hover(hoverShow, hoverHide)
$(".right-sidebar").hover(hoverShow, hoverHide)
window.onscroll = scroll

function scroll(){
    if(window.pageYOffset >= 700){
        console.log("700")
        $(".right-menu").addClass("movedown")
    }
    if(window.pageYOffset < 700){
        $(".right-menu").removeClass("movedown")
    }
}
function hoverShow() {
    $(".right-sidebar").css("display", "block")
    $("#listfore").css("background-color", "rgb(217,217,217)")
}

function hoverHide() {
    $(".right-sidebar").css("display", "none")
    $("#listfore").css("background-color", "#fefefe")
}

function clearTimer() {
    for (var each in pagetimer) {
        clearInterval(pagetimer[each]);
        console.log("clear")
    }
}

function fadeOut(arr) {
    for (var each in arr) {
        $(arr[each]).fadeOut('slow')
    }
}

function cirbtnFade(i) {
    for (var each in btnid) {
        $(btnid[each]).removeClass("circle-button-hover")
    }
    $(btnid[i]).toggleClass("circle-button-hover")
}

var picid = ["#pic1", "#pic2", "#pic3"]
var btnid = ["#cirbtn1", "#cirbtn2", "#cirbtn3"]
i = 0;

//指示器
// function carousel(picid, i, n, time) {
//     var timer = window.setInterval(function () {
//         $(picid[i]).fadeOut("slow")
//         if (i == n) {
//             i = -1
//         }
//         $(picid[i + 1]).fadeIn("slow")
//         i += 1
//         console.log("done")
//     }, time)
//     console.log("timer:" + timer)
//     return timer
// }


//指示器2.0
$(picid[0]).fadeIn("slow")

function carousel(picid, i, n, time) {
    var timer = window.setInterval(function () {
        for (var each in picid) {
            $(picid[each]).fadeOut("slow")
        }
        if (i == n) {
            i = -1
        }
        $(picid[i + 1]).fadeToggle("slow")
        i += 1
    }, time)
    return timer
}

//指示器底按钮
function btnCarousel(btnid, i, n, time) {
    var timer = window.setInterval(function () {
        for (var each in btnid) {
            $(btnid[each]).removeClass("circle-button-hover")
        }
        if (i == n) {
            i = -1
        }
        $(btnid[i + 1]).toggleClass("circle-button-hover")
        i += 1
        window.i = i
    }, time)
    return timer
}

//hover返回函数 底部指示器定位 (需要优化)
function onHover(i) {
    return function () {
        clearTimer()
        window.i = i
        console.log("window.i=" + window.i)
        if (i == 0) {
            fadeOut(["#pic3", "#pic2"])
        }
        if (i == 1) {
            fadeOut(["#pic1", "#pic3"])
        }
        if (i == 2) {
            fadeOut(["#pic1", "#pic2"])
        }
        $(picid[i]).fadeIn("slow")
        cirbtnFade(i)
        pagetimer["timer1"] = carousel(picid, i, 2, 5000)
        pagetimer["timer2"] = btnCarousel(btnid, i, 2, 5000)
    }
}

//左右按钮(要优化)
function leftClick(i) {
    return function () {
        console.log("i="+i)
        clearTimer()
        var a
        if (window.i == 0) {
            a = 2
            fadeOut(["#pic1", "#pic2"])
        } else {
            a = window.i - 1
            if (a == 1) {
                fadeOut(["#pic1", "#pic3"])
            }
            if (a == 0) {
                fadeOut(["#pic2", "#pic3"])
            }
        }
        $(picid[a]).fadeIn("slow")
        cirbtnFade(a)
        window.i = a
        pagetimer['timer1'] = carousel(picid, a, 2, 5000)
        pagetimer['timer2'] = btnCarousel(btnid, a, 2, 5000)
    }
}

function rightClick(i) {
    return function () {
        clearTimer()
        var a
        if (window.i == 2) {
            a = 0
            fadeOut(["#pic2", "#pic3"])
        } else {
            a = window.i + 1
            if (a == 1) {
                fadeOut(["#pic1", "#pic3"])
            }
            if (a == 2) {
                fadeOut(["#pic2", "#pic1"])
            }
        }
        $(picid[a]).fadeIn('slow')
        cirbtnFade(a)
        window.i = a
        pagetimer['timer1'] = carousel(picid, a, 2, 5000)
        pagetimer['timer2'] = btnCarousel(btnid, a, 2, 5000)
    }
}


var pagetimer = {}

pagetimer["timer1"] = carousel(picid, i, 2, 5000)
pagetimer["timer2"] = btnCarousel(btnid, i, 2, 5000)

$("#cirbtn1").hover(onHover(0))
$("#cirbtn2").hover(onHover(1))
$("#cirbtn3").hover(onHover(2))
$("#lbtn").click(leftClick(i))
$("#rbtn").click(rightClick(i))

