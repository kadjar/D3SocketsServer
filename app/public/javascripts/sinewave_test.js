;(function() {
    'use strict';

    var socket = io.connect();
    var stage = d3.select('body').append('svg').attr('height', 200).attr('width', 400);
    var line = stage.append('path');
    var range = { x: d3.scale.linear(), y: d3.scale.linear() };
    var renderer = d3.svg.line();

    range.x.domain([1, 10]);
    range.x.range([0, parseInt(stage.style('width'))]);

    range.y.domain([-50, 50]);
    range.y.range([parseInt(stage.style('height')) - 20, 20]);

    renderer.x(function(d,i) {
        return range.x(i);
    });

    renderer.y(function(d,i) {
        return range.y(d.y);
    });

    socket.on('tick', function(data) {
        line.transition().attr('d', renderer(data.moments));
    });
}());
