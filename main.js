/**
    Convert an array of integers into an array of strings representing the phonetic equivalent of the integer.
    For example:
    Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
    Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.
 */

    let int_eng_map = {
        "0": "Zero",
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine"
    }
    
    /**
     * This function converts string of numbers into string of number in English
     * @param {*} string : string of numbers
     * @returns 
     */
    function convertString(string){
            let output = ""
            for (let char of string) {
                output += int_eng_map[char]
            }
            return output
    }
    
    let output = ""
    
    /**
     * parse the user input
     */
    process.argv.forEach((val, index) => {
        if(index > 1){
            output += convertString(val)
            if(index != process.argv.length - 1){
                output += ","
            }
        }
    });
    
    process.stdout.write(output)