
function waitForElement() {
    var yourDIV = document.getElementsByClassName("TK")[0];
    var yourDIV1 = document.getElementsByClassName("bsU")[0];
    var baseUrl = window.location.origin + window.location.pathname;
    var newFragment = "search/is%3Aunread";
    
    var newUrl = baseUrl + "#" + newFragment;
    var htmlLang = document.documentElement.lang;
    if (window.location.hash=="#search/is%3Aunread"){
        var mainDivClassName = "aim ain";
        var innerDiv1ClassName = "TO aS3 nZ aiq"
    }
    else{
        var mainDivClassName = "aim";
        var innerDiv1ClassName = "TO aS3"
    }

    if (htmlLang=="uk"){
        var unread_string = "Непрочитані";
    }
    else if (htmlLang=="ru"){
        var unread_string = "Непрочитаные";
    }
    else {
        var unread_string = "Unread";
    }

    if (yourDIV) {
      // Element found, continue with your code
      console.log("Element found:", yourDIV);


        var mainDiv = document.createElement("div");
        mainDiv.className = mainDivClassName;
        mainDiv.id = "BVid1";

        var innerDiv1 = document.createElement("div");
        
        innerDiv1.id = "BVid2";
        innerDiv1.setAttribute("data-tooltip", "Unread");
        innerDiv1.setAttribute("data-tooltip-align", "r");

        innerDiv1.className = innerDiv1ClassName;
        // Create the second inner div with classes "TN" and "UKr6le"
        var innerDiv2 = document.createElement("div");
        innerDiv2.className = "TN UKr6le";

        // Create the third inner div with class "qj"
        var innerDiv3 = document.createElement("div");
        innerDiv3.className = "qj";

        // Create the fourth inner div with class "aio"
        var innerDiv4 = document.createElement("div");
        innerDiv4.className = "aio UKr6le";

        // Create the span element with class "nU"
        var spanElement = document.createElement("span");
        spanElement.className = "nU";

        // Create the anchor element with classes "J-Ke", "n0", and other attributes
        var anchorElement = document.createElement("a");
        anchorElement.className = "J-Ke n0";
        anchorElement.href = newUrl
        anchorElement.target = "_top";
        anchorElement.setAttribute("aria-label", "Sent");
        anchorElement.setAttribute("tabindex", "-1");
        anchorElement.setAttribute("draggable", "false");
        anchorElement.textContent = unread_string;

        // Add click event listener to anchor element
        mainDiv.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = anchorElement.href; // Navigate to the specified URL
        });

        // Append the anchor element to the span element
        spanElement.appendChild(anchorElement);

        // Create the fifth inner div with class "nL aif"
        var fifthInnerDiv = document.createElement("div");
        fifthInnerDiv.className = "nL aif";

        // Append the inner divs to form the structure
        innerDiv4.appendChild(innerDiv3);
        
        innerDiv4.appendChild(spanElement);
        innerDiv2.appendChild(innerDiv3);
        innerDiv2.appendChild(innerDiv4);
        innerDiv2.appendChild(fifthInnerDiv);

        innerDiv1.appendChild(innerDiv2);
        mainDiv.appendChild(innerDiv1);

        // Append the main div to yourDIV
        yourDIV.insertBefore(mainDiv, yourDIV.firstChild.nextSibling);
        
    } else {
      // Element not found, wait and check again
      console.log("Element not found. Waiting...");
      setTimeout(waitForElement, 1000); // Adjust the delay time (in milliseconds) as needed
    }
  }

window.onload = function() {
        waitForElement();  
};
function handleHashChange() {
    var element1 = document.getElementById("BVid2");
    var element2 = document.getElementById("BVid1");
    if (window.location.hash=="#search/is%3Aunread"){
        var mainDivClassName = "aim ain";
        var innerDiv1ClassName = "TO aS3 nZ aiq"
        
    }
    else{
        var mainDivClassName = "aim";
        var innerDiv1ClassName = "TO aS3"
    }
    element2.className = mainDivClassName;
    element1.className = innerDiv1ClassName;
  }
window.addEventListener("hashchange", handleHashChange);
