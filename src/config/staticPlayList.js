const list1 = [
	{
		music: 'La Bicicleta',
		author: 'Carlos Vives, Shakira'
	},
	{
		music: 'Dile que tu me quieres',
		author: 'Ozuna'
	},
	{
		music: 'El Amante',
		author: 'Nicky Jam'
	},
	{
		music: 'Don`t Wanna Know',
		author: 'Marron 5, Kendrick Lamar'
	}
	
];
const list2 = [
	{
		music: 'El Amante',
		author: 'Nicky Jam'
	},
	{
		music: 'Chantaje',
		author: 'Maluma, Shakira'
	},
	{
		music: 'Shape of You',
		author: 'Ed Sheeran'
	},
	{
		music: 'Vente Pa`Ca',
		author: 'Rocky Martin, Maluma'
	},
	{
		music: 'La Bicicleta',
		author: 'Carlos Vives, Shakira'
	}
];
const list3 = [
	{
		music: 'Desde esa noche',
		author: 'Thalía, Maluma'
	},
	{
		music: 'Don`t Wanna Know',
		author: 'Marron 5, Kendrick Lamar'
	},
	{
		music: 'Rockabye',
		author: 'Clean Bandit, Sean Paul'
	},
	{
		music: 'Shaky Shaky',
		author: 'Daddy Yankee'
	}
];
const playList = [];
playList.push(list1);
playList.push(list2);
playList.push(list3);
playList.push(list1);
playList.push(list2);

export function	getList(index){
	return playList[index]
}