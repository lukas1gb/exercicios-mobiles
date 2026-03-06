<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartão de Perfil</title>
    <style>
        /* CSS: Estilização e Centralização */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .card {
            background-color: white;
            width: 300px;
            padding: 20px;
            text-align: center;
            border-radius: 15px; /* Bordas arredondadas */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra suave */
        }

        .profile-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #007bff;
            margin-bottom: 15px;
        }

        h2 {
            margin: 10px 0;
            color: #333;
        }

        p {
            color: #666;
            font-size: 14px;
            margin-bottom: 20px;
        }

        button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <div class="card">
        <img src="https://via.placeholder.com/150" alt="Foto de Perfil" class="profile-img">
        <h2 id="userName">Alex Silva</h2>
        <p>Desenvolvedor Front-end apaixonado por criar interfaces intuitivas e modernas.</p>
        <button onclick="saudar()">Dizer Olá</button>
    </div>

    <script>
        function saudar() {
            const nome = document.getElementById('userName').innerText;
            alert("Olá, " + nome + "!");
        }
    </script>

</body>
</html>