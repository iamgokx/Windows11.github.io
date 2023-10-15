// window.addEventListener('load', performFunctionBasedOnScreenSize);
// window.addEventListener('resize', performFunctionBasedOnScreenSize);

let searchmenu = document.getElementById("searchmenu");

let toggleStatus = 0;
let search = 0;

//power options *******************************************************************************************

document.getElementById("sleepbtn").addEventListener("click", () => {
  document.getElementById("lockscreencont").style.opacity = "1";
  document.getElementById("signinscreen").style.height = "100vh";
  document.getElementById("lockscreencont").style.height = "100vh";
  document.getElementById("datetimecont").style.opacity = "1";
  if (window.width <= 600) {
    document.getElementById("lockscreencont").style.backgroundRepeat =
      "no-repeat";
    document.getElementById("lockscreencont").style.backgroundSize = "cover";
    document.getElementById("lockscreencont").style.backgroundPosition = "center";
  } else {
    document.getElementById("lockscreencont").style.backgroundSize = "200%";
  }
  document.getElementById("signinscreen").style.opacity = "0";
  homemenutoggleoff();
  homeappimgcontainersanimationclose();
  searchmenutoggleoff();
  searchmenuanimationclose();
});

//lock screen clock and date *******************************************************************************************
var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var monthOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var date = new Date();
var actualTime =
  daysOfWeek[date.getDay()] +
  ", " +
  date.getDate() +
  " " +
  monthOfYear[date.getMonth()];
document.getElementById("date").innerHTML = actualTime;
document.getElementById("datepaneldate").innerHTML = actualTime;
document.getElementById("widgetsdate").innerHTML = actualTime;

function formatTime12HourWithoutAmPm() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();

  const period = hours < 12 ? "AM" : "PM";

  hours = hours % 12 || 12;

  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const formattedTime = `${formattedHours}:${formattedMinutes}`;

  return formattedTime;
}

const time = formatTime12HourWithoutAmPm();

document.getElementById("time").innerHTML = time;

document.getElementById("signinscreen").addEventListener("click", () => {
  if (window.width <= 600) {
    document.getElementById("datetimecont").style.opacity = "0";
    document.getElementById("signinscreen").style.opacity = "1";
  } else {
    document.getElementById("datetimecont").style.opacity = "0";
    document.getElementById("lockscreencont").style.backgroundSize = "170%";
    document.getElementById("signinscreen").style.opacity = "1";
  }
});

//nav time *******************************************************************************************
document.getElementById("navtime").innerHTML = time;
document.getElementById("navdate").innerHTML =
  date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

//sign in screen *******************************************************************************************

var correctPass = "windows";

var input = document.getElementById("password");

function submit() {
  var check = input.value;

  var status = correctPass.localeCompare(check);

  if (status == 0) {
    input.value = "";
    document.getElementById("signinscreen").style.opacity = "0";
    document.getElementById("lockscreencont").style.opacity = "0";
    document.getElementById("signinscreen").style.height = "0";
    document.getElementById("lockscreencont").style.height = "0";
  } else {
    alert("Wrong password! Please try again");
  }
}

//enter key press password*******************************************************************************************

document
  .getElementById("password")
  .addEventListener("keydown", function (event) {
    var correctPass = "windows";

    var input = document.getElementById("password");
    var key = event.key;

    var check = input.value;

    var status = correctPass.localeCompare(check);

    if (status == 0 && key === "Enter") {
      input.value = "";
      document.getElementById("signinscreen").style.opacity = "0";
      document.getElementById("lockscreencont").style.opacity = "0";
      document.getElementById("signinscreen").style.height = "0";
      document.getElementById("lockscreencont").style.height = "0";
    }
  });

//escape action*******************************************************************************************
document
  .getElementById("password")
  .addEventListener("keydown", function (event) {
    var key = event.key;

    var check = input.value;

    var status = correctPass.localeCompare(check);

    if (status == 0) {
      input.value = "";
      document.getElementById("signinscreen").style.opacity = "0";
      document.getElementById("lockscreencont").style.opacity = "0";
      document.getElementById("signinscreen").style.height = "0";
      document.getElementById("lockscreencont").style.height = "0";
    }
  });

