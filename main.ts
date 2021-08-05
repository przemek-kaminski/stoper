input.onButtonPressed(Button.A, function () {
    if (blokada == 0) {
        blokada = 1
    } else {
        blokada = 0
    }
})
input.onButtonPressed(Button.B, function () {
    czas_na_stoperze = 0
    blokada = 0
    for (let index = 0; index <= 4; index++) {
        for (let index = 0; index <= 4; index++) {
            led.unplot(index, index)
        }
    }
})
let czas_na_stoperze_setne_sekundy = 0
let czas_na_stoperze = 0
let blokada = 0
blokada = 0
czas_na_stoperze = 0
loops.everyInterval(1000, function () {
    if (blokada == 1) {
        czas_na_stoperze += 1
    }
    if (czas_na_stoperze == 1) {
        led.plot(0, 4)
    } else if (czas_na_stoperze == 2) {
        led.plot(1, 4)
    } else if (czas_na_stoperze == 3) {
        led.plot(1, 4)
    } else if (czas_na_stoperze == 4) {
        led.plot(0, 3)
    } else if (czas_na_stoperze == 5) {
        led.plot(1, 3)
    } else if (czas_na_stoperze == 6) {
        led.plot(0, 2)
    } else if (czas_na_stoperze == 7) {
        led.plot(1, 2)
    } else if (czas_na_stoperze == 8) {
        led.plot(0, 1)
    } else if (czas_na_stoperze == 9) {
        led.plot(1, 1)
    } else if (czas_na_stoperze == 10) {
        led.plot(0, 0)
    } else if (czas_na_stoperze == 11) {
        led.plot(1, 0)
    } else {
    	
    }
    for (let index = 0; index <= 4; index++) {
        for (let index = 0; index <= 2; index++) {
            led.unplot(index + 2, index)
        }
    }
})
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
    if (blokada == 1) {
        czas_na_stoperze_setne_sekundy += 1
    }
    if (czas_na_stoperze_setne_sekundy == 1) {
        led.plot(3, 4)
    } else if (czas_na_stoperze_setne_sekundy == 2) {
        led.plot(4, 4)
    } else if (czas_na_stoperze_setne_sekundy == 3) {
        led.plot(4, 4)
    } else if (czas_na_stoperze_setne_sekundy == 4) {
        led.plot(4, 3)
    } else if (czas_na_stoperze_setne_sekundy == 5) {
        led.plot(3, 3)
    } else if (czas_na_stoperze_setne_sekundy == 6) {
        led.plot(3, 2)
    } else if (czas_na_stoperze_setne_sekundy == 7) {
        led.plot(4, 2)
    } else if (czas_na_stoperze_setne_sekundy == 8) {
        led.plot(3, 1)
    } else if (czas_na_stoperze_setne_sekundy == 9) {
        led.plot(4, 1)
    } else if (czas_na_stoperze_setne_sekundy == 10) {
        led.plot(3, 0)
    } else if (czas_na_stoperze_setne_sekundy == 11) {
        led.plot(4, 0)
    } else {
    	
    }
})
