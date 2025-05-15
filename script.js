 // Text change on click
    function changeText() {
      document.getElementById("text-change").textContent =
        "100% natural wool – ultra soft and sustainable!";
    }

    // Toggle background color
    function toggleBackground() {
      const card = document.getElementById("color-card");
      card.style.backgroundColor =
        card.style.backgroundColor === "lightyellow" ? "#fff5f0" : "lightyellow";
    }

    // Toggle offer element
    let offerVisible = false;
    function toggleOffer() {
      const offerBox = document.getElementById("offer-box");
      if (!offerVisible) {
        const offerText = document.createElement("p");
        offerText.id = "limitedOffer";
        offerText.textContent = "🔥 Limited time offer: Buy 2 get 1 FREE!";
        offerText.style.color = "red";
        offerBox.appendChild(offerText);
      } else {
        const existing = document.getElementById("limitedOffer");
        if (existing) offerBox.removeChild(existing);
      }
      offerVisible = !offerVisible;
    }

    // Slideshow

    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    function showSlidesAuto() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) slideIndex = 1;
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
      setTimeout(showSlidesAuto, 3000); // Change image every 3 seconds
    }

    function showSlide(n) {
      slideIndex = n;
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
      }
      slides[n].style.display = "block";
      dots[n].classList.add("active");
    }

    showSlidesAuto(); // Start auto slideshow

    // Form validation
    document.getElementById("subscribeForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("errorMsg");
      const feedback = document.getElementById("feedback");

      errorMsg.textContent = "";
      feedback.textContent = "";

      if (!name || !email || !password) {
        errorMsg.textContent = "All fields are required.";
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
      }

      if (password.length < 8) {
        errorMsg.textContent = "Password must be at least 8 characters long.";
        return;
      }

      feedback.textContent = "Thank you for subscribing!";
      feedback.className = "success";
      document.getElementById("subscribeForm").reset();
    });

    // Keypress detection (for fun Easter egg)
    document.addEventListener("keydown", function(e) {
      if (e.key === "s") {
        alert("🎉 You pressed 'S' for Socks!");
      }
    });

    // Secret double-click
    document.getElementById("main-heading").addEventListener("dblclick", () => {
      alert("🧦 You've discovered the secret Sock Mode!");
    });