//nav up
// document
//   .getElementById("navdiv")
//   .addEventListener("mouseenter", function home() {
//     document.getElementById("navdiv").style.marginTop = "-129px";
//   });

// //nav down
// document
//   .getElementById("navdiv")
//   .addEventListener("mouseleave", function home() {
//     if (toggleStatus == 0 && search == 0) {
//       document.getElementById("navdiv").style.marginTop = "-60px";
//       document.getElementById("navdiv").style.marginTop = "-60px";
//     } else {
//       return;
//     }
//   });

//search menu*******************************************************************************************

document.getElementById("src").addEventListener("click", function home() {
  if (search == 0 && (toggleStatus == 1 || widgetstatus == 1)) {
    homemenutoggleoff();
    homeappimgcontainersanimationclose();

    widgettoggleoff();
    widgetitemsanimateclose();

    searchmenutoggle();
    searchmenuanimate();
  } else if (search == 0) {
    searchmenutoggle();
    searchmenuanimate();
  } else {
    searchmenutoggleoff();
    searchmenuanimationclose();
  }
});

//search menu toggle funtions

function searchmenutoggle() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const thresholdWidth = 600;

  if (screenWidth >= thresholdWidth) {
  search = 1;
  searchmenu.style.bottom = "56px";
  searchmenu.style.opacity = "1";
}else{
  search = 1;
  searchmenu.style.bottom = "45px";
  searchmenu.style.opacity = "1";
}

  // search = 1;
  // searchmenu.style.marginTop = "315px";
  // searchmenu.style.opacity = "1";
}
function searchmenutoggleoff() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const thresholdWidth = 600;

  if (screenWidth >= thresholdWidth) {
    search = 0;
    searchmenu.style.bottom = "-1000px";
    searchmenu.style.opacity = "0";
  }else{
    search = 0;
    searchmenu.style.bottom = "-800px";
    searchmenu.style.opacity = "0";
  }

  // search = 0;
  // searchmenu.style.marginTop = "1100px";
  // searchmenu.style.opacity = "0";
}

//search menu animte funtions

function searchmenuanimate() {
  document.getElementById("searchcont").style.transform = "translateY(0px)";

  setTimeout(() => {
    document.getElementById("searchmenuoptions").style.transform =
      "translateY(0px)";
  }, 150);
  setTimeout(() => {
    document.getElementById("searchcont2").style.transform = "translateY(0px)";
  }, 350);
  setTimeout(() => {
    document.getElementById("news").style.transform = "translateY(0px)";
  }, 450);
}

function searchmenuanimationclose() {
  document.getElementById("searchcont").style.transform = "translateY(100px)";
  document.getElementById("searchmenuoptions").style.transform =
    "translateY(100px)";
  document.getElementById("searchcont2").style.transform = "translateY(100px)";
  document.getElementById("news").style.transform = "translateY(100px)";
}

//home menu*******************************************************************************************

document.getElementById("win").addEventListener("click", function home() {
  if (toggleStatus == 0 && (search == 1 || widgetstatus == 1)) {
    homemenutoggle();
    setTimeout(() => {
      homeappimgcontainersanimate();
    }, 150);
    widgettoggleoff();
    searchmenutoggleoff();
    widgetitemsanimateclose();
    searchmenuanimationclose();
  } else if (toggleStatus == 0) {
    homemenutoggle();
    setTimeout(() => {
      homeappimgcontainersanimate();
    }, 150);
  } else {
    homemenutoggleoff();
    homeappimgcontainersanimationclose();
  }
});

//home menu toggle funtions

function homemenutoggle() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const thresholdWidth = 600;

  if (screenWidth >= thresholdWidth) {
    toggleStatus = 1;
    document.getElementById("homemenu").style.bottom = "56px";
    document.getElementById("homemenu").style.opacity = "1";
  } else {
    toggleStatus = 1;
    document.getElementById("homemenu").style.bottom = "45px";
    document.getElementById("homemenu").style.opacity = "1";
  }

  // toggleStatus = 1;
  // document.getElementById("homemenu").style.marginTop = "310px";
  // document.getElementById("homemenu").style.opacity = "1";
}

