/*
This is empty on purpose! Your code to build the resume will go here.
 */

 $("#main").append("CJADKNFSD");

 var firstname = "acc";

 console.log(firstname);

 var awesomeThoughts = "I am a and I am aa";

 console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace( "aa","bb");

$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "NAMEa");

var formattedRole = HTMLheaderRole.replace("%data%", "anfdljs");

$("#header").append(formattedName);

$("#header").prepend(formattedRole);

var bio = {
	 "name" : "Kh a",
     "contact" : "aaaa@aaa.com",
     "picture" :  "https://www.google.com/search?q=profile+clipart&rlz=1C1CHWA_enUS662US664&espv=2&biw=1366&bih=638&tbm=isch&imgil=GOZPLQnljpvRtM%253A%253BzTetJ57WlBxr2M%253Bhttp%25253A%25252F%25252Fclipart-library.com%25252Fprofile-cliparts.html&source=iu&pf=m&fir=GOZPLQnljpvRtM%253A%252CzTetJ57WlBxr2M%252C_&usg=__nsrlbSbwMY5uCdHUHsP2zS2qxNE%3D&ved=0ahUKEwjB5PWT4-jRAhUK_mMKHSeFBrsQyjcINQ&ei=h56OWIGFOIr8jwOniprYCw#imgrc=GOZPLQnljpvRtM%3A",
     "welcomemssg" : "Welcom!",
     "skills" : "a"

};

$("#header").append(bio.contact, bio.name, bio.picture, bio.welcomemssg, bio. skills);

var object = {};

object.job = "web";
object.employer = "jog";
object.yearsworked = 4;
object.cityofbus = "dallas";

var education = {};

education["lastschool"] = "high school";
education["yearsattended"] = 4;
education["city"] = "dallas";

$("#main").append(object.job);

$("#main").append(education["lastschool"]);

var education = {
	"schools" : [
       "academy1",
       "univ"
	],
	"schoolcities" : [
     "dallas",
     "plano"
	],
	"majors" : [
      "web",
      "engineering"
	],
	
};

var a = "abcf";

if (true) {
var a = "kmnk";
console.log(a);
};
console.log(a);



var inName = () {

   var separatedname = bio.nam.split(" ");

   separatedname[1].toUpperCase();

   separatedname.join(" ");

   
};