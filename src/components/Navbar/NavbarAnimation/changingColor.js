export const ChangeBgColor = (setNavbarBgColor)=>{
if(window.scrollY > 80){
    setNavbarBgColor(true)
}
else{
    setNavbarBgColor(false)
}
}
