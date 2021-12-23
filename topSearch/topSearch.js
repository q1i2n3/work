var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        var out = "";
        for (var i = 0; i < myObj.length; i++) {
            out += '<a href="' +
                myObj[i].url + '">' +
                myObj[i].title + '</a></br>'
        }
        document.getElementById("box1").innerHTML = out;
    }
};
xmlhttp.open("GET", "zhihu.json", true);
xmlhttp.send();