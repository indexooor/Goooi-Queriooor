var alertRedInput = '#8C1010';
var defaultInput = 'rgba(10, 180, 180, 1)';

function submitForm() {
	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	var raw = JSON.stringify({
		contractAddress: contractaddress.value,
		targetVariable: variablename.value,
		key: key.value,
		deepKey: deepkey.value,
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
	};

	fetch(url.value + '/queriooor/getVariable', requestOptions)
		.then((response) => response.json())
		.then((result) => {
			console.log(result);

			console.log(result['data'][0]['variableName']);
			console.log(result.data.variableName);
			document.getElementById('fetchedData').innerHTML = `<h3>Result</h3>
            <ul class="noBullet" id="fetchedDataList">
                <li>
                   <b> <span class="resultClass" id="variableName"> variableName: ${result['data'][0]['variableName']} </span> </b>
                </li>
                <li>
                    <b> <span class="resultClass" id="variableValue"> value: ${result['data'][0]['variableValue']} </span> </b>
                </li>
                <li>
                     <b> <span class="resultClass" id="variableType"> type: ${result['data'][0]['variableType']} </span> </b>
                </li>
            </ul>`;
		})
		.catch((error) => console.log('error', error));
}
