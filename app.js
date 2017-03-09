var app = angular.module("myApp",['ngResource']);

// app.config(function($interpolateProvider){

// $interpolateProvider.startSymbol("$$");

// $interpolateProvider.endSymbol("$$");

// });


//Parent Directive
app.directive("dad",function(){

     return {
            
             restrict:'EAC',
             template:'<div>{{greetings}}</div> <son></son>',
             link:{

                pre:function(scope,elem,attr,ctrl){
             
                  scope.greetings = "Hi";
                  scope.name ="mrinal";

             }

         }
           

     }


});


//Child Directive
app.directive("son",function(){

         return {

            restrict:'EAC',
            template:'<div>{{intro}}</div>',

            link:function($scope,elem,attr,ctrl){
                
                 $scope.intro = "my name is "+$scope.name;  

            }


         }
});


//valid HTML input controllers
app.directive("validpassword",function(){

    return {

        restrict:'EACM',
        require: 'ngModel',
        link:function(scope,elem,attr,ctrl){

          ctrl.$validators.validAge = function(modelValue, viewValue) {
          var age = modelValue || viewValue;
          var str = String(modelValue);
          return str.indexOf('m') > -1 ;
  
        };
 

        }

    }
});


app.directive('myCustomer', function() {
  return {
    restrict: 'E',
    template: 'Name: {{customerInfo.name}} Address: {{customerInfo.address}}',
    scope: {
      customerInfo: '=info'
    }
  };
});


//Controller
app.controller("myController",["$scope",function($scope){


    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };

    this.hill = "Hill Station2";

    $scope.array1 = ["mango","bannana","orange","apple"];
    $scope.array2 = ["goava","pineapple","sugancan","coconut"];

     $scope.save = function(){

        console.log('Success!');
     }

     $scope.toggle = function(event){


          $(event.target).siblings('div').toggle(500);
     }

    $scope.none = 'none';


}]);



//Custom javascript Sort function
function sorter(array)
{
    var count = array.length - 1,
        swap,
        j,
        i;

    for (j = 0; j < count; j++)
    {

        for (i = 0; i < count; i++)
        {

            if (array[i] < array[i + 1])
            {
                swap = array[i + 1];
                array[i + 1] = array[i];
                array[i] = swap;
            }

        }
    }

    return array;
}

console.log(sorter(["mrinal","anup", "bonu","kunal", "cajal"]));








//Accessing uinque array
var unique = [1,4,3,3,5];
var removeDuplicate = function(array){

       var b = [],i,count = array.length;
      var sort =  array.sort();

       for(i = 0; i < count; i++)
       {
            if(array[i+1] !== array[i])
            {
                b.push(array[i]);
            }

       }

      return b;
}

console.log(removeDuplicate(unique));





function my(){

 x = 10;

 console.log(x);

 //console.log(this);

 var x;

}

my();

//console.log((function(x){ console.log(x)})(10));



var person =(function(x){

    //Global variable
    var gree = "Hi";

    console.log(x);

  return {


            grret: "welcome",
            innerFun: function(){
                 
                    console.log("i am closer." + this.grret);

            }
  };



})("mrinal testing");


console.log(person.innerFun());



//Callback
function myfoo(testfoo){

console.log("Call back Start");
 testfoo();

}


myfoo(testfoo);



function testfoo(){


    console.log("Callback function executed Successfully..");
}



console.log('..........................');


run();

function run(){

  console.log("running.....");

}





