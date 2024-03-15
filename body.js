$(document).ready(function () {

    //covid 19 msg
  
    //$('<span class="covid-19"><a href="test" style="color:black; text-decoration:none;">Director Message on Covid-19</a></span>').insertAfter(".test123 .custom");
    
      $('ul.tabs li').click(function () {
        
        
          var tab_id = $(this).attr('data-tab');
  
          $('ul.tabs li').removeClass('current');
          $('.tab-content').removeClass('current');
  
          $(this).addClass('current');
          $("#" + tab_id).addClass('current');
      })
  
      $('.searchmob').click(function (e) {
          $('#myForm').slideToggle();
      });
  
      $('.article-140 .item-page .responsive-table, .article-152news .item-page .responsive-table').addClass("datatable-design").find("table").DataTable( 
              {
                  "rowCallback": function (nRow, aData, iDisplayIndex) {
                      let oSettings = this.fnSettings();
                      $("td:first", nRow).html(oSettings._iDisplayStart + iDisplayIndex + 1);
                      return nRow;
                  }
              });
  
  })
  