var bottles;
// function to print all except the two last lines of the song
function lyrics() {
    for(bottles=99;bottles>1;bottles=bottles-1) {
        document.getElementById("lyrics").innerHTML+='<br />'+bottles+' bottles of beer on the wall, '+ bottles +' bottles of beer'+"<br />"+'Take one down and pass it around, '+(bottles-1)+ ' bottles of beer on the wall'+'<br />';
    }
    // Print the second last irregular line
    document.getElementById("lyrics").innerHTML+='<br />'+'1 bottle of beer on the wall, 1 bottle of beer'+'<br />'+'Take one down and pass it around, no more bottles of beer on the wall'+'<br />';
    // Print the last irregular line of the song
    document.getElementById("lyrics").innerHTML+='<br />'+'No more bottles of beer on the wall, no more bottles of beer'+'<br />'+'Go to the store and buy some more, 99 bottles of beer on the wall';
    // Hide the button to just display the song lyrics
    document.getElementById("button").style.display='none';
}