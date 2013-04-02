//自动给th加上thead
(function ($) {
  // body...
  var converter = new Showdown.converter();
  $("#md_doc_list").on("click","li a",function(){
    var self = $(this);
    if (!self.hasClass("active")&&!self.hasClass("disabled")) {
      self.parent().parent().find("li a.active").removeClass("active");
      self.addClass("active");
      var href = self.attr("href");
      var doc = href.replace("#","")+".md";
      //console.log(doc);
      $.ajax({
        url:doc,
        context:$("#md_doc_content"),
        success:function(a,b,c){
          //console.log(c);
          this.html(converter.makeHtml(c.responseText))

          //表格初始化表头
          // var tables = this.find("table").each(function(){
          //   var table = $(this);
          //   table.find("tr").first().wrap("<thead></thead>");
          //   var thead = table.find("thead");
          //   //console.log(thead);
          //   table.prepend(thead);
          // });

          //初始化标题引导
          var h1s = this.find("h1"),h2s = this.find("h2"),h2_i = 0,md_doc_content_title = "",h1,h2,next_h1_offset_top=0,h2_offset_top,i;
          var h1_length = h1s.length,h2_length = h2s.length;
          for (i = 0; i < h1_length-1; i+=1) {
            h1 = $(h1s[i]);
            md_doc_content_title += "<li><a href='#"+next_h1_offset_top+"'>"+h1.html()+"</a><ul>";
            next_h1_offset_top = $(h1s[i+1]).offset().top;
            for (h2_i<h2_length&&(h2 = $(h2s[h2_i])); h2_i<h2_length&&(h2_offset_top = h2.offset().top)&&h2_offset_top < next_h1_offset_top; h2_i+=1,h2 = $(h2s[h2_i])) {
              md_doc_content_title += "<li><a href='#"+h2_offset_top+"'>" + h2.html() + "</a></li>"
            };
            md_doc_content_title += "</ul>";

            md_doc_content_title += "</li>";
          };
          h1 = $(h1s[i]);
          md_doc_content_title += "<li><a href='#"+next_h1_offset_top+"'>"+h1.html()+"</a><ul>";
          for (h2_i<h2_length&&(h2 = $(h2s[h2_i])); h2_i<h2_length; h2_i+=1,h2_i<h2_length) {
            md_doc_content_title += "<li><a href='#"+h2.offset().top+"'>" + h2.html() + "</a></li>"
          };
          md_doc_content_title += "</ul></li>";
          //console.log(md_doc_content_title);
          $("#md_doc_content_title").html(md_doc_content_title);
        
        },
      });
    };
  })
  
  $("#md_doc_content_title").on("click","a",function (e) {
    // body...
    var a = $(this);
    var top = a.attr("href").replace("#","");
    var time = top/2;
    time = time>400?400:time;
    $('body,html').animate({scrollTop:(top+"px")},time);
  });


})(jQuery);