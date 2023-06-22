// Funções Quiz cat

//função da primeira questão
function funcao1() {
  //variável que pega a primeira resposta através do seu id
  let resposta_true1 = document.getElementById('resp_true1');
  let resp_false1 = document.getElementById('resp_false1');
  let resp_false12 = document.getElementById('resp_false1.2');

  //condições que mostram os alerts com a resposta correta e explicação
  if (resposta_true1.checked) {
    alert(
      'ACERTOU! A partir de um ano, o gato já atingiu sua maturidade, o que diminui as chances de desenvolver algum tipo de obstrução das vias urinárias. No entando, não esqueça de manter o seu gatinho preso em casa até o período ideal da castração, isso evita brigas, doenças e filhinhos sem pai! ;-) '
    );
  } else if (resp_false1.checked) {
    alert(
      'ERROU! Antes dos 6 meses os testículos do macho ainda não estão presentes na bolsa escrotal, caso passe deste período e o gatinho não apresente os dois testículos ele pode desenvolver algum problema.'
    );
  } else if (resp_false12.checked) {
    alert(
      'ERROU! Antes de 1 ano o gatinho ainda não atingiu a maturidade, caso seja castrado muito novinho ele pode apresentar problemas no trato urinário, como Doença do Trato Urinário.'
    );
  } else {
    alert('Por favor, selecione uma resposta');
  }
}

function funcao2() {
  let resposta_true2 = document.getElementById('resp_true2');
  let resp_false2 = document.getElementById('resp_false2');
  let resp_false22 = document.getElementById('resp_false2.2');

  if (resposta_true2.checked) {
    alert(
      'ACERTOU! A partir dos 6 meses a fêmea já está próxima da maturidade sexual, sendo o período ideal para a castração. '
    );
  } else if (resp_false2.checked) {
    alert(
      'ERROU! Ao contrário do macho, na fêmea não há necessidade de esperar o primeiro o cio.'
    );
  } else if (resp_false22.checked) {
    alert(
      'ERROU! Não há necessidade de realizar uma primeira gestação para realizar a castração.'
    );
  } else {
    alert('Por favor, selecione uma resposta');
  }
}

function funcao3() {
  let resposta_true3 = document.getElementById('resp_true3');
  let resp_false3 = document.getElementById('resp_false3');
  let resp_false32 = document.getElementById('resp_false3.2');

  if (resposta_true3.checked) {
    alert(
      'ACERTOU! O cio da gata é fotodependente, ou seja, dependente da luz solar e dos dias mais quentes.'
    );
  } else if (resp_false3.checked) {
    alert(
      'ERROU! Apesar de parecer uma frequenta alta, os cio das gatas é irregular e pode apresentar mais de um no mês.'
    );
  } else if (resp_false32.checked) {
    alert(
      'ERROU! O cio da gata é irregular, não possui uma frequencia fixa, sendo mais frequente nos dias quentes.'
    );
  } else {
    alert('Por favor, selecione uma resposta');
  }
}

function funcao4() {
  let resposta_true4 = document.getElementById('resp_true4');
  let resp_false4 = document.getElementById('resp_false4');
  let resp_false42 = document.getElementById('resp_false4.2');

  if (resposta_true4.checked) {
    alert(
      'ACERTOU! Gatos não bebem tanta água como deveriam, o sache auxilia muito na ingestão hídrica, logo não há nenhum problema em oferecer todos os dias.'
    );
  } else if (resp_false4.checked) {
    alert('ERROU! O sache auxilia muito na ingestão hídrica dos gatos.');
  } else if (resp_false42.checked) {
    alert(
      'ERROU! O sache, por ser um alimento úmido, auxilia muito na ingestão hídrica e o ideal seria que gatos comessem somente alimentação úmida.'
    );
  } else {
    alert('Por favor, selecione uma resposta');
  }
}

// Funções Quiz dog

