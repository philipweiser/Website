$('#commentBtn').hide();
function closeCommentBox(ele){
    $(ele).attr("placeholder", "Reply");
    $(ele).css("width", "50px");
    $(ele).css("height", "15px");
}
function showComments(ele, buttonEle) {
    $('#'+ele.id).slideDown(1000);
    $('#' + buttonEle.id).attr("value", "Hide comments").attr("onclick", "hideComments(" + ele.id + ", " + buttonEle.id + ")");
}
function hideComments(ele, buttonEle) {
    $('#'+ele.id).slideUp(500);
    $('#' + buttonEle.id).val("Show comments...").attr("onclick", "showComments(" + ele.id + ", " + buttonEle.id + ")");
}
function commentBoxClicked(ele) {
    $(ele).attr("placeholder", "");
    $(ele).css("width", "100%");
    $(ele).css("height", "120px");
    $(ele).show();
    $('#commentBtn').show();
}
function submitComment(Id) {
    
    var options = {
        url: '/Comments/Create',
        type: 'POST',
        data: { PostId: Id, CommentBody: $('#submitBody').val()}
    }
    $.ajax(options).then(function (response){
        $('#submitBody').val(response);
        $('#commentBtn').hide();
    },
    function (error) {
        console.log(error);
        //output error in some way
    });
}