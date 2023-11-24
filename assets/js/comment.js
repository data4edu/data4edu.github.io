function addComment() {
  if (document.getElementById("comment").value == '') {
    return;
  }
  
  var payload = {
      "email": document.getElementById("user_email").value,
      "url": window.location.href,
      "comment": document.getElementById("comment").value
  };

  var api_link = "https://api.chachi.app/d4es/stitch/new_comment/";
  document.getElementById('share-button').classList.add('d-none');
  document.getElementById('heart-button').classList.remove('d-none');

  axios.post(api_link, payload)
    .then( response => {
        if (response.data) {
            setTimeout(function(){
                heartLoader()
            }, 1000)
        }
    })
    .catch( err => {
        document.getElementById('submission-text').innerText = ":( That didn't work. Refresh the page and try again?"
        document.getElementById('submission-text').classList.remove('d-none')
        console.log(err)
    })
}

function heartLoader() {
  document.getElementById("user_email").value = '';
  document.getElementById("comment").value = '';
  document.getElementById('submission-text').classList.remove('d-none');
  document.getElementById('heartbeat').classList.remove('lds-heart');
  document.getElementById('heartbeat').textContent = '♥';
  document.getElementById('heartbeat').style.color = '#b20101';
}