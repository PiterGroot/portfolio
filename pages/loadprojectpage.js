$(document).ready(function(){
    $.ajax({
        type:'GET',
        url:'./projectsinfo.xml',
        dataType:'xml',
        cache:false,

        error:function(){
            error();
        },

        success:function(response){
            var project = $(response).find('Project[name="'+ getParameterByName("name") +'"]');
            if(project.length <= 0) error();

            var title = $(project).find("Title").text();
            var subtitle = $(project).find("Subtitle").text();
            var banner = $(project).find("Banner").text();
            var yt = $(project).find("YT").text();
            var role = $(project).find("Role").text();
            var type = $(project).find("Type").text();
            var date = $(project).find("Date").text();
            var software = $(project).find("Software").text();
            var lang = $(project).find("Lang").text();
            var showcase_text = $(project).find("ShowcaseText").text();
            var showcase_img = $(project).find("ShowcaseImg").text();

            var sentence1 = showcase_text.split(".")[0];

            $("#title").text(title);
            $("#subtitle").text(subtitle);
            $(".hero-image").css("background-image", "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + banner + ")");
            $("#iframe").attr('src', yt);
            $("#role").text(role);
            $("#type").text(type);
            $("#date").text(date);
            $("#software").text(software);
            $("#lang").text(lang);
            $(".project-showcasetext").text(showcase_text);
            $(".showcase-img").attr('src', showcase_img);
        }
    });
});

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
