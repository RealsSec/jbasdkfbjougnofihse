function showUL(ulNumber) {
  
  document.getElementById('ul1').style.display = 'none';
  document.getElementById('ul2').style.display = 'none';
  document.getElementById('ul3').style.display = 'none';
  document.getElementById('ul4').style.display = 'none';
  document.getElementById('ul5').style.display = 'none';
  
  
  document.getElementById('ul' + ulNumber).style.display = 'block';
}
