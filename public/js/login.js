const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-input-login');
  const password = document.querySelector('#password-input-login');

  if (!username.value) {
    alert('Please Enter Your Username.');
  }

  if (!password.value) {
    alert('Please enter your password.');
  }

  if (username && password) {
    const response = await fetch('/api/userroutes', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('login successful');
      document.location.replace('/dashboard');
    } else {
      alert("Login Failed -__-''");
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);