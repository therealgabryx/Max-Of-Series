function insert() {
    const count = parseInt(prompt('Quanti numeri vuoi inserire?', 2));

    if (count > 1) {
        let max = null;
        document.getElementById('nums').innerHTML = '[ ';
        for (let i = 0; i < count; i++) {
            let input = prompt(`inserisci il ${i + 1}' numero.. `);
            if (!isNaN(input)) {
                if (i == count - 1) {
                    document.getElementById('nums').innerHTML += `${input}`;
                }
                else {
                    document.getElementById('nums').innerHTML += `${input}, `;
                }
                if (input >= max) {
                    max = input;
                }
            } else if (input == 'ex') {
                max = null;
                document.getElementById('nums').innerHTML = '?'
                document.getElementById('solution').innerHTML = '-'
                break;
            } else {
                i--;
            }
        }
        if (max != null) {
            document.getElementById('nums').innerHTML += ' ]';
            document.getElementById('solution').innerHTML = `il valore massimo è ${max}`;
        }
    } else if (count == 1) {
        let input = parseInt(prompt('inserisci un numero.. '));
        if (!isNaN(input)) {
            document.getElementById('nums').innerHTML = `[ ${input} ]`;
            document.getElementById(
                'solution'
            ).innerHTML = `il valore massimo è ${input}`;
        } else {
            document.getElementById('nums').innerHTML = '?';
            document.getElementById('solution').innerHTML = 'invalid input';
        }
    } else {
        document.getElementById('nums').innerHTML = '?';
        document.getElementById('solution').innerHTML = '-';
    }

    console.log(nums);
}
