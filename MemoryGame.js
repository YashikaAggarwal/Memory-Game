x = 0;
y = "";
flag = 0;
count = 0;
a = 0;
b = "";
win = 0;
mem = 0;

function doTurn(ref, valID) {
    document.getElementById(ref).innerHTML = valID.name;
    if (x == valID.name) {

        $("#" + ref).css("background-image", "url('card-success.jpg')");
        $("#" + y).css("background-image", "url('card-success.jpg')");
        flag = 1;
        win++;
    }
    count++;
    if (count == 3) {
        count = 1;
        if (flag == 1) {
            document.getElementById(b).innerHTML = "<input type='text' onclick=doTurn(" + b + ",this) name=" + a + ">";
            $("#" + b).css("background-image", "url('image052.jpg')");

            x = 0;
            y = "";
            flag = 0;
            count = 0;
            a = 0;
            b = "";
        }
        if (flag == 0) {
            if (a != x) {
                document.getElementById(b).innerHTML = "<input type='text' onclick=doTurn(" + b + ",this); name=" + a + ">";
                document.getElementById(y).innerHTML = "<input type='text' onclick=doTurn(" + y + ",this); name=" + x + ">";
                $("#" + b).css("background-image", "url('image052.jpg')");
                $("#" + y).css("background-image", "url('image052.jpg')");
            }
        }
    }
    if (count == 1) {
        if (flag == 0) {
            $("#" + ref).css("background-image", "url('card-bdr.jpg')");
            x = valID.name;
            y = ref;
        } else {
            x = 0;
            y = "";
            flag = 0;
        }
    }

    if (count == 2) {
        if (flag == 0) {
            $("#" + ref).css("background-image", "url('card-bdr.jpg')");
            a = x;
            b = y;
            x = valID.name;
            y = ref;
        } else {
            a = 0;
            b = "";
            x = 0;
            y = "";
            count = 0;
            flag = 0;
        }
    }
    mem++;
    if (win == 10) {
        if (mem <= 30)
            document.getElementById("heading").innerHTML = "<center>WOW !!! YOU HAVE A VERY SHARP MEMORY</center>";
        else if (mem <= 45)
            document.getElementById("heading").innerHTML = "<center>CONGRATULATIONS !!! YOU HAVE A SHARP MEMORY</center>";
        else if (mem <= 55)
            document.getElementById("heading").innerHTML = "<center>WOW !!! YOU HAVE A GOOD MEMORY </center>";
        else if (mem <= 60)
            document.getElementById("heading").innerHTML = "<center>SORRY !!! YOU HAVE A MODERATE MEMORY</center>";
        else
            document.getElementById("heading").innerHTML = "<center>SORRY !!! YOU HAVE A MODERATE MEMORY</center>";
    }
    document.getElementById("moves").innerHTML = "Moves Played : "+mem;
}
/*function doNew(){
    matrix = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
    for(i=1;i<=20;i++){
        document.getElementById(i).innerHTML="<input type='text' onclick=doTurn("+i+",this); name="+matrix[i-1]+">";
    }
}*/