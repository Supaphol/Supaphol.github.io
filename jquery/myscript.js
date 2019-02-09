$(document).ready(function() {

    $.getJSON("data.json", function (data) {
        var dog_breeds_data = "";
        $.each(data, function(key, value){
            dog_breeds_data += '<tr scope = "row" style = "background-color : white">';     
            dog_breeds_data += '<td>'+value.id+'</td>';
            dog_breeds_data += '<td>'+value.name+'</td>';
            dog_breeds_data += '<td>'+value.section+'</td>';
            dog_breeds_data += '<td>'+value.country+'</td>';
            dog_breeds_data += '</tr>' ;
        });
        $('#Na').append(dog_breeds_data);
    });

    $('#submit-botton').click(function( event ){
      filterFunc();
    });

    $('#input-text').keypress( "enter",function( event ) {
      if ( event.keyCode == 13 ) {
        filterFunc();
      }
    });

    function filterFunc(){
      var input , filter ,fields ,i;
      input = document.getElementById("input-text");
      filter = input.value.toUpperCase();
      table = document.getElementById("Na");
      tr = table.getElementsByTagName("tr");
      

      for (i = 0; i < tr.length; i++) {
          fields = [tr[i].getElementsByTagName("td")[0],
          tr[i].getElementsByTagName("td")[1],
          tr[i].getElementsByTagName("td")[2],
          tr[i].getElementsByTagName("td")[3]];
      if (fields[0]) {
        idValue = fields[0].textContent || fields[0].innerText;
        nameValue = fields[1].textContent || fields[1].innerText;
        sectionValue = fields[2].textContent || fields[2].innerText;
        countryValue = fields[3].textContent || fields[3].innerText;
        if (idValue.toUpperCase().indexOf(filter) > -1 
        || nameValue.toUpperCase().indexOf(filter) > -1
        || sectionValue.toUpperCase().indexOf(filter) > -1 
        || countryValue.toUpperCase().indexOf(filter) > -1 ) {
          tr[i].style.display = "";
        } 
        else {
          tr[i].style.display = "none";
        }
      } 
    }
  }

    $('#advance-btn').click(function myfunction(){
        $('#collapseDiv').slideToggle();

    });

    $('#ad-submit-botton').click(function advanceSearch(){
        var input , filter ,filter1,fields ,i;
        input = [document.getElementById("id-text")
        ,document.getElementById("name-text")
        ,document.getElementById("section-text")
        ,document.getElementById("country-text")];



        filter = 
    [ input[0].value.toUpperCase()
    , input[1].value.toUpperCase() 
    , input[2].value.toUpperCase()
    , input[3].value.toUpperCase()];
        table = document.getElementById("Na");
        tr = table.getElementsByTagName("tr");
    
        for (i = 0; i < tr.length; i++) {
            fields = [tr[i].getElementsByTagName("td")[0],
            tr[i].getElementsByTagName("td")[1],
            tr[i].getElementsByTagName("td")[2],
            tr[i].getElementsByTagName("td")[3]];
            
        if (fields[0]) {
          idValue = fields[0].textContent || fields[0].innerText;
          nameValue = fields[1].textContent || fields[1].innerText;
          sectionValue = fields[2].textContent || fields[2].innerText;
          countryValue = fields[3].textContent || fields[3].innerText;
          if (
             idValue.toUpperCase().indexOf(filter[0]) > -1 
          && nameValue.toUpperCase().indexOf(filter[1]) > -1
          && sectionValue.toUpperCase().indexOf(filter[2]) > -1
          && countryValue.toUpperCase().indexOf(filter[3]) > -1 
) {
            tr[i].style.display = "";
          } 
          else {
            tr[i].style.display = "none";
          }
        } 
      }
    })

    // $('#submit-btn').click(function() {
    //     console.log('click on submit button');
    // });

    // $.ajax({
    //     url: "data.json",
    //     dataType: "json"
    // }).done(function(response) {
    //     console.log(response);
    //     response.forEach(element => {
    //         console.log(element.name, element.age);
    //     });
    // });
});