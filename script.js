const starArr = document.querySelectorAll('.star')


starArr.forEach((star, index) => {
    star.addEventListener('click', () => {
        starArr.forEach((elem, i) => {
            if (i > index) {
                elem.classList.add('connect')
            } else if (i <= index) {
                elem.classList.remove('connect')
            }
        })
    })
    star.addEventListener('mouseenter', () =>
        starArr.forEach((item, nr) => {
            if (item.classList.contains('connect')) {
                if (nr <= index) {
                    item.classList.add('red')
                } else if (nr >= index) {
                    item.classList.remove('red')
                }
                item.addEventListener('mouseout', () => {
                    star.classList.remove('red')
                })
            }
        })
    )
})








