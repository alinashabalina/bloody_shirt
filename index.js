const stainGrowth = [
    {transform: 'scale(1)'},
    {transform: 'scale(1.5)'},
    {transform: 'scale(2)'},
    {transform: 'scale(2.5)'},
];

const stainTiming = {
    duration: 5000,
    iterations: 1,
};

const stain = document.querySelector('.stain')
const shirt = document.querySelector('.shirt')
shirt.addEventListener("click",  (e) => {
        stain.style.top = `${e.clientY - 5}px`
        stain.style.left = `${e.clientX -5}px`
        stain.style.visibility = 'visible'
        const animation = stain.animate(stainGrowth, stainTiming);
        animation.addEventListener('finish', function() {
        stain.style.transform = 'scale(2.5)';
    });
});