const button = document.querySelector(".pushable");
const mobileButton = document.querySelector(".formobile");
let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

let isAnimating = false;
document.addEventListener("mousemove", (event) => {
  if (!isAnimating) {
    isAnimating = true;
    requestAnimationFrame(() => {
      mouse_position(event);
      isAnimating = false;
    });
  }
});

function mouse_position(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const buttonOffset = getOffset(button);
  const buttonX = buttonOffset.left + button.offsetWidth / 2;
  const buttonY = buttonOffset.top;

  const distance = calculateDistance(mouseX, mouseY, buttonX, buttonY);

  const email = document.getElementById("login-email");
  const password = document.getElementById("login-password");

  if (email.value !== "immember" || password.value !== "confirm ho") {
    if (distance < 100) {
      const displacementFactor = (100 - distance) * 0.15;
      const perspectiveFactor = calculatePerspectiveFactor(buttonX, buttonY);

      targetX = -(mouseX - buttonX) * displacementFactor * perspectiveFactor;
      targetY = -(mouseY - buttonY) * displacementFactor * perspectiveFactor;
    } else {
      targetX = 0;
      targetY = 0;
    }
  } else {
    targetX = 0;
    targetY = 0;
    button.textContent = "ab thek";
    email.style.outline = "";
    password.style.outline = "";
  }
}

function smoothDisplacement() {
  currentX += (targetX - currentX) * 0.04;
  currentY += (targetY - currentY) * 0.04;

  button.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(smoothDisplacement);
}
smoothDisplacement();

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

function calculateDistance(X, Y, x, y) {
  return Math.ceil(Math.sqrt((X - x) ** 2 + (Y - y) ** 2));
}

function calculatePerspectiveFactor(x, y) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const distanceFromCenter = Math.sqrt(
    (x - screenWidth / 2) ** 2 + (y - screenHeight / 2) ** 2
  );
  const perspectiveFactor =
    1 -
    distanceFromCenter / (Math.sqrt(screenWidth ** 2 + screenHeight ** 2) / 2);

  return perspectiveFactor;
}

function verifyLogin() {
  const email = document.getElementById("login-email");
  const password = document.getElementById("login-password");

  if (email.value === "immember" && password.value === "confirm ho") {
    window.location.href = "aura.html";
    return true;
  } else {
    return false;
  }
}

// Event listeners for both buttons
button.addEventListener("click", function () {
  verifyLogin();
});

mobileButton.addEventListener("click", function () {
  verifyLogin();
});

// Also allow form submission on Enter key
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    verifyLogin();
  }
});
