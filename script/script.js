const texts =[
	{
		id: 1,
		text: "TEXT1",
		button_text: "text1"
	},
	{
		id: 2,
		text: "TEXT2",
		button_text: "text2"
	},
	{
		id: 3,
		text: "TEXT3",
		button_text: "text3"
	},
	{
		id: 4,
		text: "TEXT4",
		button_text: "text4"
	},
	{
		id: 5,
		text: "TEXT5",
		button_text: "text5"
	}
];

const leftButtonNode = document.getElementById("left-button");
const rightButtonNode = document.getElementById("right-button");
//const [leftButtonNode, rightButtonNode] = document.querySelectorAll("button"); можно с помощью реструктуризацией задать кнопки-стрелки
const textNode = document.querySelector(".current_text p");

let i = 0;
textNode.innerText = texts[0].text;

rightButtonNode.addEventListener("click", () => {
    if (i === texts.length-1) {
        i = 0;
    } else {
        i++;
    }
    textNode.innerText = texts[i].text;
});

leftButtonNode.addEventListener ("click", ()=> {
	if (i===0){
        i=texts.length-1;
    }else{
       i--; 
    }
    textNode.innerText = texts[i].text;
});

const root = document.querySelector("#root");

function createButton(array){
    const container = document.createElement("div");
    array.forEach(({text,button_text}) => {
    const buttonNode = document.createElement("button");
    buttonNode.innerText = button_text;
    container.append(buttonNode);
    buttonNode.addEventListener("click",()=>{
	textNode.innerText = text;
	});
});
return container;
};
root.append(createButton(texts));

const r=123;
const g=202;
const b=189;
// const res = "rgb("+r+", "+g+", "+b+");" - конкатенация
// console.log(res);
const res = `rgb(${r}, ${g}, ${b});` // - интерполяция
console.log(res);


// const btnsNodeList = document.querySelectorAll(".btns button");//сложили эл-ты по тэгу button в NodeList
// btnsNodeList.forEach(e => {//прошлись циклом по листу
//     e.addEventListener("click", (event) => {//для эл-та, у кот. совершилось событие(клик)
//         const btnIndex = [...btnsNodeList].indexOf(event.target);//возьмем индекс эл-та(кнопки), переложив лист в массив
//         //const text = texts.filter(e => e.id === btnIndex+1);filter находит массив
//         const {text} = texts.find(({id}) => id === btnIndex+1);//find находит объект(первый эл-т) и пользуясь деструктуризацией, возьмем св-во text
//         const currentTextNode = document.querySelector(".current_text p");
//         currentTextNode.innerText = text; 
//     });
// });