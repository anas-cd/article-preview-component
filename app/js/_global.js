// Global
app.global = {
    init: function(){ // Load all global functions here
        console.log("load global functions");
        app.global.loadHeader();
    },
    loadHeader: function(){ // Some specific function
        console.log("loadHeader()");
    }
}

// Run the global stuff
app.global.init();

var element = document.getElementsByClassName("wrapper");

element[0].addEventListener('click', function() {

        if(this.classList.contains("active")) {
            this.classList.remove("active");
        }else this.classList.add("active");
});