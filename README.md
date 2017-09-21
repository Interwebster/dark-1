IMPLEMENTADOS
>> juntei as funções de botão em um objeto 

ROADMAP
>> passagem de tempo
	** contar a passagem de tempo
	** dividir o jogo em estágios, definidos pelo tempo passado
	** adicionar um texto fixo ao final das descrições que depende de quanto tempo passou
	-- mudar algumas descrições de acordo com o estágio do jogo (1,2,3 - dependem do tempo decorrido)
	>> acabar o jogo no estágio 3
	>> reiniciar o jogo depois do estágio 3
	>> manter algumas variáveis mesmo depois de reiniciar o jogo da maneira anterior
>> inventário (quebrar em outras tarefas)	
>> eventos
	>> aparecer uma descrição como resultado de uma ação. depois de um tempo, acontecer outra coisa.
	>>ou, como alternativa, escrever um parágrafo de cada vez.
>> efeito typewriter
	>> só da primeira vez que um texto aoparecer

FEATURE

# MECANICAS DE JOGO

## Inventário
-	Mostrar inventário na tela?
-	Ter uma função que mostra o inventário?
-	Poder examinar os itens do inventário

#### Usar
Usar itens automaticamente? (muda resultado de ações baseado nos itens que tem)

ex:	ao examinar o cofre sem ter nenhum item:
> é o seu cofre, pena que vc perdeu a chave!

ao examinar o cofre com a chave de fenda na mochila:
> é o seu cofre, pena que vc perdeu a chave... Hmm, se bem que deve dar pra arrombar com a sua chave de fenda <\USAR CHAVE DE FENDA?>

Oferecer novas opções quando o usuário tem item em mãos

Ter uma função USAR ESSE ITEM

Ela pede algum input? (ex: usar item onde?)


## Contagem de tempo/turnos

(1 movimento/ação = 1T)

- Acionar eventos de acordo com
- Alterar alguma coisa de acordo com o tempo
- Alterar o estado do personagem de acordo com o tempo (ex.:vai ficando mais cansado, muda as descrições ligeiramente)

#### Eventos que afetem o tempo

Na mesma linha de tempo, ter alguma outra variável que influencia nos desdobramentos possíveis e no texto das descrições (medo, cansaço, sanidade?)

#### Eventos mudarem descrição de cômodos que já foram visitados

O texto ser diferente ao repetir uma ação, ex.:

1a vez:
>Sua estante querida! Ué, ta faltando o seu livro preferido, estranho...

2a vez em diante:
>Onde será que esse livro foi parar?)

## Investigação

Uma das idéias iniciais era trabalhar com tooltips para o usuário ver algumas coisas da sala
