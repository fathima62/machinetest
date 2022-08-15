var num=[1,2,3,2,1,9,8]
var num1=0;
var num2=0;
var num3=0
for(var i=1; i<7; i++){
    num1=num[i-1]
    num2=num[i]
    num3=num[i+1]
    if(num1<num2 && num2>num3){
       
       document.write(num2,'<br>')
       
    }
   
    
       


 
}
    


