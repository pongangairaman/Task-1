console.log(document)
var btn1 = document.querySelector(".btn1")
var pdf1= document.querySelector(".pdf1")
var pdfAll= document.querySelectorAll(".pdf")
var btn2 = document.querySelector(".btn2")
var pdf2= document.querySelector(".pdf2")
var btn3 = document.querySelector(".btn3")
var pdf3= document.querySelector(".pdf3")
var btn4 = document.querySelector(".btn4")
var pdf4= document.querySelector(".pdf4")
var btnAll=document.querySelectorAll(".btn")
btn1.addEventListener("click",function(){
    pdfAll.forEach(element => {
        element.classList.remove("active")
    });
    pdf1.classList.add("active")
    btnAll.forEach(element => {
        element.classList.remove("activebtn")
        element.classList.remove("arrow")

    })
    btn1.classList.add("activebtn")
    btn1.classList.add("arrow")
})
btn2.addEventListener("click",function(){
    pdfAll.forEach(element => {
        element.classList.remove("active")
    });
    pdf2.classList.add("active")
    btnAll.forEach(element => {
        element.classList.remove("activebtn")
        element.classList.remove("arrow")
    })
    btn2.classList.add("activebtn")
    btn2.classList.add("arrow")
})
btn3.addEventListener("click",function(){
    pdfAll.forEach(element => {
        element.classList.remove("active")
    });
    pdf3.classList.add("active")
    btnAll.forEach(element => {
        element.classList.remove("activebtn")
        element.classList.remove("arrow")
    })
    btn3.classList.add("activebtn")
    btn3.classList.add("arrow")

})
btn4.addEventListener("click",function(){
    pdfAll.forEach(element => {
        element.classList.remove("active")
    });
    pdf4.classList.add("active")
    btnAll.forEach(element => {
        element.classList.remove("activebtn")
        element.classList.remove("arrow")

    })
    btn4.classList.add("activebtn")
    btn4.classList.add("arrow")
})