var samples = [ 34, 18, 26, 44, 95];

var total = 0;
var i;
for(i=0; i < samples.length; i++) {
    total += samples[i];
    console.log(i, samples[i], total)
}

console.log(total);
