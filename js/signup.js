function togglePasswordVisibility(passwordFieldId, showPasswordBtn) {
    var passwordField = document.getElementById(passwordFieldId);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
    
    // Change the show password button image
    if (passwordField.type === "password") {
      showPasswordBtn.src = "image/hidden.png";
    } else {
      showPasswordBtn.src = "image/view.png";
    }
  }

  const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
  })

  sr.reveal('.main-box img', {delay:200, origin:'top'});
  sr.reveal('.login-content-box', {delay:200, origin:'top'});
  sr.reveal('.login-header', {delay:200, origin:'top'});