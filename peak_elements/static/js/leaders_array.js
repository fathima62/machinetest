var num_input=[16,17,4,3,5,2,1,2,3,4,0]
var count=0
for(var i=0; i<10; i++){
     count=0
     for(var j=i+1; j<9;j++){
        if(num_input[i]<num_input[j]){
            count=1
            break
        }
     }
     if(count=0){
        document.write(num_input[i])
     }
}



