
const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")


const updateDebounceText = debounce(()=>{   // debounce creating  to add the text in the debounce 
    // debounceText.textContent = text   
        incrementCount(debounceText)

})
const updateThrottleText = throttle(()=>{   // debounce creating  to add the text in the debounce 
    // throttleText.textContent = text  
        incrementCount(throttleText)

})
// input.addEventListener("input", e => {   // assigning the text values on the bar
//     defaultText.textContent = e.target.value
//     updateDebounceText(e.target.value)  //calling  debounce to show on the same  input  text into the debounce
// })

  function debounce(cb ,delay =1000){// delaying debounce  1s to show in the debounce 
  let timeout //it  set for a when we finish the word then it will show it all word combined not one by one 
    return (...args)=>{   // arguments its for each word wil 1s by 1s show in debounce its using method is (...args)
     timeout = setTimeout(() =>{
            cb(...args)
        }, delay)
    }
  }

  function throttle(cb, delay = 1000){
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = ()=>{
        if ( waitingArgs == null){
    shouldWait = false
        } else {
                cb(...waitingArgs)
                waitingArgs = null
                setTimeout(timeoutFunc,delay)
        }
    }

return(...args) => {
    if (shouldWait) 
        waitingArgs = args
        return

    cb(...args)
shouldWait = true

    setTimeout(timeoutFunc,delay)
}
  }

  document.addEventListener("mouseover", e => {
    incrementCount(defaultText)
    updateDebounceText()
    updateThrottleText()
  })

  function incrementCount(element){
    element.textContent = (parseInt(element.innerText) || 0) + 1
  }