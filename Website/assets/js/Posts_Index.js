$('#commentBtn').hide();
$('#showComments').hide();
function showComments() {
    $('#showComments').show(1000);
    $('#showCommentsButton').html("<a onclick=\"hideComments()\" href=\"#\">Hide comments</a>");
}
function hideComments() {
    $('#showComments').hide(500);
    $('#showCommentsButton').html("<a onclick=\"showComments()\" href=\"#\">Show comments...</a>");
}
function commentBoxClicked() {
    $('#commentBox').placeholder = "";
    $('#commentBox').css("width", "100%");
    $('#commentBox').css("height", "120px");
    $('#commentBtn').show();
}
function submitComment(Id) {
    
    var options = {
        url: '/Comments/Create',
        type: 'POST',
        data: { PostId: Id, CommentBody: $('#commentBox').val() }
    }
    $.ajax(options).then(function (response){
        $('#commentBox').val(response);
        $('#commentBtn').hide();
    },
    function (error) {
        console.log(error);
        //output error in some way
    });
}