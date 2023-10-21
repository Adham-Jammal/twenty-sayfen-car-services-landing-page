document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('booking-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phonenumber = document.getElementById('phonenumber').value;
        const appointment = document.getElementById('appointment').value;
        const terms = document.getElementById('terms').checked;

        if (!name  || !phonenumber || !appointment || !terms) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please make sure to fill in all fields and agree to the terms and conditions',
                confirmButtonText: 'OK'
            });
            return;
        }

        var templateParams = {
            name: name,
            phonenumber: phonenumber,
            appointment: appointment,
        };
        emailjs.send('service_syupqnu', 'template_lu89yob' ,templateParams)
            .then(function(response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Thank you for reaching out to us. We will get back to you as soon as possible!',
                });
                form.reset();
            })
            .catch(function(error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while sending the information. Please try again.',
                });
            });
    });
});
(function() {
    emailjs.init('wNP4GhSKjfusHOz68');
})();
AOS.init();
