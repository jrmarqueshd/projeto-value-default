document.querySelectorAll('ul.navigation-list > li.list-item > a.item-link').forEach(link =>{
    const content = document.getElementById("mainContent")

    link.onclick = function(e){
        e.preventDefault()

        fetch(link.href)
            .then(resp => resp.text())
            .then(html => content.innerHTML = html)
    }
})



