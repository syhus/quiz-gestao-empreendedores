app = angular.module("quizlet");

app.factory("levels", function() {
  var levels = [
    {
      minimun_score: 0,
  		title: "Calouro do Marketing Digital",
  		text: "Você começou a trilhar agora o seu caminho em marketing digital. Continue firme e forte!",
      image: "images/freshman.png"
  	},
    {
      minimun_score: 7,
  		title: "Expert em Marketing Digital",
  		text: "Você já sabe quase tudo de marketing digital.",
      image: "images/expert.png"
  	},
    {
      minimun_score: 10,
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
