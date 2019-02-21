//'use strict';
$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=d444b9b6cfc94eac9e36debcbde7fb1a',
        beforeSend: function() {
            // $('#news1').html('hello');
            $('#news1banner').removeClass('hide');
        },
        success: function(response) {

            $('#news1banner').addClass('hide');
            for (i = 0; i < response.articles.length; i++) {
                $('#news1').append(` <div class="row margin-bottom-10" >
                <div class="col-lg-4">
                   <img src=` + response.articles[i].urlToImage +
                    ` class="newsImg">  
                </div>
                <div class="col-lg-8">
                ` + response.articles[i].title + `
                </div>
                
            </div> 
            <div class="row">
            <div class="col-lg-12"><button type="button" class="btn btn-warning btn-raised" data-toggle="modal" data-target="#modal_` + i + `">
            Read More
           </button></div>
            </div>
            
            <!-- Modal -->
            <div class="modal fade black-text" id="modal_` + i + `" tabindex="-1" role="dialog"  aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" >` + response.articles[i].title + `</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="news-content">
                        <img src='` + response.articles[i].urlToImage + `'>
                        <div class="news-content-text">
                        ` + response.articles[i].description + `
                        </div>
                        <div class="pull-right margin-top-10"><a href="` + response.articles[i].url + `" target="_blank" class="btn btn-raised btn-primary">Source : ` + response.source + `</a></div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            `);
            }


        }
    });
    // news @ 2
    $.ajax({
        type: 'GET',
        url: 'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=d444b9b6cfc94eac9e36debcbde7fb1a',
        beforeSend: function() {
            // $('#news1').html('hello');
            $('#news2banner').removeClass('hide');
        },
        success: function(result) {

            $('#news2banner').addClass('hide');
            for (i = 0; i < result.articles.length; i++) {
                $('#news2').append(` <div class="row margin-bottom-10" >
                <div class="col-lg-4">
                   <img src=` + result.articles[i].urlToImage +
                    ` class="newsImg">  
                </div>
                <div class="col-lg-8">
                ` + result.articles[i].title + `
                </div>
                
            </div> 
            <div class="row">
            <div class="col-lg-12"><button type="button" class="btn btn-raised btn-info" data-toggle="modal" data-target="#modal2_` + i + `">
            Read More
           </button></div>
            </div>
            
            <!-- Modal -->
            <div class="modal fade black-text" id="modal2_` + i + `" tabindex="-1" role="dialog"  aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" >` + result.articles[i].title + `</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="news-content">
                        <img src='` + result.articles[i].urlToImage + `'>
                        <div class="news-content-text">
                        ` + result.articles[i].description + `
                        </div>
                        <div class="pull-right margin-top-10"><a href="` + result.articles[i].url + `" target="_blank" class="btn btn-raised btn-primary">Source : ` + result.source + `</a></div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            `);
            }


        }
    });
    // news @ 3
    $.ajax({
        type: 'GET',
        url: 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=d444b9b6cfc94eac9e36debcbde7fb1a',
        beforeSend: function() {
            // $('#news1').html('hello');
            $('#news3banner').removeClass('hide');
        },
        success: function(result) {

            $('#news3banner').addClass('hide');
            for (i = 0; i < result.articles.length; i++) {
                $('#news3').append(` <div class="row margin-bottom-10" >
                <div class="col-lg-4">
                   <img src=` + result.articles[i].urlToImage +
                    ` class="newsImg">  
                </div>
                <div class="col-lg-8">
                ` + result.articles[i].title + `
                </div>
                
            </div> 
            <div class="row">
            <div class="col-lg-12"><button type="button" class="btn btn-raised btn-info" data-toggle="modal" data-target="#modal3_` + i + `">
            Read More
           </button></div>
            </div>
            
            <!-- Modal -->
            <div class="modal fade black-text" id="modal3_` + i + `" tabindex="-1" role="dialog"  aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" >` + result.articles[i].title + `</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="news-content">
                        <img src='` + result.articles[i].urlToImage + `'>
                        <div class="news-content-text">
                        ` + result.articles[i].description + `
                        </div>
                        <div class="pull-right margin-top-10"><a href="` + result.articles[i].url + `" target="_blank" class="btn btn-raised btn-primary">Source : ` + result.source + `</a></div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            `);
            }


        }
    });
});