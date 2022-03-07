class Madlibs {
    constructor() {
        
    }

    chooseMadlib() {
        let stories = [
            'Through clouds of _ , his blue eyes examined the _ and gentlemen in front of _ . They all looked hard at _ , and he smiled at their _ , then chuckled, which turned into a _ fit.',
            'I’m having a problem with something _ did. I mean something _ didn’t do _ should’ve. _ I can’t make it _ . It was really _ .',
            'Paisley _ was the dark-haired, freckle-faced, green-eyed _ in Fitzhugh’s freshman _ class who _ said nary _ word the whole _ .',
            'Miriam _ remembered _ the sound of _ crash became _ into the dream she _ having _ morning.',
            'I needed to find out what was _ . I hobbled over _ the bathroom blindly, using my sense of smell to _ me, and stared at the mirror. Though my vision was hazy, _ reflected back _ me was undeniable. I was a _ .',
            'Ambling _ the paths _ his childhood _ complex, Will _ me stories _ before we met _ .',
            'It felt dark _ , but not uncomfortably _ so. Sometimes _ dimmed the lights or pulled _ the curtains _ , but this _ felt different.',
            'Grief has _ a sobering effect _ on a drunkard craftsman _ as he takes _ his sick wife to _ hospital during a _ blizzard.',
            'One _ stormy night, _ as I tried to  _ sleep, The _ scary  _ monsters began _ to creep.',
            'Thomas stepped _ into the bar room. His _ clothes soaking, his hair flattened _ to his head. “There’s something out there,” he said. William _ turned with poker in hand, his brow furrowed _ . “What’s out there?” “I don’t know,” said _ Thomas.'
        ];
        
        const randomNumber = Math.round(Math.random() * 10);
        let arrayOfStory = stories[randomNumber].split(' ');

        return arrayOfStory;
    }

    createMadlib(noun1, verb1, adjective1, noun2, verb2, adjective2) {
        let madlib = this.chooseMadlib();
        let userInput = [noun1, verb1, adjective1, noun2, verb2, adjective2];
        let index = 0;

        for (let i = 0; i < madlib.length; i += 1) {
            if (madlib[i] === '_') {
                madlib[i] = userInput[index]; 
                index += 1;
            }
        }

        return madlib.join(' ');
    };
};

export default Madlibs;