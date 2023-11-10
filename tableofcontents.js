window.onload = () => {
    document.querySelectorAll("h1:not(.exclude), h2:not(.exclude), h3:not(.exclude), h4:not(.exclude), h5:not(.exclude), h6:not(.exclude)").forEach((e)=>{
        let header = document.createElement(e.tagName);
        if(e.innerHTML == '<br>') { //used to make a break in the table of contents
            header.innerHTML = '<br>';
            header.classList.add('break');
        } else {
            header.textContent = e.textContent;
            header.onclick = () => {e.scrollIntoView(true)}
        }
        document.querySelector('.tableofcontents').appendChild(header);
    })
}