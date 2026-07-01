const steps = [
{
title:"Primero que todo...",
text:"Espero que estés teniendo un buen día. 😌"
},
{
title:"Ahora sí...",
text:"He estado analizando todas las conversaciones que hemos tenido..."
},
{
title:"Llegué a una conclusión...",
text:"Después de revisar cuidadosamente todas las pruebas..."
},
{
title:"La verdad...",
text:"No te creo absolutamente nada. 😂"
},
{
final:true
}
];

card.innerHTML = `
<h1 class="big">😂 Te agarré de prueba 😂</h1>

<p>
Esta página solo era un experimento... pero igual sigo sin creerte. 🤨
</p>

<div class="buttons">
<button onclick="yes()">Bueno 😔</button>
<button onclick="yes()">Está bien 😭</button>
</div>
`;

function yes(){

document.getElementById("card").innerHTML=`

<h1 class="big">JAJAJA ❤️</h1>

<p>
Era molestando, Axel. Solo quería probar que la página funcionara.
</p>

<p class="small">
Si llegaste hasta aquí... gracias por aguantar la troleada. 😂
</p>

`;

for(let i=0;i<40;i++) createHeart(true);

}
