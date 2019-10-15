/* -------------------------------------
    MULTI USAGE VARIABLES
------------------------------------- */


// Date Verification
var get_date = new Date();
var cur_date = get_date.getFullYear()+'-'+(get_date.getMonth()+1)+'-'+get_date.getDate();

// Date Last Update
var last_date = "2019-09-07";

/* ------------------------------------- */


/* -------------------------------------
    SHOW NEW CONTENT NOTIFICATION
------------------------------------- */

// Function Declarations
function ShowNotification_News() {    
    var delayInMilliseconds = 1000; //1 second

    setTimeout(function() {
        Notiflix.Report.Info('There is new content');
    }, delayInMilliseconds);
    
    // Set New Last_Visited Date
    Cookies.set('last_visited_news', cur_date);

    
}

function ToShowNotification_News() {
    if(last_date > last_visited) {
        Notiflix.Notify.Info('There is new content, visit News to see it');
    }    
    
    // Set New Last_Visited Date
    Cookies.set('last_visited_news', cur_date);
    
}

// Decide To Show Notification
var last_visited = Cookies.get('last_visited_news');

if(last_visited == null) {
    ShowNotification_News();
}
else {
    ToShowNotification_News();
}




/* -------------------------------------
    SHOW CACHE CONSENT NOTIFICATION
------------------------------------- */

// Function Declarations
function ShowNotification_Cache() {
          window.cookieconsent.initialise({
        "palette": {
        "popup": {
          "background": "#252e39"
        },
        "button": {
          "background": "#3B5998"
        }
      }
    });
    //END
}
ShowNotification_Cache();
