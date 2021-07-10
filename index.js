
//Audio de Fundo

const audioFundo = new Audio('./efeitos_sonoros/FundoMusical_quiz.mp3');
const audioErrou = new Audio('./efeitos_sonoros/errou_pergunta3.mp3');
const audioAcertou = new Audio('./efeitos_sonoros/acertou_pergunta.mp3')

//efeitos sonoros
const temp = document.getElementById('tempo');

const audio = new Audio("./efeitos_sonoros/tempo-esgotado.mp3");
const audioTempoAcabando = new Audio("./efeitos_sonoros/tempoAcabando.mp3");

//jQuery

$(document).ready(function () {
    $('#comecar').click(function () {
        $('#titulo').hide();
        $('.tela_quiz').show(600, carregaPerguntas(), function () {
            audioFundo.play();
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

const quiz = [

    {
        pergunta: 'De quem é a famosa frase “Penso, logo existo”?',

        alternativas: [
            'Platão',
            'Galileu',
            'Descartes',
            'Sócrates',
        ],
        resposta: 'Descartes'
    },

    {
        pergunta: 'De onde é a invenção do chuveiro elétrico?',

        alternativas: [
            'França',
            'Inglaterra',
            'Brasil',
            'Autrália'
        ],
        resposta: 'Brasil'
    }
]

const perguntas = document.getElementById('perguntas');

let index = 0;

function carregaPerguntas() {

    if (index < quiz.length) {
        console.log(quiz[index].pergunta);

        perguntas.textContent = quiz[index].pergunta;

        let opcoes = document.querySelectorAll('.opcoes');

        for (let key in quiz[index].alternativas) {

            opcoes[key].textContent = quiz[index].alternativas[key];

            opcoes[key].parentNode.onclick = function () {

                if (quiz[index].alternativas[key] === quiz[index].resposta) {

                    console.log('certo');

                    opcoes[key].style.background = '#00ff00'

                    $(opcoes[key]).prev().css("background", "#00ff00");

                    audioAcertou.play();

                    audioFundo.pause();

                    audioFundo.currentTime = 0;
                    
                    somaPontos();

                    for(let opcao of opcoes){

                        opcao.parentNode.onclick = null;
                    }

                } else {

                    console.log('errado')

                    opcoes[key].style.background = '#ff0000';

                    $(opcoes[key]).prev().css("background", "#ff0000");

                    audioErrou.play();

                    audioFundo.pause();

                    audioFundo.currentTime = 0;

                    for(let opcao of opcoes){
                        
                        opcao.parentNode.onclick = null;
                    }
                }
            }
        }

        temp.textContent = "01:00";

        temp.style.color = 'unset'

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


        index++;
    }
}

let pontos = document.getElementById('pontos');

let point = 0;

function somaPontos() {
     point = point + 1 ;
    
    pontos.textContent = point;
}

