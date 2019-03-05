let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const overusedWords = ['really', 'very', 'basically'];
const unnecessaryWords = ['extremely', 'literally', 'actually'];
const storyWords = story.split(" ");
const betterWords = storyWords.filter(remainWords => {
    return !unnecessaryWords.includes(remainWords);
});
console.log(betterWords.join(" ")); // Print out the paragraph without unnecessary words.
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;
for (let word of storyWords) {
    if (word === 'really') {
        reallyCount++;
    }
    else if (word === 'very') {
        veryCount++;
    }
    else if (word === 'basically') {
        basicallyCount++;
    }
}
console.log('reallyCount is: ', reallyCount);
console.log('veryCount is: ', veryCount);
console.log('basicallyCount is: ', basicallyCount);
let sentence = 0;
storyWords.forEach(word => {
    if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
        sentence++;
    }
})
console.log('This paragraph has: ', sentence);

console.log('The total words count are: ', storyWords.length);
console.log('The total sentences count are: ', sentence);
console.log('The total overused words are:', basicallyCount + veryCount + reallyCount);
console.log(betterWords.join(" "));