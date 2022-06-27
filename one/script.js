var xhr = new XMLHttpRequest();

            // 2. Configure it: GET-request for the URL /article/.../load
            xhr.open('GET', 'get_IpAdress.php');
            // xhr.responseType = 'json';
            xhr.responseType = 'text';

            // 3. Send the request over the network
            xhr.send();

            // 4. This will be called after the response is received

            xhr.onload = function () {


                var  responseObj = xhr.responseText;
                console.log(responseObj);



        /***/
        document.getElementById("one").onclick = function () { mouseOverBtn() };
        document.getElementById('output').innerHTML ="10.1.110.16";
        



        function mouseOverBtn() {
            alert("Box 101 is connected to the ip adress " + responseObj);
        }
    }

        function recupValeurs() {
            var cases = document.getElementsByName('test');
            var resultat = "";
            for (var i = 0; i < cases.length; i++) {
                if (cases[i].checked) {
                    resultat += cases[i].value + ", ";
                }
            }
            alert("The boxes selected are : " + resultat);



            
            };
        