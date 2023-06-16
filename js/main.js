document.querySelector('button').addEventListener('click', getFetch)

const url = `https://api.nasa.gov/planetary/apod?api_key=04UeUb6kPFVEjJ9kPfYltWWpgJ71q5R6lb7f8rSl`
  //04UeUb6kPFVEjJ9kPfYltWWpgJ71q5R6lb7f8rSl
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('h1').innerText = data.title
        if(data.media_type === "video"){
          document.querySelector('.img__media').style.display = 'none'
          document.querySelector('iframe').src = data.url
        } else if(data.media_type === "image"){
          document.querySelector('iframe').style.display = 'none'
          document.querySelector('.img__media').src = data.hdurl
      }
      document.querySelector('h3').innerText = data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=74DgdLe8L48VWF8MyJlvovJfPnrEdp60WfMUF7c8&date=${choice}`
  //04UeUb6kPFVEjJ9kPfYltWWpgJ71q5R6lb7f8rSl
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('h1').innerText = data.title
        if(data.media_type === "video"){
          document.querySelector('.img__media').style.display = 'none'
          document.querySelector('iframe').src = data.url
        } else if(data.media_type === "image"){
          document.querySelector('iframe').style.display = 'none'
          document.querySelector('.img__media').src = data.hdurl
      }
      document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

