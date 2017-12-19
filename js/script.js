$("#trummor").click(function(){
    document.getElementById("drums").play();
    setTimeout(function(){ 
     $('#trummorModal').modal('hide');
     }, 10000);
});


$("#bas").click(function(){
    document.getElementById("base").play();
    setTimeout(function(){ 
     $('#basModal').modal('hide');
     }, 7000);
});


$("#leadgitarr").click(function(){
    document.getElementById("leadguitar").play();
    setTimeout(function(){ 
     $('#leadgitarrModal').modal('hide');
     }, 7000);
});


$("#keyboard").click(function(){
    document.getElementById("rhodes").play();
    setTimeout(function(){ 
     $('#keyboardModal').modal('hide');
     }, 7000);
});


$("#kompgitarr").click(function(){
    document.getElementById("komp").play();
    setTimeout(function(){ 
     $('#kompgitarrModal').modal('hide');
     }, 7000);
});


$("#song").click(function(){
    document.getElementById("sing").play();
    setTimeout(function(){ 
     $('#songModal').modal('hide');
     }, 7000);
});


$("#alla").click(function(){
    document.getElementById("all").play();
    setTimeout(function(){ 
     $('#allaModal').modal('hide');
     }, 7000);
});


$(".closeIcon").click(function(){
	$('.audio').trigger("pause");
    document.getElementById("drums").currentTime = 0;
    document.getElementById("base").currentTime = 0;
    document.getElementById("leadguitar").currentTime = 0;
    document.getElementById("rhodes").currentTime = 0;
    document.getElementById("komp").currentTime = 0;
    document.getElementById("sing").currentTime = 0;
    document.getElementById("all").currentTime = 0;
    $('.modal').modal('hide');

});


// $('.modal').modal({
//   backdrop: 'static',
//   keyboard: false
// });

