import Sandra from '../assets/img/users/sandra.jpg'
import Alejandro from '../assets/img/users/Alejandro.jpg'
import Renato from '../assets/img/users/Renato.jpg'
import Esteban from '../assets/img/users/Esteban.jpg'

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
		name: 'Renato',
		age: 20,
		picture: Renato
	},
	{
		name: 'Esteban',
		age: 22,
		picture: Esteban
	},
	{
		name: 'Sandra',
		age: 20,
		picture: Sandra
	}
];

export function	getUser(index){
	return users[index]
}