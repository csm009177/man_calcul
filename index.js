// header를 가져와서 index.html의 header에 넣어준다.
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// left를 가져와서 index.html의 left에 넣어준다.
fetch('left.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('left').innerHTML = data;
  });

// right를 가져와서 index.html의 right에 넣어준다.
fetch('right.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('right').innerHTML = data;
  });

// main을 가져와서 index.html의 main에 넣어준다.
fetch('main.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('main').innerHTML = data;
  });

// footer를 가져와서 index.html의 footer에 넣어준다.
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });