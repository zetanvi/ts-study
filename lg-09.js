// 防抖
const fd = (fn, wait) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(args)
    }, wait)
  }
}

// 节流
const jl = (fn, time) => {
  const oldDate = Date.now()
  return (...args) => {
    const newDate = Date.now()
    if (newDate - oldDate > time) {
      fn(args)
      oldDate = Date.now()
    }
  }
}
