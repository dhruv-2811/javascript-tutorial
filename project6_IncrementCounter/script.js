
const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
    // console.log(counter);

    counter.innerHTML = 0;

    const updateCounter = () => {
        // console.log(targetCount);
        // console.log(typeof(targetCount));
        const targetCount = + counter.getAttribute('data-target'); // +n means n(string) converts -> n(number)
        const startingCount = Number(counter.innerHTML);
        const incr = targetCount / 100;
        
        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`
            setTimeout(updateCounter, 10)
        }else{
            counter.innerHTML = targetCount;
        }
    }


    updateCounter();
})