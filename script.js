/* =========================================================
   12 VILOYAT — TRAVEL COMMUNITY
   MAIN JAVASCRIPT
========================================================= */

const PRICE = 8900000;

let people = 1;
let remainingSeats = 17;

/* =========================================================
   PROVINCES
========================================================= */

const provinces = [
  {
    name: "Toshkent",
    short: "Zamonaviy megapolis",
    days: "2 kun",
    image: "toshkent.jpg",
    places: ["Toshkent shahri", "Chorvoq", "Ugam–Chotqol hududlari"],
    program:
      "Shahar sayri, tarixiy joylar, tanishuv kechasi va tog‘ oldi sayohati.",
    time: "09:00–20:00",
  },

  {
    name: "Sirdaryo",
    short: "Agroturizm o‘lkasi",
    days: "1 kun",
    image: "sirdaryo.jpg",
    places: ["Guliston", "Mahalliy hududlar", "Tabiat maskanlari"],
    program: "Hudud bilan tanishuv, mahalliy hayot va guruh sayri.",
    time: "09:00–19:00",
  },

  {
    name: "Jizzax",
    short: "Shifobaxsh tabiat",
    days: "1 kun",
    image: "jizzax.jpg",
    places: ["Zomin", "Zomin milliy bog‘i", "Tabiat maskanlari"],
    program: "Tog‘ oldi tabiati, sayr va mahalliy gastronomiya.",
    time: "08:30–20:00",
  },

  {
    name: "Samarqand",
    short: "Ipak yo‘lining yuragi",
    days: "3 kun",
    image: "samarqand.jpg",
    places: [
      "Registon",
      "Shohi Zinda",
      "Guri Amir",
      "Bibi Xonim",
      "Afrosiyob",
    ],
    program:
      "Tarixiy markaz, me’moriy obidalar, muzeylar va kechki shahar sayri.",
    time: "08:00–21:00",
  },

  {
    name: "Qashqadaryo",
    short: "Amir Temur vatani",
    days: "2 kun",
    image: "qashqadaryo.jpg",
    places: ["Shahrisabz", "Oqsaroy", "Tarixiy markaz"],
    program: "Shahrisabz tarixiy obidalari va mahalliy madaniyat.",
    time: "08:00–20:00",
  },

  {
    name: "Surxondaryo",
    short: "Qadimgi sivilizatsiyalar beshigi",
    days: "2 kun",
    image: "surxondaryo.jpg",
    places: ["Termiz", "Qadimiy yodgorliklar", "Tabiat maskanlari"],
    program:
      "Qadimiy Termiz, tarixiy meros va janubiy O‘zbekiston atmosferasi.",
    time: "08:00–20:00",
  },

  {
    name: "Farg‘ona",
    short: "O‘zbekiston marvaridi",
    days: "1 kun",
    image: "fargona.jpg",
    places: ["Farg‘ona shahri", "Marg‘ilon", "Rishton"],
    program: "Hunarmandchilik, kulolchilik va Farg‘ona vodiysi bo‘ylab sayr.",
    time: "09:00–20:00",
  },

  {
    name: "Andijon",
    short: "Bobur vatani",
    days: "1 kun",
    image: "andijon.jpg",
    places: ["Andijon", "Bobur merosi", "Mahalliy bozorlar"],
    program: "Tarix, mahalliy madaniyat va gastronomik sayr.",
    time: "09:00–19:00",
  },

  {
    name: "Namangan",
    short: "Hunarmandchilik markazi",
    days: "1 kun",
    image: "namangan.jpg",
    places: ["Namangan", "Mahalliy bog‘lar", "Hunarmandchilik"],
    program: "Shahar sayri, hunarmandchilik va mahalliy madaniyat.",
    time: "09:00–19:00",
  },

  {
    name: "Navoiy",
    short: "Sahro o‘rtasidagi sarob",
    days: "3 kun",
    image: "navoiy.jpg",
    places: ["Sarmishsoy", "Navoiy shahri", "Cho‘l manzaralari"],
    program: "Tabiat, tarixiy joylar va sahro manzaralari.",
    time: "08:00–20:00",
  },

  {
    name: "Xorazm",
    short: "Ming qal’a o‘lkasi",
    days: "3 kun",
    image: "xorazm.webp",
    places: ["Xiva", "Ichan-Qal’a", "Kunya-Ark", "Qadimiy minoralar"],
    program: "Ichan-Qal’a, qadimiy madrasalar, minoralar va kechki Xiva.",
    time: "08:00–21:00",
  },

  {
    name: "Buxoro",
    short: "Safarning katta finali",
    days: "5 kun",
    image: "buxoro.jpg",
    places: [
      "Poi-Kalon",
      "Ark qal’asi",
      "Labi Hovuz",
      "Sitorai Mohi Xosa",
      "Eski shahar",
    ],
    program:
      "25 kunlik safarning finali. Tarixiy markaz, hunarmandchilik, gastronomiya va xayrlashuv kechasi.",
    time: "08:00–22:00",
  },
];

