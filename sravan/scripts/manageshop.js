var obj = new Cars();
$(document).ready(function(){
    //document.cookie = "items= ";
    
   
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       
       console.log(this.responseText);
       var jsn = JSON.parse(this.responseText);
       initializeShop(jsn)
      }
    };

    xhttp.open("GET", "data.json", true);
    xhttp.send();
    $(document).on('click','.shop-img',function(){
        
        var k = $(this).attr('key');
        obj.updateCars(k);
        var str =  obj.showItems();
        var tot =  obj.getTotal();
        $('#shop').html(str);
        $('#total').val(tot);
     })
     $(document).on('submit','#shop_form',function(e){
        e.preventDefault();
        if(parseFloat($('#total').val())>0)
        {
            var itemsAll = obj.getItems();
            document.cookie = "items="+JSON.stringify(itemsAll);
            window.location='summary.html';
        }
        else{
            $('#total_error').html("Please choose item");
        }
     })
     
})
function initializeShop(jsn)
{
    obj.setCars(jsn);
    var str =  obj.showItems();
    var tot =  obj.getTotal();
    $('#shop').html(str);
    $('#total').val(tot);

}