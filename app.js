let btn1 = document.querySelector('#myBtn');
        let btn2 = document.querySelector('#myBtn2');
        let copyDiv = document.querySelector('.copyCode');
        // rgb1 = #000;
        // rgb2 = #fff;

        const hexValues = () =>{
            for (let j = 0; j < 6; j++) {
        let myHexValues = "0123456789abcdef";
        let colors = "#";
        for (let i = 0; i < 6; i++) {
            colors += myHexValues[Math.floor(Math.random() * 16)];
        
        }
        // console.log(colors);
        return colors;
        
        
    }
        }
        
        
        
        const handelBtn1 = () => {
            rgb1 = hexValues();
            console.log(rgb1);
            btn1.innerHTML = rgb1;
            btn1.style.backgroundColor = rgb1;
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2})`;
            copyDiv.innerHTML = `background-image:linear-gradient(to right, ${rgb1} , ${rgb2})`
        }

        const handelBtn2 = () => {
            rgb2 = hexValues();
            console.log(rgb2);
            btn2.innerHTML = rgb2;
            btn2.style.backgroundColor = rgb2;
            // btn2.style.color = rgb2;
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2})`;
            copyDiv.innerHTML = `background-image:linear-gradient(to right, ${rgb1} , ${rgb2})`
        }


        btn1.addEventListener('click' , handelBtn1);
        btn2.addEventListener('click' , handelBtn2);


        copyDiv.addEventListener('click' , ()=>{
            navigator.clipboard.writeText(copyDiv.innerText);
        });