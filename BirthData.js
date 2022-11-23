var store=new Map();
for(var i=0; i < 50;i++){
    var count =0;
var values=Math.floor(Math.random() *(13 - 1)+1);
for(key of store.keys()){
    if(key==values){
        count++;
    }
}
if (count==0){
    store.set(values,1);
}
else{
    for(k of store.keys()){
        if(k==values){
            var num=store.get(k);
            store.set(values,num+1);
        }
    }
}
}
for(data of store.keys()){
    console.log("Month : "+data+"  ----> BirthDayPerson : "+store.get(data));
}