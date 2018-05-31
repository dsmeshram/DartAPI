
var option = {
  apikey:'DEMO5445435DF435'
}

var dartobject = new dart(option);

var user =  {
  username:'damodhar',
  password:'password'
}

dartobject.bind(document.getElementById('login'),user);

var user1 =  {
  username:'damodhar',
  password:'password'
}

var user2 =  {
  username:'damodhar 1',
  password:'password 2'
}

var user3 =  {
  username:'damodhar 1',
  password:'password 2'
}
var datalist = [];
datalist.push(user1);
datalist.push(user2);
datalist.push(user3);

dartobject.repeart(document.getElementById('repeat'),datalist);
