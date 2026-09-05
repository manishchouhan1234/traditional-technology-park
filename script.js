/* =========================================
   TRADITIONAL TECHNOLOGY PARK
   UNIVERSAL OBJECT DATA
========================================= */

const exhibits = {

  rahat: {
    name: "Rahat",
    hindi: "रहट",

    category: "Agriculture & Irrigation",
    categoryHindi: "कृषि एवं सिंचाई",

    image: "../images/Rahat-01.jpg.jpeg",

    short:
      "Traditional equipment used for lifting water for irrigation.",

    shortHindi:
      "सिंचाई के लिए पानी उठाने की पारंपरिक व्यवस्था।",

    introTitle:
      "Traditional water-lifting technology",

    description:
      "Rahat is a traditional irrigation technology associated with lifting water for agricultural use.",

    descriptionHindi:
      "रहट एक पारंपरिक सिंचाई तकनीक है जिसका उपयोग कृषि के लिए पानी उठाने में किया जाता है।",

    region: "Madhya Pradesh",
    regionHindi: "मध्य प्रदेश",

    district: "Bhind",
    districtHindi: "भिंड",

    community: "Traditional community technology",
    communityHindi: "पारंपरिक सामुदायिक तकनीक",

    type: "Irrigation technology",
    typeHindi: "सिंचाई तकनीक",

    howTitle:
      "Lifting water for agriculture",

    how:
      "The Rahat is used to lift water from a lower level so that it can be supplied for agricultural irrigation.",

    howHindi:
      "रहट का उपयोग निचले स्तर से पानी उठाकर कृषि सिंचाई के लिए उपलब्ध कराने में किया जाता है।",

    significanceTitle:
      "Traditional knowledge for water management",

    significance:
      "Rahat represents traditional knowledge developed around the practical need to move water for cultivation.",

    significanceHindi:
      "रहट खेती के लिए पानी पहुँचाने की व्यावहारिक आवश्यकता से विकसित पारंपरिक ज्ञान का प्रतिनिधित्व करता है।",

    source:
      "Traditional Technology Park / IGRMS exhibit documentation."
  }

};


/* =========================================
   READ OBJECT ID FROM URL
========================================= */

const params = new URLSearchParams(window.location.search);

const objectId = params.get("id");


/* =========================================
   LOAD OBJECT
========================================= */

function loadObject() {

  if (!objectId || !exhibits[objectId]) {

    document.title =
      "Object Not Found | Traditional Technology Park";

    const page =
      document.getElementById("object-page");

    if (page) {

      page.innerHTML = `
        <section class="object-introduction">

          <p class="eyebrow">
            ERROR · त्रुटि
          </p>

          <h2>
            Object not found
          </h2>

          <p>
            The requested exhibit could not be found.
          </p>

          <p>
            मांगी गई वस्तु उपलब्ध नहीं है।
          </p>

        </section>
      `;

    }

    return;
  }


  const object = exhibits[objectId];


  /* PAGE TITLE */

  document.title =
    `${object.name} | Traditional Technology Park`;


  /* IMAGE */

  const image =
    document.getElementById("object-image");

  if (image) {

    image.src = object.image;

    image.alt = object.name;

  }


  /* HERO */

  setText(
    "object-category",
    `${object.category} · ${object.categoryHindi}`
  );

  setText(
    "object-name",
    object.name
  );

  setText(
    "object-hindi",
    object.hindi
  );

  setText(
    "object-short",
    object.short
  );

  setText(
    "object-short-hindi",
    object.shortHindi
  );


  /* INTRODUCTION */

  setText(
    "object-intro-title",
    object.introTitle
  );

  setText(
    "object-description",
    object.description
  );

  setText(
    "object-description-hindi",
    object.descriptionHindi
  );


  /* DETAILS */

  setText(
    "object-region",
    object.region
  );

  setText(
    "object-region-hindi",
    object.regionHindi
  );

  setText(
    "object-district",
    object.district
  );

  setText(
    "object-district-hindi",
    object.districtHindi
  );

  setText(
    "object-community",
    object.community
  );

  setText(
    "object-community-hindi",
    object.communityHindi
  );

  setText(
    "object-type",
    object.type
  );

  setText(
    "object-type-hindi",
    object.typeHindi
  );


  /* HOW IT WORKS */

  setText(
    "object-how-title",
    object.howTitle
  );

  setText(
    "object-how",
    object.how
  );

  setText(
    "object-how-hindi",
    object.howHindi
  );


  /* SIGNIFICANCE */

  setText(
    "object-significance-title",
    object.significanceTitle
  );

  setText(
    "object-significance",
    object.significance
  );

  setText(
    "object-significance-hindi",
    object.significanceHindi
  );


  /* SOURCE */

  setText(
    "object-source",
    object.source
  );

}


/* =========================================
   SAFE TEXT FUNCTION
========================================= */

function setText(id, value) {

  const element =
    document.getElementById(id);

  if (element) {

    element.textContent =
      value || "";

  }

}


/* =========================================
   START
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  loadObject
);
