var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Matrix Background
// William Moody (@bmdyy)
// 07.01.2023

// Grab reference to canvas
var c = document.getElementById("matrix");
var ctx = c.getContext("2d");

// Define the charset, font, and font color
// https://scifi.stackexchange.com/a/182823
const charList = "日ﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ012345789ZTHEMATRIX:・.\"=*+-<>¦｜_çｸ";

var matrix;

// Function to return a random character from the
// matrix charset
function randomMatrixChar() {
    return charList.charAt(Math.floor(Math.random() * (charList.length-1)));
}

// Initialize the matrix
function initMatrix() {
    matrix = [];
    for (var y = 0; y < c.height / 20; y++) {
        var row = [];
        for (var x = 0; x < c.width / 20; x++) {
            row.push(["", 0]);
        }
        matrix.push(row);
    }
}

// Draw the matrix to screen
function drawMatrix() {
    ctx.clearRect(0, 0, c.width, c.height);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            ctx.fillStyle = "rgba(65, 77, 91, " + matrix[y][x][1] + ")";
            ctx.fillText(matrix[y][x][0], x*20, y*20+14);
        }
    }
}

// Update the matrix animation
function updateMatrix() {
    // Update the existing chars
    for (var y = matrix.length - 1; y >= 0; y--) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (y > 0 && matrix[y - 1][x][1] == 1) {
                matrix[y][x] = [randomMatrixChar(), matrix[y - 1][x][1]];
                matrix[y - 1][x][1] -= 0.15;
            }
            else if (matrix[y][x][1] > 0) {
                matrix[y][x][1] -= 0.15;
            }
            else if (matrix[y][x][1] <= 0) {
                matrix[y][x] = ["", 0];
            }
        }
    }

    // Add new chars at top row
    for (var x = 0; x < matrix[0].length; x++) {
        if (matrix[0][x][1] == 0 && Math.random() > 0.8) {
            matrix[0][x] = [randomMatrixChar(), 1];
        }
    }
}


// Make sure the canvas is always 100% height/width
window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx.font = "20px Ubuntu Mono";
    initMatrix();
    for (var i = 0; i < 60; i++) {updateMatrix();} // Update enough that it starts full screen
}

resizeCanvas();
drawMatrix();

setInterval(function() {
    updateMatrix();
    drawMatrix();
}, 100);

}
/*
     FILE ARCHIVED ON 01:55:32 Jan 17, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:22:21 Jun 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.859
  exclusion.robots: 0.093
  exclusion.robots.policy: 0.082
  esindex: 0.012
  cdx.remote: 6.178
  LoadShardBlock: 176.321 (3)
  PetaboxLoader3.resolve: 210.792 (3)
  PetaboxLoader3.datanode: 76.057 (4)
  load_resource: 132.168
*/