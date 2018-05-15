export const hasDuplicate = function (tabs, tab) {
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].key === tab.key) {
      return true
    }
  }
  return false
}

export const getAge = function (dateString) {
  var today = new Date()
  var birthDate = new Date(dateString)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}
