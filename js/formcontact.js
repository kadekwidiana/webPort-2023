const scriptURL = 'https://script.google.com/macros/s/AKfycbwzStVoMN7Ys1bhQfjaml_XIt8-maIINQ-CsKYCy7mZtkqasXa53JkWCbLqQc5TLfDjgQ/exec'
  const form = document.forms['form-portofolio']

  const btnSend = document.querySelector('.btn-send');
  const btnLoading = document.querySelector('.btn-loading');
  const myAlert = document.querySelector('.my-alert');

  form.addEventListener('submit', e => {
    e.preventDefault()
    // if button submit onclik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnSend.classList.toggle('d-none');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
        //tampilkan tombol kirim hilangkan loading
        btnLoading.classList.toggle('d-none');
        btnSend.classList.toggle('d-none');
        // tampilkan alert
        myAlert.classList.toggle('d-none');
        // reset form nya
        form.reset();
        console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message))
  })
