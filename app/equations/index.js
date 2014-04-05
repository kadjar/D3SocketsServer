module.exports = exports = {

    sinewave: function(amplitude, frequency, seconds) {
        return amplitude * Math.sin(2 * Math.PI * frequency * seconds + 0);
    }
};
