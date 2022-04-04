function call() {
	var msg   = $('#formForSend').serialize();
	$.ajax({
		type: 'POST',
		//url: 'https://60376bfd5435040017722533.mockapi.io/formRej',
		url: 'https://60376bfd5435040017722533.mockapi.io/form',
		data: msg,
		success: function(data) {
			//$('#results').html(data);
			alert('Данные отправлены.');
		},
		error:  function(xhr, str){
			$('#formForSend')[0].reset();
			var err = ('Ошибка '+ xhr.status +': ');
			if (xhr.status == 404) {
				//alert(xhr.responseCode + ' ' + str);
				alert(err + 'Сервер не отвечает');
			} else if (xhr.status == 400) {
				alert(err + 'Ошибка в запросе');
			} else {
				alert(err + 'Неизвестная ошибка');
			}			
		}
	});
}
	
	
