(function(){
    var app = angular.module('myApp', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/");

      $stateProvider.state('home',{
        url: "/",
        template:
                <div>
                  <h1> Selecione uma opção</h1>
                </div>
      });
      $stateProvider.state('categoria',{
        url: "/categoria",
        templateUrl: "categoria.htm"
      });
      $stateProvider.state('categoria+',{
        url: "/addcategoria",
        templateUrl: "categoria+.htm"
      });
      $stateProvider.state('resposta',{
        url: "/aswer",
        templateUrl: "respostaEmail.htm"
      });
      $stateProvider.state('tarefas',{
        url: "/tarefas",
        templateUrl: "tarefas.htm"
      });
    });
  }
)();
