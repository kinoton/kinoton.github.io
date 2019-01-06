with(document){
bo=['k1.jpg','k2.jpg','k6.jpg']
for (i=0; i<bo.length; i++) {
    scp.innerHTML+='<div class="ms f"><div class=nt>'+(i+1)+'</div> <img src='+bo[i]+' width=100%> <div class=text>Kinoton '+(i+1)+'</div></div>'
    csd.innerHTML+='<span class=d onclick=cs('+(i+1)+')></span> '
}
function o(evt, page) {
    tabcontent = getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none"
    tablinks = getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "")
    page.style.display = "block";
    evt.currentTarget.className += " active";
}
j = 1; s(j); function p(n) {s(j += n)}; function cs(n) {s(j = n)}
function s(n) {
  m=getElementsByClassName('ms'); d=getElementsByClassName('d'); if (n > m.length) j = 1; if (n < 1) j = m.length
  for (i = 0; i < m.length; i++) m[i].style.display = "none"
  for (i = 0; i < d.length; i++) d[i].className = d[i].className.replace(" z", "")
  m[j-1].style.display = "block"
  d[j-1].className += " z"}
defaultOpen.click()
acc = getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++)
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling.style;
        if (panel.display === "block") panel.display = "none"; else panel.display = "block"
    })
function openNav() {
    mySidenav.style.width = "250px"; main.style.marginLeft = "250px";
    body.style.backgroundColor = 'rgba(0,0,0,.4)'
}
function closeNav() {
    mySidenav.style.width = 0; main.style.marginLeft= 0;
    body.style.backgroundColor = "white";
}
anh=0
anbot=anbo.getElementsByTagName('img')
}
name='Kinoton'; count=0
window.onload=function nhay() {
    let n=name.substring(count, name.length); let o=name.substring(0, count)
    namea.firstChild.nodeValue=n+' '+o; nameb.firstChild.nodeValue=o; namec.firstChild.nodeValue=n; count++
    if (count>name.length) count=0
    if (anh<2) {
    	anbot[anh].style.display='none'; anbot[anh+1].style.display='block'
    }
    else {
    	anbot[anh].style.display='none'; anbot[anh-2].style.display='block'
    }
	anh++
	if (anh>anbot.length-1) anh=0
	setTimeout(nhay,1000)
}