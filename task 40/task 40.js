"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Rahat Fateh Ali Khan", "Back 2 Love", 10);
console.log(album1); // { artist: "The Beatles", title: "Abbey Road" }
const album2 = make_album("Atif Aslam", "Doori",18);
console.log(album2); // { artist: "Pink Floyd", title: "Dark Side of the Moon", tracks: 10 }
const album3 = make_album("Alamgir", "In Fazaon Sa Aagay", 8);
console.log(album3); // { artist: "Led Zeppelin", title: "IV", tracks: 8 }
