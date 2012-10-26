$('document').ready(function () {
    var count = 0;
    var saveitem;
    $('#new_todo').each(function () {
        $(this).keypress(function (event) {
            $(this).css('font-style', 'normal');
            var input = $(this).val();
            var removebtnname = "input" + count;
            var listname = "input" + count;
            var checkboxid = "input" + count;
            var labelname = "input" + count;
            var listlength;
            if (event.which == 13) {
                count++;
                $('#subcheckbox').html('<ul><li id="checkall"><input class="checkall" type="checkbox" />Mark all as complete</li></ul>');
                $('#page_view').append('<ul id="checklist"><li class="' + listname + '"><input type="checkbox" id="' + checkboxid + '"/> <label class="' + labelname + '">' + input + '</label>' +
                    '<input type="image" value="" id="removebutton" class="' + removebtnname + '"/></li></ul>');
                listlength = $('#checklist li').length;
                $(this).val("").css('font-style', 'italic');
                $('#subcheckbox').show();
                $('#page_view').show();
                $('#footer').html('<p>' + listlength + ' itmes left</p>').css({'display':'block'});

            }

            removeitem();
            checkitem();
            checkallitems();

            //modify list
            $('li.' + listname).dblclick(function () {
                saveitem = $(this).html();
                $(this).html('<input id="modify" type="text"/>');
                $('#modify').focus().blur(function () {
                    $('li.' + listname).html(saveitem);
                    removeitem();
                    checkitem();
                    checkallitems();
                });//close modify focus and blur

                $(this).keypress(function (event) {
                    var input2 = $('#modify').val();
                    $('#modify').css('background-color', '#cfe9fa').blur(function () {
                        if (input2 != "") {
                            $(this).css('visibility', 'hidden');
                            $('li.' + listname).html(saveitem);
                            $('label.' + labelname).text(input2);
                            saveitem = $('li.' + listname).html();

                        }//close if input2 condiftion
                        removeitem();
                        checkitem();
                        checkallitems();
                    });//close modify focus and blur when you press key


                    if (event.which == 13) {
                        $('#modify').css('visibility', 'hidden');
                        $(this).html(saveitem);
                        $('label.' + labelname).text(input2);
                        saveitem = $(this).html();
                    }//close if event==13
                    removeitem();
                    checkitem();
                    checkallitems();
                });//clsoe keypress fn
            });//clsoe dblclick fn

            //removeitem fn
            function removeitem() {
                if (listname == removebtnname) {
                    $('input.' + removebtnname).click(function () {
                        $('li.' + listname).remove().slideUp();
                        var completedlist = $("#checklist :checked").length;
                        listlength = $('#checklist li').length;
                        var leftitem = listlength - completedlist;
                        $('#footer').html('<p>' + leftitem + ' itmes left</p>').css({'display':'block'});
                        if (listlength == 0) {
                            $('li.' + listname).remove().slideUp();
                            $('#footer, #subcheckbox').css('display', 'none');
                        }
                    });//close removeitem click fn
                }//close if
            }//cloose removeitem fn

            //checkitem fn
            function checkitem() {
                if (checkboxid == listname) {
                    $('input#' + checkboxid).click(function () {
                        var ischecked = $(this).is(':checked');
                        var completedlist = $("#checklist :checked").length;
                        listlength = $('#checklist li').length;
                        var leftitem = listlength - completedlist;
                        if (ischecked) {
                            if (leftitem == 0) {
                                $('input:checkbox').attr('checked', true);
                                $('#footer').html('<p> ' + leftitem + ' item left <input type="button" id="removeall" value="Clear ' + completedlist + ' completed items"/></p>');
                                $("#removeall").click(function () {
                                    $('#page_view,#subcheckbox,#footer').empty().slideUp();
                                });//close #removeall click fn
                            } else {
                                $(this).attr('checked', true);
                                $('li.' + listname).addClass('selected').attr('title', 'ischecked');// checkbox is selected
                                $('#footer').html('<p> ' + leftitem + ' items left <input type="button" id="removeall" value="Clear ' + completedlist + ' completed items"/></p>');
                                $('#removeall').click(function () {
                                    $('[title=ischecked]').slideUp().remove();
                                    $('#removeall').css('visibility', 'hidden');
                                });
                            }//close nested if else

                        } else {
                            if (leftitem > 0) {
                                $('.checkall').attr('checked', false);
                            }
                            $(this).attr('checked', false);
                            $('li.' + listname).removeClass('selected').attr('title', ''); // checkbox is unselected
                            if (completedlist == 0) {
                                $('#footer').html('<p>' + leftitem + ' itmes left</p>').css({'display':'block'});
                            } else {
                                $('#footer').html('<p> ' + leftitem + ' items left <input type="button" id="removeall" value="Clear ' + completedlist + ' completed items"/></p>');
                                $('#removeall').click(function () {
                                    $('[title=ischecked]').slideUp().remove();
                                    $('#removeall').css('visibility', 'hidden');
                                });
                            }//close nested if else
                        }//close if else
                    });//close checkboxid click fn
                }//close if
            }//clsoe checkitem fn

            function checkallitems() {
                $('#checkall').click(function () {
                    var ischecked = $('.checkall').is(':checked');
                    if (ischecked) {
                        $(':checkbox').attr('checked', true);
                        $('ul li:not(#checkall)').addClass('selected');
                        var completedlist = $("#checklist :checked").length;
                        listlength = $('#checklist li').length;
                        var leftitem = listlength - completedlist;
                        $('#footer').html('<p> ' + leftitem + ' items left <input type="button" id="removeall" value="Clear ' + completedlist + ' completed items"/></p>');
                        $("#removeall").click(function () {
                            $('#page_view,#subcheckbox,#footer').empty().slideUp();
                        });//close #removeall click fn
                    } else {
                        $(':checkbox').attr('checked', false);
                        $('ul li').removeClass('selected');
                        var completedlist = $("#checklist :checked").length;
                        listlength = $('#checklist li').length;
                        var leftitem = listlength - completedlist;
                        $('#footer').html('<p>' + leftitem + ' itmes left</p>').css({'display':'block'});
                    }//clsoe if else
                });//close checkall click fn
            }//close checkall items fn
        });//close keypress fn
    });//close each fn
});//close ready fn