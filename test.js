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
   alert("You're time is going to be Usain Bolt fast!")
 }else if(this.speed < 10 > 6){
   alert("You're time is going to be average.")
 }else{
  alert("You're time is going to be slow.")
 }
  }
}

var Steve = new Runner ("Steve",4,"Track","Asics");
var Bill = new Runner ("Bill",7,"Trail","Hoka");
var Bob = new Runner ("Bob",5,"Track","Brooks");
var Doug = new Runner ("Dougie Fresh",10,"Street","Nike");

function Surface(type,speed){
this.type=type;
this.speed=speed;

}
var Track = new Surface ("Track",3);
var Trail = new Surface ("Trail",3);
var Street = new Surface ("Street",3);


function Shoe(company,speed){
this.company=company;
this.speed=speed;
}

var Nike = new Shoe("Nike",4 );
var Brooks = new Shoe("Brooks",4);
var Hoka = new Shoe ("Hoka",4);
var Asics = new Shoe ("Asics",4);



//if surface and shoe match runners preference adds speed value, if it does not match subtracts speed value.
