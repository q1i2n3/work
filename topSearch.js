var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("box1").innerHTML = myObj.text;
    }
};
xmlhttp.open("GET", "zhihu.txt", true);
xmlhttp.send();