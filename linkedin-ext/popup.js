document.getElementById('save').addEventListener('click', ()=>{
    console.log("button clicked")
    alert("Button clicked")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {start: "true"}, function(response) {
            alert(response);
        });
    });
});