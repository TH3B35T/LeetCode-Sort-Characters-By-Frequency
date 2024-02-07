/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {

    const Counter = (str) => {
        const counter = {};
        for(let char of str){
            counter[char] = (counter[char] || 0) + 1
        }
        return counter;
    }

    const s_counter = Counter(s);
    
    const sorted_counts = Array.from(Object.entries(s_counter))

    let sorted_s = '';

    sorted_counts.sort((a,b) => b[1] - a[1])
    
    for( let char of sorted_counts){
        sorted_s += char[0].repeat(char[1])
    }

    return sorted_s;
    
};
