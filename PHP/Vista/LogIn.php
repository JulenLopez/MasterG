<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <form name="logado" action="index.php" method="POST">
        <lablel>Usuario:</label> <input type="text" name="nick"/><br/>
        <label> Contraseña:</label><input type="text" name="passwd"/><br/>
        <label><?=$fallo?></label><br/>
        <input type="submit" name="submit"/>
        </form>
    </body>
</html>
