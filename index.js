const stainGrowth = [
    {transform: 'scale(1)'},
    {transform: 'scale(1.5)'},
    {transform: 'scale(2)'},
    {transform: 'scale(2.5)'},
    {transform: 'scale(3)'},
    {transform: 'scale(5)'},
    {transform: 'scale(7)'},
    {transform: 'scale(10)'},
    {transform: 'scale(15)'},
    {transform: 'scale(20)'},
    {transform: 'scale(22)'},
    {transform: 'scale(50)'},
    {transform: 'scale(75)'},
];

const shirtColor = [
    {transform: 'scale(1)'},
];

const stainTiming = {
    duration: 5000,
    iterations: 1,
};

const shirtTiming = {
    duration: 2000,
    iterations: 1,
};

const stain = document.querySelector('.stain')
const shirt = document.querySelector('.shirt')
const wrapper = document.querySelector('.wrapper')
shirt.addEventListener("click",  (e) => {
        stain.style.top = `${e.clientY - 5}px`
        stain.style.left = `${e.clientX -5}px`
        stain.style.visibility = 'visible'
        wrapper.style.maskImage = "url('public/mask.svg')"
        wrapper.style.maskPosition = "center"
        wrapper.style.maskClip = "view-box"
        wrapper.style.maskPosition = "center"
        wrapper.style.maskSize = "72%"
        wrapper.style.maskRepeat = "no-repeat"
        const animationStain = stain.animate(stainGrowth, stainTiming);
        animationStain.addEventListener('finish', function() {
        stain.style.transform = 'scale(250)'
    });


});