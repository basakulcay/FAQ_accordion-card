function first() {
    var x = document.getElementById("first");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('second').style.display='none';
      document.getElementById('third').style.display='none';
      document.getElementById('fourth').style.display='none';
      document.getElementById('fifth').style.display='none';
    } else {
      x.style.display = "none";
    }
  }

  function second() {
    var x = document.getElementById("second");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('first').style.display='none';
      document.getElementById('third').style.display='none';
      document.getElementById('fourth').style.display='none';
      document.getElementById('fifth').style.display='none';
    } else {
      x.style.display = "none";
    }
  }

  function third() {
    var x = document.getElementById("third");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('first').style.display='none';
      document.getElementById('second').style.display='none';
      document.getElementById('fourth').style.display='none';
      document.getElementById('fifth').style.display='none';
    } else {
      x.style.display = "none";
    }
  }

  function fourth() {
    var x = document.getElementById("fourth");
    if (x.style.display === "none") {
      x.style.display = "block";
      
      document.getElementById('second').style.display='none';
      document.getElementById('third').style.display='none';
      document.getElementById('first').style.display='none';
      document.getElementById('fifth').style.display='none';
    } else {
      x.style.display = "none";
    }
  }

  function fifth() {
    var x = document.getElementById("fifth");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('second').style.display='none';
      document.getElementById('third').style.display='none';
      document.getElementById('fourth').style.display='none';
      document.getElementById('first').style.display='none';
    } else {
      x.style.display = "none";
    }
  }