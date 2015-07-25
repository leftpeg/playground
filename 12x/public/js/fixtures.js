fetch("/fixtures").then(function (response) {
	return response.json();
}).then(function (fixtures) {
	console.log(fixtures);
}).catch(function (err) {
	alert(err);
});
