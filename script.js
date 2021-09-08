
///// counters 
const speed = 500;

document.querySelectorAll('#counter').forEach(counter => {
      
      const counterNumber = +counter.getAttribute('countTo');

      const updateCount = setInterval(() => {
            
            const divContent = +counter.innerText;
            const increaseBy = counterNumber / speed;
            console.log(counterNumber)
            divContent < counterNumber ?
                  counter.innerHTML = Math.abs(divContent + increaseBy).toFixed(2) :
                  clearInterval(updateCount)

      }, 1);

});

document.querySelectorAll('#counterFixo').forEach(counter => {
      
      const counterNumber = +counter.getAttribute('countTo');

      const updateCount = setInterval(() => {
            
            const divContent = +counter.innerText;
            const increaseBy = counterNumber / speed;
            console.log(counterNumber)
            divContent < counterNumber ?
                  counter.innerHTML = Math.ceil(divContent + increaseBy) :
                  clearInterval(updateCount)

      }, 1);

});