function homemenutoggleoff() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const thresholdWidth = 600;

  if (screenWidth >= thresholdWidth) {
  
    toggleStatus = 0;
    document.getElementById("homemenu").style.bottom = "-1000px";
    document.getElementById("homemenu").style.opacity = "0";
  } else {
   
    toggleStatus = 0;
    document.getElementById("homemenu").style.bottom = "-800px";
    document.getElementById("homemenu").style.opacity = "0";
  }

  // toggleStatus = 0;
  // document.getElementById("homemenu").style.marginTop = "1100px";
  // document.getElementById("homemenu").style.opacity = "0";
}

//home menu animate funtions
function homeappimgcontainersanimate() {
  document.getElementById("homesearch").style.transform = "translateY(0px)";
  setTimeout(() => {
    document.getElementById("allapps").style.transform = "translateY(0px)";
  }, 50);
  setTimeout(() => {
    document.getElementById("homeappimgcontainers").style.transform =
      "translateY(0px)";
  }, 100);
}

function homeappimgcontainersanimationclose() {
  document.getElementById("homeappimgcontainers").style.transform =
    "translateY(100px)";
  document.getElementById("allapps").style.transform = "translateY(100px)";
  document.getElementById("homesearch").style.transform = "translateY(100px)";
}

// function homeanimate()
// {
//   var tiles = document.querySelectorAll('.tile');

// }
// function homeanimateclose()
// {
//   var tiles = document.querySelectorAll('.tile');

// }
//power menu*******************************************************************************************

let powerstatus = 0;
document.getElementById("power").addEventListener("click", function open() {
  if (powerstatus == 0) {
    document.getElementById("powermenu").style.height = "150px";
    powerstatus = 1;
  } else if (powerstatus == 1) {
    document.getElementById("powermenu").style.height = "0px";
    powerstatus = 0;
  }
});

//desktop click closes menues*******************************************************************************************

document
  .getElementById("desktop")
  .addEventListener("mousedown", function close() {
    calandertoggleoff();
    intsoundbattoggleoff();
    navpaneltoggleoff();
    widgettoggleoff();
    widgetitemsanimateclose();
    homemenutoggleoff();
    homeappimgcontainersanimationclose();
    searchmenutoggleoff();
    searchmenuanimationclose();
  });

function zoom1() {
  document.getElementById("win").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("win").style.transform = "scale(1)";
  }, 200);
}

function zoom2() {
  document.getElementById("src").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("src").style.transform = "scale(1)";
  }, 200);
}
function zoom3() {
  document.getElementById("exp").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("exp").style.transform = "scale(1)";
  }, 200);
}
function zoom4() {
  document.getElementById("wht").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("wht").style.transform = "scale(1)";
  }, 200);
}
function zoom5() {
  document.getElementById("vs").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("vs").style.transform = "scale(1)";
  }, 200);
}
function zoom6() {
  document.getElementById("ecl").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("ecl").style.transform = "scale(1)";
  }, 200);
}
function zoom7() {
  document.getElementById("obs").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("obs").style.transform = "scale(1)";
  }, 200);
}
function zoom8() {
  document.getElementById("fig").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("fig").style.transform = "scale(1)";
  }, 200);
}
function zoom9() {
  document.getElementById("sql").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("sql").style.transform = "scale(1)";
  }, 200);
}
function zoom10() {
  document.getElementById("git").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("git").style.transform = "scale(1)";
  }, 200);
}
function zoom11() {
  document.getElementById("bash").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("bash").style.transform = "scale(1)";
  }, 200);
}
function zoom12() {
  document.getElementById("photo").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("photo").style.transform = "scale(1)";
  }, 200);
}
function zoom13() {
  document.getElementById("ps").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("ps").style.transform = "scale(1)";
  }, 200);
}
function zoom14() {
  document.getElementById("spotify").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("spotify").style.transform = "scale(1)";
  }, 200);
}

function zoom15() {
  document.getElementById("chrome").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("chrome").style.transform = "scale(1)";
  }, 200);
}

function zoom16() {
  document.getElementById("brave").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("brave").style.transform = "scale(1)";
  }, 200);
}
function zoom17() {
  document.getElementById("ms").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("ms").style.transform = "scale(1)";
  }, 200);
}
function zoom18() {
  document.getElementById("widget").style.transform = "scale(0.7)";
  setTimeout(() => {
    document.getElementById("widget").style.transform = "scale(1)";
  }, 200);
}

