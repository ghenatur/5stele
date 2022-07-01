const starArr = document.querySelectorAll('.star')


starArr.forEach((star, index) => {
    star.addEventListener('click', (ev) => {
        starArr.forEach((elem, i) => {
            if (i > index) {
                elem.classList.add('connect')
            } else if (i <= index) {
                elem.classList.remove('connect')
            }
        })
        const connect = document.querySelectorAll('.connect')

        connect.forEach((el, ind) => {
            // console.log()
            // console.log()
            el.addEventListener('mouseenter', (ev) => {
                connect.forEach((item, nr) => {
                    console.log(item, "item", el, "el")
                    console.log(nr, 'nr', ind, 'ind',index,'index')


                    if (nr > ind) {
                        item.classList.add('grey')
                    } else if (nr <= ind) {
                        item.classList.remove('grey')
                    }

                })
            })

        })
    })
})








