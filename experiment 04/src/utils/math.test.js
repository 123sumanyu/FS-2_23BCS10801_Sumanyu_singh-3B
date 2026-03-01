import { getUserName } from './name.js';
import {add} from './math.js';
test("add numbers",()=>{
    expect(add(2,3)).toBe(5)
})

test("checks username",()=>{
    expect(getUserName(null)).toBe("Guest");
    expect(getUserName({name:"Ayush"})).toBe("Ayush");
    expect(getUserName({name:"Mayank"})).toBe("Mayank");
})