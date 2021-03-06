// input
// 5 // N max: 999999999999
// 3 // M max: 999999
// 1 3 // [i, j] 
// 3 5 // [i, j]
// 1 5 // [i, j]

// output 
// 4

const N_MAX = 999999999999
const M_MAX = 999999

const random = (max) => Math.floor(Math.random() * max) + 1

const inputIsValid = (leek, cutTimes) => {
  if (leek > N_MAX || leek > (Math.pow(2, 32) - 1)) {
    console.log('韭菜太多啦～')
    return false
  }

  if (leek <= 0) {
    console.log('這個世界不可能沒韭菜～')
    return false
  }

  if (cutTimes > M_MAX) {
    console.log('割太多次啦～')
    return false
  }

  if (cutTimes <= 0) {
    console.log('你是要不要割？')
    return false
  }

  return true
}

const calculateRestHolders = (leek = N_MAX, cutTimes = M_MAX) => {
  if (!inputIsValid(leek, cutTimes)) {
    return
  }

  console.log(`總共韭菜數量：${leek}`)
  console.log(`總共收割次數：${cutTimes}`)

  const expectedCuttedList = generateRandomCuttedList(leek, cutTimes)
  let leeks = Array(leek).fill(true)
  expectedCuttedList.forEach(range => {
    const [min, max] = range
    for (let index = min; index <= max; index++) {
      leeks[index - 1] = !leeks[index - 1]
    }
  })

  const restHoldersAmount = leeks.filter(l => !!l).length
  console.log(`剩餘沒有賣掉比特幣的韭菜數量：${restHoldersAmount}`) // result
}

const generateRandomCuttedList = (leek = N_MAX, cutTimes = M_MAX) => {
  let cuttedList = []
  console.log(`預計對哪些韭菜進行收割`)
  for (let index = 1; index <= cutTimes; index++) {
    let range = [random(leek), random(leek)].sort((a, b) => a - b)
    console.log(range.join(' '))
    cuttedList.push(range)
  }
  return cuttedList
}


calculateRestHolders(10, 5) // 韭菜數量，割韭菜次數