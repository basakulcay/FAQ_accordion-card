function first() {
    var x = document.getElementById("first");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('f').style.color='black';
      document.getElementById('f').style.fontWeight='700';
      document.getElementById('1').style.display='none';
      document.getElementById('2').style.display='block';
      document.getElementById('second').style.display='none';
      document.getElementById('third').style.display='none';
      document.getElementById('fourth').style.display='none';
      document.getElementById('fifth').style.display='none';
    } else {
      x.style.display = "none";
      document.getElementById('1').style.display='block';
      document.getElementById('2').style.display='none';
    }
  }

  function second() {
    var x = document.getElementById("second");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('s').style.color='black';
      document.getElementById('s').style.fontWeight='700';
      document.getElementById('3').style.display='none';
      document.getElementById('4').style.display='block';
      document.getElementById('first').style.display='none';
      document.getElementById('third').style.display='none';
      document.getElementById('fourth').style.display='none';
      document.getElementById('fifth').style.display='none';
    } else {
      x.style.display = "none";
      document.getElementById('3').style.display='block';
      document.getElementById('4').style.display='none';
    }
  }

  function third() {
    var x = document.getElementById("third");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('t').style.color='black';
      document.getElementById('t').style.fontWeight='700';
      document.getElementById('5').style.display='none';
      document.getElementById('6').style.display='block';
      document.getElementById('first').style.display='none';
      document.getElementById('second').style.display='none';
      document.getElementById('fourth').style.display='none';
      document.getElementById('fifth').style.display='none';
    } else {
      x.style.display = "none";
      document.getElementById('5').style.display='block';
      document.getElementById('6').style.display='none';
    }
  }

  function fourth() {
    var x = document.getElementById("fourth");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('fo').style.color='black';
      document.getElementById('fo').style.fontWeight='700';
      document.getElementById('7').style.display='none';
      document.getElementById('8').style.display='block';
      document.getElementById('second').style.display='none';
      document.getElementById('third').style.display='none';
      document.getElementById('first').style.display='none';
      document.getElementById('fifth').style.display='none';
    } else {
      x.style.display = "none";
      document.getElementById('7').style.display='block';
      document.getElementById('8').style.display='none';
    }
  }

  function fifth() {
    var x = document.getElementById("fifth");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('ff').style.color='black';
      document.getElementById('ff').style.fontWeight='700';
      document.getElementById('9').style.display='none';
      document.getElementById('10').style.display='block';
      document.getElementById('second').style.display='none';
      document.getElementById('third').style.display='none';
      document.getElementById('fourth').style.display='none';
      document.getElementById('first').style.display='none';
    } else {
      x.style.display = "none";
      document.getElementById('9').style.display='block';
      document.getElementById('10').style.display='none';
    }
  }