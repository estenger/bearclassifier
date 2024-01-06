

// async function loaded(reader) {
//     const response = await fetch('https://estenger-bearclassifier.hf.space/--replicas/54wx4/predict', {
//         method: "POST", body: JSON.stringify({ "data": [reader.result] }),
//         headers: { "Content-Type": "application/json" }
//     });
//     const json = await response.json();
//     const label = json['data'][0]['confidences'][0]['label'];
//     results.innerHTML = `<br/><img src="${reader.result}" width="300"> <p>${label}</p>`
// }
// function read() {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => loaded(reader))
//     reader.readAsDataURL(photo.files[0]);
// }
// photo.addEventListener('input', read);

import { client } from "@gradio/client";

const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
const exampleImage = await response_0.blob();
						
const app = await client("https://estenger-bearclassifier.hf.space/--replicas/54wx4/");
const result = await app.predict("/predict", [
				exampleImage, 	// blob in 'img' Image component
	]);

console.log(result.data);