//calendar *******************************************************************************************

document.addEventListener("DOMContentLoaded", function () {
  const calendarBody = document.getElementById("calendarBody");
  const currentMonthYear = document.getElementById("currentMonthYear");
  const prevMonthButton = document.getElementById("prevMonth");
  const nextMonthButton = document.getElementById("nextMonth");

  let currentDate = new Date();

  function generateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    currentMonthYear.textContent = `${monthNames[month]} ${year}`;

    let dayCounter = 1;
    let tableHTML = "";

    for (let i = 0; i < 6; i++) {
      let rowHTML = "<tr>";
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfWeek) || dayCounter > daysInMonth) {
          rowHTML += "<td></td>";
        } else {
          const isCurrentDay =
            dayCounter === currentDate.getDate() &&
            month === currentDate.getMonth() &&
            year === currentDate.getFullYear();
          // Add inline styles to highlight the current date
          rowHTML += `<td style="${
            isCurrentDay ? "background-color: #0078D4; border-radius:50%;" : ""
          }">${dayCounter}</td>`;
          dayCounter++;
        }
      }
      rowHTML += "</tr>";
      tableHTML += rowHTML;
    }

    calendarBody.innerHTML = tableHTML;
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  generateCalendar();

  prevMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar();
  });

  nextMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar();
  });
});

//navpanel*******************************************************************************************
var traystatus = 0;

document.getElementById("trayimg").addEventListener("click", () => {
  if (
    traystatus == 0 &&
    (intsoundbat == 1 || calenderstatus == 1 || widgetstatus == 1)
  ) {
    intsoundbattoggleoff();
    calandertoggleoff();
    widgettoggleoff();
    widgetitemsanimateclose();

    navpaneltoggle();
  } else if (traystatus == 0) {
    navpaneltoggle();
  } else if (traystatus == 1) {
    navpaneltoggleoff();
  }
});

//navpanel toggle functions

function navpaneltoggle() {
  traystatus = 1;
  document.getElementById("traymenu").style.bottom = "5%";
  document.getElementById("traymenu").style.scale = "1";
}
function navpaneltoggleoff() {
  traystatus = 0;
  document.getElementById("traymenu").style.scale = "0";
  document.getElementById("traymenu").style.bottom = "0%";
}

var intsoundbat = 0;
document.getElementById("intsoundbat").addEventListener("click", () => {
  if (
    intsoundbat == 0 &&
    (calenderstatus == 1 || traystatus == 1 || widgetstatus == 1)
  ) {
    navpaneltoggleoff();

    calandertoggleoff();

    widgettoggleoff();
    widgetitemsanimateclose();

    intsoundbattoggle();
  } else if (intsoundbat == 0) {
    intsoundbattoggle();
  } else if (intsoundbat == 1) {
    intsoundbattoggleoff();
  }
});

//wifi sound and battery toggle funtions

function intsoundbattoggle() {
  intsoundbat = 1;
  document.getElementById("navpanel").style.opacity = "1";
  setTimeout(() => {
    document.getElementById("navpanel").style.bottom = "5%";
  }, 200);
}

function intsoundbattoggleoff() {
  intsoundbat = 0;
  document.getElementById("navpanel").style.opacity = "0";
  document.getElementById("navpanel").style.bottom = "-50%";
}

var calenderstatus = 0;
document.getElementById("navdttime").addEventListener("click", () => {
  if (
    calenderstatus == 0 &&
    (traystatus == 1 || intsoundbat == 1 || widgetstatus == 1)
  ) {
    intsoundbattoggleoff();
    navpaneltoggleoff();
    widgettoggleoff();
    widgetitemsanimateclose();

    calandertoggle();
  } else if (calenderstatus == 0) {
    calandertoggle();
  } else if (calenderstatus == 1) {
    calandertoggleoff();
  }
});

//calander toggle functions

function calandertoggle() {
  calenderstatus = 1;
  document.getElementById("datepanel").style.opacity = "1";
  setTimeout(() => {
    document.getElementById("datepanel").style.right = "0.7%";
    //  document.getElementById("datepanel").style.scale = "1";
  }, 200);
}
function calandertoggleoff() {
  calenderstatus = 0;
  document.getElementById("datepanel").style.opacity = "0";
  document.getElementById("datepanel").style.right = "-50%";
}

