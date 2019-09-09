const jsdom = require('jsdom')
const {JSDOM} = jsdom
process.stdin.resume()
process.stdin.setEncoding('utf8')

let str = ''

process.stdin.on('data', function(chunk){
  str += chunk
})

process.stdin.on('end', function(){
  console.log(Array.from(new JSDOM(str).window.document.querySelectorAll(process.argv[2])).map(val => val.textContent).join('\n'))
})