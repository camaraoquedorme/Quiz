import { listaPerguntas } from "./lista-perguntas.js";

//efeitos sonoros

const audioFundo = new Audio('./efeitos_sonoros/FundoMusical_quiz.mp3');
const audioErrou = new Audio('./efeitos_sonoros/errou_pergunta3.mp3');
const audioAcertou = new Audio('./efeitos_sonoros/acertou_pergunta.mp3')
const audio = new Audio("./efeitos_sonoros/tempo-esgotado.mp3");
const audioTempoAcabando = new Audio("./efeitos_sonoros/tempoAcabando.mp3");

const temp = document.getElementById('tempo');


function play() {

  carregaPerguntas();

  audioFundo.play();

}

//jQuery

$(function () {

  $('#comecar').on("click", function () {

    $('#titulo').hide();

    $('.tela_quiz').show(600, play);
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
      return `0${value}`.slice(-2)
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

const perguntas = document.getElementById('perguntas');

let index = 0;

function carregaPerguntas() {

  if (index < listaPerguntas.length) {

    // prevenção caso o index mude o código não seja afetado
    const _listaPerguntas = listaPerguntas[index];

    console.log(_listaPerguntas.pergunta);

    perguntas.textContent = _listaPerguntas.pergunta;

    let opcoes = document.querySelectorAll('.opcoes');

    // mudança: de for in para for padrão
    // motivo: key era uma string e a resposta é um número
    for (let _index = 0; _index < _listaPerguntas.alternativas.length; _index++) {

      opcoes[_index].textContent = _listaPerguntas.alternativas[_index];

      // removendo estilos

      opcoes[_index].style.background = "";

      $(opcoes[_index]).prev().css("background", "");

      // adicionando evento de clique

      $(opcoes[_index]).parent().on("click", function () {

        if (_index === _listaPerguntas.resposta) {

          console.log('acertou');

          opcoes[_index].style.background = '#00ff00';

          $(opcoes[_index]).prev().css("background", "#00ff00");

          audioAcertou.play();

          somaPontos();

        }

        else {

          console.log('errou');

          opcoes[_index].style.background = '#ff0000';

          $(opcoes[_index]).prev().css("background", "#ff0000");

          audioErrou.play();

          // deprecated

          // for (let key in _listaPerguntas.alternativas) {

          //   if (_listaPerguntas.alternativas[key] === _listaPerguntas.resposta) {

          //     opcoes[key].style.background = '#00ff00';

          //     $(opcoes[key]).prev().css("background", "#00ff00");
          //   }
          // }

          // new code

          const opcao = opcoes[_listaPerguntas.resposta];

          opcao.style.background = '#00ff00';

          $(opcao).prev().css("background", "#00ff00");
        }

        // independe se acertou ou errou

        for (let opcao of opcoes) {

          $(opcao).parent().off("click");

        }

        audioFundo.pause();

        audioFundo.currentTime = 0;

        setTimeout(play, 3000);

      })

    }

    temp.textContent = "01:00";

    temp.style.color = ""

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

  point = point + 1;

  pontos.textContent = point;

}