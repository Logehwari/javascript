function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x <= n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
var num = 1;
for(num =1; num <= 1000; num++)
    {
        if((test_prime(num)) == true)
            {
                console.log(num);
            }
    }