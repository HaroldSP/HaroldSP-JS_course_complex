const btn = document.getElementById('btn')

const logger = function () {
  alert('click!')
}

btn.addEventListener('click', logger)

btn.addEventListener('click', function () {
  alert('click!!')
})

btn.removeEventListener('click', function () {
  alert('click!!!')
})

console.dir(btn)
