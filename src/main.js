//import * as main from './scripts/index'
import { HeaderTPL } from './templates/header'
import handlers from './scripts/handlers'
import 'bootstrap'

$(window).on("load",function(){
    console.log("loading window");
})

new HeaderTPL().loadHead();

handlers.dateFunction();
handlers.homeLoaderFunction();


window.addEventListener("popstate", function (e) {
    console.log(window.history.state);
})

$(window).on("hashchange", function () {
    console.log("launching hashchange");
    console.log(window.history.state);
})



