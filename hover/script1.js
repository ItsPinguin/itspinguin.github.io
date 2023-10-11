document.getElementById("gradient").addEventListener( "mousemove", (e) => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        mouseXpercentage = Math.round(e.pageX / windowWidth * 100);
        mouseYpercentage = Math.round(e.pageY / windowHeight * 100);
        for (const grad of document.getElementsByClassName("radial-gradient")) {
                grad.style.background='radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #202020, #101010 20%';
        }
});

