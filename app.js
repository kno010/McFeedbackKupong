var couponSlider = document.getElementById("couponSlider");

document.getElementById('confimationImage').style.backgroundImage = "url('" + imageLink + "')";

function proceed() {

    document.getElementById('slider').style.display = "none";
    document.getElementById('overlay').style.display = "none";
    document.getElementById("codeFlash").style.display = "block";
    window.setTimeout(useCupon, 15000);
    window.setTimeout(function(){document.querySelector("body").addEventListener("click", useCupon);}, 250);
}

function useCupon() {
    // document.getElementById("codeFlash").style.display = "none";
    window.location.href = useUrl;
}

function cancel() {
    document.getElementById("overlay").style.display = "none";
    couponSlider.value = 0;
}

addEventListener(couponSlider, 'mouseup', sliderUnlock);
addEventListener(couponSlider, 'touchend', sliderUnlock);
addEventListener(couponSlider, 'mousedown', resetInterval);
addEventListener(couponSlider, 'touchstart', resetInterval);

function sliderUnlock() {
    var theRange = parseInt(this.value, 10);
    if (theRange === 100) {
        unlock();
    } else {
        window.timer = setInterval(function() {
            if (couponSlider.value !== 0) {
                couponSlider.value = theRange--;
            }
        }, 10);
    }
}

function resetInterval() {
    clearInterval(window.timer);
}


function unlock() {
    document.getElementById("overlay").style.display = "block";
}

var timeLeft = true;

function getTimeRemaining(endtime) {
    var t = expires - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 72 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

if (timeLeft === false) {
    document.getElementById("clockdiv").style.opacity = "0.2";
    document.getElementById("slider").style.display = "none";
    document.getElementById("utgatt").style.display = "block";
}

function addEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
    el.attachEvent('on' + eventName, function(){
      handler.call(el);
    });
  }
}
