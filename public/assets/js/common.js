$('#logout').on('click',function(){
    // confirm 有返回值，返回true false
    var isConfirm = confirm('您真的要退出吗');
    if(isConfirm) {
        // 
        $.ajax({
            type:'post',
            url:'/logout',
            success:function(){
                location.href = 'login.html';
            },
            error:function(){
                alert('退出失败')
            }
        })
    }
})