function runPromise(o){return new Promise((function(s,e){var n=Math.random()>.5;setTimeout((function(){n?s({position:o,delay:200}):e({position:o,delay:200})}),200)}))}var horses=["1","2"],promises=horses.map(runPromise);console.log(promises),Promise.all(promises).then((function(o){console.log(o)}));
//# sourceMappingURL=03-promises.c6a4317b.js.map
