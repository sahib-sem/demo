const bar= document.getElementById('bar')
const searchButtonMobile=document.getElementById('search-button-mobile')
const searchBar=document.getElementById('search-bar')
const imageContainer=document.getElementById('promo--image--container')
const reviewButton =document.getElementById('review-btn')
const promoImages=['images/promotion/promo1.webp','images/promotion/promo2.webp']
const maianImg= document.getElementById('main-img')
let smallImgs=document.getElementsByClassName('small-img')

// single product changing image
if (smallImgs!=null && smallImgs.length>0){
    smallImgs[0].addEventListener('click',function(){
        maianImg.src=smallImgs[0].src
    })
    smallImgs[1].addEventListener('click',function(){
        maianImg.src=smallImgs[1].src
    })
    smallImgs[2].addEventListener('click',function(){
        maianImg.src=smallImgs[2].src
    })
    smallImgs[3].addEventListener('click',function(){
        maianImg.src=smallImgs[3].src
    })

}

        
 
navBar=document.getElementById("nav-bar")

bar.addEventListener("click",()=>{
    navBar.classList.add("active")
})

document.getElementById('close').addEventListener("click", ()=>{
    navBar.classList.remove("active")
})
searchButtonMobile.addEventListener('click',()=>{
    searchBar.classList.toggle('active')

})

if (reviewButton){
    reviewButton.addEventListener('click',()=>{
        document.getElementById('product-review').classList.toggle('active')
    })

}
var docWidth = document.documentElement.offsetWidth;


