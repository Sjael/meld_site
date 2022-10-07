
    export const get_patches = async () => {
		var response = await fetch('http://localhost:4000/get_patches');
		var result = await response.json();
		return result;
	}
	
	let patch_list = get_patches();