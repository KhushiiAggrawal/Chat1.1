let title = document.title; 
 let appkey; 
 let itemkey; 
  
   appkey = prompt("        Enter Appkey"); 
    
   if (appkey == null || appkey == "") { 
     alert("Error (Appkey) 🚫"); 
     document.location.reload(); 
   } else { 
     itemkey = prompt("        Enter Your Key"); 
      
     if (itemkey == null || itemkey == "") { 
       alert("Error (Item Key)❌ "); 
       document.location.reload(); 
     } 
   } 
  
 appkey=appkey.trim(); 
  
 itemkey=itemkey.trim(); 
 window.addEventListener("blur", () => { 
   document.title = "See You Again"; 
 }); 
  
 window.addEventListener("focus", () => { 
   document.title = title; 
 }); 
  
 function uptype() { 
   let appkey = "dimip0w6"; 
  
   let itemkey = "down"; 
  
   let type = document.getElementById("input"); 
  
   let itemval; 
  
   if (type.innerHTML) { 
     itemval = 1; 
   } else { 
     itemval = 0; 
   } 
  
   console.log(itemval); 
  
   $.ajax({ 
     type: "POST", 
  
     url: 
       "https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/" + 
       appkey + 
       "/" + 
       itemkey + 
       "/" + 
       itemval, 
  
     contentType: false, 
  
     processData: false, 
   }) 
  
     .done(function (data) {}) 
  
     .fail(function (err) {}); 
 } 
  
 function downtype() { 
   let type = document.getElementsByClassName("bouncing-loader"); 
  
   fetch("https://keyvalue.immanuel.co/api/KeyVal/GetValue/2aiei0jz/up") 
     .then((response) => response.json()) 
  
     .then((data) => { 
       if (data == 1) { 
         type[0].style.visibility = "visible"; 
       } else { 
         type[0].style.visibility = "hidden"; 
       } 
  
       console.log(data); 
     }); 
 } 
  
 function updateScroll() { 
   var element = document.getElementById("msg"); 
  
   element.scrollTop = element.scrollHeight; 
 } 
  
 function updateScrolltop() { 
   var element = document.getElementById("msg"); 
  
   element.scrollTop = 0; 
 } 
  
 function getValue(appkey, itemkey) { 
   $.ajax({ 
     type: "GET", 
  
     url: 
       "https://keyvalue.immanuel.co/api/KeyVal/GetValue/" + 
       appkey + 
       "/" + 
       itemkey, 
  
     contentType: false, 
  
     processData: false, 
   }) 
  
     .done(function (data) { 
       let msg = document.getElementById("msg"); 
  
       const lineBreak = document.createElement("br"); 
  
       msg.append(data); 
  
       msg.appendChild(lineBreak); 
  
       updateScroll(); 
     }) 
  
     .fail(function (err) { 
  
  
  
   }); 
 } 
  
 function updateValue(appkey, itemkey, itemval) { 
   $.ajax({ 
     type: "POST", 
  
     url: 
       "https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/" + 
       appkey + 
       "/" + 
       itemkey + 
       "/" + 
       itemval, 
  
     contentType: false, 
  
     processData: false, 
   }) 
  
     .done(function (data) { 
       getValue(appkey, itemkey); 
     }) 
  
     .fail(function (err) {}); 
 } 
  
 function update() { 
   let inp = document.getElementById("input"); 
  
   itemval = inp.innerText; 
  
   updateValue(appkey, itemkey, itemval.trim()); 
  
   inp.innerHTML = ""; 
 } 
  
 let old; 
  
 setInterval(function () { 
   fetch("https://keyvalue.immanuel.co/api/KeyVal/GetValue/xcd0l4kz/sid") 
     .then((response) => response.json()) 
  
     .then((data) => { 
       console.log(old); 
  
       let msg = document.getElementById("msg"); 
  
       const lineBreak = document.createElement("br"); 
  
       if (old != data && typeof data === "string") { 
         msg.append("["); 
  
         msg.append(data); 
  
         msg.append("]"); 
  
         msg.appendChild(lineBreak); 
  
         updateScroll(); 
       } 
  
       old = data; 
     }); 
  
   downtype(); 
  
   uptype(); 
 }, 1000); 
  
 window.addEventListener("keydown", function (e) { 
   console.log(e.key); 
   if (e.keyCode == 13) { 
     event.preventDefault(); 
     console.log("entered"); 
     update(); 
   } 
 });
