function Runner (name,speed,surfacepref,shoepref){
  this.name=name;
  this.speed=speed;
  this.surfacepref=surfacepref;
  this.shoepref=shoepref;
  this.run= function (surface,shoe){

   if(surface.type === this.surfacepref){
    this.speed = this.speed + surface.speed;
   }else{
    this.speed = this.speed - surface.speed;
}
  if(shoe.company === this.shoepref){
   this.speed = this.speed + shoe.speed;
  }else{
   this.speed = this.speed - shoe.speed;
  }
  if(this.speed > 10){
   $(".message").html("Your time is going to be Usain Bolt fast!")
 }else if(this.speed > 5){
   $(".message").html("Your time is going to be average.")
 }else if(this.speed > 0){
  $(".message").html("Your time is going to be slow.")
 }
 console.log(this.speed)
  }
}




function Shoe(company,speed){
this.company=company;
this.speed=speed;
}

function Surface(type,speed){
this.type=type;
this.speed=speed;

}

var Steve = new Runner ("Steve",4,"Track","Asics");
var Bill = new Runner ("Bill",7,"Trail","Hoka");
var Bob = new Runner ("Bob",5,"Track","Brooks");
var Doug = new Runner ("Doug",10,"Street","Nike");
var runnerArray=[Steve,Bill,Bob,Doug];

var Track = new Surface ("Track",3);
var Trail = new Surface ("Trail",3);
var Street = new Surface ("Street",3);
var surfaceArray = [Track,Trail,Street];

var Nike = new Shoe("Nike",4 );
var Brooks = new Shoe("Brooks",4);
var Hoka = new Shoe ("Hoka",4);
var Asics = new Shoe ("Asics",4);
var shoeArray = [Nike,Brooks,Hoka,Asics];
//if surface and shoe match runners preference adds speed value, if it does not match subtracts speed value.
/// dom stuff

$(document).ready(function(){
  $("#goRunningForm").on("submit", function(event){
    event.preventDefault();
     var runnerInstance;
     var surfaceInstance;
     var shoeInstance;

    var runner=$("#goRunningForm input[list='runnerlist']").val();
    var surface=$("#goRunningForm input[list='surfacetype']").val();
    var shoe=$("#goRunningForm input[list='shoetype']").val();

     for(var i = 0; i<runnerArray.length; i++) {
      if(runnerArray[i].name === runner) {
         runnerInstance = runnerArray[i];
      }
     }

     for(var i = 0; i<surfaceArray.length; i++){
      if(surfaceArray[i].type === surface) {
        surfaceInstance = surfaceArray[i];
      }
     }

     for(var i = 0; i<shoeArray.length; i++){
      if(shoeArray[i].company === shoe ){
       shoeInstance = shoeArray[i];
      }
     }
     runnerInstance.run(surfaceInstance,shoeInstance);
     //we want the runner the user picks
     //we also need the surface the user picks
     //we also need the shoe the user picks
    //instance of runner.run(surface,shoe);


});



});

// utilities for testing

// this function just adds the test result to the page
function addTestDom(element, color, text) {
  var body = document.getElementsByTagName("body")[0];
  var elem = document.createElement(element);
  elem.style.color = color;
  elem.innerHTML = text;
  body.appendChild(elem);
}

// this it() function describes a group of tests
function it(description, contents) {
  var body = document.getElementsByTagName("body")[0];
  var elem = document.createElement("h3");
  elem.innerHTML = "It " + description;
  body.appendChild(elem);
  console.log("\n\n It " + description + "");
  contents();
}

// checks strict equality of expectation and target for passing test
// eg. expect(calvin.mood).tobe("happy");
function expect(expectation) {
  return {
      tobe: function(target) {
        if (target === expectation) {
          var passTxt = "PASSED " + "Expected " + target + " to be " + expectation;
          addTestDom("p", "green", passTxt);
          console.log('\n   %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
        } else {
          var failTxt = "FAILED " + "Expected " + target + " to be " + expectation;
          addTestDom("p", "red", failTxt);
          console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
          return false;
        }
      }
    };
}



it("Steve.name should return the name Steve", function() {
  expect(Steve.name).tobe("Steve");
 });

it("expect Bob.speed to be 5", function (){
 expect(Bob.speed).tobe(5)
});

it("expect Bill.surfacepref to be Trail ", function (){
 expect(Bill.surfacepref).tobe("Trail")
});

it("expect Doug.shoepref to be Nike", function (){
  expect(Doug.shoepref).tobe("Nike")
});

it("When given correct shoe and surface preference,the speed values will add to Doug's base speed. Doug's speed will be 17 ",function(){
 Doug.run(Street,Nike)
 expect(Doug.speed).tobe(17)
});

it("When given incorrect shoe and surface preference, both values will subtract from Steve's base speed. Steve's speed will be -3",function(){
 Steve.run(Trail,Brooks)
 expect(Steve.speed).tobe(-3)
});

it("When given one correct preference and one incorrect preference, the correct preference will add its speed value and the incorrect preference will subtract its speed value", function(){
  Bill.run(Street,Hoka)
  expect(Bill.speed).tobe(8)
});