/* =========================================================
   DOM
========================================================= */

const provinceGrid = document.getElementById("provinceGrid");
const routeList = document.getElementById("routeList");
const navbar = document.getElementById("navbar");

/* =========================================================
   RENDER PROVINCES
========================================================= */

function renderProvinces() {
  if (!provinceGrid) return;

  provinceGrid.innerHTML = "";

  provinces.forEach((province, index) => {
    const card = document.createElement("div");

    card.className = "province-card";

    card.style.backgroundImage = `
      linear-gradient(
        180deg,
        rgba(0,0,0,.05),
        rgba(0,0,0,.35)
      ),
      url("${province.image}")
    `;

    card.innerHTML = `
      <div class="province-content">

        <div class="province-number">
          ${String(index + 1).padStart(2, "0")} / 12
        </div>

        <h3>
          ${province.name}
        </h3>

        <p>
          ${province.short}
        </p>

        <div class="explore">
          BATAFSIL KO‘RISH →
        </div>

      </div>
    `;

    card.addEventListener("click", () => openDetail(index));

    provinceGrid.appendChild(card);
  });
}

/* =========================================================
   RENDER ROUTE
========================================================= */

function renderRoute() {
  if (!routeList) return;

  routeList.innerHTML = "";

  provinces.forEach((province, index) => {
    const item = document.createElement("div");

    item.className = "route-item";

    item.innerHTML = `
      <div class="route-dot">
        ${String(index + 1).padStart(2, "0")}
      </div>

      <div>
        <h3>${province.name}</h3>
        <p>${province.short}</p>
      </div>

      <div class="route-days">
        ${province.days}
      </div>
    `;

    routeList.appendChild(item);
  });
}

/* =========================================================
   NAVBAR
========================================================= */

