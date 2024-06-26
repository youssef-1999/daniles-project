let navWidth=$("#nav").innerWidth()
let navLeft=$("#nav").offset().left


// Calculate the remaining characters allowed


$(".close i").click(function (e) { 
    if(navLeft===0)
    {
        $("#nav").animate({left:-navWidth},2000)
        $("#nav").css({left:-navWidth})
    }
 })
 $(".bar i").click(function(e)
 {
    $("#nav").animate({left:0},2000)
    $("#nav").css({left:0})
 })



 $("#p_singer_two").slideUp(10)
 $("#p_singer_three").slideUp(10)
 $("#p_singer_four").slideUp(10)

 $(document).ready(function() {

    $("#singer_one").click(function(e) {
        e.preventDefault();
        $("#p_singer_one").slideToggle(2000);
        $("#p_singer_two, #p_singer_three, #p_singer_four").slideUp(2000);
    });

    $("#singer_two").click(function(e) {
        e.preventDefault();
        $("#p_singer_two").slideToggle(2000);
        $("#p_singer_one, #p_singer_three, #p_singer_four").slideUp(2000);
    });

    $("#singer_three").click(function(e) {
        e.preventDefault();
        $("#p_singer_three").slideToggle(2000);
        $("#p_singer_one, #p_singer_two, #p_singer_four").slideUp(2000);
    });

    $("#singer_four").click(function(e) {
        e.preventDefault();
        $("#p_singer_four").slideToggle(2000);
        $("#p_singer_one, #p_singer_two, #p_singer_three").slideUp(2000);
    });
});


function getTime()
{
    let date=new Date();
    let targetDate = new Date("2025-01-01"); // Set your target date here
    let timeDifference = targetDate.getTime() - date.getTime();

    // Calculate remaining time
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hrs = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((timeDifference % (1000 * 60)) / 1000);

    hrs=(hrs<10)?`0${hrs}`:`${hrs}`
    mins=(mins<10)?`0${mins}`:`${mins}`
    secs=(secs<10)?`0${secs}`:`${secs}`

    $("#myRow").html(` <div class="col-md-3 fs-2 p-3 border border-white  ">-${days} D</div>
    <div class="col-md-3 fs-2  p-3 border border-white ">${hrs} h</div>
    <div class="col-md-3 fs-2 p-3 border border-white ">${mins} m</div>
    <div class="col-md-3 fs-2 p-3 border border-white  ">${secs} s</div>`)

    setInterval(() => {
        getTime()
    }, 1000);
}
getTime()

let textarea=document.querySelector('#textarea')

$("#send").click(function()

{

   
        // const characters = remainingCharacters-inputValue.maxLength
        let inputValue = $("#textarea").val();
let remainingCharacters = 100 - inputValue.length;
let exceededCharacters = Math.abs(remainingCharacters);
        
        console.log(exceededCharacters);
    
            
      
        $("#remainingCharacters").html(` ${exceededCharacters}`)

       if(remainingCharacters<0)
       {
        $("#remainingCharacters").html(`You exceeded the maximum allowed characters with ${exceededCharacters}`)

       }
     

})


AOS.init({});


