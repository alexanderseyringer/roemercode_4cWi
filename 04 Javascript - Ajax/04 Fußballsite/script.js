function importer() {
    fetch("https://api.openligadb.de/getmatchdata/WM2022/2022").then((result)=> {
        result.json().then((data)=>{
            getHTMLForToDos(data);
            console.log(data.leagueName);
        })
    })
}

importer();