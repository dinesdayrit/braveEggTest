$(document).ready(function () {
  // Load different sections of the page
  $("#hero-section").load("html/hero.html");
  $("#brands-section").load("html/brands.html", function () {
    // Once the brands section is loaded, initialize the cards
    initializeCards();
  });
  $("#success-stories-section").load("html/successStories.html");
  $("#tech-partners-section").load("html/partners.html");
  $("#email-sms-section").load("html/emailAndSms.html");
  $("#our-process-section").load("html/process.html");
  $("#faq-section").load("html/faq.html");
  $("#footer-section").load("html/footer.html");
  // Function to initialize the card group
  function initializeCards() {
    const cardData = [
      {
        imageSrc: "images/check.png",
        label: "Market & Regulations Compliant",
      },
      {
        imageSrc: "images/atrney.png",
        label: "Attorney Reviewed Content",
      },
      {
        imageSrc: "images/check.png",
        label: "Guaranteed Email Deliverability",
      },
      {
        imageSrc: "images/check.png",
        label: "Increase customers & revenue",
      },
    ];

    const $cardGroup = $("#card-group");

    cardData.forEach((data) => {
      const cardHtml = `
          <div class="card rounded">
            <div class="card-body p-2 d-flex flex-column justify-content-center align-items-center ">
              <img src="${data.imageSrc}" width="40" class="img-fluid" />
              <label class="text-center">${data.label}</label>
            </div>
          </div>
        `;

      $cardGroup.append(cardHtml);
    });
  }
});
