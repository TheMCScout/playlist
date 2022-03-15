// Complete Day 1 goals here
let playlist = [
  {
    name: "space oddity",
    artist: "lady heroine",
    img: "https://m.media-amazon.com/images/I/71iAy873UsL._SS500_.jpg",
    link: "https://youtu.be/By-C6a5VyFA",
  },
  {
    name: "eye of the storm",
    artist: "Watt White",
    img: "https://i.scdn.co/image/ab67616d0000b273c8b134e0538c83a1e727de43",
    link: "https://youtu.be/By-C6a5VyFA",
  },
  {
    name: "Blow Me Away",
    artist: "Breaking Benjamin",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/BlowMeAwayValora.jpg/220px-BlowMeAwayValora.jpg",
    link: "https://youtu.be/wbJ7XnYtprM",
  },
];
function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  playlist.forEach(function (song) {
    $(".artists").append(`<p>${song.artist}</p>`);
    $(".songs").append(`<p>${song.name}</p>`);
    $(".images").append(`<img src=${song.img}>`);
    $(".links").append(`<a href=${song.link}>Music Video Link</a>`);
  });
}
function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  let newSong = $(".title").val();
  let newArtist = $(".artists").val();
  let newImage = $(".images").val();
  let newLink = $(".link").val();
  playlist.push({
    name: newSong,
    artist: newArtist,
    img: newImage,
    link: newLink,
  });
}

$(".about").click(function () {
  $(".addSongInfo").append("<p>" + "artists :" + addSongInfo.artists + "</p>");
  $(".addSongInfo").append("<p>" + "songs :" + addSongInfo.songs + "</p>");
  $(".addSongInfo").append("<p>" + "images :" + addSongInfo.images + "</p>");
  $(".addSongInfo").append("<p>" + "links :" + addSongInfo.links + "</p>");
});

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});
displaySongInfo();
