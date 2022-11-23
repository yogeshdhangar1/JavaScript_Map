function twiceNumberDigit() { 
    var values=new Array(); 
    for(var i=10;i < 100;i++){
        num=i;
    var remainder, reverse, temp = 0;    
    reverse = num;  
    while (num > 0)  
    {  
        remainder = num % 10;  
    temp = temp*10 +remainder;
    num = parseInt( num / 10);    
    }  
    if (temp == reverse)  
    {  
        values.push(temp); 
    }  
    }
    console.log(values);  
}
twiceNumberDigit();
Footer