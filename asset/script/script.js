//get element
const listBox = document.querySelectorAll('.slider-item');
const wrapperBox = document.querySelector('.sliders');
const bntLeft = document.querySelector('.dot-prev');
const btnRight = document.querySelector('.dot-next');
const sliderDiv = document.querySelector('.sliderComponent-list');
make_slide(3);
//function split box
function make_slide(amountSlideAppear){
    //set width and margin for item slide
    const widthItemandMargin = sliderDiv.offsetWidth / amountSlideAppear;
    let widthAllBox = widthItemandMargin * listBox.length;

    wrapperBox.style.width = `${widthAllBox}px`;

    listBox.forEach((element) => {
        element.style.marginRight = '20px';
        element.style.width = `${widthItemandMargin - 20}px`;
    });

    //handle slide
    let count = 0;
    let spacing = widthAllBox - amountSlideAppear * widthItemandMargin;
    btnRight.addEventListener('click', function () {
        count += widthItemandMargin;

        if (count > spacing){
            count = 0;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });

    bntLeft.addEventListener('click', function(){
        count -= widthItemandMargin;

        if(count < 0 ){
            count = spacing;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });

}
