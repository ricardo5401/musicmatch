import Sandra from '../assets/img/users/sandra.jpg'
import Alejandro from '../assets/img/users/Alejandro.jpg'
import Renato from '../assets/img/users/Renato.jpg'
import Esteban from '../assets/img/users/Esteban.jpg'
import Carla from '../assets/img/users/carla.png'

const users = [
	{
		name: 'Sandra',
		age: 20,
		picture: Sandra
	},
	{
		name: 'Alejandro',
		age: 21,
		picture: Alejandro
	},
	{
		name: 'Carla',
		age: 19,
		picture: Carla
	},
	{
		name: 'Renato',
		age: 20,
		picture: Renato
	},
	{
		name: 'Esteban',
		age: 22,
		picture: Esteban
	}
];

export function	getUser(index){
	console.log(index)
	console.log(users[index])
	return users[index]
}