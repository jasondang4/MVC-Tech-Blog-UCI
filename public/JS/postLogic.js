async function newFormHandler(event) {
    event.preventDefault();
    const post_title = document.querySelector('#blogtitle').value;
    const post_content = document.querySelector('#blogcontent').value;
  
    // Send fetch request to add a new dish
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        post_title,
        post_content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
        document.location.replace('/post');
      } else {
        alert('Failed');
      }
  }
  
  document
    .querySelector('.postform')
    .addEventListener('submit', newFormHandler);
  