document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('booking-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phonenumber = document.getElementById('phonenumber').value;
        const appointment = document.getElementById('appointment').value;
        const terms = document.getElementById('terms').checked;

        if (!name || !email || !phonenumber || !appointment || !terms) {
            Swal.fire({
                icon: 'error',
                title: 'خطأ',
                text: 'يرجى التأكد من إدخال المعلومات لجميع الحقول والموافقة على الشروط والأحكام',
                confirmButtonText: 'موافق'
            });
            return;
        }

        var templateParams = {
            name: name,
            phonenumber: phonenumber,
            email: email,
            appointment: appointment,
        };
        emailjs.send('service_syupqnu', 'template_lu89yob' ,templateParams)
            .then(function(response) {
                Swal.fire({
                    icon: 'success',
                    title: 'تم بنجاح',
                    text: 'شكراً لتواصلك معنا, سنعود إليك في أقرب وقت ممكن!',
                });
                form.reset();
            })
            .catch(function(error) {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: 'حدث خطأ أثناء إرسال المعلومات يرجى المحاولة من جديد',
                });
            });
    });
});
(function() {
    emailjs.init('wNP4GhSKjfusHOz68');
})();
AOS.init();
