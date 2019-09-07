$("#listfore").hover(hoverShow, hoverHide)
$(".right-sidebar").hover(hoverShow, hoverHide)

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

//指示器
function carousel(id, i, n, time) {
    var timer = window.setInterval(function () {
        $("#" + id + i).fadeOut("slow")
        if (i == n) {
            i = 0
        }
        $("#" + id + (i + 1)).fadeIn("slow")
        i += 1
        console.log("done")
    }, time)
    console.log("timer:" + timer)
    return timer
}

var pagetimer = {}

pagetimer["timer1"] = carousel("pic", 1, 3, 5000)

// ???
function cirhover(i, n) {
    console.log("i="+i)
    clearTimer()
    var arr = [1, 2, 3]
    for (var i = 0; i < 3; i++) {
        $("#pic" + arr[i]).fadeOut("slow")
    }
    console.log("cirhover")
    $("#pic" + n).fadeIn("slow")
    pagetimer["timer1"] = carousel("pic", i - 1, 3, 5000)
    $("#cirbtn" + n).css("background-color", "#fefefe")
}

function cirhoverLeave(n) {
    $("#cirbtn" + n).css("background-color", "rgba(255,255,255,.4)")
}

var i = 1

$("#cirbtn1").hover(function () {
    clearTimer()
    $("#pic1").fadeIn("slow")
    $("#pic2").fadeOut("slow")
    $("#pic3").fadeOut("slow")
    $("#cirbtn1").css("background-color", "#fefefe")
    pagetimer["timer1"] = carousel("pic", i - 1, 3, 5000)
}, function () {
    $("#cirbtn1").css("background-color", "rgba(255,255,255,.4)")
})
$("#cirbtn2").hover(cirhover(i, 2), cirhoverLeave(2))
$("#cirbtn3").hover(cirhover(i, 3), cirhoverLeave(3))

$("#lbtn").click(function () {
    clearTimer()
    if (i == 1) {
        $("#pic1").fadeOut("slow")
        $("#pic3").fadeIn("slow")
        i = 3
        pagetimer["timer1"] = carousel("pic", i, 3, 5000)
    } else {
        $("#pic" + i).fadeOut("slow")
        i -= 1
        $("#pic" + i).fadeIn("slow")
        pagetimer["timer1"] = carousel("pic", i, 3, 5000)
    }
})

$("#rbtn").click(function () {
    clearTimer()
    if (i == 3) {
        $("#pic3").fadeOut("slow")
        $("#pic1").fadeIn("slow")
        i = 1
        pagetimer["timer1"] = carousel("pic", i, 3, 5000)
    } else {
        $("#pic" + i).fadeOut("slow")
        i += 1
        $("#pic" + i).fadeIn("slow")
        pagetimer["timer1"] = carousel("pic", i, 3, 5000)
    }
})