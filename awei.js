$(function(){
            $('img[rrurl]').click(function(){
                location.href = $(this).attr('rrurl');
            });
            $('table').attr("cellpadding","0").attr("cellspacing","0");
            $('[fixed="fixed"]').css('position','fixed');
            resize();
            $(window).resize(function(){
                resize();
            });
            $('.add_qq_more').each(function(){
                var tourl = $.trim($(this).attr('toto'));
                if(tourl ==''){
                    tourl = 'javascript:;'
                }
                if(tourl.indexOf(':')==-1){
                    tourl = tourl+'.html';
                }
                if(tourl !=''){
                    if(tourl.indexOf('tel')!==0){
                        if(tourl.indexOf('?')>0){
                            tourl = tourl + '';
                        }else{
                            tourl = tourl + '';
                        }
                    }
                    if($(this).is('a')){
                        $(this).attr('href',tourl);
                    }else if($(this).find('a').size()>0){
                        $(this).find('a').each(function(){
                            if($.trim($(this).attr('href')).indexOf('http')==-1){
                                $(this).attr('href',tourl);
                            }
                        });
                    }else{
                        $(this).wrap('<a href="'+tourl+'"></a>');
                    }
                }
            });
            if($('.mainpicarea').is('div')){
                var tplth = $('.mainpicarea').find('td').length;
                $('#ppoool').append('<li class="on" style="margin-left:5px;"></li>');
                for(var i=1;i
                <tplth;i++){ $('#ppoool').append('<li style="margin-left:5px;"></li>');
                }
                $('.mainpicarea').qswipe({ stime:3600});
                $('.mainpicarea').on('dragok',function(e,msg){
                    if((msg+'').indexOf('.')>0){
                        msg = 0;
                    }
                    $('#ppoool').find('li').removeClass('on');
                    $('#ppoool').find('li').eq(msg).addClass('on');

                });
            }
        });
        function resize(){
            var ww = $(window).width();
            $('.picshowtop,.mainpicshow').css('width',ww+'px');
            $('#tpdhtr').children('td').css('width',ww+'px');
            $('#tpdhtr').children('td').find('img').css('width',ww+'px');
            $('img').each(function(){
                var pw = $(this).parent().width();
                var ppw = $(this).parent().parent().width();
                if($(this).width()>ppw){
                    $(this).width(ppw);
                }
            });
        }