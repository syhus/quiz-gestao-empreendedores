app = angular.module("quizlet");

app.factory("levels", function() {
  var levels = [
    {
      minimun_score: 0,
  		title: "Calouro do Marketing Digital",
  		text: "Você começou a trilhar agora o seu caminho. Um hangout exclusivo faria muito bem para seu projeto. Passe no stand da Syhus para combinarmos os detalhes."
      image: "images/freshman.png"
  	},
    {
      minimun_score: 7,
  		title: "Empreendedor Expert",
  		text: "Você sabe quase tudo sobre gestão. Meia hora de consultoria gratuita te faria muito bem! Passe no stand da Syhus para combinarmos a data!",
      image: "images/expert.png"
  	},
    {
      minimun_score: 10,
      title: "Empreendendor Ninja",
      text: "Você sabe tudo sobre gestão e merece um prêmio! Passe no stand da Syhus para ganhar 1 mês de consultoria gratuita (4 horas)",
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
