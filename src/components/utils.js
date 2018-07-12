import moment from 'moment'
import axios from 'axios'
import branches from 'src/assets/data/branches.json'

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

export const formatDate = function (value, fmt = 'YYYY年M月D日') {
  let formattedDate =
   (value == null)
    ? null
    : moment(value, 'YYYY-MM-DD').format(fmt)
  return onNullValue(formattedDate)
}

export const onNullValue = function (value) {
  return value == null
    ? '(未登记)'
    : value
}

// This function is asynchronous
export const getDisplay = (fieldName, field) => {
  axios.get('/api/getDisplay', {
    params: {
      fieldName: fieldName,
      fieldValue: field.value
    }
  })
  .then(response => {
    field.display = response.data
  })
  .catch(err => {
    console.log(err)
  })
}

export const getBranchName = branchCode => {
  // let count = 0
  for (var i in branches) {
    let branch = branches[i]
    // console.log('第' + (++count) + '次比较：' + branchCode + ' ' + branch.code)
    if (branchCode === branch.code) {
      return branch.name
    }
  }
}
