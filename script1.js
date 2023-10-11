document.getElementById("gradient").addEventListener( "mousemove", (e) => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        mouseXpercentage = Math.round(e.pageX / windowWidth * 100);
        mouseYpercentage = Math.round(e.pageY / windowHeight * 100);
        for (const grad of document.getElementsByClassName("radial-gradient")) {
                grad.style.background='radial-gradient(circle at ' + e.pageX + 'px ' + e.pageY + 'px, rgb(60,60,80), rgb(40,40,60) 20%, rgb(30,30,40) 90%';
        }
        for (const header of document.getElementsByClassName("header")) {
                header.style.background='radial-gradient(circle at ' + (0.7*(mouseXpercentage-50)+50) + '% ' + 100 + '%, rgb(60,60,80) 1%, rgb(40,40,60) 85%, rgb(30,30,40) 100% ' + (100-(mouseYpercentage*0.8+10)) + '%';
        }
});
console.log(localStorage.getItem("key"));