function say(str) {
  console.log('You said', str || 'nothing')
  console.log('Yes?')
}

module.exports = say
