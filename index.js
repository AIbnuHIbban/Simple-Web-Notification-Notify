
// Permission
document.getElementById('perm').addEventListener('click', function () {
    function onPermissionGranted () {
        console.log('Permission has been granted by the user');
    }
    
    function onPermissionDenied () {
        console.warn('Permission has been denied by the user');
    }
    
    if (Notify.isSupported()) {
        Notify.requestPermission(onPermissionGranted, onPermissionDenied);
    }
})

// Push 
document.getElementById('push').addEventListener('click', function () {
    doNotification()
    function onShowNotification () {
        console.log('notification is shown!');
    }
    
    function onCloseNotification () {
        console.log('notification is closed!');
    }
    
    function onClickNotification () {
        console.log('notification was clicked!');
    }
    
    function onErrorNotification () {
        console.error('Error showing notification. You may need to request permission.');
    }
    
    function doNotification () {

        var myNotification = new Notify("Assalamu'alaikum", {
            body: 'Ini Body Notifikasi yang bisa di kustom',
            tag: Date.now(),
            notifyShow: onShowNotification,
            notifyClose: onCloseNotification,
            notifyClick: onClickNotification,
            notifyError: onErrorNotification,
            timeout: 10000,
            renotify:true
        });
    
        myNotification.show();
    }
})
