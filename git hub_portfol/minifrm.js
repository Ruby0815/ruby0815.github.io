document.getElementById("contactForm").addEventListener("submit",function(event){event.preventDefault();var name=document.getElementById("name").value;var email=document.getElementById("email").value;var message=document.getElementById("message").value;if(name.trim()===""||email.trim()===""||message.trim()===""){alert("Please fill in all fields.");return;}
alert("Form sent successfully!");document.getElementById("contactForm").reset();});var submitButton=document.querySelector('button[type="submit"]');document.getElementById("contactForm").addEventListener("submit",function(event){submitButton.disabled=true;submitButton.textContent="Received..";});