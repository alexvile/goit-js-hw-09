function runPromise(o){return new Promise((function(n,s){var e=Math.random()>.1;setTimeout((function(){e?n({position:o,delay:200}):s({position:o,delay:200})}),200)}))}var horses=["1","2","3"],promises=horses.map(runPromise);console.log(promises),Promise.all(promises).then((function(o){console.log(o)})).catch((function(o){console.log(o)}));
//# sourceMappingURL=03-promises.9a01e16b.js.map
