//👉 Write your tests below here:

import {test, expect} from "@jest/globals";
import {whereArtThou} from "./main.js";

// Should go through a selection of arrays and find Rupunzilla in each of them
// Rupunzilla should be at a different index in each array
// Should return a string of "I found Rupunzilla in tower " + index 
// 

test ('find Rupunzilla in an array', function(){
       
        const illGottenGains = ["stockpile of cheese", "winter socks", "Brianna", "5 tiny elves", "that one shopkeeper who wouldn't sell me any bananas because she 'didn't have any!'", "Rupunzilla", "a bunch of paperclips", "pointy shoes"]; 
        
        const expected = ("I found Rupunzilla in tower 5");
        
        expect(whereArtThou(illGottenGains)).toBe(expected);
        
    })

    test ('find Rupunzilla in an array', function(){
       
        const illGottenGains = ["stockpile of cheese", "Rupunzilla", "a large collection of mismatched left foot toe-socks", "3 ducks wearing top hats", "garlic bread", "pile of rubies", "a bunch of paperclips", "pointy shoes"]; 
        
        const expected = ("I found Rupunzilla in tower 1");
        
        expect(whereArtThou(illGottenGains)).toBe(expected);
        
    })   

 test ('find Rupunzilla in an array of numbers', function(){
       
        const illGottenGains = [79, 85, 2, "Rupunzilla", 9837465, 100000, 28, 11, 30, 7]; 
        
        const expected = ("I found Rupunzilla in tower 3");
        
        expect(whereArtThou(illGottenGains)).toBe(expected);
        
    })   
