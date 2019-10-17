let login = prompt('Введите логин', '')
let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Введите логин	' : 'Неверный логин'
alert(message)
alert('OK')
alert(1+2)