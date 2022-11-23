var values=new Array();
for(var i=0;i < 10; i++){
values[i]=Math.floor(Math.random() * (1000 - 100) ) + 100;
}
console.log(values);
var temp1=0;
var temp2=0;
for(var j=100;j < 1000;j++){
    for(num of values){
        if(j==num){
            temp1++;
            if(temp1==2){
                console.log("The Second Smallest Number is : "+num);
                j=1001;
            }
        }
    }    
}

for(var j=1000;j > 100;j--){
    for(num of values){
        if(j==num){
            temp2++;
            if(temp2==2){
                console.log("The Second Largestest Number is : "+num);
                j=99;
            }
        }
    }
    
}