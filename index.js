import { listaPerguntas } from './lista-perguntas.js';

import { timer } from "./timer.js";

//efeitos sonoros

const audioFundo = new Audio('./efeitos_sonoros/FundoMusical_quiz.mp3');
const audioErrou = new Audio('./efeitos_sonoros/errou_pergunta3.mp3');
const audioAcertou = new Audio('./efeitos_sonoros/acertou_pergunta.mp3')
const audio = new Audio('./efeitos_sonoros/tempo-esgotado.mp3');
const audioTempoAcabando = new Audio('./efeitos_sonoros/tempoAcabando.mp3');

const temp = document.getElementById('tempo');

function play() {

  carregaPerguntas();

  audioFundo.play();

}

function next() {

  setTimeout(play, 3000);

}

function stop() {

  const opcoes = document.querySelectorAll('.opcoes');

  for (let opcao of opcoes) {

    opcao.parentNode.onclick = null;

  }

  audioFundo.pause();

  audioFundo.currentTime = 0;

}

//jQuery

$(function () {

  $('#comecar').on('click', function () {

    $('#titulo').hide();

    $('.tela_quiz').show(600, play);

  })

})

const perguntas = document.getElementById('perguntas');

let index = 0;

function carregaPerguntas() {

  if (index < listaPerguntas.length) {

    temp.textContent = '01:00';

    temp.style.color = '';

    const _stopLoop = timer(1, 0, function (time) {

      if (time.toSeconds() <= 10) {

        audioTempoAcabando.play();

        temp.style.transform = 'scale(1.2)';

        setTimeout(function () {

          temp.style.transform = 'scale(1.0)';

        }, 200);

        temp.style.color = 'red';
      }

      temp.textContent = time.toString();

    }, function (time) {

      // o tempo foi parado

      // se o tempo acabou
      if (time.toSeconds() === 0) {

        // console.log('acabou');

        audio.play();

      }

      else {

        // se o tempo foi interrompido

      }

      // independende se acabou ou foi interrompido

      stop();

      // se for antes da ultima questão carregue a próxima
      if (index < listaPerguntas.length - 1) {

        next();

      }

    })

    // prevenção caso o index mude o código não seja afetado
    const questao = listaPerguntas[index];

    perguntas.textContent = `${index + 1}/${listaPerguntas.length} - ${questao.pergunta}`;

    const opcoes = document.querySelectorAll('.opcoes');

    // mudança: de for in para for padrão
    // motivo: key era uma string e a resposta é um número
    for (let _index = 0; _index < questao.alternativas.length; _index++) {

      opcoes[_index].textContent = questao.alternativas[_index];

      // removendo estilos

      opcoes[_index].style.background = '';

      $(opcoes[_index]).prev().css('background', '');

      // adicionando evento de clique
      opcoes[_index].parentNode.onclick = function () {

        if (_index === questao.resposta) {

          console.log('acertou');

          opcoes[_index].style.background = '#00ff00';

          $(opcoes[_index]).prev().css('background', '#00ff00');

          audioAcertou.play();

          somaPontos();

        }

        else {

          console.log('errou');

          opcoes[_index].style.background = '#ff0000';

          $(opcoes[_index]).prev().css('background', '#ff0000');

          audioErrou.play();

          const opcao = opcoes[questao.resposta];

          opcao.style.background = '#00ff00';

          $(opcao).prev().css('background', '#00ff00');

        }

        // independe se acertou ou errou

        _stopLoop();

      }

    }

    index++;

  }
}

let pontos = document.getElementById('pontos');

let point = 0;

function somaPontos() {

  point = point + 1;

  pontos.textContent = point;

}