var tablinks = document.getElementsByClassName("tab-link");
        var tabcontants = document.getElementsByClassName("tab-contant");

        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link")
            }
            for (tabcontant of tabcontants) {
                tabcontant.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemanu() {
        sidemenu.style.right = "-200px";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzjO-JKql9FmTKS0Fza7EBtXqv1o8h5elzeiKHeYSmgzc3sWZzL7jHYQqq1cN3Et9sagA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function () {
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })