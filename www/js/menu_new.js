
        let navLinks = document.querySelector(".nav-links");
        let icon = document.getElementById("icon");
        document.querySelector(".menu-icon").addEventListener("click", function()
        {
          navLinks.classList.toggle("open");
          icon.classList.toggle("fa-bars");
          icon.classList.toggle("fa-times");

        });
        window.addEventListener("resize", function ()
        {
          if(window.innerWidth > 760)
          {
            nav.Links.classList.remove("open");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
          }
        })
  