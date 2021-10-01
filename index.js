const Database = require('replpersist');
const allPhrases = new Database('phrases');

const singlePlural = Math.round(Math.random()) ? 't' : 's'
const singlePlural2 = Math.round(Math.random()) ? 't' : 's'

const adjectives = [
	'Active',
	'Bedridden',
	'Coughing',
	'Diddly-daddling',
	'Explosive',
	'Farting',
	'Glittery',
	'Happy',
	'Ice Cold',
	'Jittering',
	'Kakorrhaphiophobic',
	'Laughing',
	'Monster Machine',
	'Nervous',
	'OP',
	'Pigged',
	'Quardupled',
	'Red',
	'Skittish',
	'Tiny Bit Sparkly',
	'Unfing',
	'Veiled',
	'Worn',
	'X-Rayed',
	'Yellow',
	'Zestful',
	'Happy-go-luck'
]

const adverbs = [
	'Actively',
	'Begrudgingly',
	'Coldly',
	'Distractingly',
	'Defiantly',
	'Explosively',
	'Flaringly',
	'Glitteringly',
	'Hecticly',
	'Happily',
	'Ireversibly',
	'Jitteringly',
	'Kakorrhaphiophobicly',
	'Laughably',
	'Mechanicly',
	'Nervously',
	'Offensively',
	'Pointedly',
	'Queso WITH A SIDE OF QUESO bRUH',
	'Roughly',
	'Skittishly',
	'Stoic',
	'History',
	'Testingly',
	'Unfingly',
	'Vectorly',
	'Whelmingly',
	'Exactingly',
	'Yee-haw-ingly',
	'Who lives in a pineapple under the sea? Bob Esponja y Patricio, of course. R U PHILLY GYRO? CALL BOB-ESP-ONJA! (161-phillydagyro)'
]

const nouns = [
	"Supercalifragilsticexpialidoxious",
	'Galaxy',
	'Nerd',
	'Alligator',
	'Butt',
	'Crocodilla Cup',
	'Death',
	'Eitan',
	'Joe',
	'Fart',
	'Glycerin',
	'Hiccup',
	'Igloo',
	'Jiraffe',
	'Kangaroo',
	'Larrie',
	'Momster',
	'Nellie',
	'Oof',
	'Poop',
	'Queen',
	'Ron',
	'Salad',
	'Sponge Bob',
	'Sponge Bob Square Pant',
	'Teacup',
	'Unf',
	'Vex',
	'Watermelon',
	'Watermeloon',
	'Watermelooon',
	'Xylophone',
	'Yankee',
	'Zerif'
]

const verbs = [
	'Articulate',
	'Belittle',
	'Cough',
	'Deal',
	'Elect',
	'Explode',
	'Fart',
	'Geek',
	'Hide',
	'Ignore',
	'Instill',
	'Jump',
	'Jolt',
	'Kill',
	'Laugh',
	'Mop',
	'Never See',
	'Operate',
	'Protect',
	'Protege Mythica',
	'Queen',
	'Rake',
	'Ship',
	'Tell',
	'Unf',
	'Veil',
	'Ware',
	'X-Ray',
	'Yell',
	'Yark',
	'Zap'
]

let randomAdjective = Math.round(Math.random() * adjectives.length-1)

let randomNoun = Math.round(Math.random() * nouns.length-1)

let randomVerb = Math.round(Math.random() * verbs.length-1);

let startT = singlePlural=='t'?'The ':''

let combined = startT + adjectives[randomAdjective] + ' ' + nouns[randomNoun] + (singlePlural=='s'?'s ':' ') + (verbs[randomVerb]) + (singlePlural=='t'?'s':'') + (singlePlural2=='t'?' The ':' ') + (adjectives[Math.round(Math.random() * adjectives.length-1)]) + ' ' + (nouns[Math.round(Math.random() * nouns.length-1)]) + (singlePlural2=='s'?'s ':' ');

console.log(combined + '\n')

if (singlePlural == 't') {
	console.log(`The starting word chosen was "The". The noun is singular.`)
} else {
	console.log(`The ending letter chosen was "s". The noun is plural.`)
}
console.log(`Adjectives [ ${randomAdjective} ] was selected, which is "${adjectives[randomAdjective]}".`)
console.log(`Nouns [ ${randomNoun} ] was selected, which is "${nouns[randomNoun]}".`)
console.log(`Verbs [ ${randomVerb} ] was selected, which is "${verbs[randomVerb]}".`)
console.log()