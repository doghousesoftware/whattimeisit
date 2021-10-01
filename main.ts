input.onButtonPressed(Button.A, function () {
    basic.showString("" + hours + ":" + minutes + ":" + seconds)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + year + "/" + month + "/" + day)
})
let minutes = 0
let hours = 0
let seconds = 0
let day = 0
let month = 0
let year = 0
year = 2021
month = 1
day = 1
seconds = 0
hours = 0
minutes = 0
basic.forever(function () {
    seconds += 1
    if (seconds > 59) {
        seconds = 0
        minutes += 1
    }
    if (minutes > 59) {
        minutes = 0
        hours += 1
    }
    if (hours > 23) {
        hours = 0
        day += 1
    }
    if (day > 30) {
        day = 1
        month += 1
    }
    if (month > 12) {
        month = 1
        year += 1
    }
})
