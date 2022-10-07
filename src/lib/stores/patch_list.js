import {writable} from "svelte/store";
export const patches = writable([]);

let temp_patches = ['1.3', '1.2', '1.1', '1.04', '1.0'];
temp_patches.sort().reverse();
patches.set(temp_patches);
console.log(patches);