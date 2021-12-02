/**
 * functions with this keyword
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
window.volume = 20

const greenPack = {
    name: 'Frog Pack',
    color: 'green',
    volume: 8,
    pocketNum: 3,
    newVolume: function(volume) {
        console.log('this.volume is in the method: ', this.volume)
        this.volume = volume
        console.log('this.volume after update: ', this.volume)
        return this.volume
    }
};

console.log(greenPack.newVolume(5))