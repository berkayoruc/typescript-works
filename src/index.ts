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

/* MODULES */
// import Person, { Student } from './person';
// import { Job, Person /*, Student*/ } from './all';
// import type { Student } from './person';
// console.log(Person.isim);
// const a: Student = {
// 	isim: 'asd',
// 	sinif: 2,
// };
// console.log({ sinif: 9, isim: 'asd' } as Student);

/* OBJECT TYPING */
// type MyObject = {
// 	isim: string;
// 	yas: number;
// 	[key: string]: any;
// };

// const myObject: MyObject = {
// 	isim: 'berkay',
// 	yas: 8,
// 	berkay: Symbol(),
// };

// const mObj: Record<string, { isim: string; yas: number }> = {
// 	aaa: {
// 		isim: 'berkay',
// 		yas: 8,
// 	},
// };

/* INTERFACES */
// Interface genişletilebilir ancak type (static) genişletilemez

interface Person {
	isim: string;
	soyad: string;
	[key: string]: any;
}

const berkay: Person = {
	isim: 'berkay',
	soyad: 'oruc',
};

// Interface içinden type alınabilir
const isim: Person['isim'] = '';

interface MyArray {
	[index: number]: string | number;
}

// const arry: MyArray = {
// 	0: 'berkay',
// 	1: 4,
// };
const arry: MyArray = ['kadir', 1];

// En altta verilen döndürme tipi neyse onu istiyor (overloading)
interface IFunction {
	(isim: string, tekrar: number): void;
	(isim: number, tekrar: boolean): boolean;
	// (isim: number, tekrar: boolean): number;
}

const myFunc: IFunction = (name, count) => {
	return true;
};

interface IAnotherFunction extends IFunction {
	(yas: number, tekrar: number): void;
}

interface MongoResponse {
	_id: string;
	createdAt: string;
	updateAt: string;
}

interface BooksResponse extends MongoResponse {
	name: string;
	date: Date;
}

function getBooks(): BooksResponse {
	return {
		_id: '',
		createdAt: '',
		updateAt: '',
		name: '',
		date: new Date(),
	};
}

interface IStudent {
	isim: string;
	soyad: string;
	sinif: number;
	getStudentInformation(): {
		isim: IStudent['isim'];
		soyad: IStudent['soyad'];
		sinif: IStudent['sinif'];
	};
}

const obj: IStudent = {
	isim: 'berkay',
	sinif: 5,
	soyad: 'akjsd',
	getStudentInformation() {
		return {
			isim: this.isim,
			sinif: this.sinif,
			soyad: this.soyad,
		};
	},
};
