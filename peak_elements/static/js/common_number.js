var array1=[10,11,12,13,14,15]
var array2=[12,13,14,15,16]
var array3=[14,15,16,17,18]
var common;
for(var i=0; i<array1.length; i++){
    for(var j=0; j<array2.length;j++){
        if(array1[i]==array2[j]){
            common=array1[i]
        }
    }
    for(var j=0; j< array3.length;j++){
        if(common==array3[j]){
            document.write(array3[j],'<br>')
        }
    }
}