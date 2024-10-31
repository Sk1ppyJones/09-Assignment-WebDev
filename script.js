let songs = [
    {
        Title: "Title:",
        Artist: "Artist:",
        Year: "Year:"
    }
];

function displaySongs(data) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    document.getElementById("displaySongs").innerHTML = "";

    // Create table header

    // Create table rows
    data.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    document.getElementById("displaySongs").appendChild(table);
}

document.getElementById("submit").onclick = function () {
    //Get text from text boxes
    let songTitle = document.getElementById("sTitle").value;
    let songArtist = document.getElementById("sArtist").value;
    let songYear = document.getElementById("sYear").value;
    //Add new object to array
    let obj = {
        Title: songTitle,
        Artist: songArtist,
        Year: songYear
    };

    songs.push(obj);

    document.getElementById("sTitle").value = ""
    document.getElementById("sArtist").value = "";
    document.getElementById("sYear").value = ""

    displaySongs(songs)
}