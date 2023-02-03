// let a: string = 'aa';
// let b: number = 25;
// let c: boolean = true;
// let d: undefined = undefined;
// let e: symbol = Symbol();

// const Person: {
// 	isim: string;
// 	sadece: 'sadece';
// } = {
// 	isim: 'nerkay',
// 	sadece: 'sadece',
// };

// // const Person = {
// // 	isim: 'nerkay',
// // 	sadece: 'sadece' as 'sadece' | 'ooo',
// // };

// // const input = document.querySelector("#button1") as HTMLElementInput

// // Person.sadece = "asd" HATA ALIR

// let aa: 'berkay' | 'selam' = 'selam';

// const dizi: string[] = []; // dizi = [] as string[]
// const dizi1: (number | string)[] = [];
// const dizi2 = [] as Array<string>;

// let aaa: number;
// aaa = 25;

// const myDizi: [string, string, number] = ['berkay', 'oruc', 20]; // tuple

// function F(): number {
// 	return 25;
// }

// // const cc = F() as string; // HATA ALIRSIN

// function LogPerson(
// 	isim: string,
// 	soyisim: string,
// 	yas: number
// ): Promise<number> {
// 	console.log({ isim, yas, soyisim });
// 	return new Promise((resolve, reject) => {
// 		resolve(25);
// 	});
// }

// LogPerson('berkay', 'oruc', 25);

// function logNameAsCount(name: string, count: number): void {
// 	for (let index = 0; index < count; index++) {
// 		console.log(name);
// 	}
// }

// logNameAsCount('berkay', 6);

// /* TYPE ALIASING */
// type Person = {
// 	isim?: string;
// 	soyad: string;
// 	yas: number;
// 	durum: string;
// };

// const obj: Person = {
// 	durum: 'asd',
// 	soyad: 'asd',
// 	yas: 8,
// };

// type Colors = 'red' | 'green' | 'blue';
// type CustomColors = 'magenta' | 'cyan' | 'turqoise';
// type AllColors = Colors | CustomColors;
// const myColor: Colors = 'green';

// type Dog = {
// 	yas: number;
// 	cins: string;
// 	tur: string;
// };

// type DogPerson = Person & Dog;
// const dogPerson: DogPerson = {
// 	yas: 5,
// 	cins: '',
// 	tur: '',
// 	soyad: '',
// 	durum: '',
// };

// type CustomMap = Map<string, number>;
// const myMap: CustomMap = new Map();
// myMap.set('berkay', 8);

// MODULES
// import Person, { Student } from './person';
import { Job, Person /*, Student*/ } from './all';
import type { Student } from './person';
console.log(Person.isim);
const a: Student = {
	isim: 'asd',
	sinif: 2,
};
console.log({ sinif: 9, isim: 'asd' } as Student);
