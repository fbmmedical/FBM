function main() {
  let showdata = [
    {
      id: 1,
      title: "Dr.pen A6",
      dec: `It helps in introducing materials under the skin.
   Almost all skin types can be treated
   Treats acne scars
   Treats surgical scars and stretch marks
   Treats pigmentation and large pores.
   Features intelligent speed adjustment (5 speeds)
   2 x rechargeable battery
   Needle adjustment range from 0mm to 2.5mm`,
      price: 20,
      catg: "DERMAQUAL",
      img: "./images/card-1.jpeg",
    },
    {
      id: 2,
      title: "Dr.pen A1",
      dec: `It helps in introducing materials under the skin.
  
   Almost all skin types can be treated
   Treats acne scars
   Treats surgical scars and stretch marks
   Treats pigmentation and large pores.
   Features intelligent speed adjustment (5 speeds)`,
      price: 20,
      catg: "DERMAQUAL",
      img: "./images/card-2.jpeg",
    },
    {
      id: 3,
      title: "HYDRAFACIL 7in1",
      dec: `Hydrofacial device - acid peeling device, 7-in-1 multi-functional skin care machine. 
    It improves blood circulation, promotes collagen production, and removes dead skin, blackheads and wrinkles.   It shrinks pores,
     removes dark circles around the eyes, and eliminates redness and eye bags.   Whitening, tightening, lifting and tightening the skin`,
      price: 20,
      catg: "",
      img: "./images/card-3.jpeg",
    },
    {
      id: 4,
      title: "CRYOLIPOL YSIS SLIMMING MACHINE",
      dec: `CRYO+LIPO LEASR+40K 
  Cavitation+Body RF+Face RF
  -The four-hand  "Cryolipolysis" slimming device is characterized by its effectiveness and safety. 
  It prevents causing burns due to the presence of temperature sensors located inside and around the treatment handpiece.
  It features a special grip cover to prevent gel from entering and extend the life of the grip.`,
      price: 20,
      catg: "",
      img: "./images/card-4.jpeg",
    },
    {
      id: 5,
      title: "Co2 Fractional",
      dec: `Fractional laser to remove wrinkles, scars and gynecological treatments.        
       It determines the parameters required for treatment and is equipped with a laser tube`,
      price: 20,
      catg: "",
      img: "./images/card-5.jpeg",
    },
    {
      id: 6,
      title: "Advanced Diode Laser Machine",
      dec: `his machine is a 3-wavelength machine (755nm, 808nm, 1064)
  
   The special feature of this machine is that we added a 520nm green light strip on the handle, which can remove red blood streaks, lighten spots and rejuvenate the skin at the same time as hair removal.
   Hair removal and skin rejuvenation treatments for all skin types and hair colors`,
      price: 20,
      catg: "",
      img: "./images/card-6.jpeg",
    },
  ];
  const temCard = (img, title, dec, id) => {
    return `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card card-Product">
                <img class="card-img-top" src="${img}" alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">${title}</h4>
                  <p class="card-text">
                    ${dec}
                  </p>
                  <a name="" id="${id}" class="btn btn-primary buy-now"  role="button"
                    >More </a
                  >
                </div>
              </div>
              </div>
  `;
  };

  // .............................................................................................
  let text = `
       We are dedicated to achieving stunning results that enhance our clients' confidence.
  `;
  let itemText = document.getElementById("title-text");
  let renderText = () => {
    let index = 0;
    itemText.innerHTML = "";
    let a = setInterval(() => {
      itemText.innerHTML += text[index];
      index++;
      if (index === text.length) {
        itemText.classList.remove("text");
        clearInterval(a);
      }
    }, 100);
  };
  // .............................................................
  let renderdata = () => {
    let mainproduct = document.getElementById("product");
    showdata.forEach((ele) => {
      mainproduct.innerHTML += temCard(ele.img, ele.title, ele.dec, ele.id);
    });
  };
  // ....................................................................
  renderdata();
  renderText();
}
window.onload = () => {
  document.querySelector(".loader").style.display = "none"; // إخفاء دائرة التحميل
  document.querySelector(".app").style.display = "block";
  main();
};
