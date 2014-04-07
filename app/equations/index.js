module.exports = exports = {

    sinewave: function(amplitude, frequency, seconds, offset) {
        return amplitude * Math.sin(2 * Math.PI * frequency * seconds + offset);
    }
};
