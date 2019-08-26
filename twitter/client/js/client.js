const form = document.querySelector('form');
const loading = document.querySelector('.loading');
const API_URL = "/mews"
const mewsx = document.querySelector('.mews2')

loading.style.display='none'

listAllMews();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  console.log(`form was submit${event}`);

  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');

  const mew = {
    name,
    content
  };

  console.log(mew);
  form.style.display='none' 
  loading.style.display=''

  fetch("http://localhost:500/mews", {
    method:'POST',
    body: JSON.stringify(mew),
    headers: {
      'content-type':'application/json'
    }
  
  }).then(response => response.json())
  .then(createdmew => {
    console.log(createdmew)
    form.reset()
    loading.style.display='none';
    form.style.display='' 
    listAllMews() 
  })

});


function listAllMews() {
  fetch("//localhost:500/mews",{
    method:'GET'

  }).then(response => response.json())
  .then(mews=>{
    console.log(mews)
    mews.forEach(mew => {
     const div = document.createElement('div')
     const header = document.createElement('h3')
     header.textContent=mew.name;
     const content = document.createElement('p')
     content.textContent= mew.content;

      const date = document.createElement('p')
      date.textContent= mew.created;
     
     div.appendChild(header)
     div.appendChild(content)
     div.appendChild(date)
     mewsx.appendChild(div)
     
      
    })
  })
}