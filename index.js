//Audio de Fundo

const audioFundo = new Audio('./efeitos_sonoros/FundoMusical_quiz.mp3')

//efeitos sonoros
const temp = document.getElementById('tempo');

const audio = new Audio("./efeitos_sonoros/tempo-esgotado.mp3");
const audioTempoAcabando = new Audio("./efeitos_sonoros/tempoAcabando.mp3");

//jQuery

$(document).ready(function () {
    $('#comecar').click(function () {
        $('#titulo').hide();
        $('.tela_quiz').show(600, function () {
            audioFundo.play();

            setTimeout(function () {

                timer(1, 0, function (time) {

                    if (time.toSeconds() <= 10) {

                        audioTempoAcabando.play();

                        temp.style.transform = 'scale(1.2)';

                        setTimeout(function () {

                            temp.style.transform = 'scale(1.0)';

                        }, 200);

                        temp.style.color = 'red';
                    }

                    temp.textContent = time.toString();

                }, function () {

                    console.log('acabou');

                    audio.play();

                    audioFundo.pause();

                    audioFundo.currentTime = 0;
                })

            }, 1000)

        });

    })
})

class Time {
    constructor(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
    }

    toSeconds() {
        return (this.minutes * 60) + this.seconds;
    }

    toString() {
        function slice(value) {
            return `00${value}`.slice(-2)
        }
        return `${slice(this.minutes)}:${slice((this.seconds))}`;
    }

    static fromSeconds(seconds) {

        const _seconds = seconds % 60;

        const _minutes = (seconds - _seconds) / 60;

        return new Time(_minutes, _seconds);
    }
}

function getSeconds() {
    return Math.floor(Date.now() / 1000);
}

function timer(minutes, seconds, callback, onfinish) {
    const time = new Time(minutes, seconds);
    const end = getSeconds() + time.toSeconds();

    function loop() {
        const _now = end - getSeconds();
        const _time = Time.fromSeconds(_now);

        if (_time.toSeconds() > 0) {

            callback(_time);
            setTimeout(loop, 1000)

        }

        else {
            callback(new Time(0, 0));
            onfinish();
        }
    }
    loop();
}

