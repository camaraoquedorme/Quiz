const listaPerguntas = [
  {
    pergunta: "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?",

    alternativas: [
      "Tem entre 2 a 4 litros. São retirados 450 mililitros",
      "Tem entre 4 a 6 litros. São retirados 450 mililitros",
      "Tem 10 litros. São retirados 2 litros",
      "Tem 7 litros. São retirados 1,5 litros",
      "Tem 0,5 litros. São retirados 0,5 litros"
    ],

    resposta: 1
  },
  {
    pergunta: "De quem é a famosa frase “Penso, logo existo”?",

    alternativas: [
      "Platão",
      "Galileu Galilei",
      "Descartes",
      "Sócrates",
      "Francis Bacon"
    ],

    resposta: 2
  },
  {
    pergunta: "De onde é a invenção do chuveiro elétrico?",

    alternativas: [
      "França",
      "Inglaterra",
      "Brasil",
      "Austrália",
      "Itália"
    ],

    resposta: 2
  },
  {
    pergunta: "Quais o menor e o maior país do mundo?",

    alternativas: [
      "Vaticano e Rússia",
      "Nauru e China",
      "Mônaco e Canadá",
      "Malta e Estados Unidos",
      "São Marino e Índia"
    ],

    resposta: 0
  },
  {
    pergunta: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",

    alternativas: [
      "Jânio Quadros",
      "Jacinto Anjos",
      "Getúlio Vargas",
      "João Figueiredo",
      "João Goulart"
    ],

    resposta: 4
  },
  {
    pergunta: "Qual o grupo em que todas as palavras foram escritas corretamente?",

    alternativas: [
      "Asterístico, beneficiente, meteorologia, entertido",
      "Asterisco, beneficente, meteorologia, entretido",
      "Asterisco, beneficente, metereologia, entretido",
      "Asterístico, beneficiente, metereologia, entretido",
      "Asterisco, beneficiente, metereologia, entretido"
    ],

    resposta: 1
  },
  {
    pergunta: "Qual o livro mais vendido no mundo a seguir à Bíblia?",

    alternativas: [
      "O Senhor dos Anéis",
      "Dom Quixote",
      "O Pequeno Príncipe",
      "Ela, a Feiticeira",
      "Um Conto de Duas Cidades"
    ],

    resposta: 1
  },
  {
    pergunta: "Quantas casas decimais tem o número pi?",

    alternativas: [
      "Duas",
      "Centenas",
      "Infinitas",
      "Vinte",
      "Milhares"
    ],

    resposta: 2
  },
  {
    pergunta: "Atualmente, quantos elementos químicos a tabela periódica possui?",

    alternativas: [
      "113",
      "109",
      "108",
      "118",
      "92"
    ],

    resposta: 3
  },
  {
    pergunta: "Quais os países que têm a maior e a menor expectativa de vida do mundo?",

    alternativas: [
      "Japão e Serra Leoa",
      "Austrália e Afeganistão",
      "Itália e Chade",
      "Brasil e Congo",
      "Estados Unidos e Angola"
    ],

    resposta: 0
  },
  {
    pergunta: "O que a palavra legend significa em português?",

    alternativas: [
      "Legenda",
      "Conto",
      "História",
      "Lenda",
      "Legendário"
    ],

    resposta: 3
  },
  {
    pergunta: "Qual o número mínimo de jogadores numa partida de futebol?",

    alternativas: [
      "8",
      "10",
      "9",
      "5",
      "7"
    ],

    resposta: 4
  },
  {
    pergunta: "Quais os principais autores do Barroco no Brasil?",

    alternativas: [
      "Gregório de Matos, Bento Teixeira e Manuel Botelho de Oliveira",
      "Miguel de Cervantes, Gregório de Matos e Danthe Alighieri",
      "Padre Antônio Vieira, Padre Manuel de Melo e Gregório de Matos",
      "Castro Alves, Bento Teixeira e Manuel Botelho de Oliveira",
      "Álvares de Azevedo, Gregório de Matos e Bento Teixeira"
    ],

    resposta: 0
  },
  {
    pergunta: "Quais as duas datas que são comemoradas em novembro?",

    alternativas: [
      "Independência do Brasil e Dia da Bandeira",
      "Proclamação da República e Dia Nacional da Consciência Negra",
      "Dia do Médico e Dia de São Lucas",
      "Dia de Finados e Dia Nacional do Livro",
      "Black Friday e Dia da Árvore"
    ],

    resposta: 1
  },
  {
    pergunta: 'Quem pintou "Guernica"?',

    alternativas: [
      "Paul Cézanne",
      "Pablo Picasso",
      "Diego Rivera",
      "Tarsila do Amaral",
      "Salvador Dalí"
    ],

    resposta: 1
  },
  {
    pergunta: "Quanto tempo a luz do Sol demora para chegar à Terra?",

    alternativas: [
      "12 minutos",
      "1 dia",
      "12 horas",
      "8 minutos",
      "segundos"
    ],

    resposta: 3
  },
  {
    pergunta: "Qual a tradução da frase “Fabiano cogió su saco antes de salir”?",

    alternativas: [
      "Fabiano coseu seu paletó antes de sair",
      "Fabiano fechou o saco antes de sair",
      "Fabiano pegou seu paletó antes de sair",
      "Fabiano cortou o saco antes de cair",
      "Fabiano rasgou seu paletó antes de cair"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual a nacionalidade de Che Guevara?",

    alternativas: [
      "Cubana",
      "Peruana",
      "Panamenha",
      "Boliviana",
      "Argentina"
    ],

    resposta: 4
  },
  {
    pergunta: "Quais são os três predadores do reino animal reconhecidos pela habilidade de caçar em grupo, se camuflar para surpreender as presas e possuir sentidos apurados, respectivamente:",

    alternativas: [
      "Tubarão branco, crocodilo e sucuri",
      "Tigre, gavião e orca",
      "Hiena, urso branco e lobo cinzento",
      "Orca, onça e tarântula",
      "Leão, tubarão branco e urso cinzento"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual a altura da rede de vôlei nos jogos masculino e feminino?",

    alternativas: [
      "2,4 para ambos",
      "2,5 m e 2,0 m",
      "1,8 m e 1,5 m",
      "2,45 m e 2,15 m",
      "2,43 m e 2,24 m"
    ],

    resposta: 4
  },
  {
    pergunta: "Em que ordem surgiram os modelos atômicos?",

    alternativas: [
      "Thomson, Dalton, Rutherford, Rutherford-Bohr",
      "Rutherford-Bohr, Rutherford, Thomson, Dalton",
      "Dalton, Rutherford-Bohr, Thomson, Rutherford",
      "Dalton, Thomson, Rutherford-Bohr, Rutherford",
      "Dalton, Thomson, Rutherford, Rutherford-Bohr"
    ],

    resposta: 4
  },
  {
    pergunta: "Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?",

    alternativas: [
      "Caipora",
      "Saci",
      "Lobisomem",
      "Boitatá",
      "Negrinho do Pastoreio"
    ],

    resposta: 0
  },
  {
    pergunta: "Em que período da pré-história o fogo foi descoberto?",

    alternativas: [
      "Neolítico",
      "Paleolítico",
      "Idade dos Metais",
      "Período da Pedra Polida",
      "Idade Média"
    ],

    resposta: 1
  },
  {


    pergunta: "Qual das alternativas abaixo apenas contêm classes de palavras?",

    alternativas: [
      "Vogais, semivogais e consoantes",
      "Artigo, verbo transitivo e verbo intransitivo",
      "Fonologia, Morfologia e Sintaxe",
      "Hiatos, ditongos e tritongos",
      "Substantivo, verbo e preposição"
    ],

    resposta: 4
  },
  {
    pergunta: "Qual a montanha mais alta do Brasil?",

    alternativas: [
      "Pico da Neblina",
      "Pico Paraná",
      "Monte Roraima",
      "Pico Maior de Friburgo",
      "Pico da Bandeira"
    ],

    resposta: 0
  },
  {
    pergunta: "Qual a velocidade da luz?",

    alternativas: [
      "300 000 000 metros por segundo (m/s)",
      "150 000 000 metros por segundo (m/s)",
      "199 792 458 metros por segundo (m/s)",
      "299 792 458 metros por segundo (m/s)",
      "30 000 000 metros por segundo (m/s)"
    ],

    resposta: 3
  },
  {
    pergunta: "Em qual local da Ásia o português é língua oficial?",

    alternativas: [
      "Índia",
      "Filipinas",
      "Moçambique",
      "Macau",
      "Portugal"
    ],

    resposta: 3
  },
  {
    pergunta: '"It is six twenty" ou "twenty past six". Que horas são em inglês?',

    alternativas: [
      "12:06",
      "6:20",
      "2:20",
      "6:02",
      "12:20"
    ],

    resposta: 1
  },
  {
    pergunta: "Quem é o autor de “O Príncipe”?",

    alternativas: [
      "Maquiavel",
      "Antoine de Saint-Exupéry",
      "Montesquieu",
      "Thomas Hobbes",
      "Rousseau"
    ],

    resposta: 0
  },
  {
    pergunta: "Como é a conjugação do verbo caber na 1.ª pessoa do singular do presente do indicativo?",

    alternativas: [
      "Eu caibo",
      "Ele cabe",
      "Que eu caiba",
      "Eu cabo",

      "Nenhuma das alternativas"
    ],

    resposta: 0
  },
  {
    pergunta: "Quais destas construções famosas ficam nos Estados Unidos?",

    alternativas: [
      "Estátua da Liberdade, Golden Gate Bridge e Empire State Building",
      "Estátua da Liberdade, Big Ben e The High Line",
      "Angkor Wat, Taj Mahal e Skywalk no Grand Canyon",
      "Lincoln Memorial, Sidney Opera House e Burj Khalifa",
      "30 St Mary Axe, The High Line e Residencial 148 Spruce Street"
    ],

    resposta: 0
  },
  {
    pergunta: "Quais destas doenças são sexualmente transmissíveis?",

    alternativas: [
      "Aids, tricomoníase e ebola",
      "Chikungunya, aids e herpes genital",
      "Gonorreia, clamídia e sífilis",
      "Botulismo, cistite e gonorreia",
      "Hepatite B, febre tifoide e hanseníase"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual destes países é transcontinental?",

    alternativas: [
      "Rússia",
      "Filipinas",
      "Istambul",
      "Groenlândia",
      "Tanzânia"
    ],

    resposta: 0
  },
  {
    pergunta: "Em qual das orações abaixo a palavra foi empregada incorretamente?",

    alternativas: [
      "Mais uma vez, portou-se mal.",
      "É um homem mal.",
      "Esse é o mal de todos.",
      "Mal falou nele, o fulano apareceu.",
      "É um mau vendedor."
    ],

    resposta: 1
  },
  {
    pergunta: "Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?",

    alternativas: [
      "A Filosofia",
      "A Biologia",
      "A Matemática",
      "A Astronomia",
      "A Mitologia"
    ],

    resposta: 4
  },
  {


    pergunta: "Qual das alternativas menciona apenas símbolos nacionais?",

    alternativas: [
      "Bandeira insígnia da presidência, bandeira nacional, brasão, hinos e selo",
      "Bandeira nacional, armas nacionais, hino nacional e selo nacional",
      "Bandeira nacional, brasão, hino nacional e hino da independência",
      "Bandeira nacional, cores nacionais, hino nacional e hino da independência",
      "Bandeira insígnia da presidência, brasão flora e fauna e hinos"
    ],

    resposta: 1
  },
  {
    pergunta: "Quais os planetas do sistema solar?",

    alternativas: [
      "Terra, Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio",
      "Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Terra, Urano, Vênus",
      "Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio",
      "Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Sol, Terra, Urano, Vênus",
      "Terra, Vênus, Saturno, Júpiter, Marte, Netuno, Mercúrio"
    ],

    resposta: 0
  },
  {
    pergunta: "Qual era o nome de Aleijadinho?",

    alternativas: [
      "Alexandrino Francisco Lisboa",
      "Manuel Francisco Lisboa",
      "Alex Francisco Lisboa",
      "Francisco Antônio Lisboa",
      "Antônio Francisco Lisboa"
    ],

    resposta: 4
  },
  {
    pergunta: "Júpiter e Plutão são os correlatos romanos de quais deuses gregos?",

    alternativas: [
      "Ares e Hermes",
      "Cronos e Apolo",
      "Zeus e Hades",
      "Dionísio e Deméter",
      "Zeus e Ares"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual o maior animal terrestre?",

    alternativas: [
      "Baleia Azul",
      "Dinossauro",
      "Elefante africano",
      "Tubarão Branco",
      "Girafa"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual o tema do famoso discurso Eu Tenho um Sonho, de Martin Luther King?",

    alternativas: [
      "Igualdade das raças",
      "Justiça para os menos favorecidos",
      "Intolerância religiosa",
      "Prêmio Nobel da Paz",
      "Luta contra o Apartheid"
    ],

    resposta: 0
  },
  {
    pergunta: "Que líder mundial ficou conhecida como “Dama de Ferro”?",

    alternativas: [
      "Dilma Rousseff",
      "Angela Merkel",
      "Margaret Thatcher",
      "Hillary Clinton",
      "Christine Lagarde"
    ],

    resposta: 2
  },
  {
    pergunta: "O que são Acordo de Paris e Tríplice Aliança respectivamente?",

    alternativas: [
      "Acordo ortográfico entre países cuja língua oficial é o francês e Acordo de cooperação financeira internacional entre as três maiores potências mundiais",
      "Acordo entre países europeus acerca da imigração e Acordo econômico entre Inglaterra, Rússia a França",
      "Acordo entre vários países acerca das consequências do aquecimento global e Acordo de cooperação financeira internacional entre as três maiores potências mundiais",
      "Acordo de cooperação financeira internacional entre as três maiores potências mundiais e Acordo entre vários países acerca das consequências do aquecimento global",
      "Acordo entre vários países acerca das consequências do aquecimento global e Acordo entre Alemanha, império Austro-Húngaro e Itália acerca de apoio em caso de guerra"
    ],

    resposta: 4
  },
  {
    pergunta: "Quais os nomes dos três Reis Magos?",

    alternativas: [
      "Gaspar, Nicolau e Natanael",
      "Belchior, Gaspar e Baltazar",
      "Belchior, Gaspar e Nataniel",
      "Gabriel, Benjamim e Melchior",
      "Melchior, Noé e Galileu"
    ],

    resposta: 1
  },
  {
    pergunta: "Quais os principais heterônimos de Fernando Pessoa?",

    alternativas: [
      "Alberto Caeiro, Ricardo Reis e Álvaro de Campos",
      "Ariano Suassuna, Raul Bopp e Quincas Borba",
      "Bento Teixeira, Ricardo Reis e Haroldo de Campos",
      "Alberto Caeiro, Ricardo Leite e Augusto de Campos",
      "Bento Teixeira, Ricardo Reis e Augusto de Campos"
    ],

    resposta: 0
  },
  {
    pergunta: "Qual a religião monoteísta que conta com o maior número de adeptos no mundo?",

    alternativas: [
      "Judaísmo",
      "Zoroastrismo",
      "Islamismo",
      "Cristianismo",
      "Hinduísmo"
    ],

    resposta: 3
  },
  {
    pergunta: "Qual desses filmes foi baseado na obra de Shakespeare?",

    alternativas: [
      "Muito Barulho por Nada (2012)",
      "Capitães de Areia (2011)",
      "A Dama das Camélias (1936)",
      "A Revolução dos Bichos (1954)",
      "Excalibur (1981)"
    ],

    resposta: 0
  },
  {
    pergunta: "Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?",

    alternativas: [
      "Yuri Gagarin, em 1961",
      "Buzz Aldrin, em 1969",
      "Charles Conrad, em 1969",
      "Charles Duke, em 1971",
      "Neil Armstrong, em 1969."
    ],

    resposta: 4
  },
  {
    pergunta: "Qual o nome do cientista que descobriu o processo de pasteurização e a vacina contra a raiva?",

    alternativas: [
      "Marie Curie",
      "Blaise Pascal",
      "Louis Pasteur",
      "Antoine Lavoisier",
      "Charles Darwin"
    ],

    resposta: 2
  },
  {
    pergunta: "As pessoas de qual tipo sanguíneo são consideradas doadores universais?",

    alternativas: [
      "Tipo A",
      "Tipo B",
      "Tipo O",
      "Tipo AB",
      "Tipo ABO"
    ],

    resposta: 2
  },
  {
    pergunta: "Quais são os cromossomos que determinam o sexo masculino?",

    alternativas: [
      "Os V",
      "Os X",
      "Os Y",
      "Os W",
      "Os Z"
    ],

    resposta: 2
  },
  {
    pergunta: "Em que estado australiano fica situada a cidade de Sydney?",

    alternativas: [
      "Nova Gales do Sul",
      "Victoria",
      "Tasmânia",
      "Queensland",
      "Norfolk"
    ],

    resposta: 0
  },
  {
    pergunta: "Que organização juvenil foi fundado por Baden-Powell?",

    alternativas: [
      "A juventude socialista",
      "O escotismo",
      "O clube dos aventureiros",
      "A associação juvenil",
      "A Organização mundial da juventude"
    ],

    resposta: 1
  },
  {
    pergunta: "Quem amamentou os gêmeos Rômulo e Remo?",

    alternativas: [
      "uma cabra",
      "uma vaca",
      "uma ovelha",
      "uma gata",
      "uma loba"
    ],

    resposta: 4
  },
  {
    pergunta: "No exterior de que famoso edifício francês foi construída uma enorme pirâmide de vidro em 1989?",

    alternativas: [
      "Torre Eiffel",
      "Petit Palais",
      "Grand Palais",
      "Museu do Louvre",
      "Arco do Triunfo"
    ],

    resposta: 3
  },
  {
    pergunta: "Como se chamam os vasos que transportam sangue do coração para a periferia do corpo?",

    alternativas: [
      "veias",
      "átrios",
      "ventrículos",
      "artérias",
      "aurículos"
    ],

    resposta: 3
  },
  {
    pergunta: "Com que dois países faz fronteira o Equador?",

    alternativas: [
      "com o Brasil e com a Colômbia",
      "com a Colômbia e com a Venezuela",
      "com a Colômbia e com o Peru",
      "com o Peru e com o Equador",
      "com o Equador e o Brasil"
    ],

    resposta: 2
  },
  {
    pergunta: "Que animal gruguleja?",

    alternativas: [
      "o pavão",
      "a garça",
      "o papagaio",
      "a cacatua",
      "o peru"
    ],

    resposta: 4
  },
  {
    pergunta: "Qual é o maior arquipélago da Terra?",

    alternativas: [
      "a Filipinas",
      "a Indonésia",
      "as Bahamas",
      "a Finlândia",
      "as Maldivas"
    ],

    resposta: 1
  },
  {
    pergunta: "Que substância é absorvida pelas plantas e expirada por todos os seres vivos?",

    alternativas: [
      "o oxigênio",
      "o nitrogênio",
      "o nitrato de sódio",
      "o dióxido de ferro",
      "o dióxido de carbono"
    ],

    resposta: 4
  },
  {
    pergunta: "Em que oceano fica Madagascar?",

    alternativas: [
      "Oceano Índico",
      "Oceano Antártico",
      "Oceano Atlântico",
      "Oceano Pacífico",
      "Oceano Ártico"
    ],

    resposta: 0
  },
  {
    pergunta: "Que artista é conhecido como um dos expoentes máximos do Ready-Mades?",

    alternativas: [
      "Pablo Picasso",
      "Salvador Dalí",
      "Marcel Duchamp",
      "Van Gogh",
      "Leonardo da Vinci"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual o metal cujo símbolo químico é o Au?",

    alternativas: [
      "Cobre",
      "Prata",
      "Mercúrio",
      "Ouro",
      "Manganês"
    ],

    resposta: 3
  },
  {
    pergunta: "Em que século o continente europeu foi devastado pela peste bubônica?",

    alternativas: [
      "No século X",
      "No século XI",
      "No século XII",
      "No século XIII",
      "No século XIV"
    ],

    resposta: 4
  },
  {
    pergunta: "Quem viveu, segundo a bíblia, 969 anos?",

    alternativas: [
      "Jesus Cristo",
      "Noé",
      "Matusalém",
      "Benjamim",
      "Abel"
    ],

    resposta: 2
  },
  {
    pergunta: "Em que cidade ocorreu a Eco-92, a Conferência das Nações Unidas sobre ambiente e desenvolvimento?",

    alternativas: [
      "Buenos Aires",
      "Rio de Janeiro",
      "Montevidéu",
      "Assunção",
      "Caracas"
    ],

    resposta: 1
  },
  {
    pergunta: "Quem pintou o teto da capela sistina?",

    alternativas: [
      "Michelangelo",
      "Leonardo da Vinci",
      "Rafael",
      "Sandro Botticelli",
      "Donatello"
    ],

    resposta: 0
  },
  {
    pergunta: "Quantos graus são necessários para que dois ângulos sejam complementares?",

    alternativas: [
      "45",
      "60",
      "90",
      "180",
      "360"
    ],

    resposta: 2
  },
  {
    pergunta: "Quem foi o criador da tragédia grega?",

    alternativas: [
      "Homero",
      "Eurípedes",
      "Plutarco",
      "Ésquilo",
      "Sófocles"
    ],

    resposta: 3
  },
  {
    pergunta: "Jim Morrison era vocalista de que grupo?",

    alternativas: [
      "The Police",
      "The Doors",
      "Pink Floyd",
      "Nirvana",
      "AC/DC"
    ],

    resposta: 1
  }
];