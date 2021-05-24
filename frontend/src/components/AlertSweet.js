import swal from 'sweetalert2';

export default {
    mixinMessage(icon, titleMessage) {
        const Toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', swal.stopTimer)
              toast.addEventListener('mouseleave', swal.resumeTimer)
            }
        })

        return Toast.fire({
            icon: icon,
            title: '<span style="font-family:sans-serif;">'+titleMessage+'</span>',
        })
    },
}
