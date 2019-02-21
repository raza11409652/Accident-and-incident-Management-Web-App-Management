$(document).ready(function() {

    $("[type=range]").val(0);
    $("[type=range]").change(function() {
        var newval = $(this).val();

        $("#rangeHint").text(newval);
    });
    //fetchData();
    $('#repotingForm').submit(function(event) {
        event.preventDefault();
        var data = $('#repotingForm').serialize();

        $.ajax({
            type: 'POST',
            data: data,
            url: './module/DataSubmit.php',
            beforeSend: function() {},
            success: function(result) {
                if (result == 1) {
                    $('#response').html(`
                    <div class=" card alert alert-success alert-dismissable">
<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
<strong>Data has been saved</strong>
</div>
                    `);
                    setTimeout(' window.location.href = "./"; ', 2000);
                } else if (result == '-1') {
                    $('#response').html(`
                    <div class="alert alert-danger alert-dismissable">
<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
<strong>Mobile number is not valid</strong>
</div>
                    `);
                } else {
                    $('#response').html(`
                    <div class="alert alert-danger alert-dismissable">
<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
<strong>Data has been saved</strong>
</div>
                    `);
                }
            }
        }); // ajax End here
    });
})