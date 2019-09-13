$("#listfore").hover(hoverShow, hoverHide)
$(".right-sidebar").hover(hoverShow, hoverHide)
window.onscroll = scroll

function scroll() {
    if (window.pageYOffset >= 700) {
        console.log("700")
        $(".right-menu").addClass("movedown")
    }
    if (window.pageYOffset < 700) {
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
        console.log("i=" + i)
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

//3
var lpic = ["#bottomimg1", "#bottomimg2"]
var rpic = ["#bottompic1", "#bottompic2"]
$(lpic[1]).hide()
$(rpic[1]).hide()

function changepic(a) {
    return function () {
        console.log("done")
        for (var i = 0; i < lpic.length; i++) {
            $(lpic[i]).hide()
            $(lpic[a]).show()
            $(rpic[i]).hide()
            $(rpic[a]).show()
        }
    }
}

$("#li1").hover(changepic(0))
$("#li2").hover(changepic(1))

//滚动条定时器(推翻一波)
// mouse = null
// onMouse = false
// distance = 0
// dis = 0
// scroll = $("#scrollbtn").position().left;
// $("#scrollbtn").mousedown(function () {
//     var scroll = $("#scrollbtn").position().left;
//     if (scroll < 0) {
//         onMouse = false
//         window.scroll = 0
//     }
//     if (scroll > 880) {
//         onMouse = false
//         window.scroll = 880
//     } else {
//         onMouse = true
//     }
//     if (onMouse) {
//         mouse = window.event.clientX
//         console.log("initial:" + mouse)
//     }

// })
// $(document).mousemove(function () {
//     var scroll = $("#scrollbtn").position().left;
//     console.log("scroll:" + scroll)
//     if (scroll < 0) {
//         onMouse = false
//         window.scroll = 0
//     }
//     if (scroll > 880) {
//         onMouse = false
//         window.scroll = 880
//     }
//     if (onMouse) {
//         var newmouse = window.event.clientX
//         distance = newmouse - mouse
//         console.log("distance:" + distance)
//         $("#scrollbtn").css("left", (dis + distance))
//         // }

//     }
// })
// $(document).mouseup(function () {
//     onMouse = false
//     var a = $("#scrollbtn").position().left
//     console.log("up-scroll:"+a)
//     if (a < 0) {
//         window.scroll = 0
//     }
//     if (a > 880) {
//         window.scroll = 800
//     }
//     console.log("up-scroll:"+window.scroll)
//     dis += distance
//     console.log("dis:" + dis)
//     $("#scrollbtn").css("left", dis + "px")
//     console.log(onMouse)
//     console.log("newX:" + window.event.clientX)
// })


//滚动条 自动滚动
function toLeft() {
    $(".scroll-bar").addClass("toleft")
}

//jq animate()
function changeX(x) {
    $(".scroll-bar").removeClass("toleft")
    $(".scroll-bar").css({
        translate: [x + "px", "0px"]
    })
    $(".scroll-bar").css("transition", "transform 0s")
}

//hover后scroll-bar的过渡效果
function scrollMove(time) {
    $(".scroll-bar").transition({
        translate: ["-1746px", 0]
    }, time, "linear")
}

function move(time) {
    var timer = window.setTimeout(function () {
        toLeft()
    }, time)
    return timer
}

$(document).ready(function () {
    var start = 0
    toLeft()
    $("#discover").hover(function () {
        clearTimeout(pagetimer["timer3"])
        $(".scroll-bar").stop(true)
        $(".scroll").css("opacity", 1)
        var x = parseFloat($("#scrollBar").css('transform').substring(7).split(',')[4])
        start = x
        console.log("start:" + start)
        var scrollBtnX = (-1) * x * 880 / 1746
        changeX(start)
        console.log("scrollX:" + scrollBtnX)
        $("#scrollbtn").css("transform", "translateX(" + scrollBtnX + "px)")
        $("#scrollbtn").css("transition", "transform 0s")
    }, function () {
        $(".scroll").css("opacity", 0)
        // console.log("distance:"+(1746+start))
        var time = Math.ceil(((1746 + start) / 1746) * 30000)
        console.log("time:" + time)
        scrollMove(time)
        pagetimer["timer3"] = move(time)
    })

    //btn点击效果
    var moveBtn = false
    var btnx = 0
    $("#scrollbtn").mousedown(function () {
        clearTimeout(pagetimer["timer3"])
        btnx = window.event.clientX
        var scroll = $("#scrollbtn").position().left;
        console.log("btn-left:" + scroll)
        if (scroll < 880 && scroll > 0) {
            console.log("true")
            moveBtn = true
        } else {
            moveBtn = false
        }
    })
    $(document).mousemove(function () {
        if (moveBtn) {
            var moveDistance = window.event.clientX
            var dis = moveDistance - btnx
            $("#scrollbtn").css("transform", "translateX(" + dis + "px)")
            $("#scrollbtn").css("transition", "transform 0s")
            var barDistance = dis / 960 * 1746
            $(".scroll-bar").css("transform", "translateX(-" + barDistance + "px)")
            $(".scroll-bar").css("transition", "transform 0s")
        }
    })
    $(document).mouseup(function () {
        moveBtn = false
        var x = parseFloat($("#scrollBar").css('transform').substring(7).split(',')[4])
        var time = Math.ceil(((1746 + x) / 1746) * 30000)
        console.log("time:" + time)
        scrollMove(time)
        pagetimer["timer3"] = move(time)
    })
})