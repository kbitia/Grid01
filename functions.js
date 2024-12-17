const SITE = document.querySelector('.site');/**
const változó deklarálása, értéke nem változtatható
constans állandó változó nevét érdemes nagy betűvel írni */
console.log(SITE)
const TRIGGER = document.querySelector('.trigger');
console.log(TRIGGER)
/**függvény létrehozása 
 * 1 function
 * 2 szóköz
 * 3 függvény neve
 * 4 kerek zárójel
 * 5 kapcsos zárójel
 */

/**
 * első feltétel
 * masodik any
 * harmadik any
 * működése:
 * ha a feltétel igaz, akkor a második eset fut le
 * ha a harmadik hamis akkor, akkor a harmadik eset fut le
*/

function revealMenu() {
    SITE.classList.toggle('reveal');
   TRIGGER.innerHTML == 'Close menu' ? TRIGGER.innerHTML = 'Open menu' : TRIGGER.innerHTML = 'Close menu';
   console.log(TRIGGER.innerHTML == 'Close menu')
}
/**
 * A függvény csak akkor fut le ha meghívjuk
 */
TRIGGER.addEventListener('click', revealMenu, false);

