const data = [
    {
        question: "Seja a proposição: “Se hoje é sexta-feira, amanhã não estudarei”. A negação dessa afirmação é:",
        options: ["A: Hoje não é sexta-feira e amanhã estudarei","B: Hoje é sexta-feira e amanhã estudarei","C: Se hoje é sexta-feira, amanhã estudarei","D: Se hoje não é sexta-feira, amanhã estudarei","E: Hoje não é sexta-feira ou amanhã estudarei."],
        correct_option: "B: Hoje é sexta-feira e amanhã estudarei",
    },

    {
        question: "Oito motoristas transportam 1000 caixas em 10 horas. Em quantas horas, dois motoristas transportam 400 caixas?",
        options: ["A: 14 horas e meia","B: 15 horas","C: 15 horas e meia","D: 16 horas","E: 16 horas e meia"],
        correct_option: "D: 16 horas",
    },

    {
        question: "Observe a sequência. 4321  -  5555  -  6789  -  791113  . O próximo número na sequência é:",
        options: ["A: 8101315","B: 9111417","C: 8111417","D: 9111315","E: 8111319"],
        correct_option: "C: 8111417",
    },

    
    {
        question: "A notificação compulsória é a principal fonte da vigilância epidemiológica, sendo conceituada pelo Ministério da Saúde como a comunicação da ocorrência de determinada doença ou agravo à saúde feita à autoridade sanitária por profissionais de saúde ou qualquer cidadão para fins de adoção de medidas de intervenção pertinentes. Nesse contexto, são doenças de notificação compulsória imediata até 24horas, EXCETO:",
        options: ["A: botulismo, cólera e dengue óbitos.","B: marburg, febre purpúrica brasileira e arenavírus","C: peste, raiva humana e síndrome da rubéola congênita","D: tuberculose, leptospirose e leishmaniose visceral.","E: antraz, tularemia e varíola."],
        correct_option: "D: tuberculose, leptospirose e leishmaniose visceral.",
    },

    {
        question: "Considerando que o sarampo é uma doença infecciosa grave, causada por um vírus, que pode ser fatal, sendo a única maneira de evitá-la a vacinação, é CORRETO afirmar que o Ministério da Saúde recomenda que a vacina tetra viral seja administrada, em uma única dose, nas crianças aos:",
        options: ["A: 2 meses","B: 4 meses","C: 6 meses","D: 12 meses","E: 15 meses"],
        correct_option: "E: 15 meses",
    },

    {
        question: "Acerca da cólera, é INCORRETO afirmar que:",
        options: ["A: a maior parte das pessoas infectadas pela cólera não apresenta sintomas e, em muitos casos, nem percebe que contraiu a doença","B: a cólera não tem cura.","C: os sintomas da cólera, em aproximadamente 80% dos casos são leves ou moderados e devem ser tratados somente por meio da administração oral de líquidos e SRO (planos A e B), ou seja, soro","D: A ocorrência da cólera está diretamente relacionada às condições inadequadas de saneamento básico","E: O diagnóstico da cólera é realizado a partir do cultivo de amostras de fezes ou vômito"],
        correct_option: "B: a cólera não tem cura.",
    },
    {
        question: "Segundo Geroge (2011), a condição de saúde de um indivíduo pode ser analisada por meio de diversos fatores, que são chamados de “determinantes de saúde” ou condicionantes de saúde. Dessa forma, é CORRETO afirmar que o fator determinante e/ou condicionante biológico, relaciona-se a:",
        options: ["A: agentes químicos, físicos ou biológicos.","B: emprego e pobreza.","C:  a idade, sexo e condições genéticas.","D: alimentação, atividade física e comportamento sexual","E: educação, saúde, transporte e lazer"],
        correct_option: "C:  a idade, sexo e condições genéticas.",
    },
    {
        question: "Acerca da habitação prevista no Estatuto do Idoso assinale a afirmativa INCORRETA:",
        options: ["A: o idoso tem direito a moradia, mas é vedado morar desacompanhado dos seus familiares.","B: A assistência integral na modalidade de entidade de longa permanência será prestada quando verificada inexistência de grupo familiar, casa-lar, abandono ou carência de recursos financeiros próprios ou da família.","C: toda instituição dedicada ao atendimento ao idoso fica obrigada a manter identificação externa visível, sob pena de interdição, além de atender toda a legislação pertinente.","D: As instituições que abrigarem idosos são obrigadas a manter padrões de habitação compatíveis com as necessidades deles, bem como provê-los com alimentação regular e higiene indispensáveis às normas sanitárias e com estas condizentes, sob as penas da lei.","E: As unidades residenciais reservadas para atendimento a idosos devem situar-se, preferencialmente, no pavimento térreo."],
        correct_option: "A: o idoso tem direito a moradia, mas é vedado morar desacompanhado dos seus familiares.",
    },
    {
        question: "A doença de chagas é uma infecção que na fase aguda causa os sintomas de febre prolongada por mais de sete dias, dor de cabeça, fraqueza intensa, inchaço nos rostos e pernas e que na fase crônica, a maioria dos casos não apresenta sintomas, porém algumas pessoas podem apresentar: problemas cardíacos, como insuficiência cardíaca e problemas digestivos, como megacolon e megaesôfago. Acerca da doença de chagas, é CORRETO afirmar que é causada pelo:",
        options: ["A: trichomonas vaginalis","B: aedes aegypti","C: Entamoeba histolytica","D: plasmodium","E: trypanosoma cruzi."],
        correct_option: "E: trypanosoma cruzi.",
    },
    {
        question: " Em conformidade com o Ministério da Saúde são sintomas que caracterizam a malária, EXCETO:",
        options: ["A: febre alta","B: calafrios","C: tumores","D: sudorese","E: hipertensão arterial."],
        correct_option: "E: hipertensão arterial.",
    },
    {
        question: "De acordo com o Estatuto da Criança e do Adolescente, é CORRETO afirmar que o reconhecimento do estado de filiação trata-se de um direito:",
        options: ["A: personalíssimo, disponível e imprescritível.","B: transferível, disponível e prescritível.","C: personalíssimo, indisponível e imprescritível.","D: transferível, indisponível e imprescritível","E: personalíssimo, indisponível e prescritível."],
        correct_option: "C: personalíssimo, indisponível e imprescritível.",
    },
    {
        question: "Em conformidade com a Lei Orgânica da Saúde, a saúde do trabalhador trata-se de um conjunto de atividades que se destina, através das ações de vigilância epidemiológica e vigilância sanitária, à promoção e proteção da saúde dos trabalhadores, assim como visa à recuperação e reabilitação da saúde dos trabalhadores submetidos aos riscos e agravos advindos das condições de trabalho, sendo INCORRETO afirmar que abrange:",
        options: ["A: revisão periódica das remunerações dos trabalhadores, tendo na sua elaboração a colaboração das entidades sindicais","B: assistência ao trabalhador vítima de acidentes de trabalho ou portador de doença profissional e do trabalho.","C: participação, no âmbito de competência do Sistema Único de Saúde (SUS), em estudos, pesquisas, avaliação e controle dos riscos e agravos potenciais à saúde existentes no processo de trabalho.","D: avaliação do impacto que as tecnologias provocam à saúde.","E: participação na normatização, fiscalização e controle dos serviços de saúde do trabalhador nas instituições e empresas públicas e privadas."],
        correct_option: "A: revisão periódica das remunerações dos trabalhadores, tendo na sua elaboração a colaboração das entidades sindicais",
    },

    {
        question: "Segundo a Lei nº 8.080/1990, é CORRETO afirmar que a iniciativa privada poderá participar do Sistema Único de Saúde (SUS) em caráter:",
        options: ["A: complementar","B:  livre","C:  integral.","D:  superficial","E: imprescindível"],
        correct_option: "E: imprescindível",
    },
    {
        question: " Acerca do Calendário de Vacinação da pessoa idosa, é CORRETO afirmar:",
        options: ["A: A vacina contra a influenza terá uma dose anual.","B: A vacina contra pneumocócica 23 não tem indicação para grupos-alvo específicos.","C: O reforço da dupla adulto (dT) será a cada 5 anos.","D: A vacina contra a febre amarela será aplicada em duas doses","E: A vacina contra a hepatite B não é indicada para o idoso."],
        correct_option: "A: A vacina contra a influenza terá uma dose anual.",
    },
    {
        question: "Analise as doenças e agravos abaixo e assinale a afirmativa que NÂO ESTÁ ASSOCIADA à falta de saneamento básico.",
        options: ["A: febre tifoide.","B:  hanseníase.","C: aids","D: giardíase.","E: shigelose."],
        correct_option: "C: aids",
    },
    {
        question: "O novo agente do coronavírus (COVID-19) causa febre, tosse e dificuldade respiratória e sua disseminação ocorre de pessoa para pessoa, sendo relatado pela primeira vez em Wuhan, na China, em 31 de dezembro de 2019. No Brasil, a orientação do Ministério da Saúde está relacionada aos cuidados básicos para reduzir o risco geral de contrair ou transmitir infecções respiratórias agudas. Sendo assim, entre as medidas preventivas abaixo, assinale a afirmativa INCORRETA",
        options: ["A: evitar contato próximo com pessoas doentes.","B: cobrir boca e nariz ao tossir ou espirrar com um lenço de papel e jogar no lixo.","C:  limpar e desinfetar objetos e superfícies tocados com frequência","D:  evitar tocar nos olhos, nariz e boca com as mãos lavadas.","E: lavar as mãos frequentemente com água e sabonete por pelo menos 20 segundos, respeitando os 5 momentos de higienização. Se não houver água e sabonete, usar um desinfetante para as mãos à base de álcool."],
        correct_option: "D:  evitar tocar nos olhos, nariz e boca com as mãos lavadas.",
    },
    {
        question: "Complete a lacuna na frase a seguir e assinale a afirmativa CORRETA. O conjunto de ações e serviços de saúde, prestados por órgãos e instituições públicas federais, estaduais e municipais, da Administração direta e indireta e das fundações mantidas pelo Poder Público, constitui _____________.",
        options: ["A: as comissões intersetoriais.","B:  subsistema de atenção à saúde.","C: participação complementar.","D: o Sistema Único de Saúde.","E: seguridade social."],
        correct_option: "D: o Sistema Único de Saúde.",
    },
    {
        question: "Considerando o Decreto nº 7.508, de 28 de junho de 2011 que regulamenta a Lei Orgânica da Saúde, é CORRETO afirmar que o Ministério da Saúde consolidará e publicará as atualizações da RENASES a cada:",
        options: ["A: 2 meses","B:  4 meses","C: 6 meses","D: 2 anos","E: 4 anos"],
        correct_option: "D: 2 anos",
    },
    {
        question: ": A Sra. Jaci está com 8 meses de gravidez e já está preocupada se os serviços de saúde do Sistema Único de Saúde (SUS), da rede própria ou conveniada permitem a presença de acompanhante para ficar ao seu lado durante o nascimento do seu primogênito. Acerca da Lei nº 8.080, de 19 de setembro de 1990 é INCORRETO afirmar que:",
        options: ["A: A parturiente terá direito apenas a um acompanhante durante todo o período de trabalho de parto, parto e pósparto imediato","B: O médico indicará o acompanhante.","C: Os hospitais de todo o país ficam obrigados a manter em local visível de suas dependências o aviso informando do direito ao acompanhante","D: As ações destinadas a viabilizar o pleno exercício do direito ao acompanhante constarão no regulamento da lei, a ser elaborado pelo órgão competente do Poder Executivo.","E: A parturiente indicará o acompanhante."],
        correct_option: "B: O médico indicará o acompanhante.",
    },
];
export default data;