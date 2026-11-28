
alert("Welcome to the System Status Checker!")

const statusBanner = document.getElementById("statusBanner")
const checkButton = document.getElementById("checkButton")

const updateBanner = (message, color) => {
    statusBanner.innerText = message;
    statusBanner.style.backgroundColor = color;
    statusBanner.style.color = "white";
    statusBanner.style.padding = "20px";
}

const checkStatus = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const isOnline = Math.random() >= 0.5;
            if (isOnline) {
                resolve("Online");
            } else {
                resolve("Offline");
            }
        }, 2000);
    })
}
checkButton.addEventListener("click", () => {
    updateBanner("System is Checking...", "orange");
    checkStatus().then((status) => {
        if (status === "Online") {
            updateBanner("System is Online", "green");
        } else {
            updateBanner("System is Offline", "red");
        }
    })
})
