$(function(){
    /* drop down up - tree */
    $('button[title="toggle"]').click(function(){
        $(this).parent().parent().toggleClass('collapse');
    })

    // $('.tree .check_all').click(function(){
    //     var leaf = $(this).parent().parent().next();
    //     if($(this).is(":checked")){
    //         leaf.find('input[type="checkbox"]').attr('checked', true);
    //     } else {
    //         leaf.find('input[type="checkbox"]').attr('checked', false);
    //     }
    // })
    

    /* check all test */
    $('#checkAll').click(function(){
        if($('#checkAll').prop('checked')){
            $('.checkalltest input[type="checkbox"]').prop('checked', true);
        } else {
            $('.checkalltest input[type="checkbox"]').prop('checked', false);
        }
    });

    var item = $('.leaf > li > label input[type="checkbox"]');

    item.click(function(){

        if($(this))
        // var item = $(this).parent().parent().parent()
        // var checkAll = $(this).parent().parent().parent().prev();
        // if(item.find('> label input:checked').length == item.length){
        //     // 체크된 체크박스의 수가 기존 체크박스의 수와 같을 시 check all
        //     checkAll.find('input[type="checkbox"]').prop('checked', true);
        // } else {
        //     checkAll.find('input[type="checkbox"]').prop('checked', false);
        // }
    })
});