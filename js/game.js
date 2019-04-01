// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a dark forest.",
            choices: [
                {
                    text: "Enter The Forest",
                    nextLevel: "forest",
                },

                {
                    text: "It's Too Dark Move On",
                    nextLevel: "field",
                },
            ]
        },

        forest: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Keep exploring or go back?",
            choices: [
                {
                    text: "Explore",
                    nextLevel: "which_way",
                },
                
                {
                    text: "Go Back",
                    nextLevel: "field",
                },
            ]
        },
        
        which_way: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Choose the direction you would like to explore!",
            choices: [
                {
                    text: "Go Left",
                    nextLevel: "weapon",
                },
                
                {
                    text: "Go Right",
                    nextLevel: "field3",
                },
            ]
        },
        
        weapon: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a sword!",
            choices: [
                {
                    text: "Take Sword",
                    nextLevel: "bear",
                },
                
                {
                    text: "Go back",
                    nextLevel: "which_way",
                },
            ]
        },
        
        bear: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a bear!",
            choices: [
                {
                    text: "Fight",
                    nextLevel: "choose",
                },
                
                {
                    text: "Run",
                    nextLevel: "field2",
                },
            ]
        },
        
        choose: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You're exausted after the fight!",
            choices: [
                {
                    text: "Run For Your Life",
                    nextLevel: "field2",
                },
                
                {
                    text: "Keep Exploring",
                    nextLevel: "help",
                },
            ]
        },
        
        help: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You stumble upon a stranger fighting for their life against a pack of wolf!",
            choices: [
                {
                    text: "Save Yourself",
                    nextLevel: "field4",
                },
                
                {
                    text: "Help The stranger",
                    nextLevel: "ally",
                },
            ]
        },
        
        ally: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You have teamed up with the stranger and saved them...you have made an ally, they point at the faint light up ahead....",
            choices: [
                {
                    text: "Go towards the light",
                    nextLevel: "light",
                },
            ]
        },
        
        light: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Walking towards the light....",
            choices: [
                {
                    text: "You won",
                    nextLevel: "win",
                },
            ]
        },
        
        win: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "YOU HAVE EXPLORED THE FOREST AND SAVED A PERSON IN NEED OF HELP!!!",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        field2: {
            message: "You live another day of a coward...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field3: {
            message: "You tried to fight a bear without a weapon and died...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        field4: {
            message: "The wolfs outnumbered the stranger and then came after you, you died...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
