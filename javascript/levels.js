app = angular.module("quizlet");

app.factory("levels", function() {
  var levels = [
    {
      minimun_score: 0,
  		title: "Empreendedor Calouro",
  		text: "Você começou a trilhar agora o seu caminho. Um hangout exclusivo faria muito bem para seu projeto. Passe no stand da Syhus para combinarmos os detalhes.",
      image: "images/freshman.png"
  	},
    {
      minimun_score: 4,
  		title: "Empreendedor recém-graduado",
  		text: "Você já aprendeu o essencial e está pronto para seguir seu caminho! Um hangout exclusivo gratuito com a Syhus pode te ajudar com seu projeto. Passe no nosso stand combinarmos os detalhes.",
      image: "images/graduated.png"
  	},
    {
      minimun_score: 16,
  		title: "Expert em Marketing Digital",
  		text: "Você já sabe quase tudo de marketing digital.",
      image: "images/expert.png"
  	},
    {
      minimun_score: 20,
      title: "Ninja do Marketing Digital",
      text: "Você sabe tudo de marketing digital. Me dá um autógrafo?",
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
