let btn_welcome = document.getElementById("btn_welcome")

btn_welcome.addEventListener("click", ()=>{
    Swal.fire({
        title: "Buen Trabajo!",
        text: "Has hecho click en el botón!",
        icon: "success",
        confirmButtonColor: "darkorange"
      });
})