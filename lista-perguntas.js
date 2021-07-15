const listaPerguntas = [
  {
    pergunta: "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?",

    alternativas: [
      "Tem entre 4 a 6 litros. São retirados 450 mililitros",
      "Tem 10 litros. São retirados 2 litros",
      "Tem 7 litros. São retirados 1,5 litros",
      "Tem 0,5 litros. São retirados 0,5 litros"
    ],

    resposta: 0
  },
  {
    pergunta: "De quem é a famosa frase “Penso, logo existo”?",

    alternativas: [
      "Platão",
      "Galileu Galilei",
      "Descartes",
      "Sócrates"
    ],

    resposta: 2
  },
  {
    pergunta: "De onde é a invenção do chuveiro elétrico?",

    alternativas: [
      "Inglaterra",
      "Brasil",
      "Austrália",
      "Itália"
    ],

    resposta: 1
  },
  {
    pergunta: "Quais o menor e o maior país do mundo?",

    alternativas: [
      "Vaticano e Rússia",
      "Nauru e China",
      "Mônaco e Canadá",
      "Malta e Estados Unidos"
    ],

    resposta: 0
  },
  {
    pergunta: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",

    alternativas: [
      "Jânio Quadros",
      "Jacinto Anjos",
      "João Figueiredo",
      "João Goulart"
    ],

    resposta: 3
  },
  {
    pergunta: "Qual o grupo em que todas as palavras foram escritas corretamente?",

    alternativas: [
      "Asterístico, beneficiente, meteorologia, entertido",
      "Asterisco, beneficente, meteorologia, entretido",
      "Asterístico, beneficiente, metereologia, entretido",
      "Asterisco, beneficiente, metereologia, entretido"
    ],

    resposta: 1
  },
  {
    pergunta: "Qual o livro mais vendido no mundo a seguir à Bíblia?",

    alternativas: [
      "Dom Quixote",
      "O Pequeno Príncipe",
      "Ela, a Feiticeira",
      "Um Conto de Duas Cidades"
    ],

    resposta: 0
  },
  {
    pergunta: "Quantas casas decimais tem o número pi?",

    alternativas: [
      "Duas",
      "Infinitas",
      "Vinte",
      "Milhares"
    ],

    resposta: 1
  },
  {
    pergunta: "Atualmente, quantos elementos químicos a tabela periódica possui?",

    alternativas: [
      "109",
      "108",
      "118",
      "92"
    ],

    resposta: 2
  },
  {
    pergunta: "Quais os países que têm a maior e a menor expectativa de vida do mundo?",

    alternativas: [
      "Japão e Serra Leoa",
      "Austrália e Afeganistão",
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
      "Lenda"
    ],

    resposta: 3
  },
  {
    pergunta: "Qual o número mínimo de jogadores numa partida de futebol?",

    alternativas: [
      "8",
      "10",
      "5",
      "7"
    ],

    resposta: 3
  },
  {
    pergunta: "Quais os principais autores do Barroco no Brasil?",

    alternativas: [
      "Gregório de Matos, Bento Teixeira e Manuel Botelho de Oliveira",
      "Miguel de Cervantes, Gregório de Matos e Danthe Alighieri",
      "Padre Antônio Vieira, Padre Manuel de Melo e Gregório de Matos",
      "Castro Alves, Bento Teixeira e Manuel Botelho de Oliveira"
    ],

    resposta: 0
  },
  {
    pergunta: "Quais as duas datas que são comemoradas em novembro?",

    alternativas: [
      "Independência do Brasil e Dia da Bandeira",
      "Proclamação da República e Dia Nacional da Consciência Negra",
      "Dia do Médico e Dia de São Lucas",
      "Black Friday e Dia da Árvore"
    ],

    resposta: 1
  },
  {
    pergunta: "Quem pintou \"Guernica\"?",

    alternativas: [
      "Paul Cézanne",
      "Pablo Picasso",
      "Diego Rivera",
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
      "8 minutos"
    ],

    resposta: 3
  },
  {
    pergunta: "Qual a tradução da frase “Fabiano cogió su saco antes de salir”?",

    alternativas: [
      "Fabiano coseu seu paletó antes de sair",
      "Fabiano fechou o saco antes de sair",
      "Fabiano pegou seu paletó antes de sair",
      "Fabiano cortou o saco antes de cair"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual a nacionalidade de Che Guevara?",

    alternativas: [
      "Cubana",
      "Panamenha",
      "Boliviana",
      "Argentina"
    ],

    resposta: 3
  },
  {
    pergunta: "Quais são os três predadores do reino animal reconhecidos pela habilidade de caçar em grupo, se camuflar para surpreender as presas e possuir sentidos apurados, respectivamente:",

    alternativas: [
      "Tubarão branco, crocodilo e sucuri",
      "Tigre, gavião e orca",
      "Hiena, urso branco e lobo cinzento",
      "Orca, onça e tarântula"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual a altura da rede de vôlei nos jogos masculino e feminino?",

    alternativas: [
      "2,4 para ambos",
      "1,8 m e 1,5 m",
      "2,45 m e 2,15 m",
      "2,43 m e 2,24 m"
    ],

    resposta: 3
  },
  {
    pergunta: "Em que ordem surgiram os modelos atômicos?",

    alternativas: [
      "Thomson, Dalton, Rutherford, Rutherford-Bohr",
      "Rutherford-Bohr, Rutherford, Thomson, Dalton",
      "Dalton, Rutherford-Bohr, Thomson, Rutherford",
      "Dalton, Thomson, Rutherford, Rutherford-Bohr"
    ],

    resposta: 3
  },
  {
    pergunta: "Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?",

    alternativas: [
      "Caipora",
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
      "Idade Média"
    ],

    resposta: 1
  },
  {
    pergunta: "Qual das alternativas abaixo apenas contêm classes de palavras?",

    alternativas: [
      "Artigo, verbo transitivo e verbo intransitivo",
      "Fonologia, Morfologia e Sintaxe",
      "Hiatos, ditongos e tritongos",
      "Substantivo, verbo e preposição"
    ],

    resposta: 3
  },
  {
    pergunta: "Qual a montanha mais alta do Brasil?",

    alternativas: [
      "Pico da Neblina",
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
      "299 792 458 metros por segundo (m/s)",
      "30 000 000 metros por segundo (m/s)"
    ],

    resposta: 2
  },
  {
    pergunta: "Em qual local da Ásia o português é língua oficial?",

    alternativas: [
      "Índia",
      "Moçambique",
      "Macau",
      "Portugal"
    ],

    resposta: 2
  },
  {
    pergunta: "\"It is six twenty\" ou \"twenty past six\". Que horas são em inglês?",

    alternativas: [
      "6:20",
      "2:20",
      "6:02",
      "12:20"
    ],

    resposta: 0
  },
  {
    pergunta: "Quem é o autor de “O Príncipe”?",

    alternativas: [
      "Maquiavel",
      "Antoine de Saint-Exupéry",
      "Montesquieu",
      "Rousseau"
    ],

    resposta: 0
  },
  {
    pergunta: "Como é a conjugação do verbo caber na 1.ª pessoa do singular do presente do indicativo?",

    alternativas: [
      "Eu caibo",
      "Ele cabe",
      "Eu cabo",
      "Nenhuma das alternativas"
    ],

    resposta: 0
  },
  {
    pergunta: "Quais destas construções famosas ficam nos Estados Unidos?",

    alternativas: [
      "Estátua da Liberdade, Golden Gate Bridge e Empire State Building",
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
      "Gonorreia, clamídia e sífilis",
      "Botulismo, cistite e gonorreia",
      "Hepatite B, febre tifoide e hanseníase"
    ],

    resposta: 1
  },
  {
    pergunta: "Qual destes países é transcontinental?",

    alternativas: [
      "Rússia",
      "Istambul",
      "Groenlândia",
      "Tanzânia"
    ],

    resposta: 0
  },
  {
    pergunta: "Em qual das orações abaixo a palavra foi empregada incorretamente?",

    alternativas: [
      "É um homem mal.",
      "Esse é o mal de todos.",
      "Mal falou nele, o fulano apareceu.",
      "É um mau vendedor."
    ],

    resposta: 0
  },
  {
    pergunta: "Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?",

    alternativas: [
      "A Biologia",
      "A Matemática",
      "A Astronomia",
      "A Mitologia"
    ],

    resposta: 3
  },
  {
    pergunta: "Qual das alternativas menciona apenas símbolos nacionais?",

    alternativas: [
      "Bandeira insígnia da presidência, bandeira nacional, brasão, hinos e selo",
      "Bandeira nacional, armas nacionais, hino nacional e selo nacional",
      "Bandeira nacional, brasão, hino nacional e hino da independência",
      "Bandeira nacional, cores nacionais, hino nacional e hino da independência"
    ],

    resposta: 1
  },
  {
    pergunta: "Quais os planetas do sistema solar?",

    alternativas: [
      "Terra, Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio",
      "Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Terra, Urano, Vênus",
      "Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio",
      "Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Sol, Terra, Urano, Vênus"
    ],

    resposta: 0
  },
  {
    pergunta: "Qual era o nome de Aleijadinho?",

    alternativas: [
      "Alexandrino Francisco Lisboa",
      "Manuel Francisco Lisboa",
      "Alex Francisco Lisboa",
      "Antônio Francisco Lisboa"
    ],

    resposta: 3
  },
  {
    pergunta: "Júpiter e Plutão são os correlatos romanos de quais deuses gregos?",

    alternativas: [
      "Ares e Hermes",
      "Cronos e Apolo",
      "Zeus e Hades",
      "Dionísio e Deméter"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual o maior animal terrestre?",

    alternativas: [
      "Baleia Azul",
      "Dinossauro",
      "Elefante africano",
      "Girafa"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual o tema do famoso discurso Eu Tenho um Sonho, de Martin Luther King?",

    alternativas: [
      "Igualdade das raças",
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
      "Acordo entre vários países acerca das consequências do aquecimento global e Acordo entre Alemanha, império Austro-Húngaro e Itália acerca de apoio em caso de guerra"
    ],

    resposta: 3
  },
  {
    pergunta: "Quais os nomes dos três Reis Magos?",

    alternativas: [
      "Gaspar, Nicolau e Natanael",
      "Belchior, Gaspar e Baltazar",
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
      "Alberto Caeiro, Ricardo Leite e Augusto de Campos",
      "Bento Teixeira, Ricardo Reis e Augusto de Campos"
    ],

    resposta: 0
  },
  {
    pergunta: "Qual a religião monoteísta que conta com o maior número de adeptos no mundo?",

    alternativas: [
      "Judaísmo",
      "Islamismo",
      "Cristianismo",
      "Hinduísmo"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual desses filmes foi baseado na obra de Shakespeare?",

    alternativas: [
      "Muito Barulho por Nada (2012)",
      "Capitães de Areia (2011)",
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
      "Neil Armstrong, em 1969."
    ],

    resposta: 3
  },
  {
    pergunta: "Qual o nome do cientista que descobriu o processo de pasteurização e a vacina contra a raiva?",

    alternativas: [
      "Marie Curie",
      "Blaise Pascal",
      "Louis Pasteur",
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
      "Tipo ABO"
    ],

    resposta: 2
  },
  {
    pergunta: "Quais são os cromossomos que determinam o sexo masculino?",

    alternativas: [
      "Os V",
      "Os Y",
      "Os W",
      "Os Z"
    ],

    resposta: 1
  },
  {
    pergunta: "Em que estado australiano fica situada a cidade de Sydney?",

    alternativas: [
      "Nova Gales do Sul",
      "Victoria",
      "Tasmânia",
      "Queensland"
    ],

    resposta: 0
  },
  {
    pergunta: "Que organização juvenil foi fundado por Baden-Powell?",

    alternativas: [
      "O escotismo",
      "O clube dos aventureiros",
      "A associação juvenil",
      "A Organização mundial da juventude"
    ],

    resposta: 0
  },
  {
    pergunta: "Quem amamentou os gêmeos Rômulo e Remo?",

    alternativas: [
      "uma cabra",
      "uma vaca",
      "uma ovelha",
      "uma loba"
    ],

    resposta: 3
  },
  {
    pergunta: "No exterior de que famoso edifício francês foi construída uma enorme pirâmide de vidro em 1989?",

    alternativas: [
      "Torre Eiffel",
      "Grand Palais",
      "Museu do Louvre",
      "Arco do Triunfo"
    ],

    resposta: 2
  },
  {
    pergunta: "Como se chamam os vasos que transportam sangue do coração para a periferia do corpo?",

    alternativas: [
      "veias",
      "átrios",
      "ventrículos",
      "artérias"
    ],

    resposta: 3
  },
  {
    pergunta: "Com que dois países faz fronteira o Equador?",

    alternativas: [
      "com o Brasil e com a Colômbia",
      "com a Colômbia e com a Venezuela",
      "com a Colômbia e com o Peru",
      "com o Peru e com o Equador"
    ],

    resposta: 2
  },
  {
    pergunta: "Que animal gruguleja?",

    alternativas: [
      "a garça",
      "o papagaio",
      "a cacatua",
      "o peru"
    ],

    resposta: 3
  },
  {
    pergunta: "Qual é o maior arquipélago da Terra?",

    alternativas: [
      "a Filipinas",
      "a Indonésia",
      "as Bahamas",
      "as Maldivas"
    ],

    resposta: 1
  },
  {
    pergunta: "Que substância é absorvida pelas plantas e expirada por todos os seres vivos?",

    alternativas: [
      "o oxigênio",
      "o nitrogênio",
      "o dióxido de ferro",
      "o dióxido de carbono"
    ],

    resposta: 3
  },
  {
    pergunta: "Em que oceano fica Madagascar?",

    alternativas: [
      "Oceano Índico",
      "Oceano Antártico",
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
      "Van Gogh"
    ],

    resposta: 2
  },
  {
    pergunta: "Qual o metal cujo símbolo químico é o Au?",

    alternativas: [
      "Cobre",
      "Prata",
      "Mercúrio",
      "Ouro"
    ],

    resposta: 3
  },
  {
    pergunta: "Em que século o continente europeu foi devastado pela peste bubônica?",

    alternativas: [
      "No século X",
      "No século XII",
      "No século XIII",
      "No século XIV"
    ],

    resposta: 3
  },
  {
    pergunta: "Quem viveu, segundo a bíblia, 969 anos?",

    alternativas: [
      "Jesus Cristo",
      "Noé",
      "Matusalém",
      "Benjamim"
    ],

    resposta: 2
  },
  {
    pergunta: "Em que cidade ocorreu a Eco-92, a Conferência das Nações Unidas sobre ambiente e desenvolvimento?",

    alternativas: [
      "Rio de Janeiro",
      "Montevidéu",
      "Assunção",
      "Caracas"
    ],

    resposta: 0
  },
  {
    pergunta: "Quem pintou o teto da capela sistina?",

    alternativas: [
      "Michelangelo",
      "Leonardo da Vinci",
      "Rafael",
      "Sandro Botticelli"
    ],

    resposta: 0
  },
  {
    pergunta: "Quantos graus são necessários para que dois ângulos sejam complementares?",

    alternativas: [
      "45",
      "60",
      "90",
      "180"
    ],

    resposta: 2
  },
  {
    pergunta: "Quem foi o criador da tragédia grega?",

    alternativas: [
      "Homero",
      "Eurípedes",
      "Plutarco",
      "Ésquilo"
    ],

    resposta: 3
  },
  {
    pergunta: "Jim Morrison era vocalista de que grupo?",

    alternativas: [
      "The Police",
      "The Doors",
      "Nirvana",
      "AC/DC"
    ],

    resposta: 1
  }
]

export { listaPerguntas };