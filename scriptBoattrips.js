window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const get = id => document.getElementById(id);




window.addEventListener("load", function() {


    const photos1 = document.querySelectorAll('.photo1');
    for (let i = 0, j = 0; i < photos1.length; i++, j -= 100) {
        photos1[i].style.left = `${j}%`;
    }
    let currentPhoto1 = 0;
    photos1[currentPhoto1].classList.add('active1'); 
    setInterval(showNextPhoto1, 4000); 
    function showNextPhoto1() {
        photos1[currentPhoto1].classList.remove('active1'); 
        currentPhoto1 = (currentPhoto1 + 1) % photos1.length;
        photos1[currentPhoto1].classList.add('active1'); 
      }

    // const photos2 = document.querySelectorAll('.photo2');
    // for (let i = 0, j = 0; i < photos2.length; i++, j -= 100) {
    //     photos2[i].style.left = `${j}%`;
    // }
    // let currentPhoto2 = 0;
    // photos2[currentPhoto2].classList.add('active2'); 
    // setInterval(showNextPhoto2, 4000); 
    // function showNextPhoto2() {
    //     photos2[currentPhoto2].classList.remove('active2'); 
    //     currentPhoto2 = (currentPhoto2 + 2) % photos2.length;
    //     photos2[currentPhoto2].classList.add('active2'); 
    //   }


      const navIcon = get("navIconDiv");
      const darkContainer = get("darkContainer");
      let menuState = "closed";
      navIcon.addEventListener("touchstart", function(event) {
          if (event.changedTouches[0]) {
              if (menuState === "closed") {
                  get('menuDiv').classList.remove("closeMenu");
                  get('menuDiv').classList.add("openMenu");
                  menuState = "open";
                  darkContainer.style.visibility = "visible";
                  darkContainer.style.opacity = "0.9";
              }
              else if (menuState === "open") {
                  get('menuDiv').classList.remove("openMenu");
                  get('menuDiv').classList.add("closeMenu");
                  menuState = "closed";
                  darkContainer.style.opacity = "0";
                  setTimeout(hideDarkContainer, 600);
                  function hideDarkContainer() {
                    darkContainer.style.visibility = "hidden";
                  }
              }
          }
      }, false);


    //   const trips = document.getElementsByClassName("tripType");  
    //   [...trips].forEach((el, n) => {
    //       el.addEventListener("touchstart", function(event) {
    //           if (event.changedTouches[0]) {
    //               get(`tripDetails${n}`).classList.add('tripDetailsVisible');
    //           }
    //       }, false);
    //   });



    // get('trip1').addEventListener("touchstart", function(event) {
    //     if (event.changedTouches[0]) {
    //         console.log("Hello");
    //         // get('tripDetails1').classList.remove('tripDetailsInvisible');
    //         // get('tripDetails1').classList.add('tripDetailsVisible');
    //     }
    // }, false);



    const tripButtons = document.getElementsByClassName("tripTypeButton");  
    [...tripButtons].forEach((el, n) => {
        el.addEventListener("touchstart", function(event) {
            if (event.changedTouches[0]) {
                get(`tripDetails${n+1}`).classList.remove('tripDetailsInvisible');
                get(`tripDetails${n+1}`).classList.add('tripDetailsVisible');
            }
        }, false);
    });




    window.addEventListener("scroll", function() {
        const targetElement = get("trip6");
        const targetPosition = targetElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const buttonsCollection = document.getElementsByClassName('tripTypeButton');
        if (targetPosition < windowHeight) {
            for (let i = 0, j = 0; i < buttonsCollection.length; i++, j+=150) {
                setTimeout(lightUp, j);
                function lightUp() {
                    buttonsCollection[i].style.opacity = "1";
                }  
            }
        }
      });













});


