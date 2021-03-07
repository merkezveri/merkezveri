// Navbar açıksa kapatır

// Bütün her yeri dinler
document.addEventListener("click",event => {
    //Navbar açık mı?
    const isNavbarOpened = document.querySelector("#sidebarMenu").classList.contains("show")
    
    // Açıksa?
    if (document.querySelector("#sidebarMenu").classList.contains("show")) {
        //console.log(event.target.tagName)
        // Kategori seçebilmek için bunlar hariç
        if (event.target.tagName === "H6" || event.target.tagName === "SPAN"|| event.target.tagName === "I" || event.target.tagName==="INPUT") {
            
                  }else{
                    // Her şey iyiyse kapat.
                    document.querySelector(".navbar-toggler").click();
                  }      
      };
  });