//navtiles highlight on click*******************************************************************************************

var h1 = 0;
function highlight1() {
  if (h1 == 0) {
    document.getElementById("navpanelwifi").style.backgroundColor =
      "rgb(32, 163, 214)";
    document.getElementById("navpanelwifi").style.backgroundColor =
      "rgb(32, 163, 214)";
    h1 = 1;
  } else {
    document.getElementById("navpanelwifi").style.backgroundColor =
      "rgba(46, 5, 59, 0.555)";
    h1 = 0;
  }
}

var h2 = 0;
function highlight2() {
  if (h2 == 0) {
    document.getElementById("navbt").style.backgroundColor =
      "rgb(32, 163, 214)";
    document.getElementById("navbt").style.backgroundColor =
      "rgb(32, 163, 214)";
    h2 = 1;
  } else {
    document.getElementById("navbt").style.backgroundColor =
      "rgba(46, 5, 59, 0.555)";
    h2 = 0;
  }
}

var h3 = 0;
function highlight3() {
  if (h3 == 0) {
    document.getElementById("navar").style.backgroundColor =
      "rgb(32, 163, 214)";
    document.getElementById("navar").style.backgroundColor =
      "rgb(32, 163, 214)";
    h3 = 1;
  } else {
    document.getElementById("navar").style.backgroundColor =
      "rgba(46, 5, 59, 0.555)";
    h3 = 0;
  }
}

var h4 = 0;
function highlight4() {
  if (h4 == 0) {
    document.getElementById("navac").style.backgroundColor =
      "rgb(32, 163, 214)";
    document.getElementById("navac").style.backgroundColor =
      "rgb(32, 163, 214)";
    h4 = 1;
  } else {
    document.getElementById("navac").style.backgroundColor =
      "rgba(46, 5, 59, 0.555)";
    h4 = 0;
  }
}

var h5 = 0;
function highlight5() {
  if (h5 == 0) {
    document.getElementById("navcast").style.backgroundColor =
      "rgb(32, 163, 214)";
    document.getElementById("navcast").style.backgroundColor =
      "rgb(32, 163, 214)";
    h5 = 1;
  } else {
    document.getElementById("navcast").style.backgroundColor =
      "rgba(46, 5, 59, 0.555)";
    h5 = 0;
  }
}

var h6 = 0;
function highlight6() {
  if (h6 == 0) {
    document.getElementById("navhot").style.backgroundColor =
      "rgb(32, 163, 214)";
    document.getElementById("navhot").style.backgroundColor =
      "rgb(32, 163, 214)";
    h6 = 1;
  } else {
    document.getElementById("navhot").style.backgroundColor =
      "rgba(46, 5, 59, 0.555)";
    h6 = 0;
  }
}

//widgetpanel*******************************************************************************************
var widgetstatus = 0;

document.getElementById("widget").addEventListener("click", () => {
  if (
    widgetstatus == 0 &&
    (toggleStatus == 1 ||
      search == 1 ||
      intsoundbat == 1 ||
      traystatus == 1 ||
      calenderstatus == 1)
  ) {
    widgetoggle();
    setTimeout(() => {
      widgetitemsanimate();
    }, 200);
    homemenutoggleoff();
    homeappimgcontainersanimationclose();
    searchmenutoggleoff();
    searchmenuanimationclose();

    calandertoggleoff();
    intsoundbattoggleoff();
    navpaneltoggleoff();
  } else if (widgetstatus == 0) {
    widgetoggle();
    setTimeout(() => {
      widgetitemsanimate();
    }, 200);
  } else {
    widgettoggleoff();

    widgetitemsanimateclose();
  }
});

//widget toggle funtions

function widgetoggle() {
  widgetstatus = 1;
  // document.getElementById("widgetpanel").style.width = "51.5%";
  document.getElementById("widgetpanel").style.left = "1%";
  document.getElementById("widgetpanel").style.opacity = "1";
}

function widgettoggleoff() {
  widgetstatus = 0;
  // document.getElementById("widgetpanel").style.width = "0%";
  document.getElementById("widgetpanel").style.opacity = "0";
  document.getElementById("widgetpanel").style.left = "-60%";
}

