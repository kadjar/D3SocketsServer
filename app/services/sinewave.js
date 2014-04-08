var sinewave = require('../equations').sinewave;
var service = module.exports = exports = {};
var _hash = {};
var _now = now();
var _defaults = {
    amplitude: 50,
    frequency: .25,
    offset: 0
}

service.create = function(id, amplitude, frequency, offset) {
    _hash[id] = new SinewaveStepper(amplitude, frequency, offset);
}

service.step = function(id) {
    if (!_hash[id]) service.create(id, _defaults.amplitude, _defaults.frequency, _defaults.offset);
    _hash[id].step();
}

service.get = function(id) {
    if (!_hash[id]) service.create(id, _defaults.amplitude, _defaults.frequency, _defaults.offset);
    return _hash[id].payload();
}

function now() {
    return Date.now() / 1000;
}

function SinewaveStepper(amplitude, frequency, offset) {
    this._hash = [];
    this._max_history = 10;
    this._payload = {};
    this.amplitude = amplitude || 0;
    this.frequency = frequency || 0;
    this.offset = offset || 0;
}

SinewaveStepper.prototype.step = function() {

    _now = now();

    if (this._hash.length < this._max_history) {
        this._hash.push({
            x: _now,
            y: sinewave(this.amplitude, this.frequency, _now, this.offset)
        });
    }
    else {
        this._hash.push(this._hash.shift());
        this._hash[0].x = _now;
        this._hash[0].y = sinewave(this.amplitude, this.frequency, _now, this.offset);
    }
}

SinewaveStepper.prototype.payload = function() {
    this._payload.amplitude = this.amplitude;
    this._payload.frequency = this.frequency;
    this._payload.offset = this.offset;
    this._payload.moments = this._hash;
    return this._payload;
}