window.addEventListener("scroll", () => {
  if (!navbar) return;

  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {
  const nav = document.querySelector(".nav-links");

  if (!nav) return;

  if (nav.style.display === "flex") {
    nav.style.display = "";
    nav.style.position = "";
    nav.style.top = "";
    nav.style.left = "";
    nav.style.right = "";
    nav.style.padding = "";
    nav.style.background = "";
    nav.style.border = "";
    nav.style.borderRadius = "";
    nav.style.flexDirection = "";

    return;
  }

  nav.style.display = "flex";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.left = "4%";
  nav.style.right = "4%";
  nav.style.padding = "20px";
  nav.style.background = "#0d131c";
  nav.style.border = "1px solid rgba(255,255,255,.09)";
  nav.style.borderRadius = "18px";
  nav.style.flexDirection = "column";
}

/* =========================================================
   BOOKING MODAL
========================================================= */

function openBooking() {
  const modal = document.getElementById("bookingModal");

  if (!modal) return;

  modal.classList.add("active");
  document.body.classList.add("modal-open");

  updateTotal();
}

function closeBooking() {
  const modal = document.getElementById("bookingModal");

  if (!modal) return;

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

/* =========================================================
   PEOPLE COUNTER
========================================================= */

function changePeople(value) {
  people += value;

  if (people < 1) {
    people = 1;
  }

  if (people > remainingSeats) {
    people = remainingSeats;

    alert(`Hozircha faqat ${remainingSeats} ta joy mavjud.`);
  }

  const counter = document.getElementById("peopleCount");

  if (counter) {
    counter.textContent = people;
  }

  updateTotal();
}

/* =========================================================
   TOTAL PRICE
========================================================= */

function updateTotal() {
  const total = document.getElementById("totalPrice");

  if (!total) return;

  total.textContent =
    new Intl.NumberFormat("uz-UZ").format(PRICE * people) + " so‘m";
}

/* =========================================================
   BOOKING FORM
========================================================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const gender = document.getElementById("gender").value;
    const note = document.getElementById("note").value.trim();

    if (!name || !phone || !date || !gender) {
      alert("Iltimos, barcha majburiy maydonlarni to‘ldiring.");
      return;
    }

    const bookedPeople = people;

    remainingSeats -= bookedPeople;

    if (remainingSeats < 0) {
      remainingSeats = 0;
    }

    const seats = document.getElementById("remainingSeats");

    if (seats) {
      seats.textContent = remainingSeats + " ta";
    }

    const bookingContent = document.getElementById("bookingContent");

    if (bookingContent) {
      bookingContent.innerHTML = `
        <div class="success">

          <div class="success-icon">
            ✓
          </div>

          <h3>
            Arizangiz qabul qilindi!
          </h3>

          <p>
            ${name}, sizning dastlabki
            ro‘yxatdan o‘tish arizangiz saqlandi.
          </p>

          <p>
            Ishtirokchilar:
            <b>${bookedPeople} kishi</b>

            <br>

            Jins:
            <b>${gender}</b>

            <br>

            Safar sanasi:
            <b>${date}</b>

            <br>

            Telefon:
            <b>${phone}</b>

            ${note ? `<br>Izoh: <b>${note}</b>` : ""}
          </p>

          <button
            class="primary-btn"
            style="margin-top:22px"
            onclick="closeBooking()"
          >
            Yopish
          </button>

        </div>
      `;
    }

    people = 1;

    const counter = document.getElementById("peopleCount");

    if (counter) {
      counter.textContent = "1";
    }
  });
}

/* =========================================================
   TELEGRAM
========================================================= */

function openTelegram() {
  window.open("https://t.me/", "_blank");
}

/* =========================================================
   DETAIL MODAL
========================================================= */

function openDetail(index) {
  const province = provinces[index];

  if (!province) return;

  const modal = document.getElementById("detailModal");
  const content = document.getElementById("detailContent");

  if (!modal || !content) return;

  content.innerHTML = `
    <div
      class="detail-hero"
      style="
        background-image:
        linear-gradient(
          180deg,
          transparent,
          rgba(0,0,0,.85)
        ),
        url('${province.image}');
      "
    >

      <div class="detail-hero-content">

        <small>
          ${String(index + 1).padStart(2, "0")} / 12
        </small>

        <h2>
          ${province.name}
        </h2>

      </div>

    </div>

    <div style="margin-top:18px">

      <div class="eyebrow">
        ${province.short}
      </div>

    </div>

    <div class="detail-grid">

      <div class="detail-card">

        <h4>
          📍 KO‘RILADIGAN JOYLAR
        </h4>

        <ul>
          ${province.places
            .map((place) => `<li>${place}</li>`)
            .join("")}
        </ul>

      </div>

      <div class="detail-card">

        <h4>
          ⏱ KUNLIK VAQT
        </h4>

        <p>
          ${province.time}
        </p>

        <p style="margin-top:8px">
          Safar davomiyligi:
          <b>${province.days}</b>
        </p>

      </div>

      <div
        class="detail-card"
        style="grid-column:1/-1"
      >

        <h4>
          🗺 DASTUR
        </h4>

        <p>
          ${province.program}
        </p>

      </div>

    </div>

    <div style="margin-top:20px">

      <button
        class="primary-btn"
        onclick="
          closeDetail();
          openBooking();
        "
      >
        Shu safarga yozilish →
      </button>

    </div>
  `;

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

/* =========================================================
   CLOSE DETAIL
========================================================= */

function closeDetail() {
  const modal = document.getElementById("detailModal");

  if (!modal) return;

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

/* =========================================================
   MODAL BACKDROP
========================================================= */

const bookingModal = document.getElementById("bookingModal");

if (bookingModal) {
  bookingModal.addEventListener("click", function (event) {
    if (event.target === bookingModal) {
      closeBooking();
    }
  });
}

const detailModal = document.getElementById("detailModal");

if (detailModal) {
  detailModal.addEventListener("click", function (event) {
    if (event.target === detailModal) {
      closeDetail();
    }
  });
}

/* =========================================================
   DATE
========================================================= */

const dateInput = document.getElementById("date");

if (dateInput) {
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");

  dateInput.min = `${year}-${month}-${day}`;
}

/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeBooking();
    closeDetail();
  }
});

/* =========================================================
   START
========================================================= */

renderProvinces();
renderRoute();
updateTotal();
