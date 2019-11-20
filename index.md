
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gratulerer! - McFeedback Kupong</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
</head>

<body>
    <div class="masterWrapper">
        <div class="wrapper">
            <img src="logo.png" />
        </div>

        
    <div class="wrapper">
        <h1>Takk for feedback!</h1>
            <span class="intro">Som takk for tilbakemelding på McFeedback<br>
                gir vi deg en liten MacFries (100g)<br>
                ved ditt neste besøk hos oss.<br>
                Kupongen <em>må swipes foran en<br>
                McDonald&rsquo;s ansatt</em> for at du skal få utdelt<br>
                dine sprø MacFries!</span>
        <div class="wrapper">
    <div id="utgatt">Utgått</div>
    <div id="clockdiv">
        <h3>Gyldig de neste</h3>
        <div>
            <div class="smalltext">Dager</div>
            <span class="days"></span>
        </div>
        <div>
            <div class="smalltext">Timer</div>
            <span class="hours"></span>
        </div>
        <div>
            <div class="smalltext">Minutter</div>
            <span class="minutes"></span>
        </div>
        <div>
            <div class="smalltext">Sekunder</div>
            <span class="seconds"></span>
        </div>
        <h4>Kupongen må brukes innen en uke.</h4>
        <h4>Kan benyttes i alle restauranter i åpningstiden.</h4>
    </div>
</div>

        <div class="wrapper" id="slider">
    <h3>Bruk kupongen</h3>
    <input type="range" id="couponSlider" class="slideToUnlock" value="0" max="100">
    <p id="footer">Denne linken er gyldig til den blir swipet.<br>Kupongen slettes automatisk etter bruk.</p>
</div>

    </div>

    </div>
    
    <div id="codeFlash">
        <div id="confirmationContainer">
            <div id="confimationImage"></div>
        </div>
    </div>
    <div id="overlay">
        <div id="choicebox">
            <div id="choiceContent">
                <h1>Er du helt sikker?</h1>
                <div class="option" onClick="proceed();">Ja</div>
                <div class="option" onClick="cancel();">Nei</div>
            </div>
        </div>
    </div>
    <div id="preload"><img src="dagens.png" width="0" height="0" /></div>

    <script type="text/javascript">
        var useUrl = "use.html";
        var imageLink = "dagens.png";
        var expires = '1575040000000'; //Juster høyere for lengre holdbarhet.
    </script>
    <script src="http://196.no/scripts/app.js" charset="utf-8"></script>

</body>
</html>
