$(document).ready(function() {
    
    
        $('#hero').waypoint(function(direction) {
            
                    $('#ss1').css("background-color", "var(--mainDark)");
                    $('#ss2').css("background-color", "var(--mainAccent)");
                    $('#ss3').css("background-color", "var(--mainAccent)");
                    $('#ss4').css("background-color", "var(--mainAccent)");
            
                }, {
                    offset: '0%' // L'azione verrà scatenata quando l'elemento è a metà schermo
                });
                

        $('#prova1').waypoint(function(direction) {
            if (direction === 'down')
            {
            $('#ss1').css("background-color", "var(--mainAccent)");
            $('#ss2').css("background-color", "var(--mainDark)");
            $('#ss3').css("background-color", "var(--mainAccent)");
            $('#ss4').css("background-color", "var(--mainAccent)");
            }
        }, {
            offset: '50%' // L'azione verrà scatenata quando l'elemento è a metà schermo
        });

        $('#prova1').waypoint(function(direction) {
            if (direction === 'up')
            {
                $('#ss1').css("background-color", "var(--mainAccent)");
                $('#ss2').css("background-color", "var(--mainDark)");
                $('#ss3').css("background-color", "var(--mainAccent)");
                $('#ss4').css("background-color", "var(--mainAccent)");
            }
        }, {
            offset: '0%' // L'azione verrà scatenata quando l'elemento è a metà schermo
        });

        $('#prova2').waypoint(function(direction) {
            if (direction === 'down')
            {
                $('#ss1').css("background-color", "var(--mainAccent)");
                $('#ss2').css("background-color", "var(--mainAccent)");
                $('#ss3').css("background-color", "var(--mainDark)");
                $('#ss4').css("background-color", "var(--mainAccent)");
            }
        }, {
            offset: '50%' // L'azione verrà scatenata quando l'elemento è a metà schermo
        });

        $('#prova2').waypoint(function(direction) {
            if (direction === 'up')
            {
                $('#ss1').css("background-color", "var(--mainAccent)");
                $('#ss2').css("background-color", "var(--mainAccent)");
                $('#ss3').css("background-color", "var(--mainDark)");
                $('#ss4').css("background-color", "var(--mainAccent)");
            }
        }, {
            offset: '0%' // L'azione verrà scatenata quando l'elemento è a metà schermo
        });

        $('#prova3').waypoint(function(direction) {
            
            $('#ss1').css("background-color", "var(--mainAccent)");
            $('#ss2').css("background-color", "var(--mainAccent)");
            $('#ss3').css("background-color", "var(--mainAccent)");
            $('#ss4').css("background-color", "var(--mainDark)");
        }, {
            offset: '100%' // L'azione verrà scatenata quando l'elemento è a metà schermo
        });
    
});