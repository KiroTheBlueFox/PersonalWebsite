window.onload = function() {
    document.getElementById("nom").onclick = function() {
        var bioStyle = document.getElementById("bio").style;
        if (bioStyle.display == "block")
            bioStyle.display = "none";
        else
            bioStyle.display = "block";
        console.log(bioStyle.display);
    }
};