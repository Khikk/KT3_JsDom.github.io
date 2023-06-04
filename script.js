const btn = document.querySelectorAll(".switch_bth")

btn.forEach(e => {
    e.addEventListener('click', function(){
        console.log(e.parentElement.parentElement.children)
        let next = e.parentElement.nextElementSibling
        while (next){
            next.classList.toggle('hide')
            next = next.nextElementSibling
        }
        if (e.innerText == '-'){
            e.innerText = '+'
        } else {
            e.innerText = '-'
        }
    })
})