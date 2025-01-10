<!DOCTYPE html>

<html>

<?php include_once 'head.php' ?>

<body>
    <?php include_once 'header.php' ?>

    <div class="container">
        <table id="lista" class="content__table">
            <thead>
                <tr>
                    <th></th>
                    <th onclick="sortTable(0)">Nome</th>
                    <th onclick="sortTable(1)">Email</th>
                    <th onclick="sortTable(2)">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>Daniel</td>
                    <td>teste@gmail.com</td>
                    <td>feste</td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>Francisco</td>
                    <td>deste@gmail.com</td>
                    <td>eeste</td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>Antonio</td>
                    <td>beste@gmail.com</td>
                    <td>ceste</td>
                </tr>
            </tbody>
        </table>
    </div>

</body>

</html>