app = angular.module("quizlet");

app.factory("levels", function() {
  var levels = [
    {
      minimun_score: 0,
  		title: "Empreendedor Calouro",
  		text: "Você começou a trilhar agora o seu caminho. Um hangout exclusivo faria muito bem para seu projeto. Mande email para luan@syhus.com.br para combinarmos os detalhes.",
      image: "images/freshman.png"
  	},
    {
      minimun_score: 4,
  		title: "Empreendedor recém-graduado",
  		text: "Você já aprendeu o essencial e está pronto para seguir seu caminho! Um hangout exclusivo gratuito com a Syhus pode te ajudar com seu projeto. Mande email para luan@syhus.com.br para combinarmos os detalhes.",
      image: "images/graduated.png"
  	},
    {
      minimun_score: 7,
  		title: "Empreendedor Expert",
  		text: "Você sabe quase tudo sobre gestão. Meia hora de consultoria gratuita te faria muito bem! Mande email para leonardo@syhus.com.br para combinarmos os detalhes.",
      image: "images/expert.png"
  	},
    {
      minimun_score: 10,
      title: "Empreendedor Ninja",
      text: "Você sabe tudo sobre gestão e merece um prêmio! Mande email para leonardo@syhus.com.br para ganhar 1 hora de consultoria gratuita",
      image: "images/ninja.png"
    }
  ];

  return {
		getLevel: function(score) {
      filtered = levels.filter(function(level) {
        return score >= level.minimun_score;
      });

      console.log(filtered);

      return filtered[filtered.length - 1];
		}
  };
});
