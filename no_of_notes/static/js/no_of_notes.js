var notes=[500,100,50,20,10,5,2,1]
var amount= parseInt( prompt('Enter total amount'))
var totalnotes=0
var count=0
document.write('Total amount = '+amount ,'<br>')
document.write('Total no.of notes <br>')
for(var i=0; i<=7; i++){
    if(amount>=notes[i]){
        count=amount%notes[i]
        amount=amount-count
        totalnotes=amount/notes[i]

        document.write(notes[i]+':',totalnotes, '<br>')
        amount=count
       
    }
    else{
        document.write(notes[i],': 0 <br>')
    }
}