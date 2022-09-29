import {writable} from "svelte/store";

export const items = writable([]);

var tempitems = {
    "results": [
        {
            "name" : "Revenge of Sabon",
            "id" : 3401,
            "image" : "sabi",
            "description" : "I'm gonna make this item so OP"
        },
        {
            "name" : "The Crusher",
            "id" : 3201,
            "image" : "TheCrusher",
            "description" : "+35 Physical Penetration"
        }
    ]
}

// doing it like this so its easier to change to an api in the future
const fetchitems = async() => {
    const data = await tempitems;
    const loadeditems = data.results.map((data, index) => {
        return {
            name: data.name,
            id: data.id,
            idx: index+1,
            image: data.image,
            desc: data.description,
        }
    });
    items.set(loadeditems);
}
fetchitems();