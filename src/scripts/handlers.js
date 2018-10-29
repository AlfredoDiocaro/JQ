import{ HomeSect } from '../templates/homeSect'

function dateFunction(){
    let date = new Date();
    $('.giveDate').on('click',function(){
    console.log(date);
    $('.year').text(new Date().getFullYear());
});
}

function homeLoaderFunction(){
$('.feat').on('click',function(){
    let home = new HomeSect();
    let obj = {
        nome: "alfredo",
        eta: 27
    }
    home.loadHome();
    window.history.pushState(obj, "home", "home.html");
});
}

export default { dateFunction, homeLoaderFunction }