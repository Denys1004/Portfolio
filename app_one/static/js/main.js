
// Int

// hover effect
$('#int_project_container').hover(function(){
    let img_1_Path = $('#int_gif').attr('alt_src');
    let img_2_Path = $('#int_gif').attr('src');
    $('#int_project_title a').css('color', '#17a2b8')

    
    $('#int_gif').attr('src', img_1_Path);
    $('#int_gif').attr('alt_src', img_2_Path); 
})

// Show used technologies
$('#int_show_all').click(function(){
    let pContent=$('#int_show_all').html()

    if(pContent == 'hide technologies'){
        $('#int_show_all').html('show used technologies')
        $('#int_hidden_technologies').hide()
    }
    else{
        $('#int_show_all').html('hide technologies')
        $('#int_hidden_technologies').show()
    }
})



// E-Com
// hover effect
$('#e_com_project_container').hover(function(){
    let img_1_Path = $('#e_com_gif').attr('alt_src');
    let img_2_Path = $('#e_com_gif').attr('src');
    $('#e_com_project_title a').css('color', 'red')

    $('#e_com_gif').attr('src', img_1_Path);
    $('#e_com_gif').attr('alt_src', img_2_Path); 
})

// Show used technologies
$('#e_com_show_all').click(function(){
    let pContent=$('#e_com_show_all').html()

    if(pContent == 'hide technologies'){
        $('#e_com_show_all').html('show used technologies')
        $('#e_com_hidden_technologies').hide()
    }
    else{
        $('#e_com_show_all').html('hide technologies')
        $('#e_com_hidden_technologies').show()
    }
})



// Profi

// hover effect
$('#profi_project_container').hover(function(){
    let img_1_Path = $('#profi_gif').attr('alt_src');
    let img_2_Path = $('#profi_gif').attr('src');
    $('#profi_project_title a').css('color', 'yellow')

    $('#profi_gif').attr('src', img_1_Path);
    $('#profi_gif').attr('alt_src', img_2_Path); 
})

// Show used technologies
$('#profi_show_all').click(function(){
    let pContent=$('#profi_show_all').html()

    if(pContent == 'hide technologies'){
        $('#profi_show_all').html('show used technologies')
        $('#profi_hidden_technologies').hide()
    }
    else{
        $('#profi_show_all').html('hide technologies')
        $('#profi_hidden_technologies').show()
    }
})