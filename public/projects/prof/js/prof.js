'use strict';

// Prof App
angular.module('prof',[]).controller('prof-controller', function($scope, $timeout, $interval, $filter) {
  
  $scope.gametype = null
  $scope.number1 = null;
  $scope.number2 = null;
  $scope.operators = ['+','-','x','/'];
  $scope.operator1 = "+";
  $scope.rightanswer = null;
  $scope.submitted = false;
  $scope.animating = false;
  $scope.score = { right:0, wrong:0 };
  $scope.timer = { min:2, sec:0 };

  $scope.sprites = [
    {
      type:'right',
      url: 'img/ball.jpg',
      fps: 15,
      length: 10,
      holds: [
        { onframe:9, holdlength:800 },
        { onframe:10, holdlength:300 }
      ]
    },
    {
      type:'right',
      url: 'img/cheer.jpg',
      fps:15,
      length:11,
      holds:[
        { onframe:7, holdlength:500 }
      ]
    },
    {
      type:'right',
      url:'img/flower.jpg',
      fps:15,
      length:31,
    },
    {
      type:'right',
      url:'img/fabuloso.jpg',
      fps:15,
      length:22,
      holds:[
        { onframe:13, holdlength:1200}
      ]
    },
    {
      type:'right',
      url:'img/elate.jpg',
      fps:12,
      length:12
    },
    {
      type:'right',
      url:'img/nod.jpg',
      fps:15,
      length:13,
      holds: [
        { onframe:13, holdlength:600 }
      ]
    },
    {
      type:'right',
      url:'img/eatball.jpg',
      fps:12,
      length:32,
      holds: [
        { onframe:31, holdlength:500 }
      ]
    },
    {
      type:'right',
      url:'img/drink.jpg',
      fps:15,
      length:31,
      holds:[
        { onframe:8, holdlength:800 },
        { onframe:18, holdlength:500 }
      ]
    },
    {
      type:'right',
      url:'img/clap.jpg',
      fps:15,
      length:3,
      loop:5
    },
    {
      type:'right',
      url:'img/cheese.jpg',
      fps:18,
      length:30,
      holds:[
        { onframe:13, holdlength:800 },
        { onframe:26, holdlength:800 }
      ]
    },
    {
      type:'right',
      url:'img/slap.jpg',
      fps:15,
      length:9,
      holds: [
        { onframe:7, holdlength: 1000 }
      ]
    },
    {
      type:'wrong',
      url:'img/nope.jpg',
      fps: 18,
      length: 4,
      loop: 4
    },
    {
      type:'bored',
      url: 'img/tv.jpg',
      fps: 15,
      length: 37,
      holds: [
        { onframe:20, holdlength:800 },
        { onframe:21, holdlength:1200 },
        { onframe:23, holdlength:500 }
      ]
    },
    {
      type:'bored',
      url:'img/fidget.jpg',
      fps:15,
      length:4,
      loop:3
    },
    {
      type:'bored',
      url: 'img/twirl.jpg',
      fps: 15,
      length: 4,
      loop: 4
    },
    {
      type:'bored',
      url:'img/blink.jpg',
      fps:3,
      length:1
    },
    {
      type:'bored',
      url:'img/blink.jpg',
      fps:10,
      length:1
    },
    {
      type:'bored',
      url:'img/blink.jpg',
      fps:5,
      length:1
    }
  ];

  //rearrange sprites randomly and add flag to track if used
  $scope.arrangeResponses = function(){
    angular.forEach($scope.sprites, function(sprite,index){
      sprite.used = false;
    });
    $scope.sprites.sort(function() { return 0.5 - Math.random() });
  }();

  //find a sprite to run
  $scope.getResponse = function(type){
    var choiceindex = 0;
    var foundone = false;
    //find unused sprite type
    angular.forEach($scope.sprites, function(sprite, index){
      if(sprite.type==type && !sprite.used) {
        choiceindex = index;
        foundone = true;
      }
    });
    //if all of this type are already used, reset the list
    if(!foundone){
      angular.forEach($scope.sprites, function(sprite, index){
        if(sprite.type==type) {
          sprite.used = false;
          choiceindex = index;
        }
      });
    }
    $scope.sprites[choiceindex].used = true;
    return choiceindex;
  }
  //handle entered answer
  $scope.submit = function(answer){
    if(!answer) return;
    $timeout.cancel($scope.bored);
    $scope.submitted = true;
    $scope.answer = '';
    $scope.problem.$valid = parseInt(answer) == $scope.rightanswer ? true : false;
    if($scope.problem.$valid) {
      $scope.generateQuestion();
      $scope.score.right ++;
    } else {
      $scope.score.wrong ++;
    }
    // run response animation
    var type = $scope.problem.$valid ? 'right' : 'wrong';
    $scope.animating = true;
    $scope.$broadcast('animate', $scope.getResponse(type), function(){
      $scope.animating = false;
      $scope.submitted = false;
      $scope.getBored();
    });
  };

  //professor gets bored after 5-10 seconds
  $scope.getBored = function(){
    var boredin = Math.round(Math.random() * 5000 + 5000)
    $scope.bored = $timeout(function(){
      $scope.$broadcast('animate', $scope.getResponse('bored'), function(){
        $timeout.cancel($scope.bored);
        $scope.bored = $timeout(function(){ $scope.getBored() });
      });
    }, boredin)
  }

  //generate new math question
  $scope.generateQuestion = function(){
    $scope.answer = '';
    switch($scope.gametype){
      case 'mixed': $scope.operator1 = $scope.operators[Math.floor(Math.random() * $scope.operators.length)];    
      break;
      case 'addsubtract': $scope.operators = ['+','-']; 
        $scope.operator1 = $scope.operators[Math.floor(Math.random() * $scope.operators.length)];
      break;
      case 'multiply': $scope.operator1 = 'x';
      break;
      case 'divide': $scope.operator1 = '/';
      break;
      default: $scope.operator1 = '+';
      break;
    }

    $scope.number1 = Math.round( Math.random()*10 );
    $scope.number2 = Math.round( Math.random()*10 );
    switch($scope.operator1){
      case '+': $scope.rightanswer = $scope.number1 + $scope.number2;
      break;
      case '-': if($scope.number1 < $scope.number2){
                  var holder = $scope.number2;
                  $scope.number2 = $scope.number1;
                  $scope.number1 = holder;
                }
                $scope.rightanswer = $scope.number1 - $scope.number2;
      break;
      case 'x': $scope.rightanswer = $scope.number1 * $scope.number2;
      break;
      case '/': $scope.number2 = $scope.number2 < 1 ? 1 : $scope.number2; 
                $scope.rightanswer = $scope.number1;
                $scope.number1 = $scope.number1 * $scope.number2;
      break;
      default: $scope.rightanswer = $scope.number1 + $scope.number2;
    }
  };

  var updatetimer = function(){
    if($scope.timer.min==0 && $scope.timer.sec==0){
      $interval.cancel(updatetimer);
    } else if ($scope.timer.sec==0){
      $scope.timer.min -= 1;
      $scope.timer.sec = 59;
    } else {
      $scope.timer.sec -= 1;
    }
  };

  

  $scope.entergame = function(type){
    $scope.gametype = type;
    $scope.generateQuestion();
    $scope.getBored();
    //$interval(updatetimer, 1000)
  }

  


 
}).directive('animator', function($timeout){
  return {
    require:'ngModel',
    restrict:'E',
    link: function(scope, elem){

      scope.$on('animate', function(nullscope, index, ended){
        if (index != scope.$index) return;

        var sprite = scope.sprites[index],
            framedelay = 0,
            left = 0,
            holdindex = 0,
            frame = 0,
            looped = 0,
            slidewidth = elem[0].clientWidth/sprite.length,
            frameincrement = 1000/sprite.fps,
            totalframes = sprite.loop ? sprite.length*sprite.loop : sprite.length;

        var increment = function(){
          //slide timeline left
          elem.css('left', left+'px');
          //handle loops
          if(sprite.loop && frame==sprite.length-1 && looped<sprite.loop-1){
            looped++;
            left = 0;
            frame = 0;
          } else {
            left -= slidewidth;
            frame++;
          }
          if( ended && typeof(ended)=='function' && frame == sprite.length+1 ) ended();
        }
        
        for( var x = 0; x < totalframes+1; x++ ){
          framedelay += frameincrement;
          //handle hold frames
          if (sprite.holds && x == sprite.holds[holdindex].onframe){
            framedelay += sprite.holds[holdindex].holdlength;
            if( holdindex != sprite.holds.length-1) holdindex++;
          }
          //increment frame over time
          $timeout(increment, framedelay); 
        }

      });
      
    }
  }
});
