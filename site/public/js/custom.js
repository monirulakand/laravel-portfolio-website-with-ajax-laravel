
// Owl Carousel Start..................
$(document).ready(function() {
    var one = $("#one");
    var two = $("#two");

    $('#customNextBtn').click(function() {
        one.trigger('next.owl.carousel');
    })
    $('#customPrevBtn').click(function() {
        one.trigger('prev.owl.carousel');
    })
    one.owlCarousel({
        autoplay:true,
        loop:true,
        dot:true,
        autoplayHoverPause:true,
        autoplaySpeed:100,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    two.owlCarousel({
        autoplay:true,
        loop:true,
        dot:true,
        autoplayHoverPause:true,
        autoplaySpeed:100,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});
// Owl Carousel End..................
//-------------------------------------------------


// Contact Send Js Code

// Contact Send Confirm Btn
$('#contactSendBtnId').click(function () {
    var contact_name=$('#contactNameId').val();
    var contact_mobile=$('#contactMobileId').val();
    var contact_email=$('#contactEmailId').val();
    var contact_msg=$('#contactMsgId').val();

    sendContact(contact_name,contact_mobile,contact_email,contact_msg);
});



// Contact Send add method
function sendContact(contact_name,contact_mobile,contact_email,contact_msg) {

    if(contact_name.length==0){
         $('#contactSendBtnId').html('আপনার নাম লিখুন !');
         setTimeout(function () {
         $('#contactSendBtnId').html('পাঠিয়ে দিন');
         },2000)
    }
    else if(contact_mobile.length==0){
        $('#contactSendBtnId').html('আপনার মোবাইল নং লিখুন !');
        setTimeout(function () {
            $('#contactSendBtnId').html('পাঠিয়ে দিন');
        },2000)
    }
    else if(contact_email.length==0){
        $('#contactSendBtnId').html('আপনার ইমেল লিখুন !');
        setTimeout(function () {
            $('#contactSendBtnId').html('পাঠিয়ে দিন');
        },2000)
    }
    else if(contact_msg.length==0){
        $('#contactSendBtnId').html('আপনার মেসেজ লিখুন !');
        setTimeout(function () {
            $('#contactSendBtnId').html('পাঠিয়ে দিন');
        },2000)
    }

    else{
        $('#contactSendBtnId').html('পাঠানো হচ্ছে...');

        axios.post('/contactSend',{
            contact_name:contact_name,
            contact_mobile:contact_mobile,
            contact_email:contact_email,
            contact_msg:contact_msg
        })
            .then(function(response) {
                if(response.status==200){
                    if(response.data==1){
                        $('#contactSendBtnId').html('অনুরোধ সফল হয়েছে');
                        setTimeout(function () {
                            $('#contactSendBtnId').html('পাঠিয়ে দিন');
                        },3000)
                    }
                    else{
                        $('#contactSendBtnId').html('অনুরোধ ব্যর্থ হয়েছে ! আবার চেষ্টা করুন');
                        setTimeout(function () {
                            $('#contactSendBtnId').html('পাঠিয়ে দিন');
                        },3000)
                    }
                }
                else{
                    $('#contactSendBtnId').html('অনুরোধ ব্যর্থ হয়েছে ! আবার চেষ্টা করুন');
                    setTimeout(function () {
                        $('#contactSendBtnId').html('পাঠিয়ে দিন');
                    },3000)
                }

            })
            .catch(function (error) {
                $('#contactSendBtnId').html('আবার চেষ্টা করুন !');
                setTimeout(function () {
                    $('#contactSendBtnId').html('পাঠিয়ে দিন');
                },3000)
            })
    }
}
