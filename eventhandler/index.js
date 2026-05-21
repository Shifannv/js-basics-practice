  const grandparent = document.querySelector(".grandparent");
      const parent = document.querySelector(".parent");
      const child = document.querySelector(".child");

    //   grandparent.addEventListener("click", (e) => {
    //     console.log("Grandparent capture");
    //   },{ capture : true});

       grandparent.addEventListener("click", (e) => {
        console.log("Grandparent bubble");
      });

    //    parent.addEventListener("click", (e) => {
    //     console.log("parent capture");
    //   },{ capture : true});

       parent.addEventListener("click", printHi );
       
         setTimeout(()=>{
            parent.removeEventListener("click",printHi)
        },2000)

    //    child.addEventListener("click", (e) => {
    //     console.log("child capture");
    //   },{ capture : true});

       child.addEventListener("click", (e) => {
        console.log("child bubble");
        // e.stopPropagation() // stop executing this after comming iteration
      });

        document.addEventListener("click", (e) => {
        console.log("document capture");
      },{ once : true}); // one time execute it

      document.addEventListener("click", (e) => {
        console.log("Document bubble");
      });

      function printHi()
       {
       console.log("hi child" );
        
      }

// defer //capture //stoppropagation //removeEventListener