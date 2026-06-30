export const regions = {
  sul: {
    name: "Sul",
    history:'A história da música no Sul do Brasil colonial foi marcada pela forte influência das instituições religiosas, especialmente no Paraná, onde a Igreja de Nossa Senhora da Luz dos Pinhais em Curitiba e a Matriz de Paranaguá centralizavam as atividades. No século XVIII, a estrutura musical dependia do intercâmbio entre o litoral e o planalto, com a figura do mestre de capela desempenhando funções técnicas, pedagógicas e de direção. Instrumentos como a harpa eram comuns em ofícios fúnebres e missas, enquanto a presença de órgãos positivos em Paranaguá e, posteriormente, em Curitiba, permitia práticas musicais mais complexas e alinhadas à tradição da América Portuguesa. \n\nNo século XIX, a vida musical na região expandiu-se com a fundação de espaços como o Teatro Sete de Setembro em Rio Grande - RS, que se tornou um ponto crucial nas rotas de companhias líricas europeias que viajavam entre o Rio de Janeiro e as capitais do Rio da Prata. O repertório operístico italiano, com obras de compositores como Giuseppe Verdi, predominava e funcionava como um importante marcador social e de "civilidade" para a elite local letrada. Paralelamente, em Porto Alegre, figuras como o maestro negro Joaquim José de Mendanha tiveram um papel fundamental na música sacra e na fundação da Irmandade de Santa Cecília, sendo Mendanha também o autor da música do "Hino Rio-Grandense". \n\nA diversidade musical sulista foi enriquecida pela imigração europeia em Santa Catarina, onde Blumenau desenvolveu uma cena ativa baseada em sociedades de canto, bandas de música Musikkapellen e no Teatro Carlos Gomes. Registros em periódicos como a revista Blumenau em Cadernos mostram como essas práticas germânicas coexistiam e, com o tempo, se integravam a gêneros nacionais. Já no século XX, compositores como Cyro Pereira, nascido em Rio Grande - RS, simbolizaram a transição para a modernidade ao transitar entre o erudito, o popular e o jazz, compondo obras como a Brasiliana n. 3 que expandem conceitos de gêneros tradicionais como o Choro. ',
    genres: [
      {
        id: 1,
        name: "Vanerão",
        description:
          'O vaneirão é uma variante da vaneira que se distingue pelo seu ritmo rápido, sendo também popularmente conhecido como "Limpa Banco". Devido à sua vivacidade e andamento acelerado, o gênero exige grande energia tanto dos músicos quanto dos dançarinos de fandango, servindo frequentemente como um tema instrumental que destaca o virtuosismo do gaiteiro, seja na gaita piano ou botonera. Em termos de estrutura musical, pode ser construído em três partes, assemelhando-se a ritmos como o choro e a valsa, e, quando é cantado, demanda uma dicção rápida e precisa por parte dos intérpretes devido à sua divisão rítmica. Nos salões do Rio Grande do Sul, é dançado com marcações como o "2 e 2", a "puladinha" ou a "arrastada", mantendo movimentos básicos semelhantes aos do xote tradicional, mas executados com maior velocidade.',
        image: {
          path: '../assets/images/sul/img_1_sul_vaneirao.jpg',
          alt: "Imagem representativa do Vanerão"
        },
        musicians: [
          {
            name: "Porca Véia",
            biography:
              'Élio da Rosa Xavier, amplamente conhecido pelo nome artístico Porca Véia, foi um renomado cantor, compositor e acordeonista gaúcho que marcou a música regional do Sul do Brasil. Nascido em Lagoa Vermelha em 1952, ele iniciou sua trajetória musical aos seis anos por influência familiar e ganhou seu apelido durante o curso técnico agrícola. Ao longo de sua carreira, demonstrou grande virtuosismo ao vencer 19 de 20 concursos de gaiteiros de que participou, além de conquistar dois Discos de Ouro e fundar o Grupo Musical Cordiona, focado em bailes fandangueiros. O artista, que gravou 21 CDs e três DVDs, despediu-se oficialmente dos palcos em 2013 com um grande show em Caxias do Sul e faleceu em 2020, aos 68 anos, vítima de uma parada cardíaca.',
            photo: { path: "../assets/images/sul/img_2_sul_porca_veia.jpg", alt: "Foto do artista Porca Véia" }
          },
          {
            name: "Gaúcho da Fronteira",
            biography:
              'Gaúcho da Fronteira, nome artístico de Heber Artigas Frós Armuá, é um dos mais renomados representantes da música nativista e regional gaúcha, tendo nascido no Uruguai e se naturalizado brasileiro em 2009. Iniciou sua trajetória musical profissional em 1968 com o grupo Os Vaqueanos, consolidando sua carreira solo a partir de 1975 com o lançamento de seu primeiro LP homônimo. Conhecido por seu virtuosismo na gaita-ponto e por composições bem-humoradas e dançantes, ele alcançou grande êxito popular com músicas como "Nhecovari Nhecofum" e "Herdeiro da Pampa Pobre", esta última amplamente conhecida pela regravação da banda Engenheiros do Hawaii. Além de sua base tradicionalista nos pampas, o artista inovou nos anos 90 com o projeto Forronerão, que fundiu o vanerão gaúcho ao forró nordestino em parceria com o grupo Brasas do Forró. Com mais de 50 anos de carreira celebrados em 2018, Gaúcho da Fronteira permanece como uma figura central da cultura sulista, unindo tradição e experimentações sonoras.',
            photo: { path: "../assets/images/sul/img_3_sul_gaucho_da_fronteira.jpg", alt: "Foto do artista Gaúcho da Fronteira" }
          },
        ]
      },
      {
        id: 2,
        name: "Milonga",
        description:
          'A milonga é um gênero musical folclórico e coreográfico típico da região platina e do Rio Grande do Sul, estando profundamente enraizada na cultura gauchesca. Sua etimologia remete ao termo quimbunda mulonga, que significa "palavra", indicando por extensão um "palavrório" ou verborragia, termo muito associado à prática da payada. Musicalmente, caracteriza-se pelo compasso binário, embora frequentemente acompanhada por violão em 6/8, e por uma célula rítmica distribuída em 3+3+2, diferenciando-se do tango por possuir um ritmo mais "quadrado". O gênero divide-se em duas modalidades principais: a milonga campera ou pampeana, que é a forma original, rural e muitas vezes lenta; e a milonga cidadã, uma variante urbana mais rápida que surgiu em 1931 como um subgênero do tango. No contexto sul-brasileiro, a milonga é um pilar da identidade regional, representada por artistas como José Cláudio Machado, Renato Borghetti e Jayme Caetano Braun, além de formas modernas como a "Ramilonga" de Vitor Ramil.',
        image: {
          path: "../assets/images/sul/img_4_sul_milonga.jpg",
          alt: "Imagem representativa da Milonga"
        },
        musicians: [
          {
            name: "Mauro Moraes",
            biography:
              'Mauro Moraes, natural de Uruguaiana, Rio Grande do Sul, é um expressivo cantor, compositor e violonista do cenário nativista gaúcho, com foco especial nos gêneros de milonga e folclore. Com uma carreira que ultrapassa os 30 anos, ele é um dos artistas mais premiados da região, tendo conquistado seis troféus Açorianos de Música em categorias como Melhor Compositor e Melhor Disco Regional, além do prestigioso Troféu Calhandra de Ouro na 31ª Califórnia da Canção Nativa pela música "Feito o Carreto". Sua relevância na música sulista é reforçada por dois Discos de Ouro pelos álbuns De Bota e Bombacha e Com Todas as Letras, e por diversas homenagens institucionais, como o Prêmio Lupicínio Rodrigues e medalhas concedidas pela Assembleia Legislativa do Rio Grande do Sul.',
            photo: {
              path: "../assets/images/sul/img_5_sul_mauro_moraes.jpg",
              alt: "Foto do artista Mauro Moraes"
            }
          },
          {
            name: "José Cláudio Machado",
            biography:
              'José Cláudio Machado (1948–2011), natural de Tapes, RS, é amplamente reconhecido como um dos maiores intérpretes da música nativista e folclórica do Rio Grande do Sul. Considerado um "mito" do gênero pela sua marcante voz grave, ele alcançou projeção ao vencer a II Califórnia da Canção Nativa em 1972 com a música "Pedro Guará" e consolidou sua trajetória com sucessos como "Milonga Abaixo de Mau Tempo", composição de Mauro Moraes que ele considerava um hino. Ao longo de sua carreira, integrou conjuntos fundamentais como Os Tapes, Os Teatinos e Os Serranos, demonstrando versatilidade como multi-instrumentista ao dominar a gaita, o violão, o charango e o bombo leguero. Para além dos palcos e de prêmios como o Açorianos de Melhor Intérprete Regional em 2001, sua influência estendeu-se à gestão cultural como idealizador do Parque da Harmonia em Porto Alegre e criador de festivais como a Reculuta da Canção Crioula de Guaíba.',
            photo: {
              path: "../assets/images/sul/img_6_sul_jose_claudio_machado.jpg",
              alt: "Foto do artista José Cláudio Machado"
            }
          }
        ]
      },
      {
        id: 3,
        name: "Fandango Caiçara",
        description:
          'O fandango caiçara é uma expressão cultural centenária que une música, dança e saberes tradicionais ao longo do litoral, de Paraty (RJ) até Santa Catarina, sendo reconhecido desde 2012 como Patrimônio Cultural Imaterial do Brasil pelo Iphan. Originado no século XVIII a partir da miscigenação entre influências indígenas, europeias e africanas, o gênero estava historicamente ligado a mutirões de trabalho comunitário, funcionando como uma festividade de "pagamento" aos colaboradores em atividades como a colheita da mandioca ou a pesca da tainha. Sua sonoridade característica é produzida por instrumentos de fabricação artesanal, como a viola branca, a rabeca e o adufo, além do ruidoso tamanqueado, batidas rítmicas com tamancos de madeira feitas exclusivamente pelos homens em marcas "batidas" ou "rufadas". Organizado em diversas "marcas" ou "modas", como o tradicional Anu, o fandango possui ciclos rítmicos complexos muitas vezes derivados da estrutura do tresillo (3+3+2) e permanece como um pilar da identidade caiçara, especialmente em Paranaguá - PR, onde os antigos arranjos sociais evoluíram para apresentações artísticas e festivais que garantem a subsistência e a preservação dessa memória coletiva.',
        image: {
          path: "../assets/images/sul/img_7_sul_fandango_caicara.jpeg",
          alt: "Imagem representativa do Fandango Caiçara"
        },
        musicians: [
          {
            name: "Mestre Aorélio Domingues",
            biography:
              "Mestre Aorélio Domingues, nascido em 1977 em Paranaguá, é um dos principais expoentes da cultura popular caiçara no Brasil, sendo reconhecido oficialmente como mestre da cultura, multi-instrumentista, dançarino e artesão luthier. Sua formação iniciou-se aos nove anos com seu avô, o rabequista Rodrigo Domingues, com quem aprendeu a arte de fabricar e tocar violas e rabecas, conhecimento que hoje ele transmite na marcenaria da Associação de Cultura Popular Mandicuera, da qual foi cofundador em 2004. Além de mestre de fandango caiçara, ele lidera manifestações tradicionais como a Folia do Divino Espírito Santo, o Boi-de-Mamão e o terço cantado, tendo sido premiado pelo Ministério da Cultura em 2013 pelo seu trabalho de salvaguarda dessas tradições. Com formação acadêmica em Belas Artes e uma trajetória marcada pela resistência cultural, Aorélio idealizou a Festa do Fandango de Paranaguá e continua a desempenhar um papel vital na preservação e difusão dos saberes e fazeres de sua comunidade no litoral do Paraná.",
            photo: {
              path: "../assets/images/sul/img_8_sul_mestre_aorelio.jpg",
              alt: "Foto do artista Mestre Aorélio Domingues"
            }
          },
          {
            name: "Eugênio dos Santos",
            biography:
              'Eugênio dos Santos (1926 - 2011), amplamente conhecido como Mestre Eugênio, foi um dos pilares da preservação do fandango caiçara no litoral do Paraná. Nascido em Guaraqueçaba, ele aprendeu a arte de tocar viola com seu pai e tornou-se um dos músicos mais requisitados para os fandangos de mutirão que celebravam colheitas e plantios. Após mudar-se para Paranaguá, onde trabalhou no porto e ajudou a fundar o bairro Sete de Setembro, dedicou-se à continuidade da tradição na Ilha dos Valadares, criando grupos e idealizando a Casa do Fandango. Reconhecido nacionalmente, Mestre Eugênio viajou pelo Brasil com o projeto Sonora Brasil e recebeu a Comenda da Ordem do Mérito Cultural em 2006 e o Prêmio Culturas Populares em 2008. Sua trajetória é marcada pela defesa mística da cultura local,  como sua firme crença na lenda do "Saci fandangueiro" que tocava viola, e por um legado que continua a inspirar novas gerações de tocadores caiçaras.',
            photo: {
              path: "../assets/images/sul/img_9_sul_eugenio.jpg",
              alt: "Foto do artista Mestre Eugênio dos Santos"
            }
          }
        ]
      },
    ]
  },
  sudeste: {
    name: "Sudeste",
    history:
      'A história da música na região Sudeste brasileira é marcada por uma rica pluralidade de narrativas e processos de hibridismo cultural que remontam ao período colonial e imperial. No século XIX, o Rio de Janeiro consolidou-se como o principal polo irradiador, onde o gosto pela ópera italiana coexistia com gêneros locais como a modinha e o lundu, além do teatro musicado de Martins Penna. Esse cenário era permeado por tensões sociais profundas: embora o trabalho artístico fosse frequentemente associado a negros e mestiços, como o Pe. José Maurício e a cantora Lapinha, o mercado musical era fortemente influenciado pelo poder da Corte e, paradoxalmente, pelo financiamento de traficantes de escravos. Enquanto isso, em São Paulo, a "civilização do café" promovia uma intensa cultura pianística, que serviu como porta de entrada para a profissionalização feminina e a criação de importantes conservatórios.\n\nNa primeira metade do século XX, a música na região passou por processos de massificação e institucionalização que forjaram a identidade nacional. O samba, inicialmente alvo de repressão policial e estigmatização racial, simbolizada pela "vida social" do pandeiro, que passou de objeto de perseguição a símbolo nacional, foi gradualmente legitimado por cronistas e pela indústria cultural. A partir das décadas de 1940 e 1950, a Era de Ouro do Rádio transformou cantores em ídolos nacionais e consolidou um mercado de massas, ao mesmo tempo em que segmentava o público entre atrações de auditório e programas instrumentais mais sofisticados, como os do Trio Surdina. Esse período também viu o surgimento de acervos e discotecas públicas, fundamentais para a preservação da memória sonora regional.\n\nA história musical recente do Sudeste destaca-se pelo experimentalismo e pela diversidade étnica, refletindo resistências políticas e diálogos interculturais. Durante a ditadura militar, compositores como Jaceguay Lins utilizaram a vanguarda e o atonalismo como formas de engajamento e denúncia social. A região também abriga práticas que desafiam visões eurocêntricas, como os tambores japoneses taiko em Atibaia, que ressignificam a identidade nikkei, e o oporaei, canto-reza dos Guarani Mbya, usado como estratégia de fortalecimento cultural e luta pela terra. Atualmente, o Sudeste concentra a maior parte da infraestrutura de pesquisa e preservação musical do país, com vastos acervos em Minas Gerais, Rio de Janeiro e São Paulo que permitem reconstruir essas trajetórias a partir de fontes primárias.',
    genres: [
      {
        id: 1,
        name: "Samba",
        description:
          'O samba é um gênero musical de raízes afro-brasileiras originado na Bahia no final do século XIX e desenvolvido no Rio de Janeiro no início do século XX, consolidando-se como um dos principais símbolos da identidade nacional brasileira. Sua evolução técnica e estética teve um marco fundamental na década de 1920 com o samba do Estácio, que rompeu com o estilo "amaxixado" anterior ao introduzir um ritmo mais sincopado e uma instrumentação percussiva baseada no surdo, tamborim e cuíca. Ao longo das décadas, o gênero alcançou projeção nacional impulsionado pelas escolas de samba e pela Era do Rádio, diversificando-se em vertentes como o samba-canção, a bossa nova e o pagode. Devido à sua importância como fenômeno cultural, o samba urbano carioca e matrizes como o partido-alto e o samba de enredo foram reconhecidos como patrimônio cultural do Brasil pelo Iphan em 2007.',
        image: {
          path: "../assets/images/sudeste/img_1_sudeste_samba.jpg",
          alt: "Imagem representativa do Samba"
        },
        musicians: [
          {
            name: "Cartola",
            biography:
              'Cartola, pseudônimo de Angenor de Oliveira, foi um dos maiores expoentes do samba e da música popular brasileira, tendo nascido em 1908 no Rio de Janeiro. Apelidado de "Cartola" por usar um chapéu-coco para proteger o cabelo do cimento enquanto trabalhava como pedreiro, ele foi um dos fundadores da Estação Primeira de Mangueira em 1928, escola para a qual escolheu as cores verde e rosa e compôs o primeiro samba oficial, "Chega de Demanda". Após um período de afastamento do cenário musical em que chegou a ser dado como morto, foi redescoberto pelo jornalista Sérgio Porto em 1957 e, anos depois, fundou com sua esposa Dona Zica o icônico restaurante Zicartola, que se tornou um ponto de encontro fundamental entre sambistas do morro e músicos da classe média. Embora suas composições fossem famosas desde a década de 1930 na voz de intérpretes como Francisco Alves e Carmen Miranda, sua consagração definitiva como cantor ocorreu apenas na velhice, com o lançamento de seu primeiro disco solo em 1974, aos 66 anos, apresentando clássicos imortais como "As Rosas Não Falam" e "O Mundo É um Moinho". O "Divino", que era torcedor fervoroso do Fluminense, faleceu em 1980, deixando um legado de "samba de dor de cotovelo" que o consolidou como um pilar da identidade cultural nacional.',
            photo: { path: "../assets/images/sudeste/img_2_sudeste_cartola.jpg", alt: "Foto de Cartola" }
          },
          {
            name: "Dona Ivone Lara",
            biography:
              'Yvonne Lara da Costa, amplamente conhecida como Dona Ivone Lara ou a "Rainha do Samba", foi uma das figuras mais emblemáticas da música brasileira, tendo nascido no Rio de Janeiro em 1921. Além de sua brilhante carreira artística, ela teve uma atuação pioneira como enfermeira e assistente social, dedicando mais de trinta anos à reforma psiquiátrica no Brasil ao lado da médica Nise da Silveira e implementando oficinas de música como terapia para os internos. No universo carnavalesco, Dona Ivone rompeu barreiras históricas de gênero ao ser a primeira mulher a integrar a ala de compositores de uma escola de samba e a primeira a assinar oficialmente um samba-enredo, feito realizado no Império Serrano. Compositora de sucessos imortais como "Sonho Meu", seu legado foi oficializado com a instituição do dia 13 de abril, data de seu nascimento, como o Dia Nacional da Mulher Sambista. A "Grande Dama do Samba" faleceu em 2018 aos 97 anos, sendo celebrada por sua elegância e por uma obra que uniu a sensibilidade melódica à resistência cultural e profissional.',
            photo: { path: "../assets/images/sudeste/img_3_sudeste_dona_ivone.jpeg", alt: "Foto de Dona Ivone Lara" }
          },
          {
            name: "Beth Carvalho",
            biography:
              'Elizabeth Santos Leal de Carvalho (1946–2019), amplamente conhecida como a "Madrinha do Samba", foi uma das maiores intérpretes e instrumentistas da música brasileira. Embora tenha iniciado sua carreira na Bossa Nova e conquistado fama nacional com a canção "Andança" no festival de 1968, ela consolidou seu legado ao resgatar mestres como Cartola e Nelson Cavaquinho, além de revelar novos talentos como Zeca Pagodinho, Jorge Aragão e o grupo Fundo de Quintal. Sua influência foi além do canto, sendo responsável por introduzir no samba instrumentos como o banjo com afinação de cavaquinho, o tantã e o repique de mão, o que transformou a sonoridade do gênero nas gravações comerciais. Mangueirense de coração e ativista política engajada, Beth Carvalho teve uma carreira de mais de 50 anos marcada por sucessos como "Vou Festejar" e "Coisinha do Pai", recebendo diversas honrarias, incluindo o Grammy Latino de Conquista de Toda uma Vida em 2009. Ela faleceu em 2019, vítima de uma infecção generalizada, sendo celebrada como a "Diva dos Terreiros".',
            photo: { path: "../assets/images/sudeste/img_4_sudeste_beth.jpg", alt: "Foto de Beth Carvalho" }
          }
        ]
      },
      {
        id: 2,
        name: "MPB",
        description:
          'O gênero Música Popular Brasileira (MPB) surgiu em meados da década de 1960 no Rio de Janeiro, consolidando-se como uma fusão entre a sofisticação harmônica da segunda geração da bossa nova e o engajamento folclórico dos Centros Populares de Cultura. Após o golpe de 1964, o gênero tornou-se uma frente ampla de resistência cultural contra o regime militar, utilizando letras que frequentemente abordavam temas sociais e políticos por meio de metáforas e recursos poéticos para lidar com a censura. Musicalmente, a MPB é definida como um gênero híbrido que articula influências do samba, jazz, rock e ritmos regionais como o baião, privilegiando o violão como instrumento central, mas incorporando também arranjos orquestrais e experimentações eletrônicas. Sua popularização em massa foi impulsionada pelos festivais de música na televisão, o que ajudou a consolidar o rótulo como a "música da universidade" devido à forte adesão de estudantes e intelectuais da época.',
        image: {
          path: "../assets/images/sudeste/img_5_sudeste_mpb.jpg",
          alt: "Imagem representativa da MPB"
        },
        musicians: [
          {
            name: "Clube da Esquina",
            biography:
              'O Clube da Esquina refere-se a um influente grupo de músicos, compositores e letristas surgido na década de 1960 em Belo Horizonte, Minas Gerais, a partir da profunda amizade entre Milton Nascimento e os irmãos Borges (Marilton, Márcio e Lô) no bairro de Santa Tereza. Caracterizado por uma sonoridade altamente inovadora e frequentemente classificado como um movimento musical, o grupo promoveu uma fusão singular entre a Bossa Nova e elementos do jazz, rock, com forte influência dos Beatles, música erudita, música hispânica e tradições folclóricas mineiras e negras. Com a participação de figuras fundamentais como Wagner Tiso, Toninho Horta e Beto Guedes, o coletivo alcançou projeção mundial, tendo como marco estético e histórico o lançamento do álbum duplo Clube da Esquina em 1972, considerado uma obra seminal da música popular brasileira.',
            photo: {
              path: "../assets/images/sudeste/img_6_sudeste_clube_da_esquina.png",
              alt: "Foto do grupo Clube da Esquina"
            }
          },
          {
            name: "Chico Buarque",
            biography:
              'Francisco Buarque de Hollanda, amplamente conhecido como Chico Buarque, é um dos artistas mais completos e influentes do Brasil, atuando como cantor, compositor, violonista, dramaturgo e escritor. Ele ganhou projeção nacional em 1966 ao vencer o Festival de Música Popular Brasileira com a canção "A Banda". Durante a ditadura militar, Chico autoexilou-se na Itália e, ao retornar ao país, tornou-se uma das vozes mais ativas na crítica política e na luta pela democratização, utilizando metáforas sofisticadas e o pseudônimo Julinho da Adelaide para driblar a censura em obras fundamentais como o álbum Construção. Além do engajamento social, sua produção musical é célebre pela criação de um sensível "eu lírico" feminino, presente em clássicos como "Com açúcar, com afeto" e "Olhos nos Olhos". Sua versatilidade estende-se à literatura e ao teatro, onde produziu romances premiados como Budapeste e peças icônicas como a Ópera do Malandro, trajetória coroada com o Prêmio Camões em 2019 pelo conjunto de sua obra.',
            photo: {
              path: "../assets/images/sudeste/img_7_sudeste_chico_buarque.jpeg",
              alt: "Foto de Chico Buarque"
            }
          },
          {
            name: "Marisa Monte",
            biography:
              'Marisa de Azevedo Monte, nascida no Rio de Janeiro em 1967, é uma das artistas brasileiras de MPB de maior sucesso comercial, com estimativas de mais de 15 milhões de cópias vendidas em todo o mundo. Sua carreira ganhou projeção nacional em 1989 com o álbum de estreia MM, que trouxe o sucesso "Bem Que Se Quis", e seguiu com álbuns fundamentais como Verde, Anil, Amarelo, Cor-de-Rosa e Carvão (1994) e Memórias, Crônicas e Declarações de Amor (2000), este último certificado com disco de diamante. Além de sua aclamada trajetória solo, alcançou êxito internacional com o trio Tribalistas, ao lado de Arnaldo Antunes e Carlinhos Brown, e demonstrou sua versatilidade ao dedicar-se ao samba em projetos como o disco Universo ao Meu Redor (2006) e o filme O Mistério do Samba, honrando sua ligação histórica com a Velha Guarda da Portela. Como produtora independente através de seu próprio selo, Phonomotor Records, Marisa acumulou inúmeras honrarias, incluindo cinco prêmios Grammy Latino e o prestigioso Prêmio Tenco pelo conjunto de sua obra, sendo ainda condecorada como Doutora Honoris Causa pela USP em 2024.',
            photo: {
              path: "../assets/images/sudeste/img_8_sudeste_marisa_monte.jpg",
              alt: "Foto de Marisa Monte"
            }
          }
        ]
      },
      {
        id: 3,
        name: "Bossa Nova",
        description:
          'A Bossa Nova surgiu no final da década de 1950, na Zona Sul do Rio de Janeiro, como um movimento de renovação do samba caracterizado pela famosa "batida diferente" ao violão. Este estilo promoveu uma simplificação rítmica do samba, aliada ao uso de harmonias complexas influenciadas pelo jazz e pela música erudita, introduzindo a prática do "canto-falado" ou do "cantar baixinho" em tom coloquial. O marco inicial do gênero foi o lançamento de "Chega de Saudade" em 1958, obra de Tom Jobim e Vinícius de Moraes que, na voz e no violão de João Gilberto, consolidou a revolução estética do movimento. Com temáticas leves e descompromissadas, o gênero alcançou uma projeção internacional sem precedentes na música brasileira, simbolizada pelo sucesso mundial de "Garota de Ipanema" e pelo histórico concerto no Carnegie Hall em 1962. Atualmente, o legado da Bossa Nova permanece vivo, tendo influenciado a criação da MPB e continuando a inspirar artistas contemporâneos que reinterpretam sua sonoridade sofisticada e minimalista.',
        image: {
          path: "../assets/images/sudeste/img_9_sudeste_bossa_nova.jpg",
          alt: "Imagem representativa da Bossa Nova"
        },
        musicians: [
          {
            name: "Nara Leão",
            biography:
              'Nara Lofego Leão (1942 - 1989) foi uma influente cantora, compositora e instrumentista brasileira, nascida em Vitória (ES), mas radicada no Rio de Janeiro desde a infância. Apelidada de "Musa da Bossa Nova" pelo cronista Sérgio Porto, seu apartamento em Copacabana foi o berço do gênero no final da década de 1950, servindo como ponto de encontro para nomes como Roberto Menescal e Carlos Lyra. Ao longo de sua carreira, Nara demonstrou uma versatilidade notável, rompendo com o rótulo inicial para se tornar uma voz ativa na música de protesto após o golpe de 1964, marcando época com o espetáculo Opinião e com a interpretação de "A Banda", de Chico Buarque. Participou também do movimento Tropicalista e viveu um período de exílio em Paris devido à repressão política no Brasil. Além da música, Nara atuou como atriz, apresentadora e chegou a cursar psicologia, mantendo uma trajetória de defesa das liberdades políticas e individuais até sua morte prematura, aos 47 anos, em decorrência de um tumor cerebral.',
            photo: {
              path: "../assets/images/sudeste/img_10_sudeste_nara_leao.jpg",
              alt: "Foto de Nara Leão"
            }
          },
          {
            name: "João Gilberto",
            biography:
              'João Gilberto Prado Pereira de Oliveira (1931 - 2019) foi um aclamado cantor, violonista e compositor brasileiro, amplamente reconhecido como o arquiteto da Bossa Nova. Nascido em Juazeiro, na Bahia, ele revolucionou a música popular brasileira ao criar uma batida de violão única que sintetizava a rítmica do samba de forma minimalista, além de introduzir um estilo de canto suave, sem vibratos e com dicção impecável. Sua trajetória atingiu um marco histórico com o lançamento do compacto e do álbum Chega de Saudade (1958/1959), que deu início a uma revolução estética que influenciou gerações de artistas, de Caetano Veloso a ícones do jazz americano. Internacionalmente, sua colaboração no álbum Getz/Gilberto (1964) foi fundamental para a consagração mundial da música brasileira, rendendo-lhe diversos prêmios Grammy e consolidando sua imagem como um dos músicos mais influentes do século XX. Gilberto era conhecido por sua busca obsessiva pela perfeição sonora e pelo silêncio, tratando a voz e o violão como uma unidade indissociável que transformou permanentemente o DNA da MPB.',
            photo: {
              path: "../assets/images/sudeste/img_11_sudeste_joao_gilberto.jpg",
              alt: "Foto de João Gilberto"
            }
          },
          {
            name: "Tom Jobim",
            biography:
              'Antônio Carlos Brasileiro de Almeida Jobim, mundialmente conhecido como Tom Jobim (1927 - 1994), foi um compositor, pianista, arranjador e cantor brasileiro, considerado um dos maiores expoentes da música do país e frequentemente chamado de o "pai da bossa nova". Ele foi o principal responsável pela internacionalização desse gênero, fundindo-o ao jazz na década de 1960 e criando uma sonoridade de sucesso global. Sua obra inclui clássicos como "Garota de Ipanema", uma das canções mais gravadas da história, e o álbum Getz/Gilberto, que foi o primeiro disco de jazz a vencer o Grammy de Álbum do Ano em 1965. Além de suas parcerias icônicas com Vinicius de Moraes, João Gilberto e Elis Regina, Jobim colaborou com Frank Sinatra e foi inovador no uso de estruturas harmônicas sofisticadas na música popular. Seu legado é reconhecido por prêmios como o Lifetime Achievement Award do Grammy e por homenagens permanentes, como a renomeação do Aeroporto Internacional do Galeão em sua memória.',
            photo: {
              path: "../assets/images/sudeste/img_12_sudeste_tom_jobim.jpg",
              alt: "Foto de Tom Jobim"
            }
          }
        ]
      },
      {
        id: 4,
        name: "Funk",
        description:
          'O funk carioca é um gênero musical que surgiu nas favelas do Rio de Janeiro em meados da década de 1980, diferenciando-se do funk tradicional dos Estados Unidos por suas influências diretas do miami bass e do freestyle. O movimento evoluiu a partir dos "bailes da pesada" e das festas black e soul da década de 1970, sofrendo uma transformação eletrônica nos anos 80 com o uso de sintetizadores e baterias eletrônicas como a Roland TR-808, tendo o álbum Funk Brasil (1989), do DJ Marlboro, como um marco inicial. Tornou-se um massivo fenômeno cultural que se ramificou em diversos subgêneros, como o funk melody, o proibidão, o funk ostentação e o acelerado funk 150 BPM, alcançando visibilidade internacional e influenciando artistas globais como M.I.A. e Drake. Embora enfrente críticas e resistências sociais devido a letras explícitas e associações com a criminalidade, o gênero foi oficialmente reconhecido como movimento cultural e musical de caráter popular no Rio de Janeiro em 2009, tendo o dia 12 de julho instituído como o Dia Nacional do Funk.',
        image: {
          path: "../assets/images/sudeste/img_13_sudeste_funk.jpg",
          alt: "Imagem representativa do Funk"
        },
        musicians: [
          {
            name: "Ludmilla",
            biography:
              'Ludmilla, nome artístico de Ludmila Oliveira da Silva, é uma proeminente cantora e compositora brasileira que iniciou sua carreira em 2012 sob o pseudônimo MC Beyoncé, alcançando sucesso nacional com o hit de funk carioca "Fala Mal de Mim". Nascida no Rio de Janeiro e criada em Duque de Caxias, a artista consolidou-se como uma das figuras mais versáteis da música atual, transitando com sucesso entre o funk, pop, R&B e o pagode, este último por meio do aclamado projeto Numanice. Reconhecida como a "Rainha da Favela", ela acumula marcos históricos, como ser a primeira artista negra latino-americana a ultrapassar dois bilhões de reproduções no Spotify e a conquista de um Grammy Latino pelo álbum Numanice 2. Além de seu alcance vocal de mezzo-soprano, Ludmilla é uma voz influente na luta contra o racismo e um ícone de representatividade para a comunidade LGBTQ+, além de ser reconhecida por ações filantrópicas, como a campanha de doação de sangue que quebrou recordes no Hemorio',
            photo: {
              path: "../assets/images/sudeste/img_14_sudeste_ludmilla.jpg",
              alt: "Foto de Ludmilla"
            }
          },
          {
            name: "MC Marcinho",
            biography:
              'Márcio André Nepomuceno Garcia (1977 - 2023), mundialmente conhecido como MC Marcinho, foi um dos pilares do funk carioca e do funk melody, sendo carinhosamente apelidado de "Príncipe do Funk". Nascido em Duque de Caxias e criado em Bangu, ele iniciou sua trajetória aos 15 anos, alcançando o sucesso com hits memoráveis como "Rap do Solitário", "Princesa", "Garota Nota 100" e o fenômeno "Glamurosa", música que, segundo o artista, foi inspirada na apresentadora Xuxa. Marcinho destacou-se por manter um estilo romântico e melódico mesmo quando o gênero migrou para letras mais erotizadas, consolidando-se como uma figura de resistência e inovação no movimento. Sua vida foi marcada por superações, incluindo um grave acidente de carro em 2006 e diversos problemas cardíacos, vindo a falecer em agosto de 2023 devido a uma disfunção múltipla de órgãos. Seu legado para a cultura brasileira é imenso, sendo homenageado postumamente com o nome de uma rua no Rio de Janeiro e uma estátua no bairro de Bangu.',
            photo: {
              path: "../assets/images/sudeste/img_15_sudeste_mc_marcinho.jpg",
              alt: "Foto de MC Marcinho"
            }
          }
        ]
      }
    ]
  },
  centroOeste: {
    name: "Centro-Oeste",
    history:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id magna a nisi tincidunt facilisis a a magna. Curabitur semper lacinia tincidunt. Pellentesque tincidunt nisi at ex congue cursus. Nam nec metus vulputate libero fermentum sodales. Nullam quis diam a lectus maximus facilisis. Donec et ipsum nec orci gravida dignissim sit amet in orci. In sagittis ex arcu, eget venenatis lorem facilisis non. Vivamus varius ipsum vel felis ornare, ut malesuada eros scelerisque. Nulla nibh odio, maximus condimentum dictum ac, scelerisque eget nunc. Sed euismod nisl lacinia, condimentum nunc quis, egestas lacus. Proin efficitur nisl vitae massa tempor, at commodo justo vehicula. Nulla id dapibus ipsum. Nunc faucibus lorem id tellus pretium accumsan. In quis lacinia lacus. In molestie, libero sed aliquam aliquet, diam orci imperdiet urna, in elementum eros orci sed neque. Duis faucibus at ipsum eget tempus. Quisque et justo ipsum. In iaculis, enim eu tincidunt vehicula, sem neque porttitor magna, sit amet sagittis diam urna a lacus. Praesent porttitor, leo non pharetra tristique, neque arcu vehicula tellus, sed dignissim urna neque nec elit. Praesent ac ex a elit venenatis semper. Suspendisse ut leo diam. Maecenas pulvinar consectetur tortor, quis consequat erat iaculis in. Phasellus nec varius ligula. Phasellus tempus mauris ut varius faucibus. Nullam lobortis pulvinar volutpat. Aliquam erat volutpat. Vivamus fermentum sem id felis dapibus, ut egestas lorem convallis. Morbi ullamcorper eu lacus vitae faucibus. Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus.",
    genres: [
      {
        id: 1,
        name: "Lorem ipsum",
        description:
          "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Curabitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
        image: {
          path: "https://placehold.co/300x300",
          alt: "Album 1"
        },
        musicians: [
          {
            name: "Lorem ipsum dolor sit amet",
            biography:
              "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
            photo: { path: "https://placehold.co/200x200", alt: "Musico 1" }
          }
        ]
      },
      {
        id: 2,
        name: "Lorem ipsum",
        description:
          "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
        image: {
          path: "https://placehold.co/300x300",
          alt: "Album 2"
        },
        musicians: [
          {
            name: "Lorem ipsum dolor sit amet",
            biography:
              "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
            photo: {
              path: "https://placehold.co/200x200",
              alt: "Musico 2"
            }
          }
        ]
      },
      {
        id: 3,
        name: "vitae",
        description:
          "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
        image: {
          path: "https://placehold.co/300x300",
          alt: "Album 3"
        },
        musicians: [
          {
            name: "Lorem ipsum dolor sit amet",
            biography:
              "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
            photo: {
              path: "https://placehold.co/200x200",
              alt: "Musico 3"
            }
          }
        ]
      },
      {
        id: 4,
        name: "tincidunt",
        description:
          "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
        image: {
          path: "https://placehold.co/300x300",
          alt: "Album 4"
        },
        musicians: [
          {
            name: "Lorem ipsum dolor sit amet",
            biography:
              "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
            photo: {
              path: "https://placehold.co/200x200",
              alt: "Musico 4"
            }
          }
        ]
      },
      {
        id: 5,
        name: "posuere",
        description:
          "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
        image: {
          path: "https://placehold.co/300x300",
          alt: "Album 5"
        },
        musicians: [
          {
            name: "Lorem ipsum dolor sit amet",
            biography:
              "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
            photo: {
              path: "https://placehold.co/200x200",
              alt: "Musico 5"
            }
          }
        ]
      }
    ]
  },
  nordeste: {
    name: "Nordeste",
    history:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id magna a nisi tincidunt facilisis a a magna. Curabitur semper lacinia tincidunt. Pellentesque tincidunt nisi at ex congue cursus. Nam nec metus vulputate libero fermentum sodales. Nullam quis diam a lectus maximus facilisis. Donec et ipsum nec orci gravida dignissim sit amet in orci. In sagittis ex arcu, eget venenatis lorem facilisis non. Vivamus varius ipsum vel felis ornare, ut malesuada eros scelerisque. Nulla nibh odio, maximus condimentum dictum ac, scelerisque eget nunc. Sed euismod nisl lacinia, condimentum nunc quis, egestas lacus. Proin efficitur nisl vitae massa tempor, at commodo justo vehicula. Nulla id dapibus ipsum. Nunc faucibus lorem id tellus pretium accumsan. In quis lacinia lacus. In molestie, libero sed aliquam aliquet, diam orci imperdiet urna, in elementum eros orci sed neque. Duis faucibus at ipsum eget tempus. Quisque et justo ipsum. In iaculis, enim eu tincidunt vehicula, sem neque porttitor magna, sit amet sagittis diam urna a lacus. Praesent porttitor, leo non pharetra tristique, neque arcu vehicula tellus, sed dignissim urna neque nec elit. Praesent ac ex a elit venenatis semper. Suspendisse ut leo diam. Maecenas pulvinar consectetur tortor, quis consequat erat iaculis in. Phasellus nec varius ligula. Phasellus tempus mauris ut varius faucibus. Nullam lobortis pulvinar volutpat. Aliquam erat volutpat. Vivamus fermentum sem id felis dapibus, ut egestas lorem convallis. Morbi ullamcorper eu lacus vitae faucibus. Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus.",
    genres: [
      {
        id: 1,
        name: "Lorem ipsum",
        description:
          "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Curabitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
        image: {
          path: "https://placehold.co/300x300",
          alt: "Album 1"
        },
        musicians: [
          {
            name: "Lorem ipsum dolor sit amet",
            biography:
              "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
            photo: { path: "https://placehold.co/200x200", alt: "Musico 1" }
          }
        ]
      },
      {
        id: 2,
        name: "Lorem ipsum",
        description:
          "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
        image: {
          path: "https://placehold.co/300x300",
          alt: "Album 2"
        },
        musicians: [
          {
            name: "Lorem ipsum dolor sit amet",
            biography:
              "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
            photo: {
              path: "https://placehold.co/200x200",
              alt: "Musico 2"
            }
          }
        ]
      },
      {
        id: 3,
        name: "vitae",
        description:
          "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
        image: {
          path: "https://placehold.co/300x300",
          alt: "Album 3"
        },
        musicians: [
          {
            name: "Lorem ipsum dolor sit amet",
            biography:
              "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
            photo: {
              path: "https://placehold.co/200x200",
              alt: "Musico 3"
            }
          }
        ]
      },
      {
        id: 4,
        name: "tincidunt",
        description:
          "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
        image: {
          path: "https://placehold.co/300x300",
          alt: "Album 4"
        },
        musicians: [
          {
            name: "Lorem ipsum dolor sit amet",
            biography:
              "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
            photo: {
              path: "https://placehold.co/200x200",
              alt: "Musico 4"
            }
          }
        ]
      },
      {
        id: 5,
        name: "posuere",
        description:
          "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
        image: {
          path: "https://placehold.co/300x300",
          alt: "Album 5"
        },
        musicians: [
          {
            name: "Lorem ipsum dolor sit amet",
            biography:
              "Phasellus vitae tincidunt ipsum. Proin posuere nibh a libero auctor fringilla. Aenean volutpat tincidunt urna. Aliquam eu mauris et urna eleifend interdum nec pretium nisl. Vivamus et metus felis. Etiam volutpat purus quis purus lobortis vehicula. Aenean hendrerit, erat ac luctus facilisis, lectus quam blandit eros, non congue ipsum nisi et lectus. Curabitur varius, orci id auctor finibus, nisi purus iaculis odio, a venenatis enim libero in ex. Phasellus dignissim imperdiet porta. Nullam feugiat et erat sed faucibus. Curabitur molestie, nibh eu porttitor placerat, purus sem vehicula tellus, in molestie erat dolor ac eros. Maecenas maximus, justo dignissim malesuada tincidunt, purus sapien commodo est, vitae varius ante nulla a metus. Sed tincidunt nibh id gravida faucibus. Suspendisse mi diam, feugiat ut ornare quis, rutrum quis ipsum. Cur abitur suscipit tincidunt faucibus. Donec nec est maximus neque ullamcorper cursus. Nulla eu mauris vestibulum, vulputate tellus eget, bibendum orci. Cras at libero tortor. Sed viverra elementum urna sed vehicula. Suspendisse tempor risus in quam pellentesque, quis malesuada dolor blandit. Nunc in mauris diam. Aliquam ac quam id est tempus commodo quis non enim. Nulla quis neque porta leo bibendum convallis.",
            photo: {
              path: "https://placehold.co/200x200",
              alt: "Musico 5"
            }
          }
        ]
      }
    ]
  },
  norte: {
    name: "Norte",
    history:
      'A história musical da região Norte remonta a milênios, com vestígios sonoros de povos antigos, como os tapajônicos e marajoaras, que produziam apitos zoomorfos e chocalhos de cerâmica utilizados em contextos xamânicos e rituais. Com o início da colonização europeia no século XVII, a música tornou-se uma ferramenta central de catequese das ordens religiosas, que introduziram o cantochão e o ensino de instrumentos para converter indígenas e negros. Esse período consolidou práticas como o terço cantado e levou à fundação da Schola Cantorum em Belém, em 1735, estabelecendo as bases de uma tradição musical sacra e de ensino formal que perduraria por séculos.\n\nO auge da economia da borracha, entre o final do século XIX e o início do XX, transformou Belém e Manaus em polos de modernização e consumo da cultura erudita europeia, no período conhecido como Belle Époque. A inauguração de casas como o Teatro da Paz e o Teatro Amazonas permitiu a realização de luxuosas temporadas de ópera com companhias italianas e francesas, além de impulsionar a criação do Conservatório de Música de Belém, atual Instituto Carlos Gomes, em 1895. Nesse cenário, o piano tornou-se um símbolo de status social, e a participação feminina ganhou destaque, tanto na interpretação quanto na educação musical, rompendo barreiras sociais e culminando em figuras emblemáticas como a pianista Helena Souza.\n\nAtualmente, a região Norte exibe uma vasta diversidade de gêneros populares e tradicionais, como o carimbó, a guitarrada, o marabaixo, a roraimeira e a viola de buriti, que integram saberes ancestrais a influências contemporâneas e fronteiriças. A partir da década de 1980, a implantação de cursos de graduação em música expandiu-se pelos estados nortistas, fortalecendo a formação de profissionais e pesquisadores. Esse movimento culminou, em 2023, na aprovação dos primeiros programas de pós-graduação específicos em música no Amazonas e no Pará, inaugurando uma fase de fortalecimento da pesquisa acadêmica voltada para as identidades sonoras e a memória histórica da Amazônia.',
    genres: [
      {
        id: 1,
        name: "Carimbó",
        description:
          'O carimbó é uma manifestação cultural de origem afro-indígena surgida no século XVII no estado do Pará, inicialmente como uma celebração interiorana de pescadores e agricultores após as colheitas e pescarias. Seu nome deriva do instrumento tupi korimbó ("pau furado que produz som"), um tambor artesanal escavado em tronco de árvore que marca o ritmo vibrante da música. Caracteriza-se por uma sonoridade percussiva com células rítmicas sincopadas, tradicionalmente executada no estilo "pau e corda" com instrumentos como o tambor curimbó, banjo, maracas e reco-reco, embora vertentes modernas incorporem guitarras e instrumentos de sopro. A dança é realizada em pares em uma formação de roda, onde não há contato físico entre o cavalheiro e a dama; as mulheres utilizam saias longas, coloridas e rodadas, e os dançarinos executam passos miúdos e giratórios que frequentemente imitam movimentos da fauna amazônica, como o macaco e o jacaré.',
        image: {
          path: "../assets/images/norte/img_1_norte_carimbo.jpg",
          alt: "Foto representativa do Carimbó"
        },
        musicians: [
          {
            name: "Pinduca",
            biography:
              'O “Rei do Carimbó”, Pinduca, consolidou-se como o maior divulgador desse gênero paraense ao integrar seu conjunto musical com soldados da Polícia Militar do Pará e lançar mais de dez discos, como “Carimbó e sirimdó” e o LP “No embalo do carimbó e seridó”. Autor de sucessos como “Curichão da saudade” e “Terra boa é o Pará”, ele foi homenageado em 2014 com a Ordem ao Mérito Cultural, na Classe Comendador, por Dilma Rousseff e Marta Suplicy. Sua trajetória seguiu ativa em 2016 com o CD “No Embalo do Pinduca”, produzido por Manoel Cordeiro, que trouxe uma sonoridade contemporânea a clássicos como “Sinhá pureza” e “Carimbó do macaco”',
            photo: { path: "../assets/images/norte/img_2_norte_pinduca.jpg", alt: "Foto do músico Pinduca" }
          },
          {
            name: "Dona Onete",
            biography:
              'Dona Onete, nome artístico de Ionete da Silveira Gama, é uma influente cantora, compositora, poetisa e ex-professora paraense, amplamente reconhecida como a "Diva do carimbó chamegado". Nascida em 1939 em Cachoeira do Arari, dedicou décadas de sua vida ao ensino de História e à militância sindical antes de iniciar sua carreira musical profissional tardiamente, lançando seu álbum de estreia, Feitiço Caboclo, apenas aos 73 anos em 2012. Sua obra é fundamentada em ritmos regionais como o carimbó e o siriá, e sua trajetória de sucesso inclui turnês internacionais, participações em grandes festivais como o Rock in Rio e a condecoração com a Ordem do Mérito Cultural.',
            photo: { path: "../assets/images/norte/img_3_norte_dona_onete.jpg", alt: "Foto do músico Dona Onete" }
          }
        ]
      },
      {
        id: 2,
        name: "Calypso",
        description:
          'O calypso paraense, também conhecido como brega pop ou brega calypso, surgiu em Belém, no estado do Pará, em meados da década de 1990, a partir de uma fusão entre o brega tradicional e ritmos regionais como lambada, carimbó, guitarrada e siriá, além de influências caribenhas como o calipso, o ska e o reggae. Diferenciando-se de suas vertentes originais por um ritmo mais acelerado, o gênero tem como características marcantes a ênfase nos acordes de guitarra, o uso de metais e um forte peso sonoro na bateria. Embora mantenha letras sentimentais sobre desilusões amorosas e traições, típicas do brega, o calypso destaca-se por performances vibrantes que incluem vocalistas e grupos de bailarinos executando coreografias marcadas em grandes estruturas de palco. Desenvolvido inicialmente na periferia e difundido por vendedores ambulantes, o estilo alcançou projeção nacional nos anos 2000, tornando-se um negócio lucrativo com a Banda Calypso como sua maior expoente',
        image: {
          path: "../assets/images/norte/img_4_norte_calypso.jpg",
          alt: "Foto representativa do Calypso"
        },
        musicians: [
          {
            name: "Banda Calpyso",
            biography:
              'A Banda Calypso foi um grupo musical brasileiro formado em Belém, Pará, no ano de 1999, pela cantora e dançarina Joelma Mendes e pelo guitarrista e produtor Chimbinha. O conjunto tornou-se um fenômeno de vendas, comercializando mais de 15 milhões de cópias e sendo a única banda brasileira a conquistar um certificado de diamante quíntuplo. Sua sonoridade característica, baseada no ritmo calypso — uma vertente do brega com batidas aceleradas e forte presença de guitarras —, fundia influências regionais do Pará, como o carimbó e a lambada, a ritmos caribenhos como cúmbia e merengue. Além do sucesso comercial, o grupo teve um papel fundamental na popularização da cultura paraense em todo o Brasil e no exterior, desafiando preconceitos regionais e o modelo tradicional das grandes gravadoras através de uma gestão independente e performances de palco vibrantes. Após 15 anos de carreira e sucessos nacionais como "A Lua Me Traiu" e "Dançando Calypso", a banda encerrou suas atividades em 2015, em decorrência da separação do casal líder.',
            photo: {
              path: "../assets/images/norte/img_5_norte_banda_calypso.jpg",
              alt: "Foto da Banda Calypso"
            }
          }
        ]
      },
      {
        id: 3,
        name: "Tecnobrega ",
        description:
          'O tecnobrega surgiu em Belém do Pará entre o final da década de 1990 e o início dos anos 2000 como uma evolução tecnológica do brega tradicional. Teve como marco inicial a banda Tecno Show, liderada por Gaby Amarantos em 2002, que fundiu ritmos regionais como o carimbó e o calypso com música pop, eletrônica e arranjos criados por programas de computador. Caracteriza-se por uma sonoridade baseada em sintetizadores, caixas de ritmo e guitarras elétricas, com remixes e batidas dançantes que são difundidos principalmente nas festas de aparelhagem — grandes espetáculos com potentes sistemas de som e iluminação. Visualmente, o gênero envolve performances extravagantes e uma dança em pares marcada pelo "caquiado", sendo hoje reconhecido como Patrimônio Cultural do Pará.',
        image: {
          path: "../assets/images/norte/img_6_norte_tecnobrega.jpg",
          alt: "Foto representativa do Tecnobrega"
        },
        musicians: [
          {
            name: "Tecno Show",
            biography:
              'A Banda Tecno Show foi um grupo musical formado em 2002, na cidade de Belém, Pará, sob a liderança da cantora Gaby Amarantos. O conjunto é reconhecido como um dos precursores do tecnobrega, destacando-se por uma sonoridade inovadora que fundia ritmos tradicionais da região Norte, como o carimbó e o calypso (brega pop), com elementos da música eletrônica, pop e forró eletrônico. Essa mistura utilizava riffs acelerados de guitarra do brega tradicional combinados a batidas e arranjos eletrônicos criados em computador. Com sucessos como "Gemendo" e "Não vou te deixar", a banda alcançou projeção nacional em programas da Rede Globo e da MTV, além de registrar vendas superiores a 100 mil discos. A trajetória do grupo, fortemente ligada à cultura das aparelhagens e rádios comunitárias, encerrou-se em 2010, quando Gaby Amarantos decidiu seguir carreira solo',
            photo: {
              path: "../assets/images/norte/img_7_norte_tecno_show.jpg",
              alt: "Foto da Banda Tecno Show"
            }
          },
          {
            name: "Tonny Brasil",
            biography:
              'Antonio Luiz do Carmo Conceição, mais conhecido como Tonny Brasil (1967–2024), foi um produtor, cantor e multi-instrumentista paraense amplamente reconhecido como o criador do tecnobrega. Sua inovação musical surgiu após uma viagem à Guiana Francesa, onde, inspirado pelo uso de batidas eletrônicas no zouk, decidiu aplicar sequenciadores MIDI e ritmos sintetizados ao brega tradicional, criando a canção "Lana", considerada o primeiro registro do gênero. Ao longo de sua prolífica carreira, Tonny compôs cerca de 2.000 músicas, com sucessos gravados por grandes nomes como Banda Calypso ("Cúmbia do Amor" e "Fórmula Mágica"), Reginaldo Rossi ("Leviana") e Marília Mendonça. Pela relevância de sua obra, que transformou a cena cultural do Norte do Brasil, ele foi oficialmente homenageado pela Assembleia Legislativa do Pará como o pai do tecnobrega.',
            photo: {
              path: "../assets/images/norte/img_8_norte_tonny_brasil.jpg",
              alt: "Foto de Tonny Brasil"
            }
          }
        ]
      },
      {
        id: 4,
        name: "Toada do Boi-Bumbá",
        description:
          'A toada do boi-bumbá em Parintins, Amazonas, é o alicerce musical da manifestação folclórica local, funcionando como a linha mestra que determina a evolução do boi na arena. Suas origens remontam ao final do século XIX e início do século XX, quando o folguedo foi trazido para a Amazônia por imigrantes nordestinos, sendo inspirado em autos dramáticos portugueses que narram a morte e ressurreição do boi. Ao longo das décadas, o gênero sofreu o impacto da floresta, substituindo elementos africanos pela linguagem regional e incorporando personagens amazônicos, como o pajé. Caracteriza-se tradicionalmente por ser uma cantiga melancólica e sentimental, estruturada em quadras com estrofes e refrão, embora as composições contemporâneas tenham se tornado mais longas e complexas, adotando ritmos mais acelerados para atender às exigências do mercado de espetáculo. Tematicamente, as toadas exaltam a natureza amazônica, as lendas indígenas, o cotidiano do caboclo e a rivalidade entre os bois, guardando semelhanças estruturais com as cantigas medievais e os desafios dos repentistas nordestinos.',
        image: {
          path: "../assets/images/norte/img_9_norte_toada_boi_bumba.jpg",
          alt: "Foto representativa da Toada do Boi-Bumbá"
        },
        musicians: [
          {
            name: "Chico da Silva",
            biography:
              'Chico da Silva, nome artístico de Francisco Ferreira da Silva, é um influente cantor, compositor e poeta brasileiro nascido em Parintins, Amazonas, em 1945. Reconhecido por desenvolver um estilo de samba particularmente harmonioso, ele conquistou projeção nacional com sucessos como "Pandeiro é Meu Nome" e "Sufoco", esta última gravada pela cantora Alcione e que vendeu centenas de milhares de cópias. Além de sua carreira no samba e na MPB, Chico possui um papel histórico no Festival Folclórico de Parintins; após enfrentar um câncer em 1988 que afetou sua voz, ele retornou ao Amazonas e tornou-se o único compositor a competir contra si mesmo no festival, escrevendo toadas simultaneamente para os bois Garantido e Caprichoso. Ele é também o autor de "O Amor está no Ar", a única toada oficial executada pelas duas agremiações adversárias.',
            photo: {
              path: "../assets/images/norte/img_10_norte_chico.jpg",
              alt: "Foto de Chico da Silva"
            }
          },
          {
            name: "Tadeu Garcia",
            biography:
              'Tadeu Garcia, natural de Parintins, foi um emblemático compositor do Boi Garantido, carinhosamente apelidado de "Mestre das Evoluções" por seu talento em criar toadas que descreviam os movimentos do boi na arena. Ao longo de décadas, ele imortalizou-se no Festival de Parintins ao consolidar o estilo das toadas de evolução com sucessos como "Evolução" e "Segunda Evolução", que ajudavam a guiar as coreografias do boi no Bumbódromo. Suas composições abrangiam desde manifestações de amor à torcida encarnada, como em "Rubro Coração", até temas de resistência histórica e identidade regional, a exemplo de "Tempos de Cabanagem" e "Encontro dos Povos". Garcia, que faleceu em março de 2026 aos 68 anos, deixou um legado de grandes clássicos que incluem "Luzes Rubras", "Muiraquitã" e sua obra mais recente, "As Dimensões do Vaqueiro", lançada em 2024.',
            photo: {
              path: "../assets/images/norte/img_11_norte_tadeu.jpg",
              alt: "Foto de Tadeu Garcia"
            }
          }
        ]
      },
    ]
  }
};
