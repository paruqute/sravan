$(document).ready(function(){
  var u = getCookie('userinfo');
  var i = getCookie('items');
    var userinfo = JSON.parse(u);
    var items = JSON.parse(i);
    // console.log(u);
    // console.log(i);
    console.log(userinfo);
    console.log(items);
    var str_user = '<ul>';
    $.each(userinfo, function(key, value)
    {
        if(key=='gender')
        {
            value = value=='m'? 'Male' : 'Female';
        }
        str_user += '<li>'+value+'</li>';
    });
    str_user += '</ul>';
    $('#user_summary').html(str_user);

    var str_item = '<ol>';
    $.each(items.items, function(key, value)
    {
       if(value.quantity>=1)
        str_item += '<li>'+value.quantity+' ' +value.item+'</li>';
    });
    str_item += '</ol>';
    $('#item_summary').html(str_item);
})