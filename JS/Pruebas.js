for (let i=0; i < 100; i+=1){
    if (i%3==0 && i%5==0){
        console.log("BuzzFizz")
    } 
    if(i%5==0 && i%3!=0){
        console.log("Fizz")
    }  
    if (i%3==0&& i%5!=0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
    console.log()
  }