//widget animation funtions

function widgetitemsanimate() {
  document.getElementById("news1").style.transform = "translateY(0px)";
  document.getElementById("news2").style.transform = "translateY(0px)";
  document.getElementById("weather").style.transform = "translateY(0px)";
  document.getElementById("watchlist").style.transform = "translateY(0px)";
  document.getElementById("traficIncidents").style.transform =
    "translateY(0px)";
  document.getElementById("photos").style.transform = "translateY(0px)";
  setTimeout(() => {
    document.getElementById("news3").style.transform = "translateY(0px)";
    document.getElementById("news4").style.transform = "translateY(0px)";
  }, 50);
  setTimeout(() => {
    document.getElementById("news5").style.transform = "translateY(0px)";
    document.getElementById("news6").style.transform = "translateY(0px)";
  }, 50);
  setTimeout(() => {
    document.getElementById("news7").style.transform = "translateY(0px)";
    document.getElementById("news8").style.transform = "translateY(0px)";
  }, 50);
}

function widgetitemsanimateclose() {
  document.getElementById("news1").style.transform = "translateY(70px)";
  document.getElementById("news2").style.transform = "translateY(70px)";
  document.getElementById("news3").style.transform = "translateY(70px)";
  document.getElementById("news4").style.transform = "translateY(70px)";
  document.getElementById("news5").style.transform = "translateY(70px)";
  document.getElementById("news6").style.transform = "translateY(70px)";
  document.getElementById("news7").style.transform = "translateY(70px)";
  document.getElementById("news8").style.transform = "translateY(70px)";
  document.getElementById("weather").style.transform = "translateY(70px)";
  document.getElementById("watchlist").style.transform = "translateY(70px)";
  document.getElementById("traficIncidents").style.transform =
    "translateY(70px)";
  document.getElementById("photos").style.transform = "translateY(70px)";
}

const draggable = document.getElementById("fileexp");
const draggablediv = document.getElementById("draggable");

let isDragging = false;
let offsetX, offsetY;

draggablediv.addEventListener("mousedown", (e) => {
  if (e.detail === 1) {
    // Check for double-click
    isDragging = true;
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;
    draggable.style.cursor = "grabbing";
  }
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    draggable.style.left = `${newX}px`;
    draggable.style.top = `${newY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  draggable.style.cursor = "grab";
});

//open file exp
var expstatus = 0;
document.getElementById("exp").addEventListener("click", () => {
  if (expstatus == 0) {
    document.getElementById("fileexp").style.opacity = "1";
    setTimeout(() => {
      document.getElementById("fileexp").style.top = "10%";
      document.getElementById("fileexp").style.scale = "1";
    }, 200);
    expstatus = 1;
  } else {
    document.getElementById("fileexp").style.opacity = "0";
    document.getElementById("fileexp").style.top = "100%";
    document.getElementById("fileexp").style.scale = "0";
    expstatus = 0;
  }
});

//min max close
document.getElementById("mini").addEventListener("click", () => {
  document.getElementById("fileexp").style.opacity = "0";
  document.getElementById("fileexp").style.top = "100%";
  document.getElementById("fileexp").style.scale = "0";
  expstatus = 0;
});

//max
var max = 0;

document.getElementById("max").addEventListener("click", () => {
  if (max == 0) {
    document.getElementById("fileexp").style.left = "0%";
    document.getElementById("fileexp").style.top = "0%";
    document.getElementById("fileexp").style.width = "100%";
    document.getElementById("fileexp").style.height = "96%";
    max = 1;
  } else {
    document.getElementById("fileexp").style.left = "25%";
    document.getElementById("fileexp").style.top = "50%";
    document.getElementById("fileexp").style.width = "60%";
    document.getElementById("fileexp").style.height = "60%";
    max = 0;
  }
});

//close
document.getElementById("cl").addEventListener("click", () => {
  document.getElementById("fileexp").style.opacity = "0";
  document.getElementById("fileexp").style.top = "100%";
  document.getElementById("fileexp").style.scale = "0";
  expstatus = 0;
});



// function([string1, string2],target id,[color1,color2])    
consoleText(['Hello', 'Thanks for visiting', 'Please open on PC'], 'text',['Yellow','white','yellow']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}