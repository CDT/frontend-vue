export default [
  '__handle',
  {
    name: '__checkbox',
    titleClass: 'text-center',
    dataClass: 'text-center'
  },
  {
    name: 'patientId',
    title: '<span class="glyphicon glyphicon-tag"></span> 卡号',
    titleClass: 'text-center',
    dataClass: 'text-center'
  },
  {
    name: 'name',
    title: '<span class="glyphicon glyphicon-text-background"></span> 姓名',
    titleClass: 'text-center',
    dataClass: 'text-center full-name'
  },
  {
    name: 'gender',
    title: '<span class="glyphicon glyphicon-tag"></span> 性别',
    titleClass: 'text-center',
    dataClass: 'text-center'
  },
  {
    name: 'id_NO',
    title: '<span class="glyphicon glyphicon-user"></span> 身份证',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'onNullValue'
  },
  {
    name: 'phone1',
    title: '<span class="glyphicon glyphicon-tag"></span> 手机号',
    titleClass: 'text-center',
    dataClass: 'text-center'
  },
  {
    name: '__component:custom-actions',
    title: '操作',
    titleClass: 'text-center',
    dataClass: 'text-center'
  }
]
