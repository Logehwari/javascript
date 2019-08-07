function reverse_a_number(n)
{
var n1 = toString(n);
var rev = n1.split("").reverse().join("");
return rev === n1;
}
var num=1;
for(num=1; num<1000; num++)
    {
        if(reverse_a_number(num) == true)
            {
                 console.log(num);
            }
       
    }