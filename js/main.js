const navItems = document.querySelectorAll('.nav-item')
const dropItems = document.querySelectorAll('.drop-item')

navItems.forEach((item)=>{
    item.children[0].addEventListener('click',() => {
        item.classList.toggle('open-item')
    })
})

dropItems.forEach((drop) => {
    drop.children[0].addEventListener('click', () => {
        drop.classList.toggle('open-drop')
        // закрытие лишних категорий
        for(let i = 0; i < dropItems.length; i++ )
            dropItems[i] != drop ? dropItems[i].classList.remove('open-drop') : 0
    })
})

// кликать по такому меню максимально неудобно (._.)