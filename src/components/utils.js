import moment from 'moment'

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

export const translatePatientCurrentStatus = function (value) {
  switch (value) {
    case '1':
      return '待入院'
    case '2':
      return '待新入'
    case '3':
      return '待床'
    case '4':
      return '在科'
    case '5':
      return '已出院'
    case '6':
      return '已取消住院登记'
    default:
      return '未知'
  }
}

export const formatDate = function (value, fmt = 'YYYY年M月D日') {
  return (value == null)
    ? ''
    : moment(value, 'YYYY-MM-DD').format(fmt)
}
