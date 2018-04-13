export default [
  '__handle',
  {
    name: '__checkbox',
    titleClass: 'text-center',
    dataClass: 'text-center'
  },
  {
    name: 'job_NO',
    title: '<span class="glyphicon glyphicon-envelope"></span> 工号',
    sortField: 'job_NO'
  },
  {
    name: 'name',
    title: '<span class="glyphicon glyphicon-user"></span> 姓名',
    sortField: 'name'
  },
  {
    name: 'mobile',
    title: '<span class="glyphicon glyphicon-envelope"></span> 手机号',
    sortField: 'mobile'
  },
  {
    name: 'id_NO',
    title: '<span class="glyphicon glyphicon-envelope"></span> 身份证',
    sortField: 'id_NO'
  },
  // {
  //   name: 'birthdate',
  //   title: '<span class="glyphicon glyphicon-gift"></span> Birthdate',
  //   sortField: 'birthdate',
  //   titleClass: 'text-center',
  //   dataClass: 'text-center',
  //   callback: 'formatDate|DD-MM-YYYY'
  // },
  // {
  //   name: 'nickname',
  //   title: '<span class="glyphicon glyphicon-tag"></span> Nickname',
  //   sortField: 'nickname',
  //   callback: 'allcap'
  // },
  // {
  //   name: 'gender',
  //   title: '<span class="glyphicon glyphicon-asterisk"></span> Gender',
  //   sortField: 'gender',
  //   titleClass: 'text-center',
  //   dataClass: 'text-center',
  //   callback: 'genderLabel'
  // },
  // {
  //   name: 'salary',
  //   title: '<span class="glyphicon glyphicon-usd"></span> Salary',
  //   sortField: 'salary',
  //   titleClass: 'text-center',
  //   dataClass: 'text-right',
  //   callback: 'formatNumber',
  // },
  {
    name: '__component:custom-actions',
    title: '操作',
    titleClass: 'text-center',
    dataClass: 'text-center'
  }
]
