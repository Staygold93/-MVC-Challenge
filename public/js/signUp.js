const signupFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector("#username-input-signup");
  const password = document.querySelector("#password-input-signup");

  if (!username.value) {
      alert("Please provide a valid username.")
  }

  if(!password.value) {
      alert("Please provide a valid password.")
  }
  
  
  if (username && password) {
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to sign up -__-");
  }
};
};

document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);