function funcao5() {
  let resposta_true1 = document.getElementById('dog_true1');
  let resp_false1 = document.getElementById('dog_false1');
  let resp_false12 = document.getElementById('dog_false1.2');

  if (resposta_true1.checked) {
    alert(
      'ACERTOU! A partir de um ano, o gato já atingiu sua maturidade, o que diminui as chances de desenvolver algum tipo de obstrução das vias urinárias. No entando, não esqueça de manter o seu gatinho preso em casa até o período ideal da castração, isso evita brigas, doenças e filhinhos sem pai! ;-) '
    );
  } else if (resp_false1.checked) {
    alert('Errou! bla bla bla');
  } else if (resp_false12.checked) {
    alert('Errou! bla bla bla 2');
  } else {
    alert('Por favor, selecione uma resposta');
  }
}

function funcao6() {
  let resposta_true2 = document.getElementById('dog_true2');
  let resp_false2 = document.getElementById('dog_false2');
  let resp_false22 = document.getElementById('dog_false2.2');

  if (resposta_true2.checked) {
    alert(
      'ACERTOU! A partir de um ano, o gato já atingiu sua maturidade, o que diminui as chances de desenvolver algum tipo de obstrução das vias urinárias. No entando, não esqueça de manter o seu gatinho preso em casa até o período ideal da castração, isso evita brigas, doenças e filhinhos sem pai! ;-) '
    );
  } else if (resp_false2.checked) {
    alert('Errou! bla bla bla');
  } else if (resp_false22.checked) {
    alert('Errou! bla bla bla 2');
  } else {
    alert('Por favor, selecione uma resposta');
  }
}

function funcao7() {
  let resposta_true3 = document.getElementById('dog_true3');
  let resp_false3 = document.getElementById('dog_false3');
  let resp_false32 = document.getElementById('dog_false3.2');

  if (resposta_true3.checked) {
    alert(
      'ACERTOU! A partir de um ano, o gato já atingiu sua maturidade, o que diminui as chances de desenvolver algum tipo de obstrução das vias urinárias. No entando, não esqueça de manter o seu gatinho preso em casa até o período ideal da castração, isso evita brigas, doenças e filhinhos sem pai! ;-) '
    );
  } else if (resp_false3.checked) {
    alert('Errou! bla bla bla');
  } else if (resp_false32.checked) {
    alert('Errou! bla bla bla 2');
  } else {
    alert('Por favor, selecione uma resposta');
  }
}

function funcao8() {
  let resposta_true4 = document.getElementById('dog_true4');
  let resp_false4 = document.getElementById('dog_false4');
  let resp_false42 = document.getElementById('dog_false4.2');

  if (resposta_true4.checked) {
    alert(
      'ACERTOU! A partir de um ano, o gato já atingiu sua maturidade, o que diminui as chances de desenvolver algum tipo de obstrução das vias urinárias. No entando, não esqueça de manter o seu gatinho preso em casa até o período ideal da castração, isso evita brigas, doenças e filhinhos sem pai! ;-) '
    );
  } else if (resp_false4.checked) {
    alert('Errou! bla bla bla');
  } else if (resp_false42.checked) {
    alert('Errou! bla bla bla 2');
  } else {
    alert('Por favor, selecione uma resposta');
  }
}

// Função do index

//função para a página inicial que leva para os quiz específico
function funcao_escolha() {
  //variável que pega as respostas pelo id
  let escolha_dog = document.getElementById('dog');
  let escolha_cat = document.getElementById('cat');

  //condições para levar para a pag do quiz escolhido
  if (escolha_dog.checked) {
    window.location.href = 'quiz_dog.html';
  } else if (escolha_cat.checked) {
    window.location.href = 'quiz_cat.html';
  } else {
    alert('Escolha uma opção');
  }
}

// Função contagem regressiva
function startTimer(duracao, display) {
  var timer = duracao,
    minutos,
    segundos;

  setInterval(function () {
    //montar os minutos e segundos
    minutos = parseInt(timer / 60, 10);
    segundos = parseInt(timer % 60, 10);
    //Adicionar um 0 na frente dos minutos e segundos para que ele tenha duas casas sempre que for menor do que 10
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    display.textContent = minutos + ':' + segundos;
    if (--timer < 0) {
      timer = duracao;
    }
    //Após o timer zerar, volta pra página inicial
    if (timer === 0) {
      window.location.href = 'index.html';
    }
  }, 1000);
}

// Incializa quando a página carrega
window.onload = function () {
  // Converter para segundos
  var duration = 60 * 2;
  // selecionando o timer
  display = document.querySelector('#timer');
  // iniciando o timer
  startTimer(duration, display);
};
