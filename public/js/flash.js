
setTimeout(function () {
    let alert = document.getElementById("errorAlert");
    if (alert) {
        let bsAlert = new bootstrap.Alert(alert);
        bsAlert.close();
    }
}, 2000);
