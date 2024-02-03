let quots = [
    "The best way to cheer yourself is to try to cheer someone else up.",
    "It's hard to beat a person who never gives up.",
    "Problems are not stop signs; they are guidelines.",
    "Remember that guy that gave up? Neither does anyone else.",
    "When you come to the edge of all that you know, you must believe one of two things: There will be ground to stand.Or you will grow wings to fly.",
    "It's better to be in the arena, getting stomped by a bull, than to be up in the stands or out in the parking lot.",
    "Watch the sunrise at least once a year, put a lot of marshmallows in your hot chocolate, lie on your back and look at the stars, never buy a coffee table you can't put your feet on, never pass up a chance to jump on a trampoline, don't overlook life's small joys while searching for the big ones.",
    "Success isn't permanent and failure isn't fatal; it's the courage to continue that counts.",
    "Courage doesn't always roar. Sometimes courage is the little voice at the end of the day that says I'll try again tomorrow.",
    "It's just a bad day. Not a bad life.",
    "If you are feeling low or trampled, unappreciated or forgotten and you are reading this, realize it is an illusion. The hope is real, you are valued, and what lies ahead is brilliance.",
    "You don't develop courage by being happy in your relationships everyday. You develop it by surviving difficult times and challenging adversity.",
    "Every day may not be good, but there's something good in every day.",
    "Being happy doesn't mean you're perfect. It just means you've decided to look beyond the imperfections.",
    "For every minute you are angry you lose 60 seconds of happiness.",
    "Every single day is a good day no matter how bright or dark it is, because it always brings an opportunity to start a positive beginning in your life.",
    "If you're reading this ... Congratulations, you're alive. If that's not something to smile about, then I don't know what is.",
    "Tough times never last, but tough people do.",
    "Count your age by friends, not years. Count your life by smiles, not tears.",
    "The only time you fail is when you fall down and stay down.",
    "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
    "Pain is temporary. Quitting lasts forever.",
    "What lies behind you and what lies in front of you pales in comparison to what lies inside of you.",
    "When things are bad, we take comfort in the thought that they could always get worse. And when they are, we find hope in the thought that things are so bad they have to get better.",
    "The happiest people don't necessarily have the best of everything, they just make the best out of everything that comes their way.",
    "Every strike brings me closer to the next home run.",
    "Things don't go wrong and break your heart so you can become bitter and give up. They happen to break you down and build you up so you can be all that you were intended to be.",
    "No one is going to hand me success. I must go out and get it myself. That's why I'm here. To dominate. To conquer. Both the world and myself.",
    "Don't be discouraged. It's often the last key in the bunch that opens the lock.",
    "Life is short. Smile while you still have teeth.",
    "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
    "It's just a bad day. Not a bad life.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "There is neither happiness nor unhappiness in this world; there is merely the comparison of one state to the other. Only a man who has felt ultimate despair is capable of feeling ultimate bliss.",
    "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    "You make mistakes. Mistakes don't make you.",
    "The one law that does not change is that everything changes, and the hardship I was bearing today was only a breath away from the pleasures I would have tomorrow, and those pleasures would be all the richer because of the memories of this I was enduring.",
    "Some days you tame the tiger. And some days the tiger has you for lunch.",
    "Someday everything will make perfect sense. So, for now, laugh at the confusion, smile through the tears, and keep reminding yourself that everything happens for a reason.",
    "There's nothing wrong or evil about having a bad day. There's everything wrong with making others have to have it with you.",

];


let border = document.querySelector(".border")
let btn = document.getElementById("btn");
let p = document.getElementById("p");

btn.addEventListener("click", () => {
    border.style.display = "block"
    let randomQuote = Math.floor(Math.random() * quots.length);
    p.innerHTML = `"${quots[randomQuote]}"`;
})


class User {
    constructor(id, userName, salry) {
        {
            this.id = id;
            this.userName = userName;
            this.salry = salry;
        }

    }
}

let userOne = new User(100, "", 0);

console.log(userOne);


