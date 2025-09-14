function modal() {
    const buttonModals = document.querySelectorAll("[data-trigger=modal]");
    buttonModals.forEach(item => {
        //  lấy giá trị  của data-target 
        const itemTarget = item.getAttribute("data-target");
        //  để trỏ đến id hoặc  class
        const modal = document.querySelector(itemTarget);

        //  sau đó nạp sự kiện của button 
        item.addEventListener("click", function () {
            modal.classList.add("modal--active")
        })

        modal.querySelector("[data-cancel=modal]").addEventListener("click", function () {
            modal.classList.remove("modal--active")
        })

        //


    })
}

modal()