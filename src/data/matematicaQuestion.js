const data = [
    {
        question: "Pergunta 1?",
        options: ["A","B","C","D"],
        correct_option: "D",
    },
    {
        question: "Pergunta 1?",
        options: ["A","B","C","D"],
        correct_option: "D",
    },
    {
        question: "Iniciando seu treinamento, dois ciclistas partem simultaneamente de um mesmo ponto de uma pista. Mantendo velocidades constantes, Lucas demora 18 minutos para completar cada volta, enquanto Daniel completa cada volta em 15 minutos. Sabe-se que às 9 h 10 min eles passaram juntos pelo ponto de partida pela primeira vez, desde o início do treinamento. Desse modo, é correto afirmar que às 8 h 25 min, Daniel já havia completado um número de voltas igual a",
        options: ["A: 2","B: 3","C: 4","D: 5","E: 7"],
        correct_option: "B: 3",
    },
    {
        question: "Xavier e Yuri têm dívidas e pretendem pagá-las com o salário recebido. Sabe-se que 1/5 do valor da dívida de Xavier corresponde a 3/25 do valor da dívida de Yuri e que ambos, juntos, devem R$ 2.000,00. Desse modo, se Xavier pagar apenas 3/5 do valor total da sua dívida, ele ainda continuará devendo",
        options: ["A: R$ 750,00.","B: R$ 400,00","C: R$ 350,00","D: R$ 300,00","E: R$ 250,00"],
        correct_option: "D: R$ 300,00",
    },
    {
        question: "Do preço de venda de certo produto, um fabricante paga 10% de comissão ao representante comercial. Do restante, 40% correspondem ao custo do produto. Se o custo desse produto é R$ 900,00, então o seu preço de venda é igual a",
        options: ["A: R$ 2.000,00.","B: R$ 2.250,00","C: R$ 2.500,00.","D: R$ 2.750,00","E: R$ 3.000,00"],
        correct_option: "C: R$ 2.500,00.",
    },
    {
        question: "Para manter o forno aceso durante 7 horas diárias, uma pizzaria consome 49 m3 de lenha a cada 28 dias. Para um teste de mercado, os proprietários pretendem manter o forno aceso durante 10 horas diárias, por um período de 70 dias. Para a realização desse teste, a quantidade necessária de lenha será, em metros cúbicos, igual a",
        options: ["A: 125","B: 137.","C: 155.","D: 170","E: 175"],
        correct_option: "E: 175",
    },
    {
        question: "As receitas da Sorvetes Gellatto no 1.º e no 2.º bimestres de 2013 tiveram, em relação à receita do último bimestre de 2012, um acréscimo de 20% e uma queda de 40%, respectivamente. Sabendo-se que a receita média bimestral no período considerado (último bimestre de 2012 até o 2.º bimestre de 2013) foi igual a R$ 840.000,00, é correto afirmar que a receita do 2.º bimestre de 2013 foi igual a",
        options: ["A: R$ 360.000,00.","B: R$ 420.000,00","C: R$ 480.000,00","D: R$ 540.000,00.","E: R$ 560.000,00."],
        correct_option: "D: R$ 540.000,00.",
    },
    {
        question: "A distância entre o primeiro e o último posto de pedágio de uma rodovia é X km. Entre eles foram instalados mais três postos, de modo que a distância entre dois postos adjacentes seja sempre a mesma, de Y km. Se a soma das distâncias X e Y é igual a 525 km, então é correto afirmar que a distância Y, em quilômetros, vale",
        options: ["A: 105.","B: 100","C: 95","D: 90","E: 85"],
        correct_option: "A: 105.",
    },
    {
        question: "Certo capital C foi aplicado a juros simples, a uma taxa de RASC U NHO 9,6% ao ano, e o montante resgatado, ao final da aplicação, foi igual a 1,12 C. Esse capital permaneceu aplicado durante",
        options: ["A: 1 ano e 2 meses","B: 1 ano e 3 meses.","C: 1 ano e 4 meses.","D: 1 ano e 5 meses.","E: 1 ano e meio"],
        correct_option:"B: 1 ano e 3 meses.",
    },
    {
        question: "Certa empresa da área de tecnologia da informação tem computadores com memória volátil (RAM) de 8 gigabytes. Sabendo-se que cada gigabyte corresponde a 230 bytes, então a quantidade de bytes de RAM de cada computador é",
        options: ["A: 2³¹","B: 2³²","C: 2³³","D: 2²³","E: 2²¹"],
        correct_option: "C: 2³³",
    },
    {
        question: "Em certa empresa de tecnologia da informação, os funcioná rios Abel, Beatriz e Carlos trabalham em horários variados. No dia 19.08.2013, Abel entrou às 08h00 e saiu 12 horas depois. No mesmo dia, Beatriz entrou às 14h30 e saiu 12 horas depois, e Carlos entrou às 17h40 e saiu às 23h00 do mesmo dia. Nesse dia, os três funcionários estiveram ao mesmo tempo na empresa por um período de",
        options: ["A: 50 minutos.","B: 1 hora e 15 minutos.","C: 1 hora e 40 minutos.","D: 2 horas","E: 2 horas e 20 minutos"],
        correct_option: "E: 2 horas e 20 minutos",
    },
    {
        question: "Félix aplicou uma quantia de R$ 7.000,00 com taxa de juro simples de 2% ao mês, durante 10 meses. O montante gerado correspondeu a 40% dos 10 meses de salário líquido que Félix recebeu nesse período. Portanto, o salário líquido mensal de Félix é",
        options: ["A: R$ 1.200,00.","B: R$ 1.400,00","C: R$ 1.800,00","D: R$ 2.100,00.","E: R$ 2.400,00"],
        correct_option: "D: R$ 2.100,00.",
    },
    {
        question: "Ana, Bento, Célia, Dario e Eva são cinco irmãos, não necessariamente nessa ordem de idades. Dario é mais velho que Célia, e esta é mais nova que Bento. Eva e Ana são ambas mais novas que Bento e mais velhas que Dario. Dentre todos os irmãos e irmãs, quem tem menos idade é",
        options: ["A: Ana.","B: Bento.","C: Célia.","D: Dario","E: Eva."],
        correct_option: "D: Dario",
    },
    {
        question: "O uso das lâmpadas domésticas comuns de filamento está sendo, aos poucos, descontinuado, com substancial economia de energia elétrica. Em certa residência, 10 lâmpadas de filamento, acesas em média 5 horas por dia, geravam um custo total de R$ 0,15 por dia. Foram substituídas por 20 lâmpadas fluorescentes compactas, que agora ficam acesas em média 6 horas por dia. Cada lâmpada fluorescente consome apenas 25% do que consumia cada lâmpada de filamento, no mesmo tempo de uso. Portanto, o gasto diário devido a todas as novas lâmpadas passou a ser de",
        options: ["A: R$ 0,15.","B: R$ 0,14.","C: R$ 0,12.","D: R$ 0,10.","E: R$ 0,09"],
        correct_option: "E: R$ 0,09",
    },
];