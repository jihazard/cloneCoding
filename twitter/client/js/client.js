const form = document.querySelector('form');
const loading = document.querySelector('.loading');


loading.style.display='none'

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
});
