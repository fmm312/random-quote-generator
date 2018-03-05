var quotes = [
	'Se você não está disposto a arriscar, esteja disposto a uma vida comum.<br> <p class="quote-title">Jim Rohn</p>' , 

	'Todos os seus sonhos podem se tornar realidade se você tiver coragem para persegui-los.<br> <p class="quote-title"> Walt Disney</p>' , 

	'Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança.<br> <p class="quote-title">Charles Darwin</p>' , 
	
	'Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele.<br> <p class="quote-title">David Brinkley</p>',
	
	'Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem.<p class="quote-title">Ray Goforth</p>',
	
	'O ponto de partida de qualquer conquista é o desejo<br> <p class="quote-title">Napoleon Hill</p>.',
	
	'Todo progresso acontece fora da zona de conforto.<p class="quote-title">Michael John Bobak</p>.',
	
	'Daqui a vinte anos, você não terá arrependimento das coisas que fez, mas das que deixou de fazer. Por isso, veleje longe do seu porto seguro. Pegue os ventos. Explore. Sonhe. Descubra.<p class="quote-title">Mark Twain</p>.',
	
	'Nosso maior medo não deve ser o fracasso, mas ser bem-sucedidos em algo que não importa.<br> <p class="quote-title"> Francis Chan</p>',
	
	'Muitas das falhas da vida ocorrem quando não percebemos o quão próximos estávamos do sucesso na hora em que desistimos.<br> <p class="quote-title">Thomas Edison</p>',
	
	'Coragem é a resistência ao medo, o domínio do medo – não a ausência do medo.<br> <p class="quote-title"> Mark Twain</p>',
	
	'Apenas deixe para amanhã o que você está disposto a morrer tendo deixado de fazer.<br> <p class="quote-title">  Pablo Picasso</p>',
	
	'Se você quer fazer uma mudança permanente, pare de se focar no tamanho de seus problemas e comece a focar no seu tamanho.<br> <p class="quote-title">T. Harv Eker</p>',
	
	'Se você não tiver seu próprio plano de vida, é provável que caia no plano de alguma outra pessoa. E adivinha o que eles planejaram para você? Não muito.<br> <p class="quote-title">Jim Rohn</p>',
	
	'A vida é uma viagem e se você se apaixona pela jornada, você estará apaixonado para sempre.<br> <p class="quote-title">Peter Hagerty</p>',
	
	'Muito do estresse que as pessoas sentem não vem de ter muito o que fazer. Ele vem de não terminar o que foi começado.<br> <p class="quote-title">David Allen</p>',
	
	'Se você procura sua realização nos outros, você nunca será realizado. Se sua felicidade depende de dinheiro, você nunca será feliz consigo mesmo. Se contente com o que você tem; fique feliz com a maneira como as coisas são. Quando você perceber que não está faltando nada, o mundo pertence a você.<br> <p class="quote-title">Lao Tzu</p>',
	
	'A arte de viver está menos em eliminar nossos problemas do que em crescer com eles.<br> <p class="quote-title"> Bernard M. Baruch</p>',
	
	'A felicidade não é uma estação em que você chega, mas uma maneira de viajar.<br> <p class="quote-title">Margaret Lee Runbeck</p>',
	
	'A verdadeira felicidade não é alcançada através da auto-gratificação, mas através da fidelidade a um propósito digno.<br> <p class="quote-title">Helen Keller/p>',
	
	'Todos nós recebemos relatórios de muitas maneiras diferentes, mas a verdadeira emoção do que você está fazendo está em fazê-lo. Não é o que você vai conseguir no final, é realmente em fazer, e amar o que você está fazendo.<br> <p class="quote-title">Ralph Lauren/p>',
	
	'Faça algo que ame e você nunca mais precisará trabalhar na vida.<br> <p class="quote-title">Willie Hill</p>',
	
	'A ansiedade é a vertigem da liberdade.<br> <p class="quote-title">Soren Kierkegaard</p>',
	
	'Faça o que você sempre fez e você terá sempre o mesmo resultado.<br> <p class="quote-title">Sue Knight</p>',
	
	'Nós evitamos as coisas das quais temos medo porque pensamos que haverão consequências desastrosas se as confrontarmos. Mas a verdadeira consequência desastrosa em nossas vidas vem de evitar coisas sobre as quais nós precisamos aprender ou descobrir.<p class="quote-title">Shakti Gawain</p>',
	
	'Muito melhor é arriscar coisas grandiosas para ganhar vitórias gloriosas – mesmo que estampadas pelo fracasso – do que se alinhar com aqueles espíritos pobres que nem aproveitam muito nem sofrem muito, porque vivem em uma penumbra cinzenta que não conhece nem a vitória nem a derrota.<p class="quote-title">Theodore Roosevelt</p>',
	
	'Eu não sei a chave para o sucesso, mas a chave para o fracasso é tentar agradar a todos.<br> <p class="quote-title"> Bill Cosby</p>',
	
	'O primeiro passo em direção ao sucesso é dado quando você se recusa a ser um prisioneiro do ambiente em que estava inicialmente.<br> <p class="quote-title"> Mark Caine</p>',
	
	'Sempre que você se encontrar ao lado da maioria, é tempo de fazer uma pausa e refletir.<br> <p class="quote-title"> Mark Twain</p>',
	
	'Se você ouve uma voz dentro de você dizer ‘você não pode pintar’, então pinte sem dúvida, e essa voz será silenciada.<br> <p class="quote-title">Vincent Van Gogh</p>',
];

document.getElementById('btn-quotes').onclick = function(){
   var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
   document.getElementById('quoteBox').innerHTML = randomQuotes; 
}