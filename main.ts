import { Serie } from "./Serie.js";
import { series } from "./data.js";

let seriesTabla:HTMLElement = document.getElementById("series")!;
const promedioT:HTMLElement = document.getElementById("promedio")!;

let Series=series;

mostrardatosTabla(Series);
promedioT.innerHTML=`${average(Series)}`

console.log(series);

function mostrardatosTabla(Series:Serie[]):void{
    for(let serie of Series)
    {
        let trElement=document.createElement("tr");
        trElement.innerHTML=
        ` <td scope="col"> &nbsp ${serie.id} &nbsp </td>

        <td scope="col"> <button type="button" class="btn shadow-none" id="btn" > &nbsp ${serie.Name} &nbsp </button> </td>

        <td scope="col" style='text-align:center'> &nbsp ${serie.Chan} &nbsp </td>
        <td scope="col" style='text-align:center'> &nbsp ${serie.Seas} &nbsp </td>`;

        seriesTabla.appendChild(trElement);

        trElement.children[1].classList.add("link");

        trElement.children[1].addEventListener("click", () => { cardMaker(serie, serie.id) });

    }

}

function average(Series:Serie[]): number{
    let count:number = 0;
    let cant:number = 0;

    for(let serie of Series)
    {
        count+=serie.Seas;
        cant+=1;
    }

    const promedio = count/cant;
    console.log(promedio);
    return promedio;

}

function cardMaker(Serie: Serie, id:number):void{
    for(let serie of Series)
    {
        if (id==serie.id){
            let card: HTMLElement = document.getElementById("card")!;
            card.innerHTML =
            `<div class="card" style="width: 18rem;">
                <img src="${serie.img}" class="card-img-top" alt="Foto"/>
                <div class="card-body">
                    <h5 class="card-title"> ${serie.Name} </h5>
                    <p class="card-text">${serie.set}</p>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${serie.Chan}</li>
                    </ul>
                <div class="card-body">
                    <a href="${serie.link}" class="card-link"> Ir a la Página </a>
                </div>
            </div>`;
            
        }
    }
    

}
