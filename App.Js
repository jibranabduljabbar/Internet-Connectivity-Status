Refresh = () => {
    
    window.addEventListener("online", function(){
       document.getElementById("Status").innerText = "Your Internet Is ON"
       var Wifi_Image = document.getElementById("wifi")
       Wifi_Image.src = "Wifi_LoGo/ON_LoGo.png"

    });

    window.addEventListener("offline", function(){
        document.getElementById("Status").innerText = "Your Internet Is OFF"
        var Wifi_OFF_Image = document.getElementById("wifi")
        Wifi_OFF_Image.src = "Wifi_LoGo/OFF_LoGo.png"
    });
    
    // Check Wifi Is Online || Offline Inside Console.
    
    // console.log(navigator.onLine)
}