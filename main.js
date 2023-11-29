let i = 1, score = 0;
let btn = document.querySelector(".btn");
let p = document.querySelector("p");
let anss = document.querySelector(".container");

document.addEventListener("click", function(e){
    if( e.target.classList[0] === "answer" )
    {
        btn.hidden = false;
        if( i == 1 )
        {
            if( anss.children[4].innerText !== e.target.innerText ) 
            {
                e.target.classList.add("uncorrect");
            }
            else
            {
                score++;
            }
            anss.children[4].classList.add("correct");
        }
        else if( i == 2 )
        {
            if( anss.children[2].innerText !== e.target.innerText ) 
            {
                e.target.classList.add("uncorrect");
            }
            else
            {
                score++;
            }
            anss.children[2].classList.add("correct");
        }
        else if( i == 3 )
        {
            if( anss.children[5].innerText !== e.target.innerText ) 
            {
                e.target.classList.add("uncorrect");
            }
            else
            {
                score++;
            }
            anss.children[5].classList.add("correct");
        }
        else if( i == 4 )
        {
            score++;
            e.target.classList.add("correct");
        }
    }
    else if( e.target.className === "btn" )
    {
        btn.hidden = true;
        i++;

        for( let i = 2; i <= 5; i++ )
        {
            anss.children[`${i}`].classList.remove("correct");
            anss.children[`${i}`].classList.remove("uncorrect");
        }

        if( i == 6 )
        {
            i = 1;
            score = 0;
            for( let j = 2; j < 6; j++ )
            {
                anss.children[`${j}`].hidden = false;
            }
            btn.innerText = "Next";
        }

        if( i == 1 )
        {
            p.innerText = "1. Who is the smartest person in the world?";
            anss.children[2].innerText = "Hossam";
            anss.children[3].innerText = "Goda";
            anss.children[4].innerText = "Zeyad";
            anss.children[5].innerText = "Samer";
        }
        else if( i == 2 )
        {
            p.innerText = "2. Who is the prettiest person in the world?";
            anss.children[2].innerText = "Zeyad";
            anss.children[3].innerText = "Zaki";
            anss.children[4].innerText = "Kareem";
            anss.children[5].innerText = "Sha3ban";
        }
        else if( i == 3 )
        {
            p.innerText = "3. Who is the best player in the history of football?";
            anss.children[2].innerText = "Maradona";
            anss.children[3].innerText = "Cristiano Ronaldo";
            anss.children[4].innerText = "Micheal Jackson";
            anss.children[5].innerText = "Messi";
        }
        else if( i == 4 )
        {
            p.innerText = "4. Do you love me?";
            anss.children[2].innerText = "YES";
            anss.children[3].innerText = "Ofcourse";
            anss.children[4].innerText = "Sure";
            anss.children[5].innerText = "YES I do";
        }
        else if( i == 5 )
        {
            btn.hidden = false;
            p.innerText = `Your scored ${score} out of 4!`;
            btn.innerText = "Play Again";
            for( let j = 2; j < 6; j++ )
            {
                anss.children[`${j}`].hidden = true;
            }
        }
    }
});