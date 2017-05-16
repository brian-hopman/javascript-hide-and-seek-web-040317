function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(selector) {
  return document.querySelector('#nested .target')
}

let deepestChild = () => {
  let text = '<div>div</div>'
  let divString = '#grand-node div'
  while (text.includes('div')) {
    divString += ' div'
    text = document.querySelector(divString).innerHTML
  }

  return document.querySelector(divString)
  // document.querySelector('#grand-node div')
  //   debugger
  //   if (ele.textContent.length > 0) {
  //     deepestChild()
  //   }
}


var increaseRankBy = n => (
  document.querySelectorAll('.ranked-list').forEach(function(ele) {
    ele.textContent = parseInt(ele.textContent) + n
  })
)
