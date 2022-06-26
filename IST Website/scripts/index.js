let close = 0

function openNav() {

    if (close===1) {
        close = 0
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
    else {
        document.getElementById("mySidebar").style.width = "60px";
        document.getElementById("main").style.marginLeft = "60px";
        close = 1
        console.log(close)
    }
    
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    close = 0
    console.log(close)
  }




