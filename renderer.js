const app = require('electron').remote
const dialog = app.dialog
const fs = require('fs')

//save file code
document.getElementById('btn').addEventListener('click', saveFile)

function saveFile(){
    dialog.showSaveDialog((filename) =>{
        if (filename === undefined){
            alert("You didn't enter in a file name!")
            return
        }

        var content = document.getElementById('tasks').innerHTML

        fs.writeFile(filename, content, (err)=>{
            if(err) console.log(err)
            alert("The File has been save successfully!")
        })

    })
}

//open file code
document.getElementById('open').addEventListener('click', openFile)

function openFile() {
    dialog.showOpenDialog((filenames) =>{
        if(filenames === undefined){
            alert("no files were selected")
            return;
        }

        readFile(filenames[0]);
    })
}

function readFile(filepath){
    fs.readFile(filepath, 'utf-8', (err, data) =>{
        if (err){
            alert("There was an error retreiving your file")
            return
        }
        console.log(data)
        var lineByline = data.split('\n');
        var table = document.querySelector('ul')
        table.innerHTML += '<li class="collection-item">' + lineByline + '</li>'
    })
}