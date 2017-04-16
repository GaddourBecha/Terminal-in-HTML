var readOnlyLength = 2;
var commandNbr=0;
var tipNbr=2;
var adressIp;


$(document).ready(function () {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
       adressIp = data.ip;
    });
});
   
   


$('#command-text-area').keyup(function(event){
    if(event.keyCode === 13){

        $('#command-text-area').val($('#command-text-area').val()+'> ')
     readOnlyLength = $('#command-text-area').val().length;
    }
});

$('#command-text-area').on('keypress, keydown', function(event) {
    if ((this.selectionStart < readOnlyLength) || ((this.selectionStart == readOnlyLength) && (event.which == 8))) {
        return false;
    }
    if((event.which == 38))
    {
        var commandList= $('#command-text-area').val().split(">");
        
        if (commandNbr==commandList.length){
            tipNbr++;
        }else{
            tipNbr=2;
            commandNbr=commandList.length;
        }
        if(tipNbr<commandList.length){

        $('#command-text-area').
        val($('#command-text-area').
        val().substring(0,$('#command-text-area').
        val().length-(commandList[commandList.length-1].length))+
        commandList[commandList.length-tipNbr].
        substring(0, commandList[commandList.length-tipNbr].length - 1));
    }
    else{
        tipNbr--;
    }
        return false;
    }

    if (event.which == 40){
     var commandList = $('#command-text-area').val().split(">");
     if (commandNbr == commandList.length) {
        // tla3 au moins marra

        if(tipNbr==2){
                  $('#command-text-area').
            val($('#command-text-area').
            val().substring(0,$('#command-text-area').
            val().length-(commandList[commandList.length-1].length))+" ");
        }

        else if(tipNbr<commandList.length){
            tipNbr--;
            $('#command-text-area').
            val($('#command-text-area').
            val().substring(0,$('#command-text-area').
            val().length-(commandList[commandList.length-1].length))+
            commandList[commandList.length-tipNbr].
            substring(0, commandList[commandList.length-tipNbr].length - 1));
        }
     }
     return false;
    }



})
