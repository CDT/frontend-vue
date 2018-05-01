export default [
  '__handle',
  {
    name: '__checkbox',
    titleClass: 'text-center',
    dataClass: 'text-center'
  },
  {
    name: 'job_NO',
    title: '<span class="glyphicon glyphicon-tag"></span> 工号',
    sortField: 'job_NO',
    titleClass: 'text-center',
    dataClass: 'text-center'
  },
  {
    name: 'name',
    title: '<span class="glyphicon glyphicon-text-background"></span> 姓名',
    sortField: 'name',
    titleClass: 'text-center',
    dataClass: 'text-center full-name'
  },
  {
    name: 'mobile',
    title: '<span class="glyphicon glyphicon-phone"></span> 手机号',
    sortField: 'mobile',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'onNullValue'
  },
  {
    name: 'id_NO',
    title: '<span class="glyphicon glyphicon-user"></span> 身份证',
    sortField: 'id_NO',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'onNullValue'
  },
  {
    name: 'password',
    title: '<span class="glyphicon glyphicon-asterisk"></span> 密码',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'onPasswordUpdate'
  },
  {
    name: '__component:custom-actions',
    title: '操作',
    titleClass: 'text-center',
    dataClass: 'text-center'
  }
]
