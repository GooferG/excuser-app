document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  let category = document.querySelector('input').value.toLowerCase();
  fetch(`https://excuser.herokuapp.com/v1/excuse/${category}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      document.getElementById('quote').innerText = data[0].excuse;
    })
    .catch((err) => {
      alert('Incorrect Category');
      console.log(`error ${err}`);
    });
}
