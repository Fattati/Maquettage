document.getElementById('btnSubmit').addEventListener('click', () => {
    $.post('/save', {
        data: {
            data0: "",
            data1: $('.data1').val(),
            data2: $('.data2').val(),
            data3: $('.data3').val()
        }
    }, function (response) {
        // 
        response = JSON.parse(response);
        sessionStorage.setItem('email', response.email);
        window.location.href = response.url;
        // alert(response);